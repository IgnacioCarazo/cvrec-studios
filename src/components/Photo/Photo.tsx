import React, { useState } from "react";
import "./Photo.css";

interface PhotoProps {
  url: string;
  caption?: string;
}

const Photo: React.FC<PhotoProps> = ({ url, caption }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="photo-container">
      {!loaded && <div className="photo-placeholder" />}
      <img
        src={url}
        alt={caption}
        className={`photo-image ${loaded ? "visible" : "hidden"}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
      {caption && (
        <div className="photo-overlay">
          <span className="photo-caption">{caption}</span>
        </div>
      )}
    </div>
  );
};

export default Photo;
