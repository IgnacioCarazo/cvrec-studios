import React, { useRef } from "react";
import ReactPlayer from "react-player";

interface VideoComponentProps {
  url: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ url }) => {
  const videoRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={videoRef} className="video">
      <ReactPlayer
        url={url}
        controls
        playsinline
        muted
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default VideoComponent;
