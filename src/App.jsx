import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Services from './components/Services';
import LegalCompliance from './components/services/LegalCompliance';
import TaxAdvisory from './components/services/TaxAdvisory';
import MarketResearch from './components/services/MarketResearch';
import HumanCapital from './components/services/HumanCapital';
import Trademark from './components/services/Trademark';
import TrademarkRegistration from './components/services/TrademarkRegistration';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/legal-compliance" element={<LegalCompliance />} />
        <Route path="/services/tax-advisory" element={<TaxAdvisory />} />        <Route path="/services/market-research" element={<MarketResearch />} />
        <Route path="/services/human-capital" element={<HumanCapital />} />
        <Route path="/services/trademark" element={<Trademark />} />
        <Route path="/services/trademark/trademark-registration" element={<TrademarkRegistration />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Layout>
  );
}

export default App;