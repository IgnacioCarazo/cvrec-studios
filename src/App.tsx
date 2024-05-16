import React from "react";
import "./App.css"; // Import your CSS file
import ReactPlayer from "react-player";

const video1 = require("./assets/video1.m4v");
const video2 = require("./assets/video2.m4v");
const video3 = require("./assets/video3.m4v");
const video4 = require("./assets/video4.m4v");
const video5 = require("./assets/video5.m4v");
const video6 = require("./assets/video6.m4v");
const video7 = require("./assets/video7.m4v");
const video8 = require("./assets/video8.m4v");
const video9 = require("./assets/video9.m4v");
const video10 = require("./assets/video10.m4v");
const video11 = require("./assets/video11.m4v");
const video12 = require("./assets/video12.m4v");
const video13 = require("./assets/video13.m4v");

const logo = require("./assets/logo.png");
const instagram_icon = require("./assets/instagram.png");

function App() {
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
      {/* 3. Text */}
      <div className="introductory-text-container">
        <div className={"introductory-text introductory-text-I"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={"introductory-text introductory-text-II"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={"introductory-text introductory-text-III"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* 4. Vertical .m4v videos */}
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

export default App;
