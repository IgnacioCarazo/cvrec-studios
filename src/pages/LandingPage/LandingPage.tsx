import React from "react";
import ReactPlayer from "react-player";
import "./LandingPage.css";

// Importing video files
import horizontal from "../../assets/videos/WEBSITEhorisontal.mp4";
import vertical from "../../assets/videos/WEBSITEvertical.mp4";
import { Link } from "react-router-dom";
import logo from "../../assets/photos/logo-white.png";

const LandingPage: React.FC = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div className="landing-page">
      <ReactPlayer
        url={isMobile ? vertical : horizontal} // Dynamically switch between videos based on device orientation
        playing
        loop
        muted
        width="200vw"
        height="200vh"
        className="background-video-shadow"
        playsinline
      />
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
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navigation">
          <Link className="nav-item" to="/videos">
            Videos
          </Link>
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
