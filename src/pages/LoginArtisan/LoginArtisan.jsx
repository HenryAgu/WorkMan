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
  const [errorMessage, setErrorMessage] = useState(false);

  // navigator
  const navigate = useNavigate();

  // handlePassword
  const handlePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  //   handle artisan form
  const handleArtisanLogin = (e) => {
    e.preventDefault();
    if (artisaneEmail !== "" && artisanPassword !== "") {
      console.log(`${artisaneEmail} is logged in!`);
      navigate("/artisan/dashboard-overview");
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
    <div className="login-form artisan-login-form">
      <form action="" onSubmit={handleArtisanLogin}>
        <h1>Login as Artisan</h1>
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
