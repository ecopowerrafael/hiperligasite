import { useEffect } from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { EXPERT_CONTACT_WHATSAPP } from '../data';
import { solutionCta, SOLUTIONS_PAGE_DATA } from '../solutionsData';
import SolutionCatalog from './SolutionCatalog';

export default function SolutionsPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const robots = document.querySelector('meta[name="robots"]') ?? document.createElement('meta');
    const description = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
    const existingRobots = Boolean(robots.parentElement);
    const existingDescription = Boolean(description.parentElement);
    const previousRobotsContent = robots.getAttribute('content');
    const previousDescriptionContent = description.getAttribute('content');

    document.title = 'Soluções para sua obra | Hiperliga';
    robots.setAttribute('name', 'robots');
    robots.setAttribute('content', 'index, follow');
    description.setAttribute('name', 'description');
    description.setAttribute('content', 'Conheça produtos do Grupo Hiperliga para assentamento, acabamento e reparos. Veja a solução indicada para cada necessidade da sua obra.');
    if (!existingRobots) document.head.appendChild(robots);
    if (!existingDescription) document.head.appendChild(description);

    return () => {
      document.title = previousTitle;
      if (existingRobots && previousRobotsContent !== null) robots.setAttribute('content', previousRobotsContent);
      else robots.remove();
      if (existingDescription && previousDescriptionContent !== null) description.setAttribute('content', previousDescriptionContent);
      else description.remove();
    };
  }, []);

  return (
    <section id="solucoes-page" className="bg-slate-50 px-4 pb-24 pt-32 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Soluções construtivas</p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">Soluções para sua obra</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">Conheça produtos do Grupo Hiperliga para assentamento, acabamento e reparos. Veja a solução indicada para cada necessidade da sua obra.</p>
        </header>

        <div className="mt-16 space-y-10">
          {SOLUTIONS_PAGE_DATA.map((solution, index) => {
            const cta = solutionCta(solution);
            return (
              <article key={solution.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
                  <div className="flex flex-col justify-center bg-brand-dark p-7 text-white sm:p-10">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Solução {String(index + 1).padStart(2, '0')}</span>
                    <div className="mt-8">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Problema ou necessidade</p>
                      <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl">{solution.needTitle}</h2>
                      <p className="mt-4 leading-relaxed text-slate-300">{solution.needDescription}</p>
                    </div>
                    <div className="mt-8 border-t border-white/10 pt-5 text-sm text-slate-400">Não foi fornecida uma imagem específica da necessidade na associação oficial. A solução está apresentada com a imagem oficial do produto.</div>
                  </div>

                  <div className="p-7 sm:p-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">Solução</p>
                    <div className="mt-5 flex min-h-64 items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100 p-6">
                      <img src={solution.solutionImage} alt={solution.solutionImageAlt} loading={index === 0 ? 'eager' : 'lazy'} className="max-h-72 w-full object-contain" />
                    </div>
                    <p className="mt-6 text-xs font-bold uppercase tracking-widest text-slate-500">{solution.brand}</p>
                    <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight text-slate-900">{solution.productName}</h3>
                    <p className="mt-4 leading-relaxed text-slate-600">{solution.description}</p>
                    <a href={cta.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      {solution.productUrl ? <ArrowUpRight className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
                      {cta.label}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <SolutionCatalog />

        <div className="mt-16 rounded-3xl bg-primary px-6 py-10 text-center text-white shadow-lg sm:px-10">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Precisa de ajuda para escolher?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100">Fale com a equipe Hiperliga para receber orientação sobre a solução mais adequada para sua necessidade.</p>
          <a href={EXPERT_CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"><MessageSquare className="h-4 w-4" /> Falar no WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
