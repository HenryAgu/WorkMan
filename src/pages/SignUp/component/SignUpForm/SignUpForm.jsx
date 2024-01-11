// stylesheet
import "./style/SignUpForm.scss";

// images
import SignUpImage from "./images/LoginImage.svg";
import GoogleIcon from "./images/Google.svg";
import FacebookIcon from "./images/Facebook.svg";
import EmailIcon from "./images/Email.svg";

// Navlinks
import { NavLink } from "react-router-dom";



const SignUpForm = () => {
  return (
    <div className="sign-up-form">
      <form action="">
        <div className="sign-up-logo">
          <img src={SignUpImage} alt="Image" />
        </div>
        <div className="sign-up-header">
          <h1>Sign up</h1>
        </div>
        <div className="sign-up-options">
          <button>
            <img src={GoogleIcon} alt="icon" />
            <p>Continue with Google</p>
          </button>
          <button>
            <img src={FacebookIcon} alt="icon" />
            <p>Continue with Facebook</p>
          </button>
          <NavLink to="/sign-up/sign-up-with-email">
            <button>
              <img src={EmailIcon} alt="icon" />
              <p>Sign up with email</p>
            </button>
          </NavLink>
        </div>
        <div className="policy">
          <p>
            By signing up, you agree to the <span>Terms of Service</span> and
            acknowledge you’ve read our <span>Privacy Policy</span>.
          </p>
        </div>
        <div className="sign-in">
          <p>
            Already have an account?{" "}
            <NavLink to="/login">
              <span>Log in</span>
            </NavLink>{" "}
          </p>
        </div>
      </form>

    </div>
  );
};

export default SignUpForm;
