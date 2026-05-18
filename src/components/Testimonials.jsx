import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Seema Chabbra",
    age: 38,
    city: "Bengaluru",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    review:
      "I had contacted the customer care team regarding the delay in my reports. They guided me properly and helped me receive my report on time.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    age: 42,
    city: "Delhi",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    review:
      "Excellent home collection service. The sample collection executive arrived on time and the reports were accurate and fast.",
  },
  {
    id: 3,
    name: "Priya Mehta",
    age: 29,
    city: "Mumbai",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    review:
      "Very professional service and smooth booking process. I received updates regularly on WhatsApp.",
  },
  {
    id: 4,
    name: "Aman Verma",
    age: 35,
    city: "Pune",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
    review:
      "Clean interface, easy booking experience and quick reports delivery. Highly recommended diagnostic platform.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f5f5f5] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADING */}

        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0054a6]">
            Customer Testimonials
          </h2>

          <div className="w-full h-[2px] bg-[#3b82f6] mt-10"></div>
        </div>

        {/* SLIDER */}

        <div className="mt-16 min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl"
            >
              {/* IMAGE */}

              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-[100px] h-[100px] mx-auto"
              />

              {/* NAME */}

              <h3 className="mt-5 text-[34px] font-bold text-[#c58a00]">
                {testimonials[activeIndex].name},{" "}
                {testimonials[activeIndex].age}
              </h3>

              {/* CITY */}

              <p className="text-[28px] font-semibold text-[#c58a00] mt-1">
                {testimonials[activeIndex].city}
              </p>

              {/* REVIEW */}

              <p className="mt-10 text-[20px] leading-[42px] text-gray-500">
                {testimonials[activeIndex].review}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DOTS */}

        <div className="flex items-center justify-center gap-4 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-[16px] h-[16px] rounded-full transition ${
                activeIndex === index
                  ? "bg-[#c58a00] scale-125"
                  : "bg-[#0054a6]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
