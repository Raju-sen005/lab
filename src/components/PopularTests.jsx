import { useState } from "react";
import { tests } from "../data/tests";
import { MapPin, Home, ChevronDown } from "lucide-react";

export default function PopularTests() {
  const [visibleCards, setVisibleCards] = useState(3);

  const scrollToBooking = () => {
    document.getElementById("book-test")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const openDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=LabCare+Bangalore",
      "_blank",
    );
  };

  const handleShowMore = () => {
    if (visibleCards >= 9) {
      setVisibleCards(tests.length);
    } else {
      setVisibleCards((prev) => prev + 3);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* TOP */}

      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Popular Lab Tests
        </h2>

        <p className="mt-3 text-gray-500">
          Most booked health checkups and diagnostic tests
        </p>
      </div>

      {/* CARDS */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {tests.slice(0, visibleCards).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* TOP TAG */}

            <div className="flex items-center justify-between">
              <span className="bg-teal-50 text-teal-600 text-xs font-semibold px-3 py-1 rounded-full">
                Popular Test
              </span>

              <span className="text-xs text-gray-400">Fast Reports</span>
            </div>

            {/* TEST NAME */}

            <h3 className="mt-5 text-[20px] font-semibold text-gray-900 leading-8 min-h-[70px]">
              {item.name}
            </h3>

            {/* DESCRIPTION */}

            <p className="text-gray-500 text-sm leading-6 mt-2">
              Accurate pathology testing with trusted home sample collection
              service.
            </p>

            {/* OPTIONS */}

            <div className="flex items-center justify-between mt-6">
              {/* HOME */}

              <button
                onClick={scrollToBooking}
                className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition"
              >
                <Home size={18} />

                <span className="text-sm font-medium">Home Collection</span>
              </button>

              {/* VISIT */}

              <button
                onClick={openDirections}
                className="flex items-center gap-2 text-[#0054a6] hover:text-[#004488] transition"
              >
                <MapPin size={18} />

                <span className="text-sm font-medium">Visit Lab</span>
              </button>
            </div>

            {/* BOOK BTN */}

            <button
              onClick={scrollToBooking}
              className="w-full h-[46px] rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold mt-6 hover:opacity-90 transition"
            >
              Book Test
            </button>
          </div>
        ))}
      </div>

      {/* SHOW MORE */}

      {visibleCards < tests.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="flex items-center gap-2 h-[46px] px-7 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition text-gray-700 font-medium"
          >
            Show More
            <ChevronDown size={18} />
          </button>
        </div>
      )}
    </section>
  );
}
