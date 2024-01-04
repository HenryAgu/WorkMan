import React from "react";

// images
import UserActivity from "./images/UserActivity.png";
import userIcon from "./images/users.svg";
import { NavLink } from "react-router-dom";

const ArtisanDashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
      </div>
      <div className="user-activity">
        <img src={UserActivity} alt="user-activity" />
        <div className="activity-card">
          <NavLink to="/admin/users">
            <div className="inner-activity-card user-card">
              <div className="activity-card-header">
                <img src={userIcon} alt="icon" />
                <h3>142</h3>
              </div>
              <h2>Total Clients</h2>
            </div>
          </NavLink>
          <NavLink to="/admin/artisans">
            <div className="inner-activity-card admin-card">
              <div className="activity-card-header">
                <img src={userIcon} alt="icon" />
                <h3>22</h3>
              </div>
              <h2>Pending Jobs</h2>
            </div>
          </NavLink>
          <NavLink to="/admin/artisans">
            <div className="inner-activity-card admin-card artisan-card">
              <div className="activity-card-header">
                <img src={userIcon} alt="icon" />
                <h3>N200K</h3>
              </div>
              <h2>Total Earnings</h2>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ArtisanDashboardOverview;
