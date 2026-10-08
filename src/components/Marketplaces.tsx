import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { MARKETPLACE_LINKS } from '../data';

export default function Marketplaces() {
  return (
    <section id="marketplaces" className="bg-white py-20 text-slate-900 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Canais de compra</p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Encontre a Hiperliga nos marketplaces</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">Compre nossos produtos também no Mercado Livre e na Shopee.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {Object.values(MARKETPLACE_LINKS).map((marketplace) => (
            <a
              key={marketplace.label}
              href={marketplace.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-40 items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-8"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-sm">
                  <img src={marketplace.logoSrc} alt={`Logotipo ${marketplace.label}`} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-slate-900">{marketplace.label}</h3>
                  <p className="mt-1 text-sm text-slate-500">Anúncio do Rejunte Polimérico Hiperliga</p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold text-white transition-colors group-hover:bg-primary-dark sm:px-5">
                <ShoppingBag className="h-4 w-4" />
                <span className="hidden sm:inline">{marketplace.buttonLabel}</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
