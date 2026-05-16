import { useNavigate } from "react-router-dom";

export default function TestCard({ item }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition">
      <img
        src={item.image}
        alt={item.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold">{item.name}</h2>

        <div className="flex items-center justify-between mt-4">
          <h3 className="text-2xl font-bold text-teal-600">₹{item.price}</h3>

          <button
            onClick={() => navigate("/book-test")}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
