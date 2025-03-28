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
  const [subMenuOpen, setSubMenuOpen] = useState(false); // To control the sub-menu (for videos)

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
    setSubMenuOpen(false); // Close the dropdown when a category is selected
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setSubMenuOpen(false); // Close dropdown when menu is closed
    }
  };

  return (
    <div
      className={`mobile-navbar ${visible ? "visible" : "hidden"}`} // Toggle visibility based on scroll direction
    >
      {/* Burger Menu Icon */}
      <button
        className="mobile-burger-menu"
        onClick={toggleMenu}
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
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* "Video Categories" option which will expand to show more options */}
        <div
          className="dropdown-container"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <span className="dropdown-item">
            Video Categories
            <span className={`arrow ${subMenuOpen ? "up" : "down"}`}>
              &#9660;
            </span>
          </span>
        </div>

        {subMenuOpen && (
          <>
            <Link
              to="/videos/music"
              onClick={() => handleCategorySelect("music")}
            >
              Music
            </Link>
            <Link
              to="/videos/events"
              onClick={() => handleCategorySelect("events")}
            >
              Event
            </Link>
            <Link
              to="/videos/dance"
              onClick={() => handleCategorySelect("dance")}
            >
              Dance
            </Link>
          </>
        )}

        <Link to="/photos" onClick={() => setMenuOpen(false)}>
          Photo
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
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
    </div>
  );
};

export default MobileNavbar;
