import React from "react";
import "./VideosPage.css";

const VideosPage: React.FC = () => {
  // Assuming you want to decide between horizontal and vertical video dynamically
  const isMobile = window.innerWidth < window.innerHeight; // Simple check to determine orientation

  return (
    <div className="videos-page">
      <div className="videos-holder">
        <div className="video-row"></div>
        <div className="video-horizontal"></div>
      </div>
    </div>
  );
};

export default VideosPage;
