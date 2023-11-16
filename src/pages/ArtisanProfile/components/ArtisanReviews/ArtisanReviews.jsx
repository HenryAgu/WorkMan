// stylesheet
import "./style/ArtisanReviews.scss";

// images
import reviewersImages from "./images/reviewers.svg";
import reviewer from "./images/reviewer.svg";
import rateIcon from "./images/rate.svg";

const ArtisanReviews = () => {
  const reviews = [
    {
      reviewerImage: reviewer,
      rate: rateIcon,
      reviewerName: "Henry Agu",
      reviewMessage:
        "I was impressed by the craftsmanship and attention to detail. The custom-made dining table exceeded my expectations",
    },
    {
      reviewerImage: reviewer,
      rate: rateIcon,
      reviewerName: "Patrick Duru",
      reviewMessage:
        "I couldn't be happier with the beautifully crafted kitchen cabinets. The artisan's attention to detail and commitment to quality are truly commendable. Highly recommended!",
    },
  ];
  return (
    <div className="artisan-reviews">
      <div className="artisan-reviews-header">
        <h3>Reviews</h3>
        <img src={reviewersImages} alt="images" />
      </div>
      {reviews.map((review,index) => (
        <div className="review-card" key={index}>
          <div className="review-card-header">
            <div className="reviewer-image">
              <img src={review.reviewerImage} alt="reviewer" />
            </div>
            <div className="reviewer-rate">
              <p>{review.reviewerName}</p>
              <img src={review.rate} alt="rate" />
            </div>
          </div>
          <p>
            {review.reviewMessage}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ArtisanReviews;
