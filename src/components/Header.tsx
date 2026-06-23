import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERT_CONTACT_WHATSAPP } from '../data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: { label: string; href: string; isExternal?: boolean }[] = [
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Comparativo', href: '#comparativo' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Como Aplicar', href: '#como-aplicar' }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, item: { href: string; isExternal?: boolean }) => {
    if (item.isExternal) {
      setIsMobileMenuOpen(false);
      return;
    }
    
    // Fallback redirect if user is browsing an SEO page
    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      setIsMobileMenuOpen(false);
      return; // Let standard element link carry them to e.g. /#diferenciais
    }

    e.preventDefault();
    const element = document.querySelector(item.href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg py-1 sm:py-2'
          : 'bg-transparent py-2 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Logo Brand Title */}
          <a 
            href="/" 
            onClick={(e) => {
              if (window.location.pathname !== '/' && window.location.pathname !== '') {
                // Return and perform default link action to navigate home '/'
                return;
              }
              handleSmoothScroll(e, { href: '#' });
            }}
            className="flex items-center group h-full"
            id="brand-logo-link"
          >
            <img
              src="https://loja.hiperliga.com.br/wp-content/uploads/2026/06/ChatGPT-Image-16-de-jun.-de-2026-14_05_11.png"
              alt="Hiperliga Logo"
              className="h-24 sm:h-32 w-auto object-contain shrink-0 -my-4 sm:-my-6 filter drop-shadow-[0_0_4px_rgba(255,255,255,0.98)] drop-shadow-[0_0_10px_rgba(255,255,255,0.92)] transition-all duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item)}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className={`transition-colors px-4 py-2 text-sm font-medium rounded-lg font-sans ${
                  item.isExternal
                    ? 'text-primary hover:text-primary-light font-bold flex items-center gap-1 border border-primary/20 bg-primary/10 hover:bg-primary/20'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://loja.hiperliga.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              id="header-cta-loja"
              className="inline-flex items-center gap-1.5 border border-primary text-primary hover:bg-primary hover:text-white font-sans text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-300 shadow-sm"
            >
              <span>Loja Online</span>
            </a>
            <a
              href={EXPERT_CONTACT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              id="header-cta-whatsapp"
              className="relative inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(242,90,36,0.4)] group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <MessageSquare className="w-4 h-4 text-white relative z-10" />
              <span className="relative z-10">Falar com Especialistas</span>
              <span className="absolute right-2 top-2 w-2 h-2 rounded-full bg-green-400 animate-ping" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
              id="mobile-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

         </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10"
            id="mobile-navigation-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item)}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                    item.isExternal
                      ? 'text-primary font-bold bg-primary/10 border border-primary/20 hover:bg-primary/25'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <a
                  href="https://loja.hiperliga.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-4 rounded-xl transition-all"
                  id="mobile-drawer-loja"
                >
                  <span>Loja Online</span>
                </a>
                <a
                  href={EXPERT_CONTACT_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-xl transition-all"
                  id="mobile-drawer-cta"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span>Falar com Especialistas</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
