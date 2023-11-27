// stylesheet
import "./style/ArtisanProfileHeader.scss";

// react icons
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

// images
import profilePicture from "./images/ArtisanProfile.png";
import locationPin from "./images/locationPin.svg";
import onlineIcon from "./images/online.svg";

const ArtisanProfileHeader = () => {
  return (
    <div className="artisan-profile-header">
      <div className="left-artisan-profile-header">
        <img src={profilePicture} alt="profile" title="profile picture" />
      </div>
      <div className="right-artisan-profile-header">
        <div className="artisan-info">
          <h3>Henry Agu</h3>
          <p>Web Developer</p>
        </div>
        <div className="artisan-bio">
          <p>
            our work embodies a seamless blend of practicality and aesthetic
            appeal, enriching living spaces with exquisite craftsmanship
          </p>
        </div>
        <div className="location">
            <img src={locationPin} alt="location" />
            <p>Choba, Uniport</p>
        </div>
        <div className="artisan-availability">
            <img src={onlineIcon} alt="online" title="online" />
            <p>Available for work</p>
        </div>
        <div className="contact-artisan">
            <button className="whatsapp"><FaWhatsapp /> Whatsapp</button>
            <button className="call"><FaPhoneAlt /> Call</button>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfileHeader;
