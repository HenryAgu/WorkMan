import { useState } from "react";

// stylesheet
import "./style/SignUpWithEmail.scss";

// React router
import { NavLink } from "react-router-dom";

// components
import LoginHeader from "../../../../../Login/components/LoginHeader/LoginHeader";

// React icons
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

const SignUpWithEmail = () => {
  const [showCreatePassword, setShowCreatePassword] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");

  // handlePassword
  const handleCreatePassword = (e) => {
    e.preventDefault();
    setShowCreatePassword(!showCreatePassword);
  };

  const handleConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="sign-up-with-email">
      <LoginHeader />
      <form action="">
        <div className="with-email-header">
          <h1>Sign Up With Email</h1>
        </div>
        <div className="with-email-form">
          <div className="with-email-input">
            <label htmlFor="">Username</label>
            <input type="text" required />
          </div>
          <div className="with-email-input">
            <label htmlFor="">Email</label>
            <input type="email" required />
          </div>
          <div className="with-email-input">
            <label htmlFor="">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="080 0000 0000"
              required
            />
          </div>
          <div className="with-email-input">
            <label htmlFor="">
              <p>Create Password</p>
              <button onClick={handleCreatePassword}>
                {showCreatePassword ? <BiShow /> : <BiSolidHide />}
                {showCreatePassword ? "Show" : "Hide"}
              </button>
            </label>
            <input type={showCreatePassword ? "password" : "text"} required />
          </div>
          <div className="with-email-input">
            <label htmlFor="">
              <p>Confirm Password</p>
              <button onClick={handleConfirmPassword}>
                {showConfirmPassword ? <BiShow /> : <BiSolidHide />}
                {showConfirmPassword ? "Show" : "Hide"}
              </button>
            </label>
            <input type={showConfirmPassword ? "password" : "text"} required />
          </div>
        </div>

        <button className="sign-up-button">Sign Up</button>
        <div className="sign-in">
          <p>Already have an account? <NavLink to="/login"><span>Log in</span></NavLink> </p>
        </div>
      </form>
 
    </div>
  );
};

export default SignUpWithEmail;
