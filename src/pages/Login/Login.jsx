// stylesheet
import "./style/Login.scss";

// react-helmet
import { Helmet } from "react-helmet";

import { IoArrowBack } from "react-icons/io5";

import { NavLink } from "react-router-dom";

// components
import LoginHeader from "./components/LoginHeader/LoginHeader";
import LoginForm from "./components/LoginForm/LoginForm";

const Login = ({setUser}) => {
  return (
    <>
      {/* React Helmet */}
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Log In | WorkMan</title>
        <meta
          name="description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta
          name="keywords"
          content="artisan, craftsmen, handmade, custom-made, traditional crafts, unique art, bespoke, handcrafted goods, artisanal products, local artisans, craftsmanship, handmade jewelry, handmade furniture, artisan marketplace, artisan community, creative artisans, artisanal services"
        />

        <meta name="author" content="Agu Henry" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="Log In | WorkMan" />
        <meta
          property="og:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta property="og:image" content="./assets/OG-image.svg" />
        <meta property="og:url" content="https://workman-six.vercel.app/" />

        {/* Twitter Meta Tags (for Twitter Cards) */}
        <meta name="twitter:card" content="./assets/OG-image.svg" />
        <meta name="twitter:title" content="Log In | WorkMan" />
        <meta
          name="twitter:description"
          content="WorkMan is my final year project at the University of Port Harcourt. It is a website that connects users to artisans residing at Choba area."
        />
        <meta name="twitter:image" content="./assets/OG-image.svg" />
      </Helmet>
      <div className="customer-login" >
        <LoginHeader />
        <NavLink to="/">
        <div className="go-back" title="Home" style={{width: "80%", margin: "0 auto"}}>
          <IoArrowBack className="go-back-icon" />
        </div>
      </NavLink>
        <LoginForm setUser={setUser}/>
      </div>
    </>
  );
};

export default Login;
