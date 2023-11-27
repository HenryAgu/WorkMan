// stylesheet
import "./style/FindArtisanContent.scss";

// components
import Filter from "./components/Filter/Filter";
import Jobs from "./components/Jobs/Jobs";
import EmailMe from "./components/EmailMe/EmailMe";

const FindArtisanContent = () => {
  return (
    <div className="find-artisan-content">
        <Filter/>
        <Jobs/>
        <EmailMe/>
    </div>
  )
}

export default FindArtisanContent