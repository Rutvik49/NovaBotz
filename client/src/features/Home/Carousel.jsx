import React, { useState, useEffect } from "react";
const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 5000,
}) => {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between ">
        <button
          onClick={prev}
          className="p-1 w-8 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          &lt;
        </button>
        <button
          onClick={next}
          className="p-1 w-8 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          &gt;
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`transition-all w-1.5 h-1.5 bg-mainBlue rounded-full  ${
                curr === i ? "p-0.5" : "bg-opacity-20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
