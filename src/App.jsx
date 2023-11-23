import { useState } from "react";
// stylesheet
import "./App.scss";

// react routers
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./pages/Home/Home";
import FindArtisan from "./pages/FindArtisan/FindArtisan";
import Login from "./pages/Login/Login";
import ArtisanProfile from "./pages/ArtisanProfile/ArtisanProfile";
import ScrollToTop from "./ScrollToTop";
import SignUp from "./pages/SignUp/SignUp";
import SignUpWithEmail from "./pages/SignUp/component/SignUpForm/components/SignUpWithEmail/SignUpWithEmail";
import RegisterArtisan from "./pages/RegisterArtisan/RegisterArtisan";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  const [user, setUser] = useState(null);
  return (
    <main>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="find-artisans"
            element={
              <ProtectedRoutes user={user}>
                <FindArtisan />
              </ProtectedRoutes>
            }
          />
          <Route path="/artisan-profile" element={<ArtisanProfile />} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/sign-up/sign-up-with-email"
            element={<SignUpWithEmail />}
          />
          <Route path="/regsiter-artisan" element={<RegisterArtisan />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
