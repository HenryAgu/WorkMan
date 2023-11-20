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

function App() {
  return (
    <main>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/find-artisans" element={<FindArtisan/>} />
          <Route path="/artisan-profile" element={<ArtisanProfile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
