/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Comparison from './components/Comparison';
import EstimatorCalculator from './components/Calculator';
import ProductCatalog from './components/ProductCatalog';
import MediaSection from './components/MediaSection';
import Certificacoes from './components/Certificacoes';
import Footer from './components/Footer';
import Marketplaces from './components/Marketplaces';
import { SEO_PAGES_DATA } from './seoPagesData';
import SeoPageTemplate from './components/SeoPageTemplate';
import InstitutionalPage from './components/InstitutionalPage';
import SolutionsPage from './components/SolutionsPage';
import CompanyPage from './components/CompanyPage';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import GroutProductPage from './components/GroutProductPage';
import { normalizePath } from './navigation';

const INSTITUTIONAL_PAGES: Record<string, { title: string; description: string }> = {
  '/contato': {
    title: 'Contato Hiperliga',
    description: 'Entre em contato com a Hiperliga pelos canais oficiais disponíveis no site.',
  },
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname.toLowerCase()
  );

  // Synchronize history popstate (Browser Back/Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname.toLowerCase());
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Intercept all internal anchor clicks for high performance SPA routing
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        // If it starts with "/" and is not a special subpath like wordpress (/loja)
        if (href && href.startsWith('/') && !href.startsWith('/loja') && !href.startsWith('#')) {
          e.preventDefault();
          window.history.pushState(null, '', href);
          setCurrentPath(href.toLowerCase());
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const handleNavigate = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path.toLowerCase());
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Parse path key
  const normalizedPath = normalizePath(currentPath);
  const cleanKey = normalizedPath.replace(/^\//, '');
  const seoData = SEO_PAGES_DATA[cleanKey];
  const institutionalPage = INSTITUTIONAL_PAGES[normalizedPath];

  return (
    <div className="min-h-screen bg-brand-dark p-0 m-0 font-sans selection:bg-primary selection:text-white" id="hiper-liga-home-app">
      {/* Absolute background accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-emerald-400 to-primary w-full fixed top-0 left-0 right-0 z-[60]" />

      {/* Sticky Navigation Bar */}
      <Header />

      {seoData ? (
        <main id="seo-pages-wrapper">
          <SeoPageTemplate data={seoData} onNavigate={handleNavigate} />
        </main>
      ) : normalizedPath === '/solucoes' ? (
        <main id="solutions-page-wrapper">
          <SolutionsPage />
        </main>
      ) : normalizedPath === '/empresa' ? (
        <main id="company-page-wrapper">
          <CompanyPage />
        </main>
      ) : normalizedPath === '/conteudos' ? (
        <main id="content-page-wrapper">
          <ContentPage />
        </main>
      ) : normalizedPath === '/contato' ? (
        <main id="contact-page-wrapper">
          <ContactPage />
        </main>
      ) : normalizedPath === '/rejunte-polimerico' ? (
        <main id="grout-product-page-wrapper">
          <GroutProductPage />
        </main>
      ) : institutionalPage ? (
        <main id="institutional-page-wrapper">
          <InstitutionalPage {...institutionalPage} />
        </main>
      ) : (
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

          {/* Marketplace purchase channels */}
          <Marketplaces />
        </main>
      )}

      {/* Institutional Corporate Footer */}
      <Footer />
    </div>
  );
}


