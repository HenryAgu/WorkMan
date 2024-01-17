import { useState, useEffect } from "react";

// stylesheet
import "../UserOverview/style/UserOverview.scss";

// react-helmet
import { Helmet } from "react-helmet";

// axios
import axios from "axios";

// images
import searchIcon from "./images/search.svg";
import avatar from "./images/avatar.png";

const ArtisanOverview = () => {
  const [artisanList, setArtisanList] = useState([]);
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
      setArtisanList(Object.values(res.data.jobs));
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
      setError(err);
    }
  }
  useEffect(() => {
    handler();
  }, []);

  // delete an artisan
  const handleArtisanDelete = async (artisanId) => {
    try {
      const updatedArtisanList = artisanList.filter((artisan) => artisan._id !== artisanId);
      setArtisanList(updatedArtisanList);
      console.log(`${artisanId} deleted, remaining: ${updatedArtisanList}`);

      const token = localStorage.getItem("jwtToken");
      await axios.delete(
        `https://job-search-iogy.onrender.com/api/v1/user/delete-user/${artisanId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Artisan Overview | WorkMan</title>
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
        <meta property="og:title" content="Artisan Overview | WorkMan" />
        <meta
          property="og:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta property="og:image" content="./assets/OG-image.svg" />
        <meta property="og:url" content="https://workman-six.vercel.app/" />

        {/* Twitter Meta Tags (for Twitter Cards) */}
        <meta name="twitter:card" content="./assets/OG-image.svg" />
        <meta name="twitter:title" content="Artisan Overview | WorkMan" />
        <meta
          name="twitter:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta name="twitter:image" content="./assets/OG-image.svg" />
      </Helmet>
      {isLoading ? (
        <div className="loading">
          <div class="loading-container"></div>
        </div>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="user-overview">
          <div className="user-overview-header">
            <h1>Artisan Management System</h1>
          </div>
          <div className="search-box">
            <img src={searchIcon} alt="search-icon" />
            <input type="text" placeholder="Search for artisans" />
          </div>
          <div className="overview-section">
            <div className="users-section">
              <h3>Artisans</h3>
              <div className="inner-overview-section">
                {artisanList.map((artisan) => (
                  <div className="particular-user" key={artisan._id}>
                    <div className="left-particular-user">
                      <div className="avatar">
                        <img src={avatar} alt="avatar" />
                      </div>
                      <div className="name-email">
                        <h3>{artisan.fullName}</h3>
                        <p>
                          <b>{artisan.occupation}</b>
                        </p>
                        <p>{artisan.email}</p>
                      </div>
                    </div>
                    <div className="right-particular-user">
                      <button onClick={() => handleArtisanDelete(artisan._id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtisanOverview;
