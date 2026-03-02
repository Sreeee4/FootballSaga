import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchFilter from './components/SearchFilter';
import TurfList from './components/TurfList';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TurfDetails from './components/TurfDetails';
import BookingSuccess from './components/BookingSuccess';
import { turfs as initialTurfs } from './data/turfs';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'details', 'success'
  const [turfs, setTurfs] = useState(initialTurfs);
  const [selectedTurf, setSelectedTurf] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  // Sync turfs when initial data updates (e.g. during Hot Module Replacement)
  React.useEffect(() => {
    setTurfs(initialTurfs);
  }, [initialTurfs]);

  // Navigation and scrolling
  const handleNavigate = (view, anchorId = null) => {
    setCurrentView(view);
    if (anchorId) {
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleFilter = (location, sport) => {
    const filtered = initialTurfs.filter(t => {
      const matchLoc = location === 'all' || t.location === location;
      const matchSport = sport === 'all' || t.sport === sport;
      return matchLoc && matchSport;
    });
    setTurfs(filtered);
  };

  const handleBookTurf = (turf) => {
    setSelectedTurf(turf);
    setCurrentView('details');
  };

  const handleBookingSuccess = (data) => {
    setBookingData(data);
    setCurrentView('success');
  };

  return (
    <div className="bg-black text-gray-100 font-sans min-h-screen">
      {currentView === 'home' && (
        <>
          <Navbar onNavigate={handleNavigate} />
          <Hero onNavigate={handleNavigate} />
          <SearchFilter onFilter={handleFilter} />
          <TurfList turfs={turfs} onBook={handleBookTurf} />
          <About />
          <Contact />
          <Footer onNavigate={handleNavigate} />
        </>
      )}

      {currentView === 'details' && selectedTurf && (
        <TurfDetails
          turf={selectedTurf}
          onBack={() => handleNavigate('home')}
          onSuccess={handleBookingSuccess}
        />
      )}

      {currentView === 'success' && bookingData && (
        <BookingSuccess
          booking={bookingData}
          onHome={() => handleNavigate('home')}
        />
      )}
    </div>
  );
}

export default App;
