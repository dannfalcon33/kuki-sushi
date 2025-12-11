import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Favorites from './components/Favorites';
import Omakase from './components/Omakase';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <main>
        <Philosophy />
        <Favorites />
        <Omakase />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}

export default App;
