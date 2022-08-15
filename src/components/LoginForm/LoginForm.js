import "./LoginForm.scss";
import { useState } from "react";
import LoginUser from "../../controllers/login";
import { useDispatch } from "react-redux/";
import { login } from "../../features/AuthSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [notifications, setNotifications] = useState({});
  const [isError, setIsError] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmail = ({target}) => {
    setEmail(target.value);  
  }

  const handlePassword = ({target}) => {
    setPassword(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password !== '') {
      setIsDisabled(true);
      LoginUser(email, password).then(result => {
        if (result.status) {
          alert(`User ${result.username} has logged in successfully!`);
          dispatch(login(result.username));
          setIsDisabled(false);
          setEmail('');
          setPassword('');
          navigate('/dashboard');
        } else if (result.error404) {
          setNotifications({error: result.error404});
          setIsError(true);
          setIsDisabled(false);
        } else {
          alert(result.error500);
          setIsDisabled(false);
        }
      }).catch(error => console.log(error));
    }
  }
  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        {isError && (
          <div className="notification error">
            {notifications.error}
            <span onClick={() => setIsError(false)}>X</span>
          </div>
        )}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            autoFocus
            required
            disabled={isDisabled}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
            disabled={isDisabled}
          />
        </div>
        <div>
          <button type="submit" className="button green" disabled={isDisabled}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
