import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import hero7 from "../assets/hero7.jpg";
import hero8 from "../assets/hero8.jpg";
import hero9 from "../assets/hero9.jpg";
import promo from "../assets/promo.jpg";

const images = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex gap-4">

        {/* Carousel */}
        <div className="w-[75%] relative overflow-hidden rounded-md group">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-[300px] object-cover rounded-md transition duration-500"
          />
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronLeft className="text-gray-700" size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight className="text-gray-700" size={20} />
          </button>
        </div>

        {/* Promo */}
        <div className="w-[20%]">
          <img
            src={promo}
            alt="Daraz App Promo"
            className="w-full h-[300px] object-fill rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
