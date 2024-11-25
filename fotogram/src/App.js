// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Help from './components/Help';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import PricingTable from './components/PricingTable';
import ScrollToTop from './components/ScrollToTop';
import SignUpForm from './components/SignUpForm';
import TermsAndConditionsDe from './components/TermsAndConditionsDe';
import TermsAndConditionsEn from './components/TermsAndConditionsEn';
import WhoWeAre from './components/WhoWeAre';

import ImprintDe from './components/ImprintDe';
import ImprintEn from './components/ImprintEn';
import PrivacyPolicyDe from './components/PrivacyPolicyDe';
import PrivacyPolicyEn from './components/PrivacyPolicyEn';

import LogRocket from 'logrocket';
LogRocket.init('edvm0h/fotogram-landing-page');

function App() {
  const titles = {
    '/': {
      en: 'Home - Fotogram Technology',
      de: 'Startseite - Fotogram Technology',
    },
    '/pricing': {
      en: 'Pricing - Fotogram Technology',
      de: 'Preise - Fotogram Technology',
    },
    '/signup': {
      en: 'Sign Up - Fotogram Technology',
      de: 'Registrieren - Fotogram Technology',
    },
    '/faq': {
      en: 'FAQ - Fotogram Technology',
      de: 'Häufige Fragen - Fotogram Technology',
    },
    '/why-fotogram': {
      en: 'Why Fotogram - Fotogram Technology',
      de: 'Warum Fotogram - Fotogram Technology',
    },
    '/our-story': {
      en: 'Our Story - Fotogram Technology',
      de: 'Unsere Geschichte - Fotogram Technology',
    },
    '/get-in-touch': {
      en: 'Contact Us - Fotogram Technology',
      de: 'Kontakt - Fotogram Technology',
    },
    '/en/terms-and-conditions': {
      en: 'Terms and Conditions - Fotogram Technology',
      de: 'AGB - Fotogram Technology',
    },
    '/de/terms-and-conditions': {
      en: 'Terms and Conditions - Fotogram Technology',
      de: 'AGB - Fotogram Technology',
    },
    '/en/imprint': {
      en: 'Imprint - Fotogram Technology',
      de: 'Impressum - Fotogram Technology',
    },
    '/de/imprint': {
      en: 'Imprint - Fotogram Technology',
      de: 'Impressum - Fotogram Technology',
    },
    '/en/privacy-policy': {
      en: 'Privacy Policy - Fotogram Technology',
      de: 'Datenschutzerklärung - Fotogram Technology',
    },
    '/de/privacy-policy': {
      en: 'Privacy Policy - Fotogram Technology',
      de: 'Datenschutzerklärung - Fotogram Technology',
    },
  };

  return (
    <Router>
      <ScrollToTop titles={titles} />
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
        <Route
          path="/en/terms-and-conditions"
          element={<TermsAndConditionsEn />}
        />
        <Route
          path="/de/terms-and-conditions"
          element={<TermsAndConditionsDe />}
        />
        <Route
          path="/en/imprint"
          element={<ImprintEn />}
        />
        <Route
          path="/de/imprint"
          element={<ImprintDe />}
        />

        <Route
          path="/en/privacy-policy"
          element={<PrivacyPolicyEn />}
        />
        <Route
          path="/de/privacy-policy"
          element={<PrivacyPolicyDe />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
