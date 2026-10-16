import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, MessageCircle, ShoppingBag } from 'lucide-react';
import { CatalogProduct, getCatalogProductStoreUrl, getCatalogProductWhatsappUrl } from '../catalogProducts';
import TechnicalSheetContent from './TechnicalSheetContent';

export default function ProductDetailPage({ product }: { product: CatalogProduct }) {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
    const robots = document.querySelector('meta[name="robots"]') ?? document.createElement('meta');
    const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement('link');
    const hadDescription = Boolean(description.parentElement); const hadRobots = Boolean(robots.parentElement); const hadCanonical = Boolean(canonical.parentElement);
    const previousDescription = description.getAttribute('content'); const previousRobots = robots.getAttribute('content'); const previousCanonical = canonical.getAttribute('href');
    document.title = `${product.name} | Hiperliga`;
    description.setAttribute('name', 'description'); description.setAttribute('content', `${product.name}. Consulte aplicações e informações técnicas do catálogo Hiperliga.`);
    robots.setAttribute('name', 'robots'); robots.setAttribute('content', 'index, follow'); canonical.setAttribute('rel', 'canonical'); canonical.setAttribute('href', `https://hiperliga.com.br/produtos/${product.slug}/`);
    if (!hadDescription) document.head.appendChild(description); if (!hadRobots) document.head.appendChild(robots); if (!hadCanonical) document.head.appendChild(canonical);
    return () => { document.title = previousTitle; if (hadDescription && previousDescription !== null) description.setAttribute('content', previousDescription); else description.remove(); if (hadRobots && previousRobots !== null) robots.setAttribute('content', previousRobots); else robots.remove(); if (hadCanonical && previousCanonical !== null) canonical.setAttribute('href', previousCanonical); else canonical.remove(); };
  }, [product]);

  const storeUrl = getCatalogProductStoreUrl(product);
  const whatsappUrl = getCatalogProductWhatsappUrl(product);
  const sheet = product.technicalSheet;

  return <section className="bg-slate-50 px-4 pb-24 pt-32 text-slate-900 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><nav className="mb-8 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb"><a href="/" className="hover:text-primary">Início</a><span aria-hidden="true">→</span><a href="/produtos/" className="hover:text-primary">Produtos</a><span aria-hidden="true">→</span><span className="text-slate-700">{product.name}</span></nav>
    <div className="grid gap-x-12 gap-y-8 lg:grid-cols-2 lg:items-start">
      <div className="order-2 lg:order-1 lg:row-span-2"><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex min-h-[280px] items-center justify-center rounded-2xl bg-slate-50 p-6 sm:min-h-[400px]">{product.image ? <img src={product.image} alt={`${product.name} - imagem principal`} width="800" height="800" className="max-h-[400px] w-full object-contain" referrerPolicy="no-referrer" /> : <div className="text-center text-sm font-semibold text-slate-400">Imagem em breve</div>}</div></div></div>
      <div className="order-1 lg:order-2"><p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{product.category}</p><h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">{product.name}</h1></div>
      <div className="order-3 lg:order-2"><p className="text-lg leading-relaxed text-slate-600">{product.description}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={storeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"><ShoppingBag className="h-4 w-4" aria-hidden="true" /> Comprar na loja <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-5 py-3.5 text-sm font-bold text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"><MessageCircle className="h-4 w-4" aria-hidden="true" /> Tirar dúvidas pelo WhatsApp</a></div><section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6" aria-labelledby="summary-title"><h2 id="summary-title" className="font-display text-2xl font-extrabold text-brand-dark">Resumo técnico</h2><dl className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200">{sheet.summary.map((item) => <div key={item.label} className="grid gap-1 px-4 py-3 sm:grid-cols-[7rem_1fr] sm:gap-4 even:bg-slate-50"><dt className="text-xs font-bold uppercase tracking-wide text-slate-500">{item.label}</dt><dd className="text-sm leading-6 text-slate-800">{item.value}</dd></div>)}</dl></section></div>
    </div>
    <TechnicalSheetContent sheet={sheet} />
    <div className="mt-12 flex flex-col gap-3 sm:flex-row"><a href="/produtos/" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3.5 text-sm font-bold text-slate-700 hover:border-primary hover:text-primary"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Voltar para produtos</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white hover:bg-primary-dark"><MessageCircle className="h-4 w-4" aria-hidden="true" /> Contato pelo WhatsApp</a></div>
  </div></section>;
}
