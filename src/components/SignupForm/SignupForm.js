import "./SignupForm.scss";
import {useEffect, useState} from "react";
import CreateUser from "../../controllers/signup";

const SignupForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isValid, setIsValid] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [notifications, setNotifications] = useState({});
  const [isSubmit, setIsSubmit] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (password1) {
      checkPassLength(password1, "error1", "pass1");
    } else {
      setIsValid({pass1: false});
    }
  }, [password1]);

  useEffect(() => {
    if (password2) {
      checkPassLength(password2, "error2", "pass2");
    } else {
      setIsValid({pass2: false});
    }
  }, [password2]);

  const checkPassLength = (password, errorKey, isValidKey) => {
    const errorMsg = "Password must be a mininum of 12 characters long!";
    if (password.length < 12) {
        setNotifications({[errorKey]:errorMsg});
        setIsValid({[isValidKey]: true});
      } else {
        setIsValid({[isValidKey]: false});
      }
  };

  const handleFullname = ({ target }) => {
    setFullname(target.value);
  };

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword1 = ({ target }) => {
    setPassword1(target.value);
  };

  const handlePassword2 = ({ target }) => {
    setPassword2(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullname && email && password1 && password2 !== "") {
      if (password1  === password2) {
        setIsSubmit(false);
        setIsDisabled(true);
        CreateUser(fullname, email, password1).then(result => {
          if (result.error) {
            setNotifications({error: result.error});
            setIsError(true);
            setIsSubmit(true);
            setIsDisabled(false);
          } else if (result.success) {
            setNotifications({success: result.success});
            setIsSuccess(true);
            setIsSubmit(true);
            setFullname("");
            setEmail("");
            setPassword1("");
            setPassword2("");
          }
        }).catch(error => console.log(error));
      } else {
        setNotifications({error3: "Passwords must be the same!"});
        setIsValid({allPass: true});
      }
    }
  }

  return (
    <div className="SignupForm">
      <form autoComplete="true" onSubmit={handleSubmit}>
        {isSuccess && (
          <div className="notification success">
            {notifications.success}
            <span onClick={() => setIsSuccess(false)}>X</span>
          </div>
        )}
        {isError && (
          <div className="notification error">
            {notifications.error}
            <span onClick={() => setIsError(false)}>X</span>
          </div>
        )}
        <div>
          <label htmlFor="fullname">Full name:</label>
          <input
            type="text"
            name="fullname"
            value={fullname}
            autoFocus={true}
            onChange={handleFullname}
            required
            disabled={isDisabled}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            required
            disabled={isDisabled}
          />
        </div>
        <div>
          <label htmlFor="password1">Password:</label>
          <input
            type="password"
            name="password1"
            value={password1}
            autoComplete="true"
            onChange={handlePassword1}
            required
            disabled={isDisabled}
          />
          {isValid.pass1 && (
            <span className="invalid">{notifications.error1}</span>
          )}
        </div>
        <div>
          <label htmlFor="password2">Retype password:</label>
          <input
            type="password"
            name="password2"
            value={password2}
            autoComplete="true"
            onChange={handlePassword2}
            required
            disabled={isDisabled}
          />
          {isValid.pass2 && (
            <span className="invalid">{notifications.error2}</span>
          )}
        </div>
        <div>
          {isValid.allPass && (
            <span className="invalid">{notifications.error3}</span>
          )}
          <button type="submit" className="green" disabled={isDisabled}>
            {isSubmit ? "Submit" : "Submitting..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
