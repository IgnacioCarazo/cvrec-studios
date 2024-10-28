import React from "react";
import "./PhotosPage.css";

const PhotosPage: React.FC = () => {
  // Assuming you want to decide between horizontal and vertical video dynamically
  const isMobile = window.innerWidth < window.innerHeight; // Simple check to determine orientation

  return (
    <div className="photos-page">
      <div className="photo-container">
        <div className="photo-row"></div>
        <div className="photo-row"></div>
        <div className="photo-row"></div>
      </div>
    </div>
  );
};

export default PhotosPage;
