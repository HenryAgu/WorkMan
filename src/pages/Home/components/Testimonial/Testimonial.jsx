// stylesheet
import "./style/Testimonial.scss";

// images
import ratingIcon from "./images/Rating.svg";
import userIcon from "./images/reviewer.svg";
import userIcon2 from "./images/reviewer2.svg";
import userIcon3 from "./images/reviewer3.svg";
import quoteIcon from "./images/Quote.svg";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      rating: ratingIcon,
      testimony:
        "As a homeowner, I'm often in need of various handyman services. This website has made my life so much easier. Whether I need a plumber, carpenter, or any other artisan, I can find them quickly and even read reviews from other users.",
      reviewer: userIcon,
      author: "John P.",
      location: "PH, Nigeria",
    },
    {
      id: 2,
      rating: ratingIcon,
      testimony:
        "I recently hired a painter through this platform to give my home a fresh look. The process was seamless, from finding the right artisan to contacting them. The best part is that I can easily service again.",
      reviewer: userIcon2,
      author: "John P.",
      location: "PH, Nigeria",
    },
    {
      id: 3,
      rating: ratingIcon,
      testimony:
        "I needed an electrician in Choba and stumbled upon this website. It was incredibly easy to find the right artisan for the job. The platform connected me with a skilled electrician who was not only professional but also offered reasonable rates.",
      reviewer: userIcon3,
      author: "John P.",
      location: "PH, Nigeria",
    },
    {
      id: 4,
      rating: ratingIcon,
      testimony:
        "As a homeowner, I'm often in need of various handyman services. This website has made my life so much easier. Whether I need a plumber, carpenter, or any other artisan, I can find them quickly and even read reviews from other users.",
      reviewer: userIcon2,
      author: "John P.",
      location: "PH, Nigeria",
    },
    {
      id: 5,
      rating: ratingIcon,
      testimony:
        "As a homeowner, I'm often in need of various handyman services. This website has made my life so much easier. Whether I need a plumber, carpenter, or any other artisan, I can find them quickly and even read reviews from other users.",
      reviewer: userIcon,
      author: "John P.",
      location: "PH, Nigeria",
    },
    {
      id: 6,
      rating: ratingIcon,
      testimony:
        "As a homeowner, I'm often in need of various handyman services. This website has made my life so much easier. Whether I need a plumber, carpenter, or any other artisan, I can find them quickly and even read reviews from other users.",
      reviewer: userIcon3,
      author: "John P.",
      location: "PH, Nigeria",
    },
  ];
  return (
    <div className="testimonial">
      <div className="testimonial-header">
        <h1>What Our Client Say</h1>
      </div>
      <div className="testimonial-card-section">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <img src={testimonial.rating} alt="rating" className="rating" />
            <p>{testimonial.testimony}</p>
            <div className="testimony-author">
              <div className="left-testimony-author">
                <img
                  src={testimonial.reviewer}
                  alt="user"
                  className="reviewer"
                />
                <div className="author-name">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.location}</p>
                </div>
              </div>
              <div className="right-testimony-author">
                <img src={quoteIcon} alt="quote" className="quote" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
