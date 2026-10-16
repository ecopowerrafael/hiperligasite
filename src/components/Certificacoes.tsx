import { ArrowUpRight } from 'lucide-react';

const BRANDS = [
  { name: 'Hiperliga', description: 'Assentamento, reparos e soluções para a construção.', logo: 'https://loja.hiperliga.com.br/wp-content/uploads/2026/09/hiperliga-logo.png' },
  { name: 'Massa Mais', description: 'Tecnologia em argamassa para diferentes etapas da obra.', logo: 'https://massamais.com.br/wp-content/uploads/2026/04/ChatGPT-Image-15-de-abr.-de-2026-13_28_26.png', className: 'scale-150' },
  { name: 'Granfinalle', description: 'Preparação e acabamento de superfícies.', logo: 'https://massamais.com.br/wp-content/uploads/2025/08/LOGO-transparente300esse.png', className: 'scale-125' },
];

export default function Certificacoes() {
  return (
    <section id="empresa-home" className="bg-slate-50 py-24 text-slate-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-slate-200 pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div><p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">Empresa e marcas</p><h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-brand-dark sm:text-5xl">Um grupo construído para evoluir.</h2></div>
          <div className="max-w-xl lg:justify-self-end"><p className="text-base leading-7 text-slate-600">Conheça as marcas que fazem parte da história do Grupo Hiperliga e a forma como cada uma contribui para uma construção mais prática.</p><a href="/empresa/" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Conhecer a empresa <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a></div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BRANDS.map((brand) => <article key={brand.name} className="group bg-white p-7 transition-colors hover:bg-brand-dark"><div className="flex h-24 items-center justify-center overflow-hidden bg-slate-50 px-5 group-hover:bg-white"><img src={brand.logo} alt={`Logo oficial ${brand.name}`} className={`max-h-14 max-w-full object-contain ${brand.className ?? ''}`} loading="lazy" referrerPolicy="no-referrer" /></div><h3 className="mt-7 font-display text-2xl font-extrabold text-brand-dark group-hover:text-white">{brand.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600 group-hover:text-slate-300">{brand.description}</p></article>)}
        </div>
      </div>
    </section>
  );
}
