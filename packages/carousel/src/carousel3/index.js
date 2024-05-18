import React from "react";
import ImageSlider from "./ImageSlider";

const IMAGES = [
  {
    key: 1,
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Interview_with_Timoth%C3%A9e_Chalamet%2C_2019.png",
    alt: "1",
  },
  {
    key: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqy70UT4v268Ct2uutxAkX6Um6flqJJnE1r4iBnM63g82Cyrxyk_2x4g0slIShw26Q9QM&usqp=CAU",
    alt: "2",
  },
  {
    key: 3,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Timoth%C3%A9e_Chalamet_Call_Me_By_Your_Name_Photo_Call_Berlinale_2017.jpg/1365px-Timoth%C3%A9e_Chalamet_Call_Me_By_Your_Name_Photo_Call_Berlinale_2017.jpg",
    alt: "3",
  },
];

export default function Carousel3() {
  return (
    <div className="h-1/3 w-full">
      <ImageSlider images={IMAGES} />
    </div>
  );
}
