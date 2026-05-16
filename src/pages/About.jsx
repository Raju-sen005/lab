import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Navbar />

      <div className='max-w-6xl mx-auto px-4 py-20'>
        <h1 className='text-5xl font-bold'>About Us</h1>

        <p className='mt-8 text-lg leading-8 text-gray-600'>
          We provide trusted diagnostic and pathology services with home sample
          collection across Bangalore.
        </p>
      </div>

      <Footer />
    </div>
  )
}