import React from "react";
import "./PhotosPage.css";

// Import photos
import photo1 from "../../assets/photos/photo1.jpg";
import photo2 from "../../assets/photos/photo2.jpg";
import photo3 from "../../assets/photos/photo3.jpg";
import photo4 from "../../assets/photos/photo4.jpg";
import photo5 from "../../assets/photos/photo5.jpg";
import photo6 from "../../assets/photos/photo6.jpg";
import photo7 from "../../assets/photos/photo7.jpg";
import photo8 from "../../assets/photos/photo8.jpg";
import photo9 from "../../assets/photos/photo9.jpg";
import Photo from "../../components/Photo/Photo";

const PhotosPage: React.FC = () => {
  return (
    <div className="photos-page">
      <div className="photos-holder">
        <Photo url={photo1} caption="Yasmine Yamajako '24" />
        <Photo url={photo2} caption="SkylaTyla '23" />
        <Photo url={photo3} caption="Sisterhood '24" />
        <Photo url={photo4} caption="Neiya '23" />
        <Photo url={photo5} caption="School Photo '23" />
        <Photo url={photo6} caption="Adeola '23" />
        <Photo url={photo7} caption="Play with god music video '23" />
        <Photo url={photo8} caption="Elsa '23" />
        <Photo url={photo9} caption="Play with god '23" />
      </div>
    </div>
  );
};

export default PhotosPage;
