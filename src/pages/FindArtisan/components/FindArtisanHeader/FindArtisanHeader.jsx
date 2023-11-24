import { useState } from "react";
// stylesheet
import "./style/FindArtisanHeader.scss";

// images
import Logo from "./images/Logo.svg";
import UserAvatar from "./images/user.png";
import ArrowDownIcon from "./images/arrow-down.svg";
import LogOutIcon from "./images/log-out.svg";
import MenuIcon from "./images/menu.svg";

// react icon
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const FindArtisanHeader = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="find-artisan-container">
      <div className="find-artisan-header">
        <div className="left-find-artisan-header">
          <div className="menu">
            <img src={MenuIcon} alt="Menu" />
          </div>
          <NavLink to="/">
            <div className="logo">
              <img src={Logo} alt="Logo" />
              <h1>WorkMan</h1>
            </div>
          </NavLink>
        </div>
        <div className="right-find-artisan-header">
          <img src={UserAvatar} className="avatar" alt="avatar" />
          <img
            src={ArrowDownIcon}
            className="drop-down"
            alt="arrow-down"
            onMouseEnter={() => setIsHovered(true)}
          />
        </div>
      </div>
      {isHovered && (
        <div
          className="artisan-header-modal"
          onMouseLeave={() => setIsHovered(false)}
        >
          <AiOutlineClose
            className="close-user-modal-mobile"
            onClick={() => setIsHovered(false)}
          />
          <div className="user-modal-header">
            <img src={UserAvatar} alt="avatar" />
            <h4>Henry Agu</h4>
          </div>
          <div className="log-out">
            <button>
              <img src={LogOutIcon} alt="log out" /> <h4>Logout</h4>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindArtisanHeader;
