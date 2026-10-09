import { useEffect } from 'react';
import { ArrowUpRight, MessageSquare, PlayCircle } from 'lucide-react';
import YouTubeVideo from './YouTubeVideo';
import { EXPERT_CONTACT_WHATSAPP } from '../data';

const COMPANY_TITLE = 'Conheça o Grupo Hiperliga';
const COMPANY_DESCRIPTION = 'Conheça a história do Grupo Hiperliga e suas marcas Hiperliga, Massa Mais e Granfinalle, com soluções para assentamento, acabamento e reparos.';
const YOUTUBE_URL = 'https://youtube.com/shorts/3k4MttZpzEA';

const BRANDS: Array<{ name: string; description: string; logo?: string }> = [
  {
    name: 'Hiperliga',
    description: 'Produtos para assentamento, acabamento e reparos, com soluções como argamassas poliméricas, rejuntes e massas para paredes e madeira.',
    logo: 'https://loja.hiperliga.com.br/wp-content/uploads/2026/09/hiperliga-logo.png',
  },
  {
    name: 'Massa Mais',
    description: 'Soluções de argamassa polimérica para assentamento de blocos e tijolos e acabamento de pisos.',
    logo: 'https://massamais.com.br/wp-content/uploads/2026/04/ChatGPT-Image-15-de-abr.-de-2026-13_28_26.png',
  },
  {
    name: 'Granfinalle',
    description: 'Produtos para preparação e acabamento de superfícies, incluindo massa corrida e tinta.',
    logo: 'https://massamais.com.br/wp-content/uploads/2025/08/LOGO-transparente300esse.png',
  },
];

export default function CompanyPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const existingDescription = document.querySelector('meta[name="description"]');
    const existingRobots = document.querySelector('meta[name="robots"]');
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    const description = existingDescription ?? document.createElement('meta');
    const robots = existingRobots ?? document.createElement('meta');
    const canonical = existingCanonical ?? document.createElement('link');
    const previousDescription = existingDescription?.getAttribute('content');
    const previousRobots = existingRobots?.getAttribute('content');
    const previousCanonical = existingCanonical?.getAttribute('href');

    document.title = 'Conheça o Grupo Hiperliga | Hiperliga, Massa Mais e Granfinalle';
    description.setAttribute('name', 'description');
    description.setAttribute('content', COMPANY_DESCRIPTION);
    robots.setAttribute('name', 'robots');
    robots.setAttribute('content', 'index, follow');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://hiperliga.com.br/empresa/');
    if (!existingDescription) document.head.appendChild(description);
    if (!existingRobots) document.head.appendChild(robots);
    if (!existingCanonical) document.head.appendChild(canonical);

    return () => {
      document.title = previousTitle;
      if (existingDescription && previousDescription !== null) description.setAttribute('content', previousDescription);
      else description.remove();
      if (existingRobots && previousRobots !== null) robots.setAttribute('content', previousRobots);
      else robots.remove();
      if (existingCanonical && previousCanonical !== null) canonical.setAttribute('href', previousCanonical);
      else canonical.remove();
    };
  }, []);

  return (
    <section id="empresa-page" className="bg-slate-50 px-4 pb-24 pt-32 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Grupo Hiperliga</p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">{COMPANY_TITLE}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">Tecnologia nacional e soluções prontas para tornar a construção mais prática.</p>
        </header>

        <section className="mx-auto mt-16 max-w-4xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10" aria-labelledby="company-history-title">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Nossa história</p>
          <h2 id="company-history-title" className="mt-3 font-display text-3xl font-extrabold text-brand-dark">Uma construção mais inteligente</h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-600">
            <p>Deixamos o “sempre foi assim” no passado. Quem vive o canteiro de obras conhece bem o cenário: pilhas de areia, cimento desperdiçado, misturas complexas e o relógio correndo contra o lucro. A Hiperliga nasceu há 16 anos justamente porque não aceitávamos mais esse cenário.</p>
            <p>Nossa história começou com uma pergunta simples:</p>
            <p className="border-l-4 border-primary pl-5 font-display text-2xl font-bold leading-tight text-brand-dark">Como tornar a construção civil mais inteligente?</p>
            <p>A resposta veio através da tecnologia nacional e do alto desempenho. Especializamo-nos em argamassas poliméricas que já chegam prontas para o combate. Não entregamos apenas um produto em baldes; entregamos agilidade. Onde antes havia desperdício, hoje há rendimento. Onde havia demora, hoje há fluidez.</p>
            <p>O Grupo Hiperliga não olha apenas para paredes levantadas; olhamos para o futuro de uma construção mais leve, sustentável e acessível para todos.</p>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-4xl" aria-labelledby="company-video-title">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <PlayCircle className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 id="company-video-title" className="font-display text-2xl font-extrabold text-brand-dark">Hiperliga em vídeo</h2>
            </div>
            <div className="mx-auto mt-6 aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-2xl bg-brand-dark">
              <YouTubeVideo videoId="3k4MttZpzEA" title="Hiperliga em vídeo" className="h-full w-full" />
            </div>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="mx-auto mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Assistir no YouTube <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="company-brands-title">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">O grupo</p>
            <h2 id="company-brands-title" className="mt-3 font-display text-3xl font-extrabold text-brand-dark">Marcas que fazem parte da nossa história</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {BRANDS.map((brand) => (
              <article key={brand.name} className="flex min-h-64 flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-20 items-center justify-center rounded-2xl bg-slate-50 px-5">
                  {brand.logo ? <img src={brand.logo} alt={`Logo oficial ${brand.name}`} className="max-h-14 max-w-full object-contain" referrerPolicy="no-referrer" /> : <span className="font-display text-2xl font-extrabold text-brand-dark">{brand.name}</span>}
                </div>
                <h3 className="mt-6 font-display text-xl font-extrabold text-slate-900">{brand.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{brand.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-primary px-6 py-10 text-center text-white shadow-lg sm:px-10">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Conheça as soluções do Grupo Hiperliga para sua obra.</h2>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a href="/solucoes/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">Conhecer soluções <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            <a href={EXPERT_CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"><MessageSquare className="h-4 w-4" aria-hidden="true" /> Falar com a Hiperliga</a>
          </div>
        </section>
      </div>
    </section>
  );
}
