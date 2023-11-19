// stylesheet
import "./style/LoginHeader.scss";

// images
import Logo from "./images/Logo.svg";
import { NavLink } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div className="login-header">
      <NavLink to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>
      <h3>WorkMan</h3>
    </div>
  );
};

export default LoginHeader;
