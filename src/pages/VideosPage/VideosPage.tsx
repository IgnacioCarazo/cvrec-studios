import React from "react";
import "./VideosPage.css";
import VideoComponent from "../../components/VideoHorizontal/VideoComponent";

const videoCategories = {
  music: [
    {
      url: "https://player.vimeo.com/video/1059682671?title=0&byline=0&portrait=0&controls=1",
      description: "SkylaTyla at Weekend Festival, Helsinki '23",
    },
    {
      url: "https://player.vimeo.com/video/1040451592?title=0&byline=0&portrait=0&controls=1",
      description: "Juls at Maiden Voyage, London '23",
    },
    {
      url: "https://player.vimeo.com/video/1059679374?title=0&byline=0&portrait=0&controls=1",
      description: "Dailypaper x LadiesLove, London flagship store '23",
    },
    {
      url: "https://player.vimeo.com/video/1059682523?title=0&byline=0&portrait=0&controls=1",
      description: "SkylaTyla @ Anomaly, Helsinki '23",
    },
    {
      url: "https://player.vimeo.com/video/1040450400?title=0&byline=0&portrait=0&controls=1",
      description: "Rosey Gold @ Anomaly, Helsinki '23",
    },
    {
      url: "https://player.vimeo.com/video/1059679436?title=0&byline=0&portrait=0&controls=1",
      description: "DJ Phaphane @ Anomaly, Helsinki '23",
    },
  ],
  events: [
    {
      url: "https://player.vimeo.com/video/1059682876?title=0&byline=0&portrait=0&controls=1",
      description: "Txxuba x Dose, Helsinki '24",
    },
    {
      url: "https://player.vimeo.com/video/1059679956?title=0&byline=0&portrait=0&controls=1",
      description: "KOKO Camden, London '23, edit by Charlotta Roos",
    },
    {
      url: "https://player.vimeo.com/video/1059682800?title=0&byline=0&portrait=0&controls=1",
      description: "The box x Dose, Helsinki '23",
    },
    {
      url: "https://player.vimeo.com/video/1059680004?title=0&byline=0&portrait=0&controls=1",
      description: "PRPL experience, Helsinki '23",
    },
    {
      url: "https://player.vimeo.com/video/1059680129?title=0&byline=0&portrait=0&controls=1",
      description: "PRPL experience, Helsinki '24",
    },
  ],
  dance: [
    {
      url: "https://player.vimeo.com/video/1059682174?title=0&byline=0&portrait=0&controls=1",
      description: "PRPL dance crew - Trap queen",
    },
    {
      url: "https://player.vimeo.com/video/1059679862?title=0&byline=0&portrait=0&controls=1",
      description: "Kashika Arora - Whine up",
    },
    {
      url: "https://player.vimeo.com/video/1059679539?title=0&byline=0&portrait=0&controls=1",
      description: "Josefiina Kotajärvi & Malachi Simmons - On my momma",
    },
  ],
};

interface VideosPageProps {
  selectedCategory: "music" | "events" | "dance";
}

const VideosPage: React.FC<VideosPageProps> = ({ selectedCategory }) => {
  const renderVideos = () => {
    const videos = videoCategories[selectedCategory];
    if (selectedCategory === "dance") {
      // Single-video layout for dance category
      return videos.map((video, index) => (
        <div className="video-single" key={index}>
          <VideoComponent
            vimeoUrl={video.url}
            description={video.description}
          />
        </div>
      ));
    } else {
      // Row-based layout for music and events categories
      const rows = [];
      for (let i = 0; i < videos.length; i += 3) {
        rows.push(
          <div className="video-row" key={i}>
            {videos.slice(i, i + 3).map((video, index) => (
              <VideoComponent
                key={index}
                vimeoUrl={video.url}
                description={video.description}
              />
            ))}
          </div>
        );
      }
      return rows;
    }
  };

  return (
    <div className="videos-page">
      {/* Videos Section */}
      <div className="videos-holder">{renderVideos()}</div>
    </div>
  );
};

export default VideosPage;
