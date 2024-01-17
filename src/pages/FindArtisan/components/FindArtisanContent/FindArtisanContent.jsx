// stylesheet
import "./style/FindArtisanContent.scss";

// components
import Filter from "./components/Filter/Filter";
import Jobs from "./components/Jobs/Jobs";
import EmailMe from "./components/EmailMe/EmailMe";

const FindArtisanContent = ({search, setSearch}) => {
  return (
    <div className="find-artisan-content">
        <Filter/>
        <Jobs search={search} setSearch={setSearch}/>
        <EmailMe/>
    </div>
  )
}

export default FindArtisanContent