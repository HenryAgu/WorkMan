// stylesheet
import "./style/Hero.scss";

// react router dom
import { NavLink } from "react-router-dom";

// images
import HeroImage from "./images/hero.png";
import GroupImage from "./images/group.png";
import searchIcon from "./images/search.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hero">
        <div className="hero-header">
          <h1>
            Find the <span>Best Artisans</span>
          </h1>
          <h1>in Choba</h1>
        </div>
        <div className="hero-body">
          <p>
            Thousands of professional artisans in the fashion designer, sales,
            engineering and technology sectors are waiting to help offer top
            notch services for your business
          </p>
        </div>
        <div className="hero-trusted">
          <img src={GroupImage} alt="Group Image" />
          <p>Trusted by over 2,000 Buinesses</p>
        </div>
        <div className="hero-search">
          <div className="search-box">
            <img src={searchIcon} alt="icon" />
            <input type="text" placeholder="What position are you looking for ?"/>
          </div>
          <NavLink to="/find-artisans">
            <button>Find Artisan</button>
          </NavLink>
        </div>
      </div>
      <div className="right-hero">
        <img src={HeroImage} alt="Hero image" />
      </div>
    </div>
  );
};

export default Hero;
