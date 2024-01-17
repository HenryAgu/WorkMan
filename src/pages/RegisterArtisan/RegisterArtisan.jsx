import { useState } from "react";

// stylesheet
import "./style/RegisterArtisan.scss";

// component
import LoginHeader from "../Login/components/LoginHeader/LoginHeader";

// Navlink
import { NavLink, useNavigate } from "react-router-dom";

// React icons
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

// axios
import axios from "../../api/axios";

const RegisterArtisan = () => {
  const [showPassword, setShowPassword] = useState("password");
  


  const initialFormData = {
    fullName: "",
    email: "",
    whatsapp: "",
    phone: "",
    occupation: "",
    password: "",
    location: "",
    bio: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const formattedWhatsapp = `+234${formData.whatsapp.substring(1)}`;
  const updatedFormData = { ...formData, whatsapp: formattedWhatsapp };

  const navigate = useNavigate();

  // API URL
  const REGISTER_ARTISAN_URL =
    "https://job-search-iogy.onrender.com/api/v1/auth/register/job";

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handlePassword
  const handlePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };


  // submit form
  const handleArtisanRegistration = async (e) => {
    e.preventDefault();
    try {
      await axios.post(REGISTER_ARTISAN_URL, updatedFormData);
      setFormData(initialFormData);
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
    navigate("/login-artisan");
  };




  return (
    <div className="register-artisan">
      <LoginHeader />
      <form action="" onSubmit={handleArtisanRegistration}>
        <div className="register-artisan-header">
          <h1>Register As An Artisan</h1>
        </div>
        <div className="register-artisan-form">
          <div className="register-artisan-input">
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              name="fullName"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="register-artisan-input">
            <label htmlFor="">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="register-artisan-input">
            <label htmlFor="">Active Whatsapp Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              maxLength={11}
              placeholder="80 0000 0000"
              required
            />
          </div>
          <div className="register-artisan-input">
            <label htmlFor="">Other Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              maxLength={11}
              placeholder="080 0000 0000"
            />
          </div>
          
          <div className="register-artisan-input">
            <label htmlFor="">Artisan Skill</label>
            <input
              type="text"
              required
              value={formData.occupation}
              name="occupation"
              onChange={handleInputChange}
            />
          </div>
          <div className="register-artisan-input">
            <label htmlFor="">Bio</label>
            <textarea
              type="tel"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Write a short description on your skill"
              maxLength={250}
              required
            />
          </div>
          <div className="register-artisan-input">
            <label htmlFor="">Location</label>
            <input
              type="text"
              placeholder="landmark in Choba"
              value={formData.location}
              name="location"
              required
              onChange={handleInputChange}
            />
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
              placeholder="minimum of six characters"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="register-artisan-button">
          <button>Register</button>
        </div>
        <div className="artisan-login">
          <p>
            Already have an account?{" "}
            <NavLink to="/login-artisan">
              <span>Login</span>
            </NavLink>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterArtisan;
