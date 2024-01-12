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

// axios
import axios from "../../api/axios";

const LoginArtisan = () => {
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

  // navigator
  const navigate = useNavigate();

  // url
  const LOGIN_ARTISAN_URL =
    "https://job-search-iogy.onrender.com/api/v1/auth/login/job";

  // handlePassword
  const handlePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  //   handle artisan form
  const handleArtisanLogin = async (e) => {
    e.preventDefault();
    if (formData.email !== "" && formData.password !== "") {
      try {
        const response = await axios.post(LOGIN_ARTISAN_URL, formData);

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
        // navigation to artisan dashboard
        navigate("/artisan/dashboard-overview")
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
    <div className="login-form artisan-login-form">
      <form action="" onSubmit={handleArtisanLogin}>
        <h1>Login as Artisan</h1>
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
            name="password"
              value={formData.password}
              type={showPassword ? "password" : "text"}
              placeholder=""
              required
              onChange={handleInputChange}
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

export default LoginArtisan;
