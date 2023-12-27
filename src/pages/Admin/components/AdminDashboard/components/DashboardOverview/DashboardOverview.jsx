// react-helmet
import { Helmet } from "react-helmet";

// stylesheet
import "./style/DashboardOverview.scss";

// images
import UserActivity from "./images/UserActivity.png";
import userIcon from "./images/users.svg";
import { NavLink } from "react-router-dom";

const DashboardOverview = () => {
  /* React Helmet */
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
  </Helmet>;
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
                <h3>1,042</h3>
              </div>
              <h2>Users</h2>
            </div>
          </NavLink>
          <NavLink to="/admin/artisans">
            <div className="inner-activity-card admin-card">
              <div className="activity-card-header">
                <img src={userIcon} alt="icon" />
                <h3>202</h3>
              </div>
              <h2>Artisans</h2>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="recent-activity">
        <div className="recent-activity-header">
          <h3>Recent Activity</h3>
        </div>
        <ul>
          <li>User Jane Smith's account was approved by Tunde</li>
          <li>User Henry Agu account was approved by Patrick</li>
          <li>You made Joyce an admin</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardOverview;
