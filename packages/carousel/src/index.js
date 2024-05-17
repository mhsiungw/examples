import React from "react";
import { createRoot } from "react-dom/client";
import Carousel1 from "./carousel1";
import Carousel2 from "./carousel2";
import "./style.css";

const container = document.getElementById("root");
const root = createRoot(container);
const App = () => (
  <>
    {/* <div>
      <h1 className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        Carousel1
      </h1>
      <Carousel1 />
    </div> */}
    <div>
      <h1 className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        Carousel2
      </h1>
      <Carousel2 />
    </div>
  </>
);
root.render(<App />);
