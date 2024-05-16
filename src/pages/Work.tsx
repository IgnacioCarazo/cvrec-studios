import React from "react";
import "./Work.css"; // Import your CSS file
import ReactPlayer from "react-player";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import video6 from "../assets/video6.mp4";
import video7 from "../assets/video7.mp4";
import video8 from "../assets/video8.mp4";
import video9 from "../assets/video9.mp4";
import video10 from "../assets/video10.mp4";
import video11 from "../assets/video11.mp4";

import logo from "../assets/logo.png";
import instagram_icon from "../assets/instagram.png";

function Work() {
  return (
    <div className="container">
      {/* 1. Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      {/* 2. Socials bar */}
      <div className="socials">
        <a
          href="https://www.instagram.com/cvrecstudios?igsh=ZzlweTA3cThmeWN3"
          className="social-link"
        >
          <img height="24px" src={instagram_icon} alt="Social Link" />
        </a>
      </div>

      {/* 4. Vertical .mp4 videos */}
      <div className="videos-container">
        <div className="videos">
          <div className="video">
            <ReactPlayer
              url={video1}
              playing
              loop
              muted
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="video">
            <ReactPlayer
              url={video2}
              playing
              loop
              muted
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="video">
            <ReactPlayer
              url={video3}
              playing
              loop
              muted
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        {/* 5. Horizontal video */}
        <div className="horizontal-video">
          <ReactPlayer
            url={video6}
            playing
            width="95%"
            height="95%"
            loop
            muted
          />
        </div>
        <div className="videos">
          <div className="video">
            <ReactPlayer
              url={video4}
              playing
              width="100%"
              height="100%"
              loop
              muted
            />
          </div>
          <div className="video">
            <ReactPlayer
              url={video5}
              playing
              width="100%"
              height="100%"
              loop
              muted
            />
          </div>
          <div className="video">
            <ReactPlayer
              url={video7}
              playing
              width="100%"
              height="100%"
              loop
              muted
            />
          </div>
        </div>

        <div className="horizontal-video">
          <ReactPlayer
            url={video8}
            playing
            width="95%"
            height="95%"
            loop
            muted
          />
        </div>

        <div className="videos">
          <div className="video">
            <ReactPlayer
              url={video9}
              playing
              width="100%"
              height="100%"
              loop
              muted
            />
          </div>
          <div className="video">
            <ReactPlayer
              url={video10}
              playing
              width="100%"
              height="100%"
              loop
              muted
            />
          </div>
          <div className="video">
            <ReactPlayer
              url={video11}
              playing
              width="100%"
              height="100%"
              loop
              muted
            />
          </div>
        </div>
      </div>
      {/* 11. Contact details */}
      <div className="contact-details-text-container">
        <div className={"contact-details-text contact-details-text-I"}>
          <p>Contact Details</p>
        </div>
        <div className="details">
          <img height="24px" src={instagram_icon} alt="Social Link" />
          <div className={"contact-details-text contact-details-text-II"}>
            <p>email@example.com</p>
          </div>
        </div>

        <div className="details">
          <img height="24px" src={instagram_icon} alt="Social Link" />
          <div className={"contact-details-text contact-details-text-II"}>
            <p>@instagram tag</p>
          </div>
        </div>
        <hr />
      </div>
      {/* 12. Logo again */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Work;
