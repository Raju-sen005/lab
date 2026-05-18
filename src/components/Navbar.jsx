// import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  // const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-teal-600">LabCare</h1>

        {/* <div className="flex gap-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div> */}

        {/* <button
          onClick={() => navigate("/book-test")}
          className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-full"
        >
          Book Test
        </button> */}
      </div>
    </div>
  );
}
