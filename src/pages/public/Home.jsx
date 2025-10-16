import Hero from "@/sections/landing/Hero";
import Brands from "@/sections/landing/Brands";
import Features from "@/sections/landing/Features";
import Process from "@/sections/landing/Process";
import Showcase from "@/sections/landing/Showcase";
import Testimonials from "@/sections/landing/Testimonial";
import PricingSection from "@/sections/landing/Pricing";
import Faqs from "@/sections/landing/FAQs";
import Cta from "@/sections/landing/Cta";
import Footer from "@/sections/landing/Footer";
import Header from "@/sections/landing/Header";

const Home = () => {
    return (
        <div>
            <main className="mt-20">
                <Hero />
                <Brands />
                <Features />
                <Process />
                <Showcase />
                <Testimonials />
                <PricingSection />
                <Faqs />
                <Cta />
            </main>
        </div>
    )
}


export default Home;