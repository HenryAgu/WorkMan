import { useState } from "react";

// stylesheet
import "./style/MeetArtisans.scss";

// images
import Artisan1 from "./images/Artisan1.png";
import Artisan2 from "./images/Artisan2.png";
import Artisan3 from "./images/Artisan3.png";
import Artisan4 from "./images/Artisan4.png";
import Artisan5 from "./images/Artisan5.png";
import Artisan6 from "./images/Artisan6.png";
import Artisan7 from "./images/Artisan7.png";
import Artisan8 from "./images/Artisan8.png";
import Artisan9 from "./images/Artisan9.png";
import likedIcon from "./images/liked-heart.svg";
import defaultLikeIcon from "./images/unliked-heart.svg";
import { NavLink } from "react-router-dom";

const MeetArtisans = () => {
  const [likeIcon, setLikeIcon] = useState("");
  const artisanInfo = [
    {
      id: 1,
      artisanImage: Artisan1,
      artisanName: "Agu Henry",
      artisanRole: "Web Developer",
    },
    {
      id: 2,
      artisanImage: Artisan2,
      artisanName: "Agu Henry",
      artisanRole: "Web Developer",
    },
    {
      id: 3,
      artisanImage: Artisan3,
      artisanName: "Agu Henry",
      artisanRole: "Web Developer",
    },
    {
      id: 4,
      artisanImage: Artisan4,
      artisanName: "Agu Henry",
      artisanRole: "Web Developer",
    },
    {
      id: 5,
      artisanImage: Artisan5,
      artisanName: "Agu Henry",
      artisanRole: "Web Developer",
    },
    {
      id: 6,
      artisanImage: Artisan6,
      artisanName: "Agu Henry",
      artisanRole: "Web Developer",
    },
    {
      id: 7,
      artisanImage: Artisan7,
      artisanName: "Agu Henry",
      artisanRole: "Web Developer",
    },
    {
      id: 8,
      artisanImage: Artisan8,
      artisanName: "Agu Henry",
      artisanRole: "Web Developer",
    },
    {
      id: 9,
      artisanImage: Artisan9,
      artisanName: "Agu Henry",
      artisanRole: "Web Developer",
    },
  ];
  const handleLike = (index) => {
    setLikeIcon(!likeIcon);
    console.log(`i am number ${index}`);
  };
  return (
    <div className="meet-artisans" id="our-artisans">
      <div className="inner-meet-artisans">
        <div className="meet-artisans-header">
          <h1>Meet Our Artisans</h1>
          <h4>Discover the Makers Behind the Magic: Meet Our Artisans</h4>
        </div>
        <div className="meet-artisans-body">
          {artisanInfo.map((artisan, index) => (
            <div className="artisan-card" key={index}>
              <img src={artisan.artisanImage} alt="" />
              <div className="artisan-info">
                <div className="left-artisan-info">
                  <h4>{artisan.artisanName}</h4>
                  <p>{artisan.artisanRole}</p>
                </div>
                <div className="right-artisan-info">
                  <button onClick={()=>handleLike(index)}>
                    {likeIcon ? (
                      <img
                        src={likedIcon}
                        alt="liked"

                      />
                    ) : (
                      <img
                        src={defaultLikeIcon}
                        alt="default"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="see-more-artisans">
          <NavLink><h3>See More Artisans</h3></NavLink>
        </div>
      </div>
    </div>
  );
};

export default MeetArtisans;
