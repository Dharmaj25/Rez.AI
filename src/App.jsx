import Header from "./components/layout/Header";
import Brands from "./sections/landing/Brands";
import Features from "./sections/landing/Features";
import Hero from "./sections/landing/Hero";
import Process from "./sections/landing/Process";
import Showcase from "./sections/landing/Showcase";

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
      </main>
    </div>
  );
}

export default App;
