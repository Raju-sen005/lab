import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function Hero() {

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    whatsappUpdates: true,
    authorized: true,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/book-test",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        mobile: "",
        city: "",
        whatsappUpdates: true,
        authorized: true,
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f3f4f6] py-5">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[2.4fr_0.8fr] gap-5">

        {/* LEFT BANNER */}

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="h-[360px] overflow-hidden rounded-[28px] bg-white"
        >
          <img
            src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop"
            alt="Healthcare Banner"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT FORM */}

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="h-[360px] rounded-[24px] border-[2px] border-[#e8b13d] bg-[#f1f4f8] p-6"
        >

          {/* TITLE */}

          <h2 className="text-center text-[18px] font-bold text-[#0054a6]">
            Book Your Test
          </h2>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="mt-3 space-y-4"
          >

            {/* NAME */}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              required
              className="h-[38px] w-full rounded-[8px] border border-[#3b82f6] bg-white px-4 text-[14px] outline-none"
            />

            {/* MOBILE */}

            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number*"
              required
              className="h-[38px] w-full rounded-[8px] border border-[#3b82f6] bg-white px-4 text-[14px] outline-none"
            />

            {/* CITY */}

            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="h-[38px] w-full rounded-[8px] border border-[#3b82f6] bg-white px-4 text-[14px] text-black outline-none"
            >
              <option value="">Select City</option>
              <option>Bangalore</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Hyderabad</option>
            </select>

            {/* CHECKBOX 1 */}

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="whatsappUpdates"
                checked={formData.whatsappUpdates}
                onChange={handleChange}
                className="mt-1 accent-[#0054a6]"
              />

              <span className="text-[12px] leading-4 text-[#111827]">
                Opt-In for Whatsapp Updates
              </span>
            </label>

            {/* CHECKBOX 2 */}

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="authorized"
                checked={formData.authorized}
                onChange={handleChange}
                className="mt-1 accent-[#0054a6]"
              />

              <span className="text-[12px] leading-4 text-[#111827]">
                I authorize LabCare to contact me regarding
                test details.
              </span>
            </label>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="h-[33px] w-full rounded-[8px] bg-[#0054a6] text-[16px] font-medium text-white transition hover:bg-[#004488]"
            >
              {loading ? "Submitting..." : "Book Now"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}