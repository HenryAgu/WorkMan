// stylesheet
import "./style/Filter.scss";

const Filter = () => {
  const datePosting = [
    {
      id: 1,
      postingDate: "All time",
      name: "option1",
    },
    {
      id: 2,
      postingDate: "Last 24 hours",
      name: "option1",
    },
    {
      id: 3,
      postingDate: "Last 3 days",
      name: "option1",
    },
    {
      id: 4,
      postingDate: "Last 7 days",
      name: "option1",
    },
  ];

  const workExperience = [
    {
      id: 1,
      experience: "Any experience",
      name: "option1",
    },
    {
      id: 2,
      experience: "Intership",
      name: "option1",
    },
    {
      id: 3,
      experience: "Work remotely",
      name: "option1",
    },
  ];

  const employmentType = [
    {
      id: 1,
      employment: "Full-time",
      name: "option1",
    },
    {
      id: 1,
      employment: "Temporary",
      name: "option1",
    },
    {
      id: 1,
      employment: "Part-time",
      name: "option1",
    },
  ];
  return (
    <div className="filter">
      <h3>Filter</h3>
      <div className="date-of-posting">
        <h4>Date of posting</h4>
        <div className="inner-date">
          {datePosting.map((datepost) => (
            <div className="posting-date" key={datepost.id}>
              <input type="radio" name={datepost.name} id={datepost.id} />
              <p>{datepost.postingDate}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="date-of-posting">
        <h4>Work experience</h4>
        <div className="inner-date">
          {workExperience.map((experience) => (
            <div className="posting-date" key={experience.id}>
              <input type="radio" name={experience.name} id={experience.id} />
              <p>{experience.experience}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="date-of-posting employment-type">
        <h4>Type of employment</h4>
        <div className="inner-date">
          {employmentType.map((employment) => (
            <div className="employment" key={employment.id}>
              <input type="checkbox" name={employment.name} id={employment.id} />
              <p>{employment.employment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
