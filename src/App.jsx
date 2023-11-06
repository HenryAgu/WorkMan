// stylesheet
import "./App.scss";



// react routers
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from "./pages/Home/Home";
import FindArtisan from "./pages/FindArtisan/FindArtisan";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/find-artisans" element={<FindArtisan/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
