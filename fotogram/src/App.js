// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PricingTable from './components/PricingTable';  // Pricing page component
import SignUpFormModal from './components/SignUpFormModal';  // Renamed for clarity
import Footer from './components/Footer';
import Help from './components/Help';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop to the top of your Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/pricing" element={<PricingTable />} /> {/* Pricing Route */}
        <Route path="/signup" element={<SignUpFormModal />} /> {/* Sign-Up Form Route */}
        <Route path="/help" element={<Help />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
