import React from "react";
import "./PhotosPage.css";

// Import photos
import photo1 from "../../assets/photos/image00001.jpeg";
import photo2 from "../../assets/photos/image00002.jpeg";
import photo3 from "../../assets/photos/image00003.jpeg";
import photo4 from "../../assets/photos/image00004.jpeg";
import photo5 from "../../assets/photos/image00005.jpeg";
import photo6 from "../../assets/photos/image00006.jpeg";
import photo7 from "../../assets/photos/image00007.jpeg";
import photo8 from "../../assets/photos/image00008.jpeg";
import photo9 from "../../assets/photos/image00009.jpeg";
import photo10 from "../../assets/photos/image00010.jpeg";
import photo11 from "../../assets/photos/image00011.jpeg";
import photo12 from "../../assets/photos/image00012.jpeg";
import photo13 from "../../assets/photos/image00013.jpeg";
import photo14 from "../../assets/photos/image00014.jpeg";
import photo15 from "../../assets/photos/image00015.jpeg";
import Photo from "../../components/Photo/Photo";

const PhotosPage: React.FC = () => {
  return (
    <div className="photos-page">
      <div className="photos-holder">
        <Photo url={photo2} caption="Yasmine Yamajako '24" />
        <Photo url={photo11} caption="SkylaTyla '23" />
        <Photo url={photo8} caption="Sisterhood '24" />
        <Photo url={photo12} caption="Neiya '23" />
        <Photo url={photo3} caption="School Photo '23" />
        <Photo url={photo10} caption="Adeola '23" />
        <Photo url={photo1} caption="Play with god music video '23" />
        <Photo url={photo6} caption="Prpl experience ’23 " />
        <Photo url={photo5} caption="Play with god '23" />
        <Photo url={photo4} caption="Malachi '23" />
        <Photo url={photo9} caption="Adeola '23" />
        <Photo url={photo7} caption="Mallorca '23" />
        <Photo url={photo13} caption="Have you met Samsam? ’25" />
        <Photo url={photo14} caption="Have you met Samsam? ’25" />
        <Photo url={photo15} caption="Have you met Samsam? ’25" />
      </div>
    </div>
  );
};

export default PhotosPage;
