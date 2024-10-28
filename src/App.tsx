import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/AboutPage/About";
import LandingPage from "./pages/LandingPage/LandingPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        {/* <Route path="/videos" element={<Videos />} /> */}
        {/* <Route path="/photos" element={<Photos />} /> */}
      </Routes>
    </>
  );
}
export default App;
