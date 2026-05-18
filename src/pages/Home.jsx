import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularTests from "../components/PopularTests";
import WhyChooseUs from "../components/WhyChooseUs";
import BookHome from "../components/BookHome";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="book-test">
        <Hero />
      </div>
      <PopularTests />
      <WhyChooseUs />
      <Testimonials />
      <BookHome />
      <Footer />
    </div>
  );
}
