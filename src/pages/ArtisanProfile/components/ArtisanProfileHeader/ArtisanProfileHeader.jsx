import { useState, useEffect } from "react";

// stylesheet
import "./style/ArtisanProfileHeader.scss";

// react icons
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

// axios
import axios from "axios";

import { NavLink, useParams } from "react-router-dom";

// images
import profilePicture from "./images/ArtisanProfile.png";
import locationPin from "./images/locationPin.svg";
import onlineIcon from "./images/online.svg";

const ArtisanProfileHeader = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  // Render artisan list
  async function handler() {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await axios.get(
        `https://job-search-iogy.onrender.com/api/v1/user/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // customer list
      console.log(Object.values(res.data.jobs));
      setData(res.data);
      console.log(res);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      setError(err);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    handler();
  }, []);
  
  return (
    <div className="artisan-profile-header">
      <div className="left-artisan-profile-header">
        <img src={profilePicture} alt="profile" title="profile picture" />
      </div>
      <div className="right-artisan-profile-header">
        <div className="artisan-info">
          <h3>{data.fullName}</h3>
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
          <button className="whatsapp">
            <FaWhatsapp /> Whatsapp
          </button>
          <button className="call">
            <FaPhoneAlt /> Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfileHeader;
