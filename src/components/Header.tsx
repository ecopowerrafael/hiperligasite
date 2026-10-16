import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronRight, Menu, MessageSquare, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { EXPERT_CONTACT_WHATSAPP } from '../data';
import { getCatalogProductPath, getProductsForMenuCategory, PRODUCT_MENU_CATEGORIES, ProductMenuCategory } from '../catalogProducts';
import { MAIN_NAVIGATION, NavigationItem, normalizePath } from '../navigation';

const PRODUCTS_MENU_ID = 'products-menu-panel';
const MOBILE_PRODUCTS_MENU_ID = 'mobile-products-menu';
const PRODUCTS_CATEGORY_PANEL_ID = 'products-category-panel';

function categoryId(category: ProductMenuCategory, prefix: string) {
  return `${prefix}-${category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')}`;
}

function ProductLinks({ category, mobile = false, onNavigate }: { category: ProductMenuCategory; mobile?: boolean; onNavigate: () => void }) {
  const products = getProductsForMenuCategory(category);

  if (products.length === 0) {
    return <p className={`${mobile ? 'px-3 py-2' : 'p-5'} text-sm text-slate-500`}>Em breve</p>;
  }

  return (
    <ul className={mobile ? 'space-y-1 border-l border-slate-200 pl-3' : 'grid grid-cols-1 gap-2 sm:grid-cols-2'}>
      {products.map((product) => (
        <li key={product.slug}>
          <a
            href={getCatalogProductPath(product)}
            onClick={onNavigate}
            className={`${mobile ? 'block px-3 py-2.5 text-sm' : 'block rounded-xl border border-slate-200/80 px-3.5 py-3 text-sm'} text-slate-700 transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
          >
            {product.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProductMenuCategory>(PRODUCT_MENU_CATEGORIES[0]);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<ProductMenuCategory>(PRODUCT_MENU_CATEGORIES[0]);
  const productsTriggerRef = useRef<HTMLAnchorElement>(null);
  const mobileProductsTriggerRef = useRef<HTMLButtonElement>(null);
  const productsMenuRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeProductsMenu = () => {
    clearCloseTimer();
    setIsProductsMenuOpen(false);
  };

  const scheduleProductsMenuClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(closeProductsMenu, 180);
  };

  useEffect(() => () => clearCloseTimer(), []);

  useEffect(() => {
    if (!isProductsMenuOpen) return;

    const handleOutsidePointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!productsMenuRef.current?.contains(target) && !productsTriggerRef.current?.contains(target)) {
        closeProductsMenu();
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      closeProductsMenu();
      productsTriggerRef.current?.focus();
    };

    document.addEventListener('pointerdown', handleOutsidePointer);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointer);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isProductsMenuOpen]);

  useEffect(() => {
    if (!isMobileProductsOpen) return;

    const handleMobileEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setIsMobileProductsOpen(false);
      mobileProductsTriggerRef.current?.focus();
    };

    document.addEventListener('keydown', handleMobileEscape);
    return () => document.removeEventListener('keydown', handleMobileEscape);
  }, [isMobileProductsOpen]);

  const closeAllMenus = () => {
    closeProductsMenu();
    setIsMobileProductsOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (_event: React.MouseEvent<HTMLAnchorElement>, _item: NavigationItem) => {
    closeAllMenus();
  };

  const currentPath = normalizePath(window.location.pathname);
  const activeProducts = getProductsForMenuCategory(activeCategory);

  return (
    <header
      id="header-navigation"
      className={`fixed left-0 right-0 top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'py-1.5 shadow-md sm:py-2' : 'py-2 shadow-xs sm:py-3'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          <a href="/" onClick={() => closeAllMenus()} className="group flex h-full items-center" id="brand-logo-link">
            <img src="https://loja.hiperliga.com.br/wp-content/uploads/2026/09/hiperliga-logo.png" alt="Hiperliga Logo" className="h-10 w-auto shrink-0 object-contain transition-all duration-300 group-hover:scale-105 sm:h-12 md:h-14" referrerPolicy="no-referrer" />
          </a>

          <nav className="hidden items-center gap-1 lg:gap-2 md:flex" aria-label="Navegação principal">
            {MAIN_NAVIGATION.map((item) => item.label === 'Produtos' ? (
              <div key={item.href} className="relative" onMouseEnter={() => { clearCloseTimer(); setIsProductsMenuOpen(true); }} onMouseLeave={scheduleProductsMenuClose}>
                <a ref={productsTriggerRef} href={item.href} onClick={(event) => handleNavigation(event, item)} onFocus={() => { clearCloseTimer(); setIsProductsMenuOpen(true); }} aria-current={normalizePath(item.href) === currentPath ? 'page' : undefined} aria-haspopup="true" aria-expanded={isProductsMenuOpen} aria-controls={PRODUCTS_MENU_ID} className={`inline-flex items-center gap-1 rounded-lg px-3.5 py-2 font-sans text-sm font-semibold transition-colors ${normalizePath(item.href) === currentPath ? 'bg-slate-100 text-primary' : 'text-slate-700 hover:bg-slate-100/80 hover:text-primary'}`}>
                  {item.label}<ChevronDown className={`h-3.5 w-3.5 transition-transform ${isProductsMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </a>
              </div>
            ) : (
              <a key={item.href} href={item.href} onClick={(event) => handleNavigation(event, item)} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} aria-current={!item.external && normalizePath(item.href) === currentPath ? 'page' : undefined} className={`rounded-lg px-3.5 py-2 font-sans text-sm font-semibold transition-colors ${!item.external && normalizePath(item.href) === currentPath ? 'bg-slate-100 text-primary' : 'text-slate-700 hover:bg-slate-100/80 hover:text-primary'}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="https://loja.hiperliga.com.br/" target="_blank" rel="noopener noreferrer" id="header-cta-loja" className="inline-flex items-center gap-1.5 rounded-full border border-primary px-4 py-2.5 font-sans text-sm font-semibold text-primary shadow-xs transition-all hover:bg-primary hover:text-white"><span>Loja Online</span></a>
            <a href={EXPERT_CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" id="header-cta-whatsapp" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition-all hover:shadow-[0_0_20px_rgba(242,90,36,0.4)]">
              <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
              <MessageSquare className="relative z-10 h-4 w-4 text-white" /><span className="relative z-10">Falar com Especialistas</span><span className="absolute right-2 top-2 h-2 w-2 animate-ping rounded-full bg-green-400" />
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMobileMenuOpen((open) => !open)} className="rounded-lg p-2 text-slate-800 transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation-drawer" id="mobile-menu-toggle-btn">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isProductsMenuOpen && (
        <div ref={productsMenuRef} id={PRODUCTS_MENU_ID} role="region" aria-label="Categorias de produtos" onMouseEnter={clearCloseTimer} onMouseLeave={scheduleProductsMenuClose} className="absolute left-0 right-0 top-full hidden border-b border-slate-200 bg-white shadow-xl md:block">
          <div className="mx-auto grid max-h-[min(32rem,calc(100vh-6rem))] w-[calc(100vw-2rem)] max-w-5xl grid-cols-[minmax(11rem,14rem)_minmax(0,1fr)] overflow-y-auto rounded-b-2xl border-x border-slate-200 bg-white">
            <div className="border-r border-slate-200 bg-slate-50/80 p-3" role="tablist" aria-label="Categorias de produtos">
              {PRODUCT_MENU_CATEGORIES.map((category) => {
                const selected = category === activeCategory;
                return <button key={category} type="button" role="tab" aria-selected={selected} aria-expanded={selected} aria-controls={PRODUCTS_CATEGORY_PANEL_ID} onMouseEnter={() => setActiveCategory(category)} onFocus={() => setActiveCategory(category)} onClick={() => setActiveCategory(category)} className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 ${selected ? 'bg-primary text-white shadow-sm' : 'text-slate-700 hover:bg-white hover:text-primary'}`}><span>{category}</span><ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" /></button>;
              })}
            </div>
            <div id={PRODUCTS_CATEGORY_PANEL_ID} role="tabpanel" aria-label={`Produtos em ${activeCategory}`} className="min-w-0 p-5 sm:p-6">
              <div className="mb-4 flex items-start justify-between gap-4"><div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Categoria</p><h2 className="mt-1 font-display text-xl font-extrabold text-slate-900">{activeCategory}</h2></div><span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[10px] font-bold text-slate-500">{activeProducts.length} {activeProducts.length === 1 ? 'produto' : 'produtos'}</span></div>
              <ProductLinks category={activeCategory} onNavigate={closeAllMenus} />
              <a href="/produtos/" onClick={closeAllMenus} className="mt-5 inline-flex items-center gap-1.5 rounded-lg px-1 py-2 text-sm font-bold text-primary transition-colors hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Ver todos os produtos <ChevronRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.2 }} className="border-b border-slate-200 bg-white shadow-xl md:hidden" id="mobile-navigation-drawer">
            <div className="space-y-2 px-4 pb-6 pt-2">
              {MAIN_NAVIGATION.map((item) => item.label === 'Produtos' ? (
                <div key={item.href}>
                  <div className="flex items-center gap-2">
                    <a href={item.href} onClick={(event) => handleNavigation(event, item)} aria-current={normalizePath(item.href) === currentPath ? 'page' : undefined} className={`min-w-0 flex-1 rounded-lg px-3 py-3 text-base font-semibold transition-colors ${normalizePath(item.href) === currentPath ? 'border border-primary/20 bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-50 hover:text-primary'}`}>{item.label}</a>
                    <button ref={mobileProductsTriggerRef} type="button" onClick={() => setIsMobileProductsOpen((open) => !open)} aria-expanded={isMobileProductsOpen} aria-controls={MOBILE_PRODUCTS_MENU_ID} aria-label={isMobileProductsOpen ? 'Recolher categorias de produtos' : 'Expandir categorias de produtos'} className="rounded-lg p-3 text-slate-600 transition-colors hover:bg-slate-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"><ChevronDown className={`h-5 w-5 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} aria-hidden="true" /></button>
                  </div>
                  {isMobileProductsOpen && (
                    <div id={MOBILE_PRODUCTS_MENU_ID} className="mt-2 space-y-1 rounded-xl border border-slate-200 bg-slate-50 p-2">
                      {PRODUCT_MENU_CATEGORIES.map((category) => {
                        const selected = category === mobileActiveCategory;
                        const productsPanelId = categoryId(category, 'mobile-products-category');
                        return <div key={category}><button type="button" onClick={() => setMobileActiveCategory(category)} aria-expanded={selected} aria-controls={productsPanelId} className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 ${selected ? 'bg-white text-primary shadow-sm' : 'text-slate-700 hover:bg-white'}`}>{category}<ChevronDown className={`h-4 w-4 transition-transform ${selected ? 'rotate-180' : ''}`} aria-hidden="true" /></button>{selected && <div id={productsPanelId} className="px-2 pb-2 pt-1"><ProductLinks category={category} mobile onNavigate={closeAllMenus} /></div>}</div>;
                      })}
                      <a href="/produtos/" onClick={closeAllMenus} className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Ver todos os produtos</a>
                    </div>
                  )}
                </div>
              ) : (
                <a key={item.href} href={item.href} onClick={(event) => handleNavigation(event, item)} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} aria-current={!item.external && normalizePath(item.href) === currentPath ? 'page' : undefined} className={`block rounded-lg px-3 py-3 text-base font-semibold transition-colors ${!item.external && normalizePath(item.href) === currentPath ? 'border border-primary/20 bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-50 hover:text-primary'}`}>{item.label}</a>
              ))}
              <div className="space-y-3 border-t border-slate-100 pt-4">
                <a href="https://loja.hiperliga.com.br/" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary px-4 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white" id="mobile-drawer-loja"><span>Loja Online</span></a>
                <a href={EXPERT_CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-semibold text-white shadow-sm transition-all hover:bg-primary-dark" id="mobile-drawer-cta"><MessageSquare className="h-5 w-5 text-white" /><span>Falar com Especialistas</span></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
