
import React from "react";

import image1 from "../../assets/photos/books.jpg";
import image2 from "../../assets/photos/gym.jpg";
import image3 from "../../assets/photos/tech.jpg";
import image4 from "../../assets/photos/space.jpg";
import image5 from "../../assets/photos/batmation.png";

function Intrest() {
  const images = [
    { src: image1, title: "Audiobooks", alt: "Books" },
    { src: image2, title: "Fitness", alt: "Gym" },
    { src: image3, title: "Technology", alt: "Technology" },
    { src: image4, title: "Space & Astronomy", alt: "Space" },
    { src: image5, title: "Batmation", alt: "Batmation" },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-12">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          Beyond the code
        </p>

        <h2 className="mt-1 text-2xl font-semibold md:text-3xl">
          My Interests
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {images.map((item, index) => (
          <div
            key={item.title}
            className={`group relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 ${
              index === 0
                ? "md:col-span-2 md:row-span-2"
                : ""
            }`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="absolute inset-0 h-full w-full object-cover  transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <span className="absolute bottom-3 left-3 text-sm font-semibold text-white md:bottom-4 md:left-4 md:text-base">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Intrest;
