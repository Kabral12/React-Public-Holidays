import "./Homepage.scss";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
      <div className="Homepage">
        <h1>Welcome to React Public Holidays</h1>
        <p>Discover holidays in a month, day or year in Ghana, Germany and Rwanda.</p>
        <div className="buttons">
          <div className="row">
            <Link to="/signup" className="button green column">Signup</Link>
            <Link to="/login" className="button column">Login</Link>
          </div>
        </div>
        <Footer/>
      </div>
    );
}

export default Homepage;