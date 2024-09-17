import React from "react";
import ReactPlayer from "react-player";
import "./LandingPage.css";

// Importing video files
import horizontal from "../assets/WEBSITEhorisontal.mp4";
import vertical from "../assets/WEBSITEvertical.mp4";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  // Assuming you want to decide between horizontal and vertical video dynamically
  const isMobile = window.innerWidth < window.innerHeight; // Simple check to determine orientation

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
        preload="auto"
      />
      <div className="content">
        <h1>CVREC</h1>
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
