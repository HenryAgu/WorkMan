import { useState, useEffect } from "react";
// stylesheet
import "./style/FindArtisanHeader.scss";

// images
import Logo from "./images/Logo.svg";
import UserAvatar from "./images/user.png";
import ArrowDownIcon from "./images/arrow-down.svg";
import LogOutIcon from "./images/log-out.svg";
import settingIcon from "./images/setting.svg";
import MenuIcon from "./images/menu.svg";

// react icon
import { AiOutlineClose } from "react-icons/ai";

// axios
import axios from "axios";

import { NavLink, useParams } from "react-router-dom";

const FindArtisanHeader = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);


  // Render artisan profile
  async function handler() {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await axios.get(
        `https://job-search-iogy.onrender.com/api/v1/user/show-me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // artisan information
      // setData(res.data.job);
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
      setError(err);
    }
  }
  useEffect(() => {
    handler();
  }, []);

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
            <h4>{data.fullName}</h4>
          </div>
          {/* <NavLink to="/user-setting">
            <div className="log-out settings">
              <button>
                <img src={settingIcon} alt="log out" /> <h4>Settings</h4>
              </button>
            </div>
          </NavLink> */}
          <NavLink to="/">
            <div className="log-out">
              <button>
                <img src={LogOutIcon} alt="log out" /> <h4>Logout</h4>
              </button>
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default FindArtisanHeader;
