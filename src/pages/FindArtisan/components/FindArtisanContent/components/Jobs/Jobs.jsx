import { useState, useEffect } from "react";

// stylesheet
import "./style/Jobs.scss";

// axios
import axios from "axios";

// images
import filterIcon from "./images/FilterIcon.svg";
import dropDownIcon from "./images/DropDown.svg";
import artisanImage1 from "./images/artisans (1).png";
import locationIcon from "./images/location.svg";
import timeIcon from "./images/Clock.svg";
import { NavLink } from "react-router-dom";

const Jobs = ({ search, setSearch }) => {
  const [artisanInfo, setArtisanInfo] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Render artisan list
  async function handler() {
    try {
      const token = localStorage.getItem("jwtToken");
      const res = await axios.get(
        "https://job-search-iogy.onrender.com/api/v1/user/job",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // customer list
      console.log(Object.values(res.data.jobs));
      setArtisanInfo(Object.values(res.data.jobs));
      setTotalJobs(res.data.totalJobs);
      console.log(res.data.totalJobs);
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
        <div className="artisan-jobs">
          <div className="artisan-jobs-header">
            <h2>Workman Artisans</h2>
            <div className="filter-box">
              <div className="left-filter-box">
                <img src={filterIcon} alt="filter" />
                <p>Filter by</p>
              </div>
              <div className="right-filter-box">
                <img src={dropDownIcon} alt="dropdown" />
              </div>
            </div>
          </div>
          <div className="artisan-jobs-section">
            {artisanInfo
              .filter((artisan) => {
                return search.toLowerCase() === ""
                  ? artisan
                  : artisan.occupation.toLowerCase().includes(search);
              })
              .map((artisan) => (
                <NavLink to={`/artisan-profile/${artisan._id}`}>
                  <div className="artisan-job-card" key={artisan._id}>
                    <div className="left-artisan-job-card">
                      <img src={artisanImage1} alt="artisan" />
                    </div>
                    <div className="right-artisan-job-card">
                      <div className="artisan-role">
                        <h3>{artisan.occupation}</h3>
                        <div className="artisan-info">
                          <div className="location">
                            <img src={locationIcon} alt="location" />
                            <p>{artisan.location}</p>
                          </div>
                          <div className="duration">
                            <img src={timeIcon} alt="time" />
                            <p>Full time</p>
                          </div>
                        </div>
                        <p>{artisan.bio}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Jobs;
