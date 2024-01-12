// stylesheet
import "./style/Jobs.scss";

// images
import filterIcon from "./images/FilterIcon.svg";
import dropDownIcon from "./images/DropDown.svg";
import artisanImage1 from "./images/artisans (1).png";
import artisanImage2 from "./images/artisans (2).png";
import artisanImage3 from "./images/artisans (3).png";
import artisanImage4 from "./images/artisans (4).png";
import artisanImage5 from "./images/artisans (5).png";
import locationIcon from "./images/location.svg";
import timeIcon from "./images/Clock.svg";
import { NavLink } from "react-router-dom";

const Jobs = () => {
  const artisanCards = [
    {
      id: 1,
      artisanImage: artisanImage5,
      artisanRole: "Proffessional Carpenter",
      location: "Uniport",
      duration: "Full time",
      aboutArtisan:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.laborum tempor Lorem incididunt.",
    },
    {
      id: 1,
      artisanImage: artisanImage1,
      artisanRole: "Proffessional Carpenter",
      location: "Uniport",
      duration: "Full time",
      aboutArtisan:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.laborum tempor Lorem incididunt.",
    },
    {
      id: 1,
      artisanImage: artisanImage2,
      artisanRole: "Proffessional Carpenter",
      location: "Uniport",
      duration: "Full time",
      aboutArtisan:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.laborum tempor Lorem incididunt.",
    },
    {
      id: 1,
      artisanImage: artisanImage3,
      artisanRole: "Proffessional Carpenter",
      location: "Uniport",
      duration: "Full time",
      aboutArtisan:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.laborum tempor Lorem incididunt.",
    },
    {
      id: 1,
      artisanImage: artisanImage4,
      artisanRole: "Proffessional Carpenter",
      location: "Uniport",
      duration: "Full time",
      aboutArtisan:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.laborum tempor Lorem incididunt.",
    },
  ];
  return (
    <div className="artisan-jobs">
      <div className="artisan-jobs-header">
        <h2>2134 Jobs</h2>
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
      <div className="artisan-jobs-section" >
        {artisanCards.map((artisanCard) => (
          <NavLink to="/artisan-profile">
            <div className="artisan-job-card" key={artisanCard.id}>
              <div className="left-artisan-job-card">
                <img src={artisanCard.artisanImage} alt="artisan" />
              </div>
              <div className="right-artisan-job-card">
                <div className="artisan-role">
                  <h3>Proffessional Carpenter</h3>
                  <div className="artisan-info">
                    <div className="location">
                      <img src={locationIcon} alt="location" />
                      <p>Choba, Uniport</p>
                    </div>
                    <div className="duration">
                      <img src={timeIcon} alt="time" />
                      <p>Full time</p>
                    </div>
                  </div>
                  <p>
                    Mollit in laborum tempor Lorem incididunt irure. Aute eu ex
                    ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod
                    culpa. laborum tempor Lorem incididunt.
                  </p>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
