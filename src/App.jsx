import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
