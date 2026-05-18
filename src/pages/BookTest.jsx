import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookTest() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    test: "",
    address: "",
    mobile: "",
    otp: "",
  });

  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const continueToOtp = () => {
    if (
      !formData.name ||
      !formData.age ||
      !formData.gender ||
      !formData.test ||
      !formData.address
    ) {
      alert("Please fill all details");
      return;
    }

    setStep(2);
  };

  const sendOtp = () => {
    if (!formData.mobile) {
      alert("Enter mobile number");
      return;
    }

    const otp = Math.floor(1000 + Math.random() * 9000);

    setGeneratedOtp(otp.toString());
    setOtpSent(true);

    alert(`Demo OTP: ${otp}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.otp !== generatedOtp) {
      alert("Invalid OTP");
      return;
    }

    try {
      setLoading(true);

      await axios.post("https://lab-back-j7ln.onrender.com/api/book-test", formData);

      alert("Test Booked Successfully");

      setFormData({
        name: "",
        age: "",
        gender: "",
        test: "",
        address: "",
        mobile: "",
        otp: "",
        homeCollection: "",
      });

      setStep(1);
      setOtpSent(false);
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white shadow-xl rounded-[40px] p-8 md:p-12">
          <h1 className="text-4xl font-bold text-center">Book Lab Test</h1>

          <p className="text-gray-500 text-center mt-4">
            Home sample collection booking form
          </p>

          {/* STEP 1 */}

          {step === 1 && (
            <div className="mt-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-4 rounded-2xl outline-none"
                />

                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="border p-4 rounded-2xl outline-none"
                />

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border p-4 rounded-2xl outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

                <input
                  type="text"
                  name="test"
                  placeholder="Test Name"
                  value={formData.test}
                  onChange={handleChange}
                  className="border p-4 rounded-2xl outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-3 text-gray-700 font-semibold">
                  Home Sample Collection
                </label>

                <div className="flex items-center gap-8">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="homeCollection"
                      value="Yes"
                      checked={formData.homeCollection === "Yes"}
                      onChange={handleChange}
                      className="w-5 h-5 accent-teal-500"
                    />

                    <span>Yes</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="homeCollection"
                      value="No"
                      checked={formData.homeCollection === "No"}
                      onChange={handleChange}
                      className="w-5 h-5 accent-teal-500"
                    />

                    <span>No</span>
                  </label>
                </div>
              </div>

              <textarea
                name="address"
                placeholder="Full Address"
                rows="5"
                value={formData.address}
                onChange={handleChange}
                className="border p-4 rounded-2xl outline-none w-full"
              ></textarea>

              <button
                onClick={continueToOtp}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white w-full py-4 rounded-2xl text-lg font-semibold"
              >
                Continue
              </button>
            </div>
          )}

          {/* STEP 2 */}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border p-4 rounded-2xl outline-none w-full"
                />

                <button
                  type="button"
                  onClick={sendOtp}
                  className="bg-teal-500 text-white px-6 rounded-2xl"
                >
                  Send OTP
                </button>
              </div>

              {otpSent && (
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  className="border p-4 rounded-2xl outline-none w-full"
                />
              )}

              <button
                type="submit"
                disabled={!otpSent || loading}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white w-full py-4 rounded-2xl text-lg font-semibold"
              >
                {loading ? "Booking..." : "Verify & Book Test"}
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
