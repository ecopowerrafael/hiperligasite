import { useState, useEffect } from 'react';
import { PRODUCTS_DATA, EXPERT_CONTACT_WHATSAPP } from '../data';
import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, ShoppingBag, CheckCircle, HelpCircle, ChevronLeft, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';

interface ImageSliderProps {
  product: Product;
}

// Subcomponent for premium sliding images or hover zoom animation
function ProductImageDisplay({ product }: ImageSliderProps) {
  const isSlider = !!(product.images && product.images.length > 1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isSlider || !product.images) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % product.images!.length);
    }, 3200); // Changes image every 3.2 seconds
    return () => clearInterval(interval);
  }, [isSlider, product.images]);

  if (isSlider && product.images) {
    return (
      <div className="relative w-full h-64 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200/40 flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={product.images[currentIndex]}
            alt={`${product.name} - Imagem ${currentIndex + 1}`}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="max-h-full max-w-full object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.12)] pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        {/* Slide Indicators (Dots) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {product.images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentIndex ? 'bg-primary w-4' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              title={`Ver imagem ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Single dynamic zoom in/out hover animation
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200/40 flex items-center justify-center p-6">
      <img
        src={product.image}
        alt={product.name}
        className="max-h-full max-w-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.08)] transition-transform duration-700 ease-in-out group-hover:scale-115"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export default function ProductCatalog() {
  const [filter, setFilter] = useState<string>('todos');

  // Group items by broad tags
  const filteredProducts = PRODUCTS_DATA.filter(p => {
    if (filter === 'todos') return true;
    if (filter === 'alvenaria') return ['hiperliga-3kg', 'hiperliga-25kg', 'hiperliga-40kg', 'reboco-polimerico'].includes(p.id);
    if (filter === 'reparos') return ['sela-trinca'].includes(p.id);
    if (filter === 'telhas') return ['revestimento-telhas'].includes(p.id);
    return true;
  });

  return (
    <section 
      id="produtos" 
      className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200/50 relative overflow-hidden"
    >
      {/* Visual Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full inline-block">
            Vitrine Premium de Tecnologia
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
            Nossa Linha de <span className="text-primary">Produtos Especiais</span>
          </h2>
          <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
            Seja um pequeno conserto doméstico no final de semana ou erguer um condomínio de galpões industriais, a Hiperliga tem a tecnologia certa no volume e aplicação que você precisa.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div 
          className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto bg-white border border-slate-200/80 p-1.5 rounded-2xl mb-14 shadow-sm"
          id="product-catalog-filters"
        >
          {[
            { id: 'todos', label: 'Todos os Produtos' },
            { id: 'alvenaria', label: 'Alvenaria & Reboco' },
            { id: 'reparos', label: 'Reparos & Trincas' },
            { id: 'telhas', label: 'Proteção de Telhados' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex-1 min-w-[140px] font-display font-extrabold text-xs sm:text-sm px-4 py-3 rounded-xl transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Matrix (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const hasMultipleImages = !!(product.images && product.images.length > 1);
              
              return (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-slate-200/60 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col justify-between group overflow-hidden relative"
                  id={`product-card-${product.id}`}
                >
                  
                  {/* Card Header Media */}
                  <div className="relative mb-5">
                    <ProductImageDisplay product={product} />

                    {/* Float tags */}
                    <div className="absolute top-3 left-3 bg-slate-900/90 text-white font-mono text-[9px] tracking-widest px-2.5 py-1 rounded-md uppercase backdrop-blur-sm shadow-sm">
                      {product.weight}
                    </div>

                    {hasMultipleImages && (
                      <div className="absolute top-3 right-3 bg-primary/95 text-white font-mono text-[8.5px] tracking-wider px-2 py-0.5 rounded-md uppercase font-bold flex items-center gap-1 shadow-sm animate-pulse">
                        <Layers className="w-2.5 h-2.5" />
                        <span>Slideshow</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-primary text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-1 flex items-baseline gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        Pronto para Uso
                      </div>

                      <h3 className="text-xl font-display font-extrabold text-slate-900 leading-tight mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-slate-500 font-sans text-xs italic line-clamp-2 mb-3">
                        {product.tagline}
                      </p>

                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Technical specifications */}
                      {product.specs && product.specs.length > 0 && (
                        <div className="pt-4 border-t border-slate-100 mb-4 bg-slate-50/50 p-3 rounded-xl border border-slate-200/30">
                          <h4 className="text-slate-800 text-[10px] font-mono font-bold tracking-wider uppercase mb-2">
                            Especificações
                          </h4>
                          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-500">
                            {product.specs.slice(0, 4).map((spec, i) => (
                              <div key={i} className="flex flex-col border-b border-slate-100 pb-1">
                                <span className="text-[9px] text-gray-400 capitalize">{spec.label}</span>
                                <strong className="text-slate-800 truncate">{spec.value}</strong>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Uses / Ideal For list */}
                      <div className="space-y-1.5 pt-1">
                        {product.idealFor.slice(0, 3).map((useCase, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 font-sans">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Click CTA & Actions */}
                    <div className="pt-6 border-t border-slate-100 mt-5">
                      <a
                        href={`${EXPERT_CONTACT_WHATSAPP}&text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+espec%C3%ADfico+para+o+produto+*${encodeURIComponent(product.name)}*.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark group-hover:bg-primary-dark text-white font-sans font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-0.5"
                        id={`cta-buy-${product.id}`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Cotar no WhatsApp</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5" />
                      </a>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Global info footnote */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-gray-400">
          <HelpCircle className="w-4 h-4 text-gray-300" />
          <span>Atendimento técnico em todo o Brasil. Enviamos via logísticaExpress com segurança total.</span>
        </div>

      </div>
    </section>
  );
}
