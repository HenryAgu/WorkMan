// stylesheet
import "./style/HowItWorks.scss";

// images
import direction from "./images/Directions.svg";
import searchIcon from "./images/search-normal.svg";
import mouseIcon from "./images/mouse.svg";
import clipboardIocn from "./images/clipboard-tick.svg";
import userIcon from "./images/user.svg";
import messageIcon from "./images/messages.svg";
import bookmarkIcon from "./images/archive-book.svg";

// mobile-direction images
import numberOne from "./images/number-one.svg";
import numberTwo from "./images/number-two.svg";
import numberThree from "./images/number-three.svg";
import numberFour from "./images/number-four.svg";
import numberFive from "./images/number-five.svg";
import numberSix from "./images/number-six.svg";

const HowItWorks = () => {
  return (
    <>
      <div className="how-it-works">
        <div className="how-it-works-header">
          <h1>Here Is How WorkMan Works</h1>
          <h4>
            A step-by-step guide on how to search and hire an artisan on your
            website
          </h4>
        </div>
        <div className="how-it-works-direction">
          <div className="left-direction">
            <div className="inner-left-direction">
              <img src={searchIcon} alt="search" />
              <h3>Search for artisan</h3>
              <p>
                In the search bar at the top of the page, enter the type of
                artisan you're looking for (e.g., "Plumber," "Electrician") and
                select "Choba"
              </p>
            </div>
            <div className="inner-left-direction">
              <img src={mouseIcon} alt="mouse" />
              <h3>Explore artisan profile</h3>
              <p>
                Explore the details provided, such as their experience, skills,
                and any additional information they've provided.
              </p>
            </div>
            <div className="inner-left-direction">
              <img src={clipboardIocn} alt="clipboard icon" />
              <h3>Finalized & confirm service</h3>
              <p>
                After discussing your needs with the artisan, agree on the
                terms, including the cost & timeline. Ensure both parties are
                clear on the expectations
              </p>
            </div>
          </div>
          <div className="middle-direction">
            <img src={direction} alt="direction" />
          </div>
          <div className="right-direction">
            <div className="inner-right-direction">
              <img src={userIcon} alt="user icon" />
              <h3>Create account</h3>
              <p>
                To ensure secure communication, you will be prompted to log in
                or register an account if you haven't already
              </p>
            </div>
            <div className="inner-right-direction">
              <img src={messageIcon} alt="message icon" />
              <h3>Connect & Hire</h3>
              <p>
                Once the communication channel is opened, you can discuss your
                requirements with the artisan and inquire about their
                availability, rates, and any other relevant details.
              </p>
            </div>
            <div className="inner-right-direction">
              <img src={bookmarkIcon} alt="bookmark icon" />
              <h3>Leave a review</h3>
              <p>
                After the service is completed, consider leaving a review or
                rating for the artisan. Your feedback can help others make
                informed decisions.
              </p>
            </div>
          </div>
        </div>
        <div className="mobile-direction">
          <div className="direction-card">
            <img src={numberOne} alt="1" />
            <div className="card-details">
              <img src={searchIcon} alt="search icon" />
              <h3>Search for artisan</h3>
              <p>
                In the search bar at the top of the page, enter the type of
                artisan you're looking for (e.g., “Plumber”) and select "Choba"
              </p>
            </div>
          </div>
          <div className="direction-card">
            <img src={numberTwo} alt="2" />
            <div className="card-details">
              <img src={userIcon} alt="user icon" />
              <h3>Create account</h3>
              <p>
                To ensure secure communication, you will be prompted to log in
                or register an account if you haven't already
              </p>
            </div>
          </div>
          <div className="direction-card">
            <img src={numberThree} alt="3" />
            <div className="card-details">
              <img src={mouseIcon} alt="mouse icon" />
              <h3>Explore artisan profile</h3>
              <p>
                Explore the details provided, such as their experience, skills,
                and any additional information they've provided.
              </p>
            </div>
          </div>
          <div className="direction-card">
            <img src={numberFour} alt="4" />
            <div className="card-details">
              <img src={messageIcon} alt="message icon" />
              <h3>Connect & Hire</h3>
              <p>
                Once the communication channel is opened, you can discuss your
                requirements with the artisan and inquire about their
                availability, rates, and any other relevant details.
              </p>
            </div>
          </div>
          <div className="direction-card">
            <img src={numberFive} alt="5" />
            <div className="card-details">
              <img src={clipboardIocn} alt="clipboard icon" />
              <h3>Finalized & confirm service</h3>
              <p>
                After discussing your needs with the artisan, agree on the
                terms, including the cost & timeline. Ensure both parties are
                clear on the expectations
              </p>
            </div>
          </div>
          <div className="direction-card">
            <img src={numberSix} alt="6" />
            <div className="card-details">
              <img src={bookmarkIcon} alt="bookmark icon" />
              <h3>Leave a review</h3>
              <p>
                After the service is completed, consider leaving a review or
                rating for the artisan. Your feedback can help others make
                informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
