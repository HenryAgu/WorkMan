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
import axios from "../../../../api/axios";

const LoginForm = ({ setUser }) => {
  const [showPassword, setShowPassword] = useState("password");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // API URL
  const LOGIN_USER_URL =
    "https://job-search-iogy.onrender.com/api/v1/auth/login/customer";

  // navigator
  const navigate = useNavigate();

  // handlePassword
  const handlePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    if (formData.email !== "" && formData.password !== "") {
      try {
        const response = await axios.post(LOGIN_USER_URL, formData);

        const { token } = response.data;

        // saving the token to local storage
        localStorage.setItem("jwtToken", token);
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
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        toast.error(`Login Failed! ${error.message}`, {
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
    }
    navigate("/find-artisans");
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
              name="email"
              value={formData.email}
              placeholder=""
              onChange={handleInputChange}
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
              value={formData.password}
              name="password"
              type={showPassword ? "password" : "text"}
              placeholder="minimum of six characters"
              required
              onChange={handleInputChange}
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
            <NavLink to="/sign-up/sign-up-with-email">
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
