import { useState } from 'react';
import { PRODUCTS_DATA, EXPERT_CONTACT_WHATSAPP } from '../data';
import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, ShoppingBag, CheckCircle, ChevronRight, HelpCircle } from 'lucide-react';

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<string>('hiperliga-3kg');

  const selectedProduct = PRODUCTS_DATA.find(p => p.id === activeTab) || PRODUCTS_DATA[0];

  return (
    <section 
      id="produtos" 
      className="py-24 bg-white text-slate-900 border-t border-slate-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full inline-block">
            Nossa Linha de Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
            Embalagens planejadas para <span className="text-primary">qualquer tamanho</span> de obra
          </h2>
          <p className="text-gray-600 font-sans text-sm sm:text-base">
            Seja um pequeno conserto doméstico no final de semana ou erguer um condomínio de galpões industriais, a Hiper Liga tem a tecnologia certa no volume que você precisa.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-3xl mx-auto bg-slate-50 border border-slate-200/50 p-2 rounded-2xl mb-12"
          id="product-catalog-tabs"
        >
          {PRODUCTS_DATA.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveTab(product.id)}
              className={`w-full sm:w-auto flex-1 font-display font-extrabold text-[13px] sm:text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer ${
                activeTab === product.id
                  ? 'bg-primary text-white shadow-md shadow-primary/25'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Dynamic Display Board using Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-50/50 border border-slate-200/40 p-6 sm:p-10 lg:p-12 rounded-3xl"
            id={`product-panel-${selectedProduct.id}`}
          >
            
            {/* Left: Product Image with Floating Entry Effects */}
            <div className="lg:col-span-5 flex justify-center relative min-h-[300px] sm:min-h-[380px] items-center">
              
              {/* Radial backdrop */}
              <div className="absolute w-[240px] h-[240px] rounded-full bg-primary/10 blur-[40px] pointer-events-none" />
              
              {/* Image Frame */}
              <motion.div 
                className="relative max-w-[280px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)] pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Dynamic Tag */}
              <div className="absolute top-4 left-4 bg-slate-900 text-white font-mono text-[9px] tracking-widest px-2.5 py-1 rounded-full uppercase">
                EMBALAGEM DE {selectedProduct.weight}
              </div>

            </div>

            {/* Right: Technical Copy and Target Use cases */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-primary text-xs font-mono font-bold uppercase tracking-wider bg-orange-100/50 px-2.5 py-1 rounded-md">
                  <Shield className="w-3 h-3" />
                  <span>Disponibilidade imediata</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 leading-tight">
                  {selectedProduct.name}
                </h3>
                <p className="text-primary font-display font-bold text-sm">
                  {selectedProduct.tagline}
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Ideal For Bullet Grid */}
              <div className="space-y-3">
                <h4 className="text-slate-800 text-xs font-mono font-bold tracking-wider uppercase">
                  ✓ Indicações de Uso Ideais
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.idealFor.map((useCase, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-sans">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Spec Board */}
              <div className="border-t border-slate-200/80 pt-6">
                <h4 className="text-slate-800 text-xs font-mono font-bold tracking-wider uppercase mb-3">
                  📋 Especificações Técnicas do Pack
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 text-xs font-mono text-slate-600">
                  {selectedProduct.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between border-b border-slate-200/40 pb-2">
                      <span className="text-gray-400">{spec.label}</span>
                      <strong className="text-slate-900">{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buy Request CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`${EXPERT_CONTACT_WHATSAPP}&text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+espec%C3%ADfico+para+o+produto+*${encodeURIComponent(selectedProduct.name)}*.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-xl transition-all hover:shadow-lg text-center"
                  id={`cta-buy-${selectedProduct.id}`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Cotar este Volume</span>
                </a>
                <span className="text-xs text-gray-400 text-center sm:text-left flex items-center gap-1 justify-center sm:justify-start">
                  <HelpCircle className="w-3.5 h-3.5 text-gray-300" />
                  Entregamos em todo o Brasil. Consulte taxas de frete.
                </span>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
