import { ShieldCheck, Clock3, Truck } from 'lucide-react'

export default function WhyChooseUs() {
  const items = [
    {
      icon: <ShieldCheck size={45} className='text-teal-500' />,
      title: 'Certified Labs',
      desc: 'NABL certified trusted pathology labs.',
    },
    {
      icon: <Clock3 size={45} className='text-teal-500' />,
      title: 'Fast Reports',
      desc: 'Get reports within 24 hours.',
    },
    {
      icon: <Truck size={45} className='text-teal-500' />,
      title: 'Home Collection',
      desc: 'Sample collection at your doorstep.',
    },
  ]

  return (
    <div className='bg-white py-20'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold'>Why Choose Us</h2>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mt-12'>
          {items.map((item, index) => (
            <div
              key={index}
              className='bg-slate-50 rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition'
            >
              <div className='flex justify-center'>{item.icon}</div>

              <h3 className='text-2xl font-semibold mt-5'>{item.title}</h3>

              <p className='text-gray-500 mt-4'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}