import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Favorites from "./components/Favorites";
import Omakase from "./components/Omakase";
import SocialProof from "./components/SocialProof";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ReservationModal from "./components/ReservationModal";
import ThankYouModal from "./components/ThankYouModal";

function App() {
  const [loading, setLoading] = useState(true);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time or wait for window load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // Slightly more than the progress bar duration

    return () => clearTimeout(timer);
  }, []);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  const handleReservationSuccess = () => {
    setIsReservationOpen(false);
    setIsThankYouOpen(true);
  };

  const handleCloseThankYou = () => {
    setIsThankYouOpen(false);
  };

  return (
    <div className="app-container">
      {loading && <Loader />}
      {!loading && (
        <>
          <Navbar onReserveClick={handleOpenReservation} />
          <Hero />
          <main>
            <Philosophy />
            <Favorites />
            <Omakase onReserveClick={handleOpenReservation} />
            <SocialProof />
          </main>
          <Footer />

          <ReservationModal
            isOpen={isReservationOpen}
            onClose={handleCloseReservation}
            onSubmitSuccess={handleReservationSuccess}
          />
          <ThankYouModal
            isOpen={isThankYouOpen}
            onClose={handleCloseThankYou}
          />
        </>
      )}
    </div>
  );
}

export default App;
