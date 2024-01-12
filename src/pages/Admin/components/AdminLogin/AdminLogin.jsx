// state
import { useState } from "react";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// stylesheet
import "./style/AdminLogin.scss";

// React router
import { NavLink, useNavigate } from "react-router-dom";

// AXIOS
import axios from "../../../../api/axios";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  // url
  const ADMIN_ARTISAN_URL =
    "https://job-search-iogy.onrender.com/api/v1/auth/login/admin";

  // Admin Login
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    if (formData.username !== "" && formData.password !== "") {
      try {
        const response = await axios.post(ADMIN_ARTISAN_URL, formData);

        const { token } = response.data;

        // save token to local storage
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
        navigate("/admin/dashboard-overview");
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
  };
  return (
    <div className="admin-login">
      <div className="admin-login-header">
        <h1>Admin Login</h1>
      </div>
      <form action="" onSubmit={handleAdminLogin}>
        <div className="inner-admin-login">
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={formData.username}
            name="username"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="inner-admin-login">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            name="password"
            onChange={handleInputChange}
            required
          />
        </div>
        <button>Log in</button>
      </form>
      <p>
        Return to <NavLink to="/">home</NavLink>
      </p>
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

export default AdminLogin;
