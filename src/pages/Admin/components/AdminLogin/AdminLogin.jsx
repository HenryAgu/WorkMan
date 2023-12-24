import { useState } from "react";

// stylesheet
import "./style/AdminLogin.scss";

// React router
import { NavLink, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Admin Login
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      navigate("/admin/dashboard-overview");
      console.log(`Username ${username}, password ${password}`);
    } else {
      navigate("/admin-login");
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="inner-admin-login">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Log in</button>
      </form>
    </div>
  );
};

export default AdminLogin;
