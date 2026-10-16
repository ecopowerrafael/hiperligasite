import { ArrowUpRight, BookOpen, ShoppingBag } from 'lucide-react';
import { CATALOG_PRODUCTS, getCatalogProductPath } from '../catalogProducts';

function ProductImage({ product }: { product: (typeof CATALOG_PRODUCTS)[number] }) {
  if (!product.image) return <div className="flex h-52 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center text-sm font-semibold text-slate-400">Imagem em breve</div>;
  return <img src={product.image} alt={`${product.name} - imagem principal`} width="800" height="800" loading="lazy" className="h-52 w-full rounded-2xl bg-slate-50 object-contain" referrerPolicy="no-referrer" />;
}

export default function ProductCatalogPage() {
  return (
    <section className="bg-slate-50 px-4 pb-24 pt-32 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Catálogo institucional</p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">Produtos Hiperliga</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">Conheça nossas soluções para assentamento, revestimento, acabamento e reparos. Consulte as aplicações e informações técnicas de cada produto.</p>
          <a href="https://loja.hiperliga.com.br/" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Comprar na loja <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
        </header>
        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {CATALOG_PRODUCTS.map((product) => <article key={product.slug} className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><ProductImage product={product} /><p className="mt-5 text-xs font-bold uppercase tracking-widest text-primary">{product.category}</p><h2 className="mt-2 font-display text-xl font-extrabold leading-tight text-brand-dark">{product.name}</h2><p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{product.description}</p><a href={getCatalogProductPath(product)} className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Ver ficha técnica <BookOpen className="h-4 w-4" aria-hidden="true" /></a></article>)}
        </div>
      </div>
    </section>
  );
}
