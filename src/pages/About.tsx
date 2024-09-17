import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import exampleImage from "../assets/about-image.jpg";

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <img src={exampleImage} alt="About Us" className="about-image" />
        <div className="text-and-nav-container">
          <div className="about-text">
            <p>
              Charlotta Roos, the founder of CVRec Studios, is a 28-year old
              female videographer based in Helsinki, Finland, but working
              worldwide.
            </p>
            <p>
              Driven by a passion for intertwining sound and motion in various
              forms, she also creates a safe space for her subjects to share
              their own story, whether it’s through videography or photography.
              Her work not only captures the essence of movement, but also
              empowers her subjects to express their true selves.
            </p>
            <p>
              Driven by a passion for intertwining sound and motion in various
              forms, she also creates a safe space for her subjects to share
              their own story, whether it’s through videography or photography.
              Her work not only captures the essence of movement, but also
              empowers her subjects to express their true selves.
            </p>
            <p>Welcome to her portfolio.</p>
          </div>
          <div className="navigation">
            <Link className="nav-item" to="/videos">
              Videos
            </Link>
            <Link className="nav-item" to="/photos">
              Photos
            </Link>
            <Link className="nav-item" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
