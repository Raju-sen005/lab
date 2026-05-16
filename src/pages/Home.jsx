import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PopularTests from '../components/PopularTests'
import WhyChooseUs from '../components/WhyChooseUs'
import BookHome from '../components/BookHome'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularTests />
      <WhyChooseUs />
      <BookHome />
      <Footer />
    </div>
  )
}