import Header from "./components/layout/Header";
import Brands from "./sections/landing/Brands";
import Features from "./sections/landing/Features";
import Hero from "./sections/landing/Hero";
import PricingSection from "./sections/landing/Pricing";
import Process from "./sections/landing/Process";
import Showcase from "./sections/landing/Showcase";
import Testimonials from "./sections/landing/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <main className="mt-20">
        <Hero />
        <Brands />
        <Features />
        <Process />
        <Showcase />
        <Testimonials />
        <PricingSection />
      </main>
    </div>
  );
}

export default App;
