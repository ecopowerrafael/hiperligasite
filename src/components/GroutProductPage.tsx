import { useEffect } from 'react';
import { ArrowDown, ArrowUpRight, MessageCircle, ShoppingBag } from 'lucide-react';
import { EXPERT_CONTACT_WHATSAPP, MARKETPLACE_LINKS, PRODUCTS_DATA } from '../data';
import GroutCalculator from './GroutCalculator';

const product = PRODUCTS_DATA.find((item) => item.id === 'rejunte-polimerico-1kg');

if (!product) throw new Error('Produto rejunte-polimerico-1kg não encontrado no catálogo.');

export default function GroutProductPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const existingRobots = document.querySelector('meta[name="robots"]');
    const existingDescription = document.querySelector('meta[name="description"]');
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    const robots = existingRobots ?? document.createElement('meta');
    const description = existingDescription ?? document.createElement('meta');
    const canonical = existingCanonical ?? document.createElement('link');
    const previousRobots = existingRobots?.getAttribute('content');
    const previousDescription = existingDescription?.getAttribute('content');
    const previousCanonical = existingCanonical?.getAttribute('href');
    document.title = 'Rejunte Polimérico Hiperliga | Calculadora de Consumo';
    robots.setAttribute('name', 'robots');
    robots.setAttribute('content', 'index, follow');
    description.setAttribute('name', 'description');
    description.setAttribute('content', 'Conheça o Rejunte Polimérico Hiperliga e estime a quantidade de embalagens de 1 kg conforme a área, o formato da cerâmica e a largura das juntas.');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://hiperliga.com.br/rejunte-polimerico/');
    if (!existingRobots) document.head.appendChild(robots);
    if (!existingDescription) document.head.appendChild(description);
    if (!existingCanonical) document.head.appendChild(canonical);
    return () => {
      document.title = previousTitle;
      if (existingRobots && previousRobots !== null) robots.setAttribute('content', previousRobots); else robots.remove();
      if (existingDescription && previousDescription !== null) description.setAttribute('content', previousDescription); else description.remove();
      if (existingCanonical && previousCanonical !== null) canonical.setAttribute('href', previousCanonical); else canonical.remove();
    };
  }, []);

  const whatsappHref = `${EXPERT_CONTACT_WHATSAPP.split('?')[0]}?text=${encodeURIComponent('Olá! Gostaria de tirar dúvidas sobre o Rejunte Polimérico Hiperliga.')}`;
  const productImages = product.images ?? [product.image];

  return (
    <div className="bg-white text-slate-800">
      <section className="bg-slate-50 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="flex min-h-[360px] items-center justify-center rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 p-6 sm:min-h-[480px]">
              <img src={productImages[0]} alt={`${product.name} - embalagem de 1 kg`} className="max-h-[440px] w-full object-contain" width="800" height="800" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Produto Hiperliga</p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">Rejunte Polimérico Hiperliga</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{product.description}</p>
            <p className="mt-4 text-sm font-bold text-primary">Embalagem: 1 kg</p>
            <a href="#calculadora-rejunte" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Calcular quantidade <ArrowDown className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-7 sm:p-9">
            <h2 className="font-display text-2xl font-bold text-brand-dark">Informações e aplicações</h2>
            <p className="mt-4 leading-relaxed text-slate-600">{product.tagline}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">{product.idealFor.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />{item}</li>)}</ul>
          </div>
          <div className="rounded-3xl border border-slate-200 p-7 sm:p-9">
            <h2 className="font-display text-2xl font-bold text-brand-dark">Onde comprar ou pedir orientação</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href={MARKETPLACE_LINKS.mercadoLivre.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"><ShoppingBag className="h-4 w-4" aria-hidden="true" /> Mercado Livre <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              <a href={MARKETPLACE_LINKS.shopee.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"><ShoppingBag className="h-4 w-4" aria-hidden="true" /> Shopee <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"><MessageCircle className="h-4 w-4" aria-hidden="true" /> Tirar dúvidas pelo WhatsApp <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl"><GroutCalculator /></div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-extrabold text-brand-dark">Galeria do produto</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">{productImages.map((image, index) => <figure key={image} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4"><img src={image} alt={`${product.name} - imagem ${index + 1}`} width="800" height="800" loading={index === 0 ? 'eager' : 'lazy'} className="h-80 w-full object-contain" referrerPolicy="no-referrer" /><figcaption className="mt-3 text-center text-xs text-slate-500">Imagem {index + 1}</figcaption></figure>)}</div>
        </div>
      </section>
    </div>
  );
}
