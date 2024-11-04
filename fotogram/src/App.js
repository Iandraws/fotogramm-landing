// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PricingTable from './components/PricingTable';  // Pricing page component
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/pricing" element={<PricingTable />} /> {/* Pricing Route */}
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
