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
import avatar from "./images/avatar.svg";
import dashboardImage from "./images/Dashboard.svg";
import usersImage from "./images/Users.svg";
import artisansImage from "./images/Artisans.svg";
import settingsImage from "./images/Settings.svg";

const AdminDashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
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
    {
      id: 4,
      menuImage: settingsImage,
      menuName: "Settings",
      menuPath: "/admin/dashboard-overview",
    },
  ];

  // show sidebar
  const handleShowSidebar = () => {
    setShowSidebar(true);
  }

  // hide sidebar
  const handleCloseSidebar = () => {
    setShowSidebar(false);
  }
  
  return (
    <div className="admin-dashboard-layout">
      <div className="mobile-side-bar">
        <div className="left-mobile-sidebar">
          <img src={MenuIcon} alt="menu" onClick={handleShowSidebar}/>
          <img src={Logo} alt="Logo" className="mobile-logo" />
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
                <NavLink to={mobileMenuItem.menuPath}>
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
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="side-bar">
        <NavLink to="/admin-login">
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
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
