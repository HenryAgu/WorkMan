// stylesheet
import "./style/WorkPhotos.scss";

// images
import workPhoto1 from "./images/image1.png";
import workPhoto2 from "./images/image2.png";
import workPhoto3 from "./images/image3.png";
import workPhoto4 from "./images/image4.png";
import workPhoto5 from "./images/image5.png";

const WorkPhotos = () => {
  const workPhotos = [
    {
      id: 1,
      workPhoto: workPhoto1,
    },
    { id: 2, workPhoto: workPhoto2 },
    { id: 3, workPhoto: workPhoto3 },
    { id: 4, workPhoto: workPhoto4 },
    { id: 5, workPhoto: workPhoto5 },
  ];
  return (
    <div className="work-photos">
      <h2>Work Photos</h2>
      <div className="work-photos-gallery">
        {workPhotos.map((photo) => (
          <div className="work-image" key={photo.id}>
            <img src={photo.workPhoto} alt="work photo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPhotos;
