import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/AboutPage/About";
import LandingPage from "./pages/LandingPage/LandingPage";
import VideosPage from "./pages/VideosPage/VideosPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";
import DesktopNavbar from "./components/DesktopNavbar/DesktopNavbar";
import { useState } from "react";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import { useMediaQuery } from "react-responsive";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<
    "music" | "events" | "dance"
  >("music");

  const handleCategoryChange = (category: "music" | "events" | "dance") => {
    setSelectedCategory(category);
  };

  // Get current location
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {/* Conditionally render Navbar, hide it on "/home" (Landing Page) */}
      {location.pathname !== "/home" &&
        (isMobile ? (
          <MobileNavbar onCategoryChange={handleCategoryChange} />
        ) : (
          <DesktopNavbar onCategoryChange={handleCategoryChange} />
        ))}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route
          path="/videos"
          element={<VideosPage selectedCategory={selectedCategory} />}
        />
        <Route path="/photos" element={<PhotosPage />} />
      </Routes>
    </>
  );
}

export default App;
