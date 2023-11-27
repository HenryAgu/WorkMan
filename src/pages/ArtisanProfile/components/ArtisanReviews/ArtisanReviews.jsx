import { useState } from "react";
// stylesheet
import "./style/ArtisanReviews.scss";

// images
import reviewersImages from "./images/reviewers.svg";
import reviewer from "./images/reviewer.png";
import rateIcon from "./images/rate.svg";

const ArtisanReviews = () => {
  const [review, setReview] = useState("");
  const [reviewList, setReviewList] = useState([
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
  ])
  // const reviews = [
  //   {
  //     reviewerImage: reviewer,
  //     rate: rateIcon,
  //     reviewerName: "Henry Agu",
  //     reviewMessage:
  //       "I was impressed by the craftsmanship and attention to detail. The custom-made dining table exceeded my expectations",
  //   },
  //   {
  //     reviewerImage: reviewer,
  //     rate: rateIcon,
  //     reviewerName: "Patrick Duru",
  //     reviewMessage:
  //       "I couldn't be happier with the beautifully crafted kitchen cabinets. The artisan's attention to detail and commitment to quality are truly commendable. Highly recommended!",
  //   },
  // ];

  const handleAddReview = (event) => {
    const newItem = {
      id: reviewList.length + 1,
      reviewerImage: reviewer,
      rate: rateIcon,
      reviewMessage: review,
    };
  
    // Update the state with the new item added to the array
    setReviewList([...reviewList, newItem]);
    setReview("");
  };
  
  return (
    <div className="artisan-reviews">
      <div className="artisan-reviews-header">
        <h3>Reviews</h3>
        <img src={reviewersImages} alt="images" />
      </div>
      {reviewList.map((review,index) => (
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
      <div className="add-review">
        <h2>Leave A review</h2>
        <textarea placeholder="Describe your experience" value={review} onChange={(e)=> setReview(e.target.value)}/>
        <div className="review-info">
          <p>Your review will be posted publicly on the web, under this artisan</p>
        </div>
        <button onClick={handleAddReview}>Post</button>
      </div>
    </div>
  );
};

export default ArtisanReviews;
