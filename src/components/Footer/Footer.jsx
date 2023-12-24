// stylesheet
import "./style/Footer.scss";

// images
import Logo from "./images/Logo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="inner-footer">
        <div className="left-footer">
          <div className="footer-logo">
            <NavLink to="/">
              <img src={Logo} alt="Logo" />
            </NavLink>
            <h1>WorkMan</h1>
          </div>
        </div>
        <div className="right-footer">
          <nav>
            <a href="#start-search">Start a search</a>
            <a href="#our-artisans">Our artisans</a>
            <a href="#how-it-works">How it works</a>
          </nav>
        </div>
        <div className="mobile-left-footer">
          <NavLink to="/admin-login">Admin</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
