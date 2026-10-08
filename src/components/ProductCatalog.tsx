import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, CheckCircle, HelpCircle, Layers, ShoppingBag } from 'lucide-react';
import { HOME_PRODUCT_GROUPS, PRODUCTS_DATA } from '../data';
import { Product } from '../types';

function ProductImage({ product }: { product: Product }) {
  const images = product.images && product.images.length > 1 ? product.images : [product.image];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const interval = setInterval(() => setCurrentIndex((index) => (index + 1) % images.length), 3200);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200/40 bg-gradient-to-b from-slate-50 to-slate-100 p-6">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`${product.name} - imagem ${currentIndex + 1}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35 }}
          loading="lazy"
          className="pointer-events-none max-h-full max-w-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.08)]"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ver imagem ${index + 1} de ${product.name}`}
              className={`h-1.5 rounded-full transition-all ${index === currentIndex ? 'w-4 bg-primary' : 'w-1.5 bg-slate-300'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product, displayName }: { product: Product; displayName: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.35 }}
      className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-5 shadow-sm transition-all duration-500 hover:border-primary/20 hover:shadow-xl"
    >
      <div>
        <div className="relative mb-5">
          <ProductImage product={product} />
          <div className="absolute left-3 top-3 rounded-md bg-slate-900/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-white">{product.weight}</div>
          {product.images && product.images.length > 1 && (
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-primary/95 px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-wider text-white">
              <Layers className="h-2.5 w-2.5" /> Slideshow
            </div>
          )}
        </div>
        <div className="mb-2 flex items-baseline gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-primary sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Pronto para Uso</div>
        <h3 className="mb-2 font-display text-xl font-extrabold leading-tight text-slate-900 transition-colors group-hover:text-primary">{displayName}</h3>
        <p className="mb-3 line-clamp-2 text-xs italic text-slate-500">{product.tagline}</p>
        <p className="mb-4 text-sm leading-relaxed text-slate-600">{product.description}</p>
        <div className="space-y-1.5">
          {product.idealFor.slice(0, 3).map((useCase) => <div key={useCase} className="flex items-start gap-1.5 text-xs text-slate-600"><CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" /><span className="line-clamp-1">{useCase}</span></div>)}
        </div>
      </div>
      <div className="mt-5 border-t border-slate-100 pt-6">
        {product.storeUrl ? (
          <a href={product.storeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-md">
            <ShoppingBag className="h-3.5 w-3.5" /> Conhecer produto <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : (
          <button type="button" disabled className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-slate-200 px-6 py-3.5 text-xs font-bold text-slate-500">
            <ShoppingBag className="h-3.5 w-3.5" /> Conhecer produto
          </button>
        )}
      </div>
    </motion.article>
  );
}

export default function ProductCatalog() {
  return (
    <section id="produtos" className="relative overflow-hidden border-t border-slate-200/50 bg-slate-50 py-24 text-slate-900">
      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-primary">Vitrine de Produtos</span>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Conheça nossas <span className="text-primary">soluções</span></h2>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">Produtos Hiperliga para construção, reparos e acabamentos, organizados por destaque comercial.</p>
        </div>
        <div className="space-y-20">
          {HOME_PRODUCT_GROUPS.map((group) => (
            <section key={group.id} aria-labelledby={`product-group-${group.id}`}>
              <div className="mb-8 flex items-center gap-4"><h3 id={`product-group-${group.id}`} className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">{group.title}</h3><div className="h-px flex-1 bg-slate-200" /></div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {group.products.map((entry) => {
                  const product = entry.productId ? PRODUCTS_DATA.find((item) => item.id === entry.productId) : undefined;
                  return product ? <div key={entry.name}><ProductCard product={product} displayName={entry.name} /></div> : null;
                })}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-2 text-center text-xs text-gray-400"><HelpCircle className="h-4 w-4 shrink-0 text-gray-300" /><span>Atendimento técnico em todo o Brasil. Enviamos via logísticaExpress com segurança total.</span></div>
      </div>
    </section>
  );
}
