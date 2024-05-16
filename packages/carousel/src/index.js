import React from "react";
import { createRoot } from "react-dom/client";
import Carousel from "./carousel";
import "./style.css";

const container = document.getElementById("root");
const root = createRoot(container);
const App = () => (
  <div>
    <h1 className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
      Carousel
    </h1>
    <Carousel />
  </div>
);
root.render(<App />);
