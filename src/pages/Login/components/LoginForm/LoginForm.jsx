import { useState } from "react";

// stylesheet
import "./style/LoginForm.scss";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React icons
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

// images
import LoginImage from "./images/LoginImage.svg";
import GoogleImage from "./images/Google.svg";

// React router
import { NavLink, useNavigate } from "react-router-dom";

const LoginForm = ({ setUser }) => {
  const [showPassword, setShowPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  // navigator
  const navigate = useNavigate();

  // handlePassword
  const handlePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      setUser({ email: email, password: password });
      console.log("Logged In!");
      navigate("/find-artisans");
      toast.success("Logged in successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setErrorMessage(true);
      toast.error("Invalid login details!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        <img src={LoginImage} alt="Login form" className="login-image" />
        <div className="login-header">
          <h1>Sign in</h1>
          <button>
            <img src={GoogleImage} alt="Google Image" />
            <p>Continue with Google</p>
          </button>
        </div>
        <div className="continue-with-email">
          <div className="barrier"></div>
          <p>Or continue with email</p>
          <div className="barrier"></div>
        </div>
        <div className="login-form-box">
          <div className="inner-login-form">
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={email}
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inner-login-form">
            <label htmlFor="" className="password">
              <p>Password</p>
              <button onClick={handlePassword}>
                {showPassword ? <BiShow /> : <BiSolidHide />}
                {showPassword ? "Show" : "Hide"}
              </button>
            </label>
            <input
              value={password}
              type={showPassword ? "password" : "text"}
              placeholder=""
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="login-button">Login</button>
        <div className="login-issue">
          <div className="remember-me">
            <input type="checkbox" name="" id="" />
            <p>Remember me</p>
          </div>
          <div className="need-help">
            <p>Need help?</p>
          </div>
        </div>
        <div className="sign-up-link">
          <p>
            Don’t have an account?
            <NavLink to="/sign-up">
              <span> Sign up</span>
            </NavLink>
          </p>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default LoginForm;
