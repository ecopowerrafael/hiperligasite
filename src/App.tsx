/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Comparison from './components/Comparison';
import EstimatorCalculator from './components/Calculator';
import ProductCatalog from './components/ProductCatalog';
import MediaSection from './components/MediaSection';
import Certificacoes from './components/Certificacoes';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans selection:bg-primary selection:text-white" id="hiper-liga-home-app">
      {/* Absolute background accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-emerald-400 to-primary w-full fixed top-0 left-0 right-0 z-[60]" />

      {/* Sticky Navigation Bar */}
      <Header />

      <main id="home-main-content">
        {/* Animated Hero Header */}
        <Hero />

        {/* Core Technical Advantages */}
        <Features />

        {/* Legacy vs Innovation Comparison Table */}
        <Comparison />

        {/* Interactive Estimator Calculator */}
        <EstimatorCalculator />

        {/* Dynamic Product Catalogue Spec tab */}
        <ProductCatalog />

        {/* Operational Media Interactive Tour */}
        <MediaSection />

        {/* Structural Certification & Lab Compliance */}
        <Certificacoes />
      </main>

      {/* Institutional Corporate Footer */}
      <Footer />
    </div>
  );
}

