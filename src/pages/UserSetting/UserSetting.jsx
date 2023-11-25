// stylesheet
import "./style/UserSetting.scss";

// Navlink
import { NavLink } from "react-router-dom";

// react-helmet
import { Helmet } from "react-helmet";

// images
import arrowIcon from "./images/arrow-left.svg";
import userAvatar from "./images/reviewer.png";

const UserSetting = () => {
  return (
    <div className="user-setting">
      {/* React Helmet */}
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Profile Settings | WorkMan</title>
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
        <meta property="og:title" content="Profile Settings | WorkMan" />
        <meta
          property="og:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta property="og:image" content="./assets/OG-image.svg" />
        <meta property="og:url" content="https://workman-six.vercel.app/" />

        {/* Twitter Meta Tags (for Twitter Cards) */}
        <meta name="twitter:card" content="./assets/OG-image.svg" />
        <meta name="twitter:title" content="Profile Settings | WorkMan" />
        <meta
          name="twitter:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta name="twitter:image" content="./assets/OG-image.svg" />
      </Helmet>
      <NavLink to="/find-artisans">
        <div className="go-back">
          <img src={arrowIcon} alt="back" title="back" />
          <h4>Back</h4>
        </div>
      </NavLink>
      <div className="user-setting-container">
        <h2>Profile Settings</h2>
        <div className="user-avatar">
          <img src={userAvatar} alt="avatar" />
          <input type="file" placeholder="Edit" />
        </div>
        <div className="information">
          <h2>Information</h2>
          <div className="information-area">
            <p>Bio</p>
            <textarea value="our work embodies a seamless blend of practicality and aesthetic appeal, enriching living spaces with exquisite craftsmanship" />
          </div>
        </div>
        <div className="save-update">
            <button>Save Update</button>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
