import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image-wrapper">
          <img
            src="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860304/about-image_gflijp.webp"
            alt="About Charlotta Roos"
            className="about-image"
          />
        </div>
        <div className="text-and-nav-container">
          <div className="about-text">
            <p>
              Charlotta Roos, the founder of CVRec Studios, is a 28-year old
              self-taught female videographer and photographer based in
              Helsinki, Finland, but working worldwide.
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
        </div>
      </div>
    </section>
  );
};

export default About;
