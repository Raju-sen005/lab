export default function Footer() {
  return (
    <footer className='bg-slate-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10'>
        <div>
          <h2 className='text-3xl font-bold text-teal-400'>LabCare</h2>

          <p className='mt-5 text-gray-400'>
            Trusted pathology and blood testing services.
          </p>
        </div>

        <div>
          <h3 className='text-xl font-semibold'>Quick Links</h3>

          <div className='flex flex-col gap-3 mt-5 text-gray-400'>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/contact'>Contact</a>
          </div>
        </div>

        <div>
          <h3 className='text-xl font-semibold'>Contact</h3>

          <div className='mt-5 text-gray-400 space-y-3'>
            <p>support@labcare.com</p>
            <p>+91 9876543210</p>
            <p>Bangalore, India</p>
          </div>
        </div>
      </div>
    </footer>
  )
}