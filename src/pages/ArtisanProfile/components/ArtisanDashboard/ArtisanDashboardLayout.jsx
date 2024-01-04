// usestate
import { useState } from "react";

// stylesheet
import "./style/ArtisanDashboardLayout.scss";
import "../../../Admin/components/AdminDashboard/style/AdminDashboardLayout.scss";

// outlet
import { NavLink, Outlet } from "react-router-dom";

// images
import Logo from "./images/Logo.svg";
import MenuIcon from "./images/menu.svg";
import CloseIcon from "./images/Close.svg";
import searchIcon from "./images/search.svg";
import desktopSearchIcon from "./images/desktop-search.svg";
import avatar from "./images/avatar.png";
import dashboardImage from "./images/Dashboard.svg";
import postImage from "./images/post.svg";
import artisansImage from "./images/Artisans.svg";
import logoutImage from "./images/logout.svg";

const ArtisanDashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sideMenuItems = [
    {
      id: 1,
      menuImage: dashboardImage,
      menuName: "Dashboard",
      menuPath: "/artisan/dashboard-overview",
    },
    {
      id: 2,
      menuImage: artisansImage,
      menuName: "Profile",
      menuPath: "/artisan/profile",
    },
    {
      id: 3,
      menuImage: postImage,
      menuName: "Post",
      menuPath: "/artisan/post",
    },
  ];

  // show sidebar
  const handleShowSidebar = () => {
    setShowSidebar(true);
  };

  // hide sidebar
  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  // handleOpenModal
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="admin-dashboard-layout artisan-dashboard-layout">
      <div className="mobile-side-bar">
        <div className="left-mobile-sidebar">
          <img src={MenuIcon} alt="menu" onClick={handleShowSidebar} />
        </div>
        {showSidebar ? (
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <h3>Menu</h3>
              <button onClick={handleCloseSidebar}>
                <img src={CloseIcon} alt="icon" />
              </button>
            </div>
            <ul>
              {sideMenuItems.map((mobileMenuItem) => (
                <NavLink
                  to={mobileMenuItem.menuPath}
                  onClick={handleCloseSidebar}
                >
                  <li key={mobileMenuItem.id}>
                    <img src={mobileMenuItem.menuImage} alt="dashboard" />
                    <h3>{mobileMenuItem.menuName}</h3>
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="right-mobile-sidebar">
          <img src={searchIcon} alt="search" />
          <img
            src={avatar}
            alt="avatar"
            className="avatar"
            onClick={handleOpenModal}
          />
        </div>
      </div>
      <div className="side-bar">
        <NavLink to="/login-artisan">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        </NavLink>
        <div className="side-menu">
          {sideMenuItems.map((menu) => (
            <NavLink to={menu.menuPath}>
              <div className="menu-item" key={menu.id}>
                <img src={menu.menuImage} alt="side-image" />
                <h3 activeClassName="active">{menu.menuName}</h3>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="main-bar">
        <div className="dashboard-header">
          <div className="left-dashboard-header">
            <h1>Welcome!</h1>
          </div>
          <div className="right-dashboard-header">
            <div className="search">
              <img src={desktopSearchIcon} alt="icon" />
              <input type="text" placeholder="Search here" />
            </div>
            <img
              src={avatar}
              alt="avatar"
              className="desktop-avatar"
              title="Click me!"
              onClick={handleOpenModal}
            />
          </div>
        </div>
        {isModalOpen ? (
          <div className="modal">
            <div className="close">
              <button onClick={() => setIsModalOpen(false)}>
                <img src={CloseIcon} alt="close" />
              </button>
            </div>
            <div className="logout">
              <NavLink to="/login-artisan">
                <button>
                  <img src={logoutImage} alt="logout" />
                  <p>Logout</p>
                </button>
              </NavLink>
            </div>
          </div>
        ) : null}
        <Outlet />
      </div>
    </div>
  );
};

export default ArtisanDashboardLayout;
