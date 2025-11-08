import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoCTA from './components/DemoCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#06080F] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DemoCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
