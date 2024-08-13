import React, { useEffect, useState } from "react";
import "./Work.css"; // Import your CSS file

import video1 from "../assets/Row1Place1.mp4";
import video2 from "../assets/Row1Place2.mp4";
import video3 from "../assets/Row1Place3.mp4";
import video4 from "../assets/ROW2.mp4";
import video5 from "../assets/Row3Place1.mp4";
import video6 from "../assets/Row3Place2.mp4";
import video7 from "../assets/Row3Place3.mp4";
import video8 from "../assets/ROW4.mp4";
import video9 from "../assets/Row5Place1.mp4";
import video10 from "../assets/Row5Place2.mp4";
import video11 from "../assets/Row5Place3.mp4";
import video12 from "../assets/ROW6.mp4";
import video13 from "../assets/Row7Place1.mp4";
import video14 from "../assets/Row7Place2.mp4";

import logo from "../assets/logo.png";
import instagram_icon from "../assets/instagram.png";
import email_icon from "../assets/email.png";
import VideoComponent from "./VideoComponent"; // Adjust the import path as needed
import ReactPlayer from "react-player";

function Work() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="socials">
        <a
          href="https://www.instagram.com/cvrecstudios?igsh=ZzlweTA3cThmeWN3"
          className="social-link"
        >
          <img height="24px" src={instagram_icon} alt="Social Link" />
        </a>
      </div>

      <div className="videos-container">
        <div className="videos">
          <VideoComponent url={video1} />
          <VideoComponent url={video2} />
          {!isMobile && <VideoComponent url={video3} />}
        </div>

        {isMobile && (
          <div className="videos">
            <VideoComponent url={video3} />
            <VideoComponent url={video5} />
          </div>
        )}
        <div className="horizontal-video">
          <ReactPlayer
            url={video4}
            playing
            width="95%"
            height="95%"
            loop
            playsinline
            muted
          />
        </div>
        <div className="videos">
          {!isMobile && <VideoComponent url={video5} />}
          <VideoComponent url={video6} />
          <VideoComponent url={video7} />
        </div>

        <div className="horizontal-video">
          <ReactPlayer
            url={video8}
            playing
            width="95%"
            height="95%"
            loop
            playsinline
            muted
          />
        </div>

        <div className="videos">
          <VideoComponent url={video9} />
          <VideoComponent url={video10} />
          <VideoComponent url={video11} />
        </div>

        <div className="horizontal-video">
          <ReactPlayer
            url={video12}
            playing
            width="95%"
            height="95%"
            loop
            playsinline
            muted
          />
        </div>

        <div className="videos">
          <VideoComponent url={video13} />
          <VideoComponent url={video14} />
        </div>
      </div>
      <div className="contact-details-text-container">
        <div className="details">
          <img height="24px" src={email_icon} alt="Social Link" />
          <div className={"contact-details-text contact-details-text-II"}>
            <p>charlotta.roos@hotmail.com</p>
          </div>
        </div>

        <div className="details">
          <img height="24px" src={instagram_icon} alt="Social Link" />
          <div className={"contact-details-text contact-details-text-II"}>
            <p>@cvrecstudios</p>
          </div>
        </div>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Work;
