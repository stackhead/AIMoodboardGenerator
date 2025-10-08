import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoPreview from './components/DemoPreview';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0E1016] text-white">
      <Navbar />
      <Hero />
      <Features />
      <DemoPreview />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
