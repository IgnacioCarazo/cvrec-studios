import React from "react";
import "./VideoComponent.css";

interface VideoComponentProps {
  vimeoUrl: string; // This will be the Vimeo URL for the video
  description: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  vimeoUrl,
  description,
}) => {
  return (
    <div className="video">
      <iframe
        src={vimeoUrl}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        className="vimeo-video"
      ></iframe>
      <div className="video-description">{description}</div>
    </div>
  );
};

export default VideoComponent;
