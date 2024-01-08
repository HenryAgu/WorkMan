// stylsheet
import "./style/FindArtisanSearch.scss";

// images
import searchIcon from "./images/MagnifyingGlass.svg";

const FindArtisanSearch = () => {
  return (
    <div className="find-artisan-search">
      <div className="find-artisan-search-header">
        <h1>
          Find the <span>Best Artisans</span> in Choba
        </h1>
      </div>
      <div className="find-artisan-search-box">
        <div className="search-box">
          <img src={searchIcon} alt="search" />
          <input type="text" placeholder="What skill are you looking for ?"/>
        </div>
        <button>Find Artisans</button>
      </div>
    </div>
  );
};

export default FindArtisanSearch;
