import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";

interface VideoComponentProps {
  url: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ url }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<ReactPlayer>(null); // Add type assertion here
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      if (isVisible) {
        playerRef.current.seekTo(0); // Use type assertion here
      }
    }
  }, [isVisible]);

  return (
    <div ref={videoRef} className="video">
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={isVisible}
        loop
        playsinline
        muted
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default VideoComponent;
