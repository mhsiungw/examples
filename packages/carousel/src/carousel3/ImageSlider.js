import React from "react";
import { ArrowBigLeft, ArrowBigRight, CircleDot } from "lucide-react";

export default function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = React.useState(0);

  function handlePrevClick() {
    setImageIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  }

  function handleNextClick() {
    setImageIndex((prev) => (prev + 1 > images.length - 1 ? 0 : prev + 1));
  }

  console.log("images", images);

  return (
    <div className="relative h-full w-full">
      <div className="flex">
        {images.map(({ url, alt }, index) => {
          return (
            <img
              aria-hidden={index !== imageIndex}
              style={{
                translate: `${imageIndex * -100}%`,
                transition: "translate 150ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              className="aspect-[10/5] w-full shrink-0 object-cover"
              key={url}
              src={url}
              alt={alt}
            />
          );
        })}
      </div>
      {/* <img
        className="aspect-[10/5] w-full object-cover"
        src={images[imageIndex].url}
        alt={images[imageIndex].alt}
      /> */}
      <button
        aria-label="View Previous Image"
        className="group absolute bottom-0 left-0 top-0 hover:bg-slate-500/50"
        onClick={handlePrevClick}
      >
        <ArrowBigLeft className="group-hover:animate-squishy fill-black stroke-white" />
      </button>
      <button
        aria-label="View Next Image"
        className="group absolute bottom-0 right-0 top-0 hover:bg-slate-500/50"
        onClick={handleNextClick}
      >
        <ArrowBigRight className="group-hover:animate-squishy fill-black stroke-white" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex cursor-pointer justify-center">
        {images.map((_, index) => {
          return (
            <button
              key={index}
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
            >
              <CircleDot />
            </button>
          );
        })}
      </div>
    </div>
  );
}
