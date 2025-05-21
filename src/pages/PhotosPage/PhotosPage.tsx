import React from "react";
import "./PhotosPage.css";
import Photo from "../../components/Photo/Photo";

const PhotosPage: React.FC = () => {
  return (
    <div className="photos-page">
      <div className="photos-holder">
        <Photo
          url="https://i.imgur.com/ImFL8oh.jpg"
          caption="Yasmine Yamajako '24"
        />
        <Photo url="https://i.imgur.com/XrKpllu.jpg" caption="SkylaTyla '23" />
        <Photo url="https://i.imgur.com/mYVwLdd.jpg" caption="Sisterhood '24" />
        <Photo
          url="https://i.imgur.com/7lveFvq.jpg"
          caption="Have you met Samsam? ’25"
        />
        <Photo
          url="https://i.imgur.com/h08Dy27.jpg"
          caption="Have you met Samsam? ’25"
        />
        <Photo
          url="https://i.imgur.com/AOSl5mA.jpg"
          caption="Have you met Samsam? ’25"
        />
        <Photo url="https://i.imgur.com/cQIq80Z.jpg" caption="Neiya '23" />
        <Photo
          url="https://i.imgur.com/TuUQ0dX.jpg"
          caption="School Photo '23"
        />
        <Photo url="https://i.imgur.com/XeICRKq.jpg" caption="Adeola '23" />
        <Photo
          url="https://i.imgur.com/3KQKpuA.jpg"
          caption="Play with god music video '23"
        />
        <Photo
          url="https://i.imgur.com/VZJkPzy.jpg"
          caption="Prpl experience ’23"
        />
        <Photo
          url="https://i.imgur.com/ceiNeUx.jpg"
          caption="Play with god '23"
        />
        <Photo url="https://i.imgur.com/W7d4TTY.jpg" caption="Malachi '23" />
        <Photo url="https://i.imgur.com/452XZJW.jpg" caption="Adeola '23" />
        <Photo url="https://i.imgur.com/QTA8hQr.jpg" caption="Mallorca '23" />
      </div>
    </div>
  );
};

export default PhotosPage;
