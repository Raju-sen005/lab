import { tests } from '../data/tests'
import TestCard from './TestCard'

export default function PopularTests() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-20'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold'>Popular Lab Tests</h2>

        <p className='text-gray-500 mt-4'>
          Most booked diagnostic tests by patients.
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-8 mt-12'>
        {tests.map((item) => (
          <TestCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}