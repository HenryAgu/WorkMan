// stylesheet
import "./style/FindArtisanStat.scss";

// images
import rateIcon from "./images/rate.svg";

const FindArtisanStat = () => {
  const artisanStat = [
    {
      skillName: "Carpentry",
      skillRate: 4.85,
      amountOfSkill: 1853,
    },
    {
      skillName: "Plumbing",
      skillRate: 4.95,
      amountOfSkill: 968,
    },
    {
      skillName: "Painting",
      skillRate: 4.77,
      amountOfSkill: 392,
    },
    {
      skillName: "Furniture Assembly",
      skillRate: 4.92,
      amountOfSkill: 505,
    },
    {
      skillName: "Drywall Repair",
      skillRate: 4.92,
      amountOfSkill: 505,
    },
  ];
  return (
    <>
      <h2 className="category">Category</h2>
      <div className="artisan-stat">
        {artisanStat.map((stat) => (
          <div className="artisan-stat-card">
            <h3 className="skill-name">{stat.skillName}</h3>
            <div className="skill-info">
              <div className="skill-rate">
                <img src={rateIcon} alt="rate" />
                <p>{stat.skillRate} /5</p>
              </div>
              <p>1853 skills</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FindArtisanStat;
