import { useState, useEffect } from "react";

// react-helmet
import { Helmet } from "react-helmet";

// stylesheet
import "./style/DashboardOverview.scss";

// axios
import axios from "axios";

// navlink
import { NavLink } from "react-router-dom";

// images
import UserActivity from "./images/UserActivity.png";
import userIcon from "./images/users.svg";

const DashboardOverview = () => {
  const [artisanCount, setArtisanCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function handler() {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await axios.get(
        "https://job-search-iogy.onrender.com/api/v1/user/stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // user stat & artisan stat
      setUserCount(res.data.stats.customer);
      setArtisanCount(res.data.stats.jobs);
      setIsLoading(false);
      console.log(
        `User stat: ${res.data.stats.customer}, Artisan stat: ${res.data.stats.jobs}`
      );
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
      setError(err);
    }
  }
  useEffect(() => {
    handler();
  }, []);
  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Admin Dashboard | WorkMan</title>
        <meta
          name="description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta
          name="keywords"
          content="artisan, craftsmen, handmade, custom-made, traditional crafts, unique art, bespoke, handcrafted goods, artisanal products, local artisans, craftsmanship, handmade jewelry, handmade furniture, artisan marketplace, artisan community, creative artisans, artisanal services"
        />

        <meta name="author" content="Agu Henry" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="Admin Dashboard | WorkMan" />
        <meta
          property="og:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta property="og:image" content="./assets/OG-image.svg" />
        <meta property="og:url" content="https://workman-six.vercel.app/" />

        {/* Twitter Meta Tags (for Twitter Cards) */}
        <meta name="twitter:card" content="./assets/OG-image.svg" />
        <meta name="twitter:title" content="Admin Dashboard | WorkMan" />
        <meta
          name="twitter:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta name="twitter:image" content="./assets/OG-image.svg" />
      </Helmet>
      {isLoading ? (
        <div className="loading">
          <div class="loading-container"></div>
        </div>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
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
                    <h3>{userCount}</h3>
                  </div>
                  <h2>Users</h2>
                </div>
              </NavLink>
              <NavLink to="/admin/artisans">
                <div className="inner-activity-card admin-card">
                  <div className="activity-card-header">
                    <img src={userIcon} alt="icon" />
                    <h3>{artisanCount}</h3>
                  </div>
                  <h2>Artisans</h2>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardOverview;
