import { useMemo, useState } from 'react';
import { ArrowUpRight, BookOpen, ChevronDown } from 'lucide-react';
import { CATALOG_PRODUCTS, getCatalogProductPath, PRODUCT_MENU_CATEGORIES, ProductMenuCategory } from '../catalogProducts';

type ProductFilter = 'Todos' | ProductMenuCategory;

export default function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState<ProductFilter>('Todos');
  const visibleProducts = useMemo(
    () => activeFilter === 'Todos'
      ? CATALOG_PRODUCTS
      : activeFilter === 'Novidades'
        ? CATALOG_PRODUCTS.filter((product) => product.isNew)
        : CATALOG_PRODUCTS.filter((product) => product.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="produtos" className="relative overflow-hidden bg-slate-50 py-24 text-slate-900 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="grid gap-8 border-b border-slate-200 pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">Linha Hiperliga</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-dark sm:text-6xl">Soluções para cada etapa da obra.</h2>
          </div>
          <div className="max-w-md lg:justify-self-end">
            <p className="text-base leading-7 text-slate-600">Uma linha de produtos para assentamento, reparos, madeira e acabamentos. Conheça a aplicação de cada solução na página técnica.</p>
            <a href="/produtos/" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Ver catálogo completo <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </header>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filtrar produtos por categoria">
          {(['Todos', ...PRODUCT_MENU_CATEGORIES] as ProductFilter[]).map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${activeFilter === filter ? 'border-primary bg-primary text-white' : 'border-slate-300 bg-white text-slate-600 hover:border-primary/50 hover:text-primary'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3" role="tabpanel">
          {visibleProducts.map((product, index) => (
            <article key={product.slug} className="group flex flex-col border-b border-slate-200 pb-8">
              <a href={getCatalogProductPath(product)} className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4" aria-label={`Conheça ${product.name}`}>
                <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden bg-white px-8 py-8 sm:min-h-[24rem]">
                  <span className="absolute left-0 top-0 font-mono text-[10px] font-bold tracking-[0.25em] text-primary/70">{String(index + 1).padStart(2, '0')}</span>
                  {product.image ? (
                    <img src={product.image} alt={`${product.name} - embalagem`} width="800" height="800" loading={index < 3 ? 'eager' : 'lazy'} className="h-full max-h-[20rem] w-full object-contain transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                  ) : <span className="text-sm font-semibold text-slate-400">Imagem em breve</span>}
                </div>
                <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{product.category}</p>
                <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight text-brand-dark transition-colors group-hover:text-primary">{product.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">{product.description}</p>
              </a>
              <div className="mt-6 flex items-center justify-between gap-4">
                <a href={getCatalogProductPath(product)} className="inline-flex items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Conheça o produto <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
                <BookOpen className="h-4 w-4 text-slate-300" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        {visibleProducts.length === 0 && <div className="mt-12 border-y border-slate-200 py-12 text-center text-sm text-slate-500">Em breve, novos produtos nesta categoria.</div>}
        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-slate-500"><ChevronDown className="h-4 w-4 text-primary" aria-hidden="true" /> Explore a linha completa pelo catálogo institucional</div>
      </div>
    </section>
  );
}
