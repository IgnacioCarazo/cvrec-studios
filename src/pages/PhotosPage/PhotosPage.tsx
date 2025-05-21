import React from "react";
import "./PhotosPage.css";
import Photo from "../../components/Photo/Photo";

const PhotosPage: React.FC = () => {
  return (
    <div className="photos-page">
      <div className="photos-holder">
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860304/image00002_nfpylw.webp"
          caption="Yasmine Yamajako '24"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860306/image00011_xuyzah.webp"
          caption="SkylaTyla '23"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860305/image00008_dhvtw6.webp"
          caption="Sisterhood '24"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860307/image00013_p26bjn.webp"
          caption="Have you met Samsam? ’25"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860307/image00014_tw2yit.webp"
          caption="Have you met Samsam? ’25"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860308/image00015_i7i8zz.webp"
          caption="Have you met Samsam? ’25"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860306/image00012_ueamyy.webp"
          caption="Neiya '23"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860304/image00003_tcomot.webp"
          caption="School Photo '23"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860305/image00010_z5d7s3.webp"
          caption="Adeola '23"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860304/image00001_yxytm8.webp"
          caption="Play with god music video '23"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860304/image00006_ilcmkv.webp"
          caption="Prpl experience ’23"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860305/image00005_yva5ld.webp"
          caption="Play with god '23"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860304/image00004_n2ipzr.webp"
          caption="Malachi '23"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860305/image00009_gmdzns.webp"
          caption="Adeola '23"
        />
        <Photo
          url="https://res.cloudinary.com/dfh4b2nlw/image/upload/v1747860305/image00007_rfq1tg.webp"
          caption="Mallorca '23"
        />
      </div>
    </div>
  );
};

export default PhotosPage;
