import { useState, useEffect } from "react";

// stylesheet
import "./style/UserOverview.scss";

// react-helmet
import { Helmet } from "react-helmet";

// images
import searchIcon from "./images/search.svg";
import avatar from "./images/avatar.png";

const UserOverview = () => {

  const [userList, setUserList] = useState();

  
  // users
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
  ];

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>User Overview | WorkMan</title>
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
        <meta property="og:title" content="User Overview | WorkMan" />
        <meta
          property="og:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta property="og:image" content="./assets/OG-image.svg" />
        <meta property="og:url" content="https://workman-six.vercel.app/" />

        {/* Twitter Meta Tags (for Twitter Cards) */}
        <meta name="twitter:card" content="./assets/OG-image.svg" />
        <meta name="twitter:title" content="User Overview | WorkMan" />
        <meta
          name="twitter:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta name="twitter:image" content="./assets/OG-image.svg" />
      </Helmet>
    <div className="user-overview">
      <div className="user-overview-header">
        <h1>User Management System</h1>
      </div>
      <div className="search-box">
        <img src={searchIcon} alt="search-icon" />
        <input type="text" placeholder="Search for users" />
      </div>
      <div className="overview-section">
        <div className="users-section">
          <h3>Users</h3>
          <div className="inner-overview-section">
            {users.map((user) => (
              <div className="particular-user">
                <div className="left-particular-user" key={user.id}>
                  <div className="avatar">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div className="name-email">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="right-particular-user">
                  <button>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserOverview;
