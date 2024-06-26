// usestate
import { useState } from "react";
// outlet
import { NavLink, Outlet } from "react-router-dom";

// stylesheet
import "./style/AdminDashboardLayout.scss";

// images
import Logo from "./images/Logo.svg";
import MenuIcon from "./images/menu.svg";
import CloseIcon from "./images/Close.svg";
import searchIcon from "./images/search.svg";
import desktopSearchIcon from "./images/desktop-search.svg";
import avatar from "./images/avatar.png";
import dashboardImage from "./images/Dashboard.svg";
import usersImage from "./images/Users.svg";
import artisansImage from "./images/Artisans.svg";
import settingsImage from "./images/Settings.svg";
import logoutImage from "./images/logout.svg";

const AdminDashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sideMenuItems = [
    {
      id: 1,
      menuImage: dashboardImage,
      menuName: "Dashboard",
      menuPath: "/admin/dashboard-overview",
    },
    {
      id: 2,
      menuImage: usersImage,
      menuName: "Users",
      menuPath: "/admin/users",
    },
    {
      id: 3,
      menuImage: artisansImage,
      menuName: "Artisans",
      menuPath: "/admin/artisans",
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
    <div className="admin-dashboard-layout">
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
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="side-menu">
          {sideMenuItems.map((menu) => (
            <NavLink to={menu.menuPath} key={menu.id}>
              <div className="menu-item">
                <img src={menu.menuImage} alt="side-image" />
                <h3>{menu.menuName}</h3>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="main-bar">
        <div className="dashboard-header">
          <div className="left-dashboard-header">
            <h1>Welcome, Admin!</h1>
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
              <NavLink to="/admin-login">
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

export default AdminDashboardLayout;
