import { Search } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className='bg-gradient-to-r from-teal-500 to-cyan-500 text-white'>
      <div className='max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-5xl font-bold leading-tight'>
            Book Blood Tests <br /> At Home
          </h1>

          <p className='mt-5 text-lg text-gray-100'>
            Fast sample collection, certified labs & accurate reports.
          </p>

          <div className='bg-white rounded-full mt-8 p-2 flex items-center'>
            <Search className='text-gray-500 ml-3' />

            <input
              type='text'
              placeholder='Search lab tests...'
              className='w-full px-4 py-3 outline-none text-gray-700 rounded-full'
            />

            <button className='bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white'>
              Search
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src='https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop'
            alt='doctor'
            className='rounded-3xl shadow-2xl'
          />
        </motion.div>
      </div>
    </div>
  )
}