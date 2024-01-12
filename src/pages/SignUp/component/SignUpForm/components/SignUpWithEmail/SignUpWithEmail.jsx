import { useState } from "react";

// stylesheet
import "./style/SignUpWithEmail.scss";

// React router
import { NavLink, useNavigate } from "react-router-dom";

// components
import LoginHeader from "../../../../../Login/components/LoginHeader/LoginHeader";

// React icons
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// axios
import axios from "../../../../../../api/axios";

const SignUpWithEmail = () => {
  const [showCreatePassword, setShowCreatePassword] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");

  const initialFormData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const REGISTER_URL =
    "https://job-search-iogy.onrender.com/api/v1/auth/register/customer";

  const navigate = useNavigate();

  // handlePassword
  const handleCreatePassword = (e) => {
    e.preventDefault();
    setShowCreatePassword(!showCreatePassword);
  };

  const handleConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Form submission
  const handleSignUpWithEmail = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match!", {
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
    try {
      await axios.post(REGISTER_URL, formData);
      setFormData(initialFormData);
      toast.success("Registered successfully!", {
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
      toast.error(`Registration Failed! ${error.response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error(error);
    }
    navigate("/login");
  };

  return (
    <div className="sign-up-with-email">
      <LoginHeader />
      <form action="" onSubmit={handleSignUpWithEmail}>
        <div className="with-email-header">
          <h1>Sign Up With Email</h1>
        </div>
        <div className="with-email-form">
          <div className="with-email-input">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="with-email-input">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="with-email-input">
            <label htmlFor="">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="080 0000 0000"
              required
              value={formData.phone}
              onChange={handleInputChange}
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
            <input
              type={showCreatePassword ? "password" : "text"}
              required
              name="password"
              placeholder="minimum of six characters"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="with-email-input">
            <label htmlFor="">
              <p>Confirm Password</p>
              <button onClick={handleConfirmPassword}>
                {showConfirmPassword ? <BiShow /> : <BiSolidHide />}
                {showConfirmPassword ? "Show" : "Hide"}
              </button>
            </label>
            <input
              type={showConfirmPassword ? "password" : "text"}
              required
              placeholder="minimum of six characters"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button className="sign-up-button">Sign Up</button>
        <div className="sign-in">
          <p>
            Already have an account?{" "}
            <NavLink to="/login">
              <span>Log in</span>
            </NavLink>{" "}
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

export default SignUpWithEmail;
