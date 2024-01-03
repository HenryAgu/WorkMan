import { useState } from "react";

// stylesheet
import "./style/RegisterArtisan.scss";

// component
import LoginHeader from "../Login/components/LoginHeader/LoginHeader";

// Navlink
import { NavLink } from "react-router-dom";

// React icons
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

const RegisterArtisan = () => {
  const [showPassword, setShowPassword] = useState("password");

  // handlePassword
  const handlePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="register-artisan">
      <LoginHeader />
      <form action="">
        <div className="register-artisan-header">
          <h1>Register As An Artisan</h1>
        </div>
        <div className="register-artisan-form">
          <div className="register-artisan-input">
            <label htmlFor="">Full Name</label>
            <input type="text" required />
          </div>
          <div className="register-artisan-input">
            <label htmlFor="">Email</label>
            <input type="email" required />
          </div>
          <div className="register-artisan-input">
            <label htmlFor="">Active Whatsapp Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="080 0000 0000"
              required
            />
          </div>
          <div className="register-artisan-input">
            <label htmlFor="">Location</label>
            <input type="text" placeholder="landmark in Choba" required />
          </div>
          <div className="register-artisan-input">
            <label htmlFor="">Artisan Skill</label>
            <input type="text" required />
          </div>
          <div className="register-artisan-input">
            <label htmlFor="" className="password">
              <p>Password</p>
              <button onClick={handlePassword}>
                {showPassword ? <BiShow /> : <BiSolidHide />}
                {showPassword ? "Show" : "Hide"}
              </button>
            </label>
            <input
              type={showPassword ? "password" : "text"}
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="register-artisan-button">
          <button>Register</button>
        </div>
        <div className="artisan-login">
          <p>Already have an account? <NavLink to=""><span>Sign in</span></NavLink> </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterArtisan;
