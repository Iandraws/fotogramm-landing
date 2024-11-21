// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PricingTable from './components/PricingTable';
import SignUpForm from './components/SignUpForm';
import Footer from './components/Footer';
import Help from './components/Help';
import ScrollToTop from './components/ScrollToTop';
import HowItWorks from './components/HowItWorks';
import WhoWeAre from './components/WhoWeAre';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HeroSection />}
        />
        <Route
          path="/pricing"
          element={<PricingTable />}
        />
        <Route
          path="/signup"
          element={<SignUpForm />}
        />
        <Route
          path="/faq"
          element={<Help />}
        />
        <Route
          path="/why-fotogram"
          element={<HowItWorks />}
        />
        <Route
          path="/our-story"
          element={<WhoWeAre />}
        />
        <Route
          path="/get-in-touch"
          element={<ContactUs />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
