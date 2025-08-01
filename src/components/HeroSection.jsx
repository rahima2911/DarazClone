import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/assets/hero1.jpg",
  "/assets/hero2.jpg",
  "/assets/hero3.jpg",
  "/assets/hero4.jpg",
  "/assets/hero5.jpg",
  "/assets/hero6.jpg",
  "/assets/hero7.jpg",
  "/assets/hero8.jpg",
  "/assets/hero9.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds

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

        {/* Left: Carousel */}
        <div className="w-[75%] relative overflow-hidden rounded-md group">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-[300px] object-cover rounded-md transition duration-500"
          />

          {/* Prev Button - only show on hover */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronLeft className="text-gray-700" size={20} />
          </button>

          {/* Next Button - only show on hover */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight className="text-gray-700" size={20} />
          </button>
        </div>

        {/* Right: Static Promo Image */}
        <div className="w-[20%]">
          <img
            src="/assets/promo.jpg"
            alt="Daraz App Promo"
            className="w-full h-[300px] object-fill  rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
