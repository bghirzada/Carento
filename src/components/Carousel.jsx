import React from "react";

const items = Array.from({ length: 10 });

const Carousel = () => {
  return (
    <section className="mx-auto my-8 overflow-hidden group">
      <div className="flex flex-nowrap animate-scroll group-hover:[animation-play-state:paused]">
        <div className="flex gap-6">
          {items.map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-8 px-20 text-black bg-gray-300 rounded-lg shrink-0"
            >
              box {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
