import React from "react";
import "./Photo.css";

interface PhotoProps {
  url: string;
  caption?: string;
}

const Photo: React.FC<PhotoProps> = ({ url, caption }) => {
  return (
    <div className="photo-container">
      <div className="photo-inner">
        <img src={url} alt={caption} className="photo-image" />
        {caption && (
          <div className="photo-overlay">
            <span className="photo-caption">{caption}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Photo;
