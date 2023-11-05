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
            <img src={Logo} alt="Logo" />
            <h1>WorkMan</h1>
          </div>
        </div>
        <div className="right-footer">
          <nav>
            <NavLink>Start a search</NavLink>
            <NavLink>Our artisans</NavLink>
            <NavLink>How it works</NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
