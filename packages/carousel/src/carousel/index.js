import React from "react";
import "./style.css";

export default function Carousel() {
  const items = [
    {
      key: 1,
      element: (
        <img
          className="h-full w-full"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Interview_with_Timoth%C3%A9e_Chalamet%2C_2019.png"
        ></img>
      ),
    },
    {
      key: 2,
      element: (
        <img
          className="h-full w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqy70UT4v268Ct2uutxAkX6Um6flqJJnE1r4iBnM63g82Cyrxyk_2x4g0slIShw26Q9QM&usqp=CAU"
        ></img>
      ),
    },
    {
      key: 3,
      element: (
        <img
          className="h-full w-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Timoth%C3%A9e_Chalamet_Call_Me_By_Your_Name_Photo_Call_Berlinale_2017.jpg/1365px-Timoth%C3%A9e_Chalamet_Call_Me_By_Your_Name_Photo_Call_Berlinale_2017.jpg"
        ></img>
      ),
    },
  ];

  const [currentItemIndex, setCurrentItemIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prev) => {
        const next = (prev + 1) % items.length;
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="max-w-[400px] overflow-hidden">
      <div
        style={{
          display: "flex",
          transform: `translate(${currentItemIndex * -100}%)`,
          transition: "transform 0.35s",
        }}
      >
        {items.map(({ key, element }) => (
          <div key={key} className="w-full flex-shrink-0">
            {element}
          </div>
        ))}
      </div>
    </div>
  );
}
