// use state
import { useState } from "react";

// stylesheet
import "../Login/components/LoginForm/style/LoginForm.scss";
import "./style/LoginArtisan.scss";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React router
import { NavLink, useNavigate } from "react-router-dom";

// React icons
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

const LoginArtisan = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [artisaneEmail, setArtisanEmail] = useState("");
  const [artisanPassword, setArtisanPassword] = useState("");

  // handlePassword
  const handlePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form artisan-login-form">
      <form action="">
        <h1>Artisan Login</h1>
        <div className="login-form-box">
          <div className="inner-login-form">
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={artisaneEmail}
              placeholder=""
              onChange={(e) => setArtisanEmail(e.target.value)}
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
              value={artisanPassword}
              type={showPassword ? "password" : "text"}
              placeholder=""
              required
              onChange={(e) => setArtisanPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="login-button">Login</button>
        <div className="sign-up-link">
          <p>
            Don’t have an account?
            <NavLink to="/regsiter-artisan">
              <span> Sign up</span>
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginArtisan;
