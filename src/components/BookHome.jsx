import { useNavigate } from "react-router-dom";

export default function BookHome() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-[40px] text-white p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div>
          <h2 className="text-4xl font-bold leading-snug">
            Book Home Sample Collection
          </h2>

          <p className="mt-5 text-lg text-gray-100 max-w-2xl">
            Our trained phlebotomists collect your samples safely from home.
          </p>
        </div>

        <button
          onClick={() => navigate("/book-test")}
          className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
