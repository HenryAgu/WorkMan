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

      // artisan information
      setData(res.data.job);
      console.log(res.data);
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
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="artisan-profile-header">
          <div className="left-artisan-profile-header">
            <img src={profilePicture} alt="profile" title="profile picture" />
          </div>
          <div className="right-artisan-profile-header">
            <div className="artisan-info">
              <h3>{data.fullName}</h3>
              <p>{data.occupation}</p>
            </div>
            <div className="artisan-bio">
              <p>{data.bio}</p>
            </div>
            <div className="location">
              <img src={locationPin} alt="location" />
              <p>{data.location}</p>
            </div>
            <div className="artisan-availability">
              <img src={onlineIcon} alt="online" title="online" />
              <p>Available for work</p>
            </div>
            <div className="contact-artisan">
              <NavLink
                to={`https://wa.me/${data.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="whatsapp">
                  <FaWhatsapp /> Whatsapp
                </button>
              </NavLink>
              <NavLink to={`tel:${data.phone}`}>
                <button className="call">
                  <FaPhoneAlt /> Call
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtisanProfileHeader;
