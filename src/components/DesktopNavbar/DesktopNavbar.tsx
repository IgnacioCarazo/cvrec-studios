import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/photos/logo-black.png";
import "./DesktopNavbar.css";

interface DesktopNavbarProps {
  onCategoryChange: (category: "music" | "events" | "dance") => void;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ onCategoryChange }) => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const location = useLocation(); // Hook to get the current route
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: "music" | "events" | "dance") => {
    onCategoryChange(category); // Trigger category change
    setActiveCategory(category); // Set the active category
    navigate("/videos"); // Navigate to videos page
  };

  const getNavItemClass = (path: string) => {
    return location.pathname === path ? "nav-item active" : "nav-item";
  };

  // Check if the Videos dropdown is active based on the selected category
  const isVideosActive =
    location.pathname.startsWith("/videos") || activeCategory;

  return (
    <div className="navbar">
      <Link className="nav-item" to="/">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>

      <div className={`nav-item dropdown ${isVideosActive ? "active" : ""}`}>
        <span>Videos</span>
        <div className="dropdown-content">
          <span onClick={() => handleCategorySelect("music")}>Music</span>
          <span onClick={() => handleCategorySelect("events")}>Events</span>
          <span onClick={() => handleCategorySelect("dance")}>Dance</span>
        </div>
      </div>

      <Link className={getNavItemClass("/photos")} to="/photos">
        Photos
      </Link>
      <Link className={getNavItemClass("/about")} to="/about">
        About
      </Link>
      <a
        className={getNavItemClass("/instagram")}
        href="https://www.instagram.com/cvrecstudios/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </div>
  );
};

export default DesktopNavbar;
