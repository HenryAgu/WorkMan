// stylesheet
import "./style/LoginHeader.scss";

// images
import Logo from "./images/Logo.svg";
import { NavLink } from "react-router-dom";

const LoginHeader = () => {
  return (
    <NavLink to="/">
      <div className="login-header">
        <img src={Logo} alt="Logo" />
        <h3>WorkMan</h3>
      </div>
    </NavLink>
  );
};

export default LoginHeader;
