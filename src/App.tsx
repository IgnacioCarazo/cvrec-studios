import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import About from "./pages/AboutPage/About";
import LandingPage from "./pages/LandingPage/LandingPage";
import VideosPage from "./pages/VideosPage/VideosPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";
import DesktopNavbar from "./components/DesktopNavbar/DesktopNavbar";
import { useState } from "react";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import { useMediaQuery } from "react-responsive";
import Contact from "./pages/ContactPage/Contact";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<
    "music" | "events" | "dance"
  >("music");

  console.log(selectedCategory);
  const handleCategoryChange = (category: "music" | "events" | "dance") => {
    setSelectedCategory(category);
  };

  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {/* Conditionally render Navbar */}
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
        <Route path="/videos/:category" element={<VideosPage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
