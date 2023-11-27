// stylesheet
import "./style/EmailMe.scss";

// images
import EmailIcon from "./images/Email.png";

const EmailMe = () => {
  return (
    <div className="email-me">
      <div className="email-me-header">
        <img src={EmailIcon} alt="Email" />
        <h4>Email me for jobs</h4>
      </div>
      <p>
        Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea
        foes.
      </p>
      <div className="submit-email">
        <input type="email" placeholder="name@mail.com" />
        <button>Subcribe</button>
      </div>
    </div>
  );
};

export default EmailMe;
