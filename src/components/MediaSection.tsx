import { ArrowUpRight, HardHat, PlayCircle } from 'lucide-react';
import { APPLICATION_STEPS } from '../data';
import YouTubeVideo from './YouTubeVideo';

export default function MediaSection() {
  return (
    <section id="como-aplicar" className="bg-brand-dark py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3 text-emerald-300"><HardHat className="h-5 w-5" aria-hidden="true" /><p className="font-mono text-xs font-bold uppercase tracking-[0.25em]">Hiperliga na prática</p></div>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl">Conheça o processo no canteiro.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-300">Materiais claros, aplicação orientada e informação técnica para ajudar sua equipe a tomar decisões melhores em cada etapa.</p>
            <a href="/solucoes/" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-emerald-300 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-brand-dark">Ver aplicações <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>

            <ol className="mt-12 space-y-6 border-l border-white/15 pl-6">
              {APPLICATION_STEPS.map((step) => <li key={step.number} className="relative"><span className="absolute -left-[2rem] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary font-mono text-[10px] font-bold text-white ring-8 ring-brand-dark">{step.number}</span><h3 className="font-display text-lg font-bold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{step.description}</p></li>)}
            </ol>
          </div>

          <div className="lg:pl-10">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div className="flex items-center gap-2 text-sm font-semibold"><PlayCircle className="h-4 w-4 text-primary" aria-hidden="true" /> Aplicação real</div><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Vídeo demonstrativo</span></div>
              <div className="aspect-video"><YouTubeVideo videoId="z34oKE1tQeU" title="Aplicação prática da Hiperliga na construção civil" /></div>
              <div className="p-6 sm:p-8"><p className="max-w-xl text-lg font-semibold leading-7 text-white">Uma apresentação visual para entender o uso da solução antes de acessar a ficha técnica completa.</p><p className="mt-3 text-sm leading-6 text-slate-400">Consulte sempre a página do produto para indicações, limitações e modo de aplicação específicos.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
