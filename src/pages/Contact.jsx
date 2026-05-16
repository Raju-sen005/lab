import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div>
      <Navbar />

      <div className='max-w-4xl mx-auto px-4 py-20'>
        <h1 className='text-5xl font-bold'>Contact Us</h1>

        <div className='bg-white rounded-3xl shadow p-8 mt-10'>
          <div className='grid md:grid-cols-2 gap-6'>
            <input
              type='text'
              placeholder='Your Name'
              className='border p-4 rounded-xl outline-none'
            />

            <input
              type='text'
              placeholder='Phone Number'
              className='border p-4 rounded-xl outline-none'
            />
          </div>

          <textarea
            rows='6'
            placeholder='Message'
            className='border p-4 rounded-xl outline-none w-full mt-6'
          ></textarea>

          <button className='bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full mt-6'>
            Send Message
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}