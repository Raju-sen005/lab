export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-teal-400">LabCare</h2>

          <p className="mt-5 text-gray-400">
            Trusted pathology and diagnostic services with
            fast home sample collection and accurate reports.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Our Location</h3>

          <div className="overflow-hidden rounded-2xl border border-slate-700">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62228.15499899518!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9c3a27b%3A0xf8dfb1b6b6b6b6b6!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Contact</h3>

          <div className="mt-5 text-gray-400 space-y-3">
            <p>support@labcare.com</p>
            <p>+91 9876543210</p>
            <p>Bangalore, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
