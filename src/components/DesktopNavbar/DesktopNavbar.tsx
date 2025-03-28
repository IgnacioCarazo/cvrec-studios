import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/photos/logo-black.png";
import "./DesktopNavbar.css";

interface DesktopNavbarProps {
  onCategoryChange: (category: "music" | "events" | "dance") => void;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ onCategoryChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<
    "music" | "events" | "dance" | null
  >(null);

  const handleCategorySelect = (category: "music" | "events" | "dance") => {
    onCategoryChange(category);
    setActiveCategory(category);
    navigate(`/videos/${category}`);
  };

  const getNavItemClass = (path: string) => {
    return location.pathname === path ? "nav-item active" : "nav-item";
  };

  const isVideosActive =
    location.pathname.startsWith("/videos") || activeCategory;

  useEffect(() => {
    if (!location.pathname.startsWith("/videos")) {
      setActiveCategory(null);
    }
  }, [location.pathname]);

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
          <Link
            to="/videos/music"
            className={`dropdown-item ${
              activeCategory === "music" ? "active-category" : ""
            }`}
            onClick={() => handleCategorySelect("music")}
          >
            Music
          </Link>
          <Link
            to="/videos/events"
            className={`dropdown-item ${
              activeCategory === "events" ? "active-category" : ""
            }`}
            onClick={() => handleCategorySelect("events")}
          >
            Events
          </Link>
          <Link
            to="/videos/dance"
            className={`dropdown-item ${
              activeCategory === "dance" ? "active-category" : ""
            }`}
            onClick={() => handleCategorySelect("dance")}
          >
            Dance
          </Link>
        </div>
      </div>

      <Link className={getNavItemClass("/photos")} to="/photos">
        Photos
      </Link>
      <Link className={getNavItemClass("/about")} to="/about">
        About
      </Link>
      <Link className={getNavItemClass("/contact")} to="/contact">
        Contact
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
