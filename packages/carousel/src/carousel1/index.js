import React from "react";
import "./style.css";

const IMAGES = [
  {
    key: 1,
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Interview_with_Timoth%C3%A9e_Chalamet%2C_2019.png",
  },
  {
    key: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqy70UT4v268Ct2uutxAkX6Um6flqJJnE1r4iBnM63g82Cyrxyk_2x4g0slIShw26Q9QM&usqp=CAU",
  },
  {
    key: 3,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Timoth%C3%A9e_Chalamet_Call_Me_By_Your_Name_Photo_Call_Berlinale_2017.jpg/1365px-Timoth%C3%A9e_Chalamet_Call_Me_By_Your_Name_Photo_Call_Berlinale_2017.jpg",
  },
];

export default function Carousel() {
  const [imageIndex, setImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => {
        const next = (prev + 1) % IMAGES.length;
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="max-w-[400px] overflow-hidden">
      <div
        style={{
          display: "flex",
          transform: `translate(${imageIndex * -100}%)`,
          transition: "transform 0.35s",
        }}
      >
        {IMAGES.map(({ key, url }) => (
          <div key={key} className="w-full flex-shrink-0">
            <img className="h-full w-full object-cover" src={url} />
          </div>
        ))}
      </div>
    </div>
  );
}
