import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Services from './components/Services';
import LegalCompliance from './components/services/LegalCompliance';
import TaxAdvisory from './components/services/TaxAdvisory';
import MarketResearch from './components/services/MarketResearch';
import HumanCapital from './components/services/HumanCapital';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/legal-compliance" element={<LegalCompliance />} />
        <Route path="/services/tax-advisory" element={<TaxAdvisory />} />
        <Route path="/services/market-research" element={<MarketResearch />} />
        <Route path="/services/human-capital" element={<HumanCapital />} />
      </Routes>
    </Layout>
  );
}

export default App;