import React from "react";
import "./About.css"; // Import your CSS file
import logo from "../assets/logo.png";
import instagram_icon from "../assets/instagram.png";

function About() {
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
            Charlotta Roos, the founder of CVRec Studios, is a 27-year old
            female videographer based in Helsinki, who works worldwide.
          </p>
          <p>
            Welcome to my journey where I intertwine sound and motion in various
            forms.
          </p>
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

export default About;
