import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./LandingPage.css";

// Importing video files
import horizontal from "../../assets/videos/WEBSITEhorisontal.mp4";
import vertical from "../../assets/videos/WEBSITEvertical.mp4";
import { Link } from "react-router-dom";
// import logo from "../../assets/photos/logo-white.png";

const LandingPage: React.FC = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // State to track dropdown visibility for Videos (mobile only)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Toggle the dropdown visibility for mobile
  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="landing-page">
      <ReactPlayer
        url={isMobile ? vertical : horizontal} // Dynamically switch between videos based on device orientation
        playing
        loop
        muted
        width="100vw"
        height="100vh"
        className="background-video"
        playsinline
      />
      <div className="content">
        {/* <div className="logo">
          <img src={logo} alt="Logo" />
        </div> */}
        <div className="navigation">
          <div
            className="nav-item"
            onClick={isMobile ? handleDropdownToggle : undefined} // Only add click event on mobile
          >
            Videos
            <div
              className={`dropdown ${
                isMobile && isDropdownVisible ? "visible" : ""
              }`}
            >
              <Link to="/videos/music" className="dropdown-item">
                Music
              </Link>
              <Link to="/videos/events" className="dropdown-item">
                Events
              </Link>
              <Link to="/videos/dance" className="dropdown-item">
                Dance
              </Link>
            </div>
          </div>
          <Link className="nav-item" to="/photos">
            Photos
          </Link>
          <Link className="nav-item" to="/about">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
