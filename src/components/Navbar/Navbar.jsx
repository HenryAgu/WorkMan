import { useState } from "react";
// stylesheet
import "./style/Navbar.scss";

// navlink
import { NavLink } from "react-router-dom";

// react icons
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

// images
import Logo from "./images/Logo.svg";
import Menu from "./images/menu.svg";

const Navbar = () => {
  const [openNav, setOpenNav] = useState();

  // handle navbar
  const handleNavbar = () => {
    setOpenNav(!openNav);
  }
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
          <a href="#our-artisans">Our artisans</a>
          <a href="#how-it-works">How it works</a>
        </nav>
        <div className="right_nav">
          <NavLink to="/login">
            <button className="login">Log in</button>
          </NavLink>
          <NavLink to="">
            <button className="register-as-artisan">Become an Artisan</button>
          </NavLink>
        </div>
        <div className="mobile-right">
          <NavLink to="">
            <div className="mobile-register-artisan">
              <AiOutlinePlus className="plus-icon" />
              <h4>Artisan</h4>
            </div>
          </NavLink>
          <div className="menu" onClick={handleNavbar}>
            {openNav ? <AiOutlineClose className="close-menu"/> : <img src={Menu} alt="menu" />}
          </div>
        </div>
      </header>
      {openNav ? (
        <div className="mobile-nav">
          <NavLink to="" onClick={()=> setOpenNav(false)}>Start a search</NavLink>
          <a href="#our-artisans" onClick={()=> setOpenNav(false)}>Our artisans</a>
          <a href="#how-it-works" onClick={()=> setOpenNav(false)}>How it works</a>
          <NavLink to="/login" onClick={()=> setOpenNav(false)}>
            <button className="login">Log in</button>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
