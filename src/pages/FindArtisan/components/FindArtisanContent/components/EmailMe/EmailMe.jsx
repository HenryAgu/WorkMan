// stylesheet
import "./style/EmailMe.scss";

// images
import EmailIcon from "./images/Email.png";

const EmailMe = () => {
  return (
    <div className="email-me">
      <div className="email-me-header">
        <img src={EmailIcon} alt="Email" />
        <h4>Feedback</h4>
      </div>
      <p>
      Your feedback helps! let us reach out to you.
      </p>
      <div className="submit-email">
        <input type="email" placeholder="name@mail.com" />
        <button>Email us!</button>
      </div>
    </div>
  );
};

export default EmailMe;
