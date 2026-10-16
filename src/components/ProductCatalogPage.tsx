import { ArrowUpRight, BookOpen } from 'lucide-react';
import { CATALOG_PRODUCTS, getCatalogProductPath } from '../catalogProducts';

export default function ProductCatalogPage() {
  return (
    <section className="bg-slate-50 px-4 pb-24 pt-32 text-slate-900 sm:px-6 lg:px-8 sm:pt-40">
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-10 border-b border-slate-200 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">Catálogo institucional</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-brand-dark sm:text-7xl">Tecnologia para construir melhor.</h1>
          </div>
          <div className="max-w-md lg:justify-self-end">
            <p className="text-base leading-7 text-slate-600">Explore a linha Hiperliga, Massa Mais e Granfinalle por aplicação. Cada produto tem uma página de apresentação com ficha técnica completa.</p>
            <a href="https://loja.hiperliga.com.br/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Comprar na loja oficial <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </header>

        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {CATALOG_PRODUCTS.map((product, index) => (
            <article key={product.slug} className="group flex flex-col border-b border-slate-200 pb-8">
              <a href={getCatalogProductPath(product)} className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4" aria-label={`Conheça ${product.name}`}>
                <div className="flex min-h-[20rem] items-center justify-center bg-white px-8 py-8 sm:min-h-[24rem]">
                  {product.image ? <img src={product.image} alt={`${product.name} - embalagem`} width="800" height="800" loading={index < 3 ? 'eager' : 'lazy'} className="h-full max-h-[20rem] w-full object-contain transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" /> : <span className="text-sm font-semibold text-slate-400">Imagem em breve</span>}
                </div>
                <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{product.category}</p>
                <h2 className="mt-2 font-display text-2xl font-extrabold leading-tight text-brand-dark transition-colors group-hover:text-primary">{product.name}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
              </a>
              <a href={getCatalogProductPath(product)} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Ver ficha técnica <BookOpen className="h-4 w-4" aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
