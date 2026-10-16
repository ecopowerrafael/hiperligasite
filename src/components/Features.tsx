import { ArrowUpRight, Blocks, Brush, Hammer, Wrench } from 'lucide-react';
import { CATALOG_PRODUCTS, getCatalogProductPath } from '../catalogProducts';

const APPLICATION_GROUPS = [
  { title: 'Assentamento', description: 'Soluções prontas para blocos, tijolos e elementos de vedação.', icon: Blocks, slug: 'argamassa-polimerica' },
  { title: 'Reparos e correções', description: 'Produtos para corrigir fissuras, furos e imperfeições antes do acabamento.', icon: Wrench, slug: 'sela-trinca' },
  { title: 'Acabamentos', description: 'Massas, texturas, rejuntes e produtos para preparar a superfície.', icon: Brush, slug: 'massa-corrida' },
];

export default function Features() {
  return (
    <section id="solucoes-home" className="bg-white py-24 text-slate-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">Soluções para a obra</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-5xl">Do primeiro bloco ao acabamento final.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">A Hiperliga organiza produtos de diferentes marcas e aplicações para que você encontre a solução adequada para cada etapa, com informação técnica clara e acesso direto à apresentação do produto.</p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">
          {APPLICATION_GROUPS.map(({ title, description, icon: Icon, slug }) => {
            const product = CATALOG_PRODUCTS.find((item) => item.slug === slug);
            return (
              <article key={title} className="group bg-white p-7 transition-colors hover:bg-brand-dark hover:text-white sm:p-9">
                <Icon className="h-8 w-8 text-primary transition-colors group-hover:text-emerald-300" aria-hidden="true" />
                <h3 className="mt-12 font-display text-2xl font-extrabold">{title}</h3>
                <p className="mt-4 min-h-14 text-sm leading-6 text-slate-600 transition-colors group-hover:text-slate-300">{description}</p>
                {product && <a href={getCatalogProductPath(product)} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline group-hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Explorar solução <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>}
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-sm text-slate-500"><Hammer className="h-5 w-5 text-primary" aria-hidden="true" /><span>Aplicações pensadas para o ritmo real do canteiro.</span></div>
          <a href="/solucoes/" className="inline-flex items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Ver soluções por necessidade <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
