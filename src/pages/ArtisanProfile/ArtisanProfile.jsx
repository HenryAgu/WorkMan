// stylesheet
import "./style/ArtisanProfile.scss";

// react-helmet
import { Helmet } from "react-helmet";

// Navlink
import { NavLink } from "react-router-dom";

// images
import arrowIcon from "./images/arrow-left.svg";

// components
import ArtisanProfileHeader from "./components/ArtisanProfileHeader/ArtisanProfileHeader";
import WorkPhotos from "./components/WorkPhotos/WorkPhotos";
import ArtisanReviews from "./components/ArtisanReviews/ArtisanReviews";

const ArtisanProfile = () => {
  return (
    <div>
      {/* React Helmet */}
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Artisan Profile | WorkMan</title>
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
        <meta property="og:title" content="Artisan Profile  | WorkMan" />
        <meta
          property="og:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta property="og:image" content="./assets/OG-image.svg" />
        <meta property="og:url" content="https://workman-six.vercel.app/" />

        {/* Twitter Meta Tags (for Twitter Cards) */}
        <meta name="twitter:card" content="./assets/OG-image.svg" />
        <meta name="twitter:title" content="Artisan Profile  | WorkMan" />
        <meta
          name="twitter:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta name="twitter:image" content="./assets/OG-image.svg" />
      </Helmet>
      <div
        className="artisan-profile"
        style={{ width: "90%", margin: "30px auto" }}
      >
        <NavLink to="/find-artisans">
          <div className="artisan-profile-nav">
            <img src={arrowIcon} alt="back" title="back" />
            <h4>Back</h4>
          </div>
        </NavLink>
        <ArtisanProfileHeader/>
        <WorkPhotos/>
        <ArtisanReviews/>
      </div>
    </div>
  );
};

export default ArtisanProfile;
