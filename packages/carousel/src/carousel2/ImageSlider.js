import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./image-slider.css";

export function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  console.log(images[imageIndex].url);

  function showPrevImage() {
    setImageIndex((prev) => {
      if (prev - 1 < 0) {
        return 0;
      }

      return prev - 1;
    });
  }

  function showNextImage() {
    setImageIndex((prev) => {
      if (prev + 1 > images.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  }

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "100%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
        onClick={showPrevImage}
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
