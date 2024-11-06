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
import HowItWorks from './components/HowItWorks';
import WhoWeAre from './components/WhoWeAre';

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
        <Route path="/why-fotogram" element={<HowItWorks />} /> 
        <Route path="/who-we-are" element={<WhoWeAre />} /> 
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
