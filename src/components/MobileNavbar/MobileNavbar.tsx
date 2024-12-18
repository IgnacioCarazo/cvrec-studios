import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/photos/logo-black.png";
import "./MobileNavbar.css";

interface MobileNavbarProps {
  onCategoryChange: (category: "music" | "events" | "dance") => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ onCategoryChange }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // To store the last scroll position
  const [visible, setVisible] = useState(true); // To control visibility

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      // Scrolling up
      setVisible(true);
    } else {
      // Scrolling down
      setVisible(false);
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleCategorySelect = (category: "music" | "events" | "dance") => {
    onCategoryChange(category);
    navigate("/videos");
    setMenuOpen(false);
  };

  return (
    <div
      className={`mobile-navbar ${visible ? "visible" : "hidden"}`} // Toggle visibility based on scroll direction
    >
      {/* Burger Menu Icon */}
      <button
        className="mobile-burger-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className={`mobile-bar ${menuOpen ? "mobile-open" : ""}`}></div>
        <div className={`mobile-bar ${menuOpen ? "mobile-open" : ""}`}></div>
        <div className={`mobile-bar ${menuOpen ? "mobile-open" : ""}`}></div>
      </button>

      {/* Logo */}
      <Link className="mobile-nav-item" to="/">
        <div className="mobile-logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <span onClick={() => handleCategorySelect("music")}>
            Music Videos
          </span>
          <span onClick={() => handleCategorySelect("events")}>
            Event Videos
          </span>
          <span onClick={() => handleCategorySelect("dance")}>
            Dance Videos
          </span>
          <Link to="/photos" onClick={() => setMenuOpen(false)}>
            Photos
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <a
            href="https://www.instagram.com/cvrecstudios/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Instagram
          </a>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
