import "./Signup.scss";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SignupForm from "../../components/SignupForm/SignupForm";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
      <div className="Signup">
        <NavBar>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </NavBar>
        <h2 className="text-xlarge">Create an account</h2>
        <SignupForm />
        <Footer />
      </div>
    );
}

export default Signup;