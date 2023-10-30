// stylesheet
import "./style/Navbar.scss";

// images
import Logo from "./images/Logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
          <h3>WorkMan</h3>
        </div>
        <nav activeClassName="active">
          <NavLink to="">Start a search</NavLink>
          <NavLink to="">Our artisans</NavLink>
          <NavLink to="">How it works</NavLink>
        </nav>
        <div className="right_nav">
          <NavLink to="">
            <button className="login">Log in</button>
          </NavLink>
          <NavLink to="">
            <button className="register-as-artisan">Become an Artisan</button>
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
