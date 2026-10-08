import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, BookOpen, Search, X } from 'lucide-react';
import { EXPERT_CONTACT_WHATSAPP, PRODUCTS_DATA } from '../data';
import { SEO_PAGES_DATA } from '../seoPagesData';

const CONTENT_TITLE = 'Conteúdos Hiperliga | Dicas e Aplicações para sua Obra';
const CONTENT_DESCRIPTION = 'Explore artigos, dicas de aplicação e informações sobre os produtos do Grupo Hiperliga para assentamento, acabamento e reparos.';

const ARTICLES = Object.values(SEO_PAGES_DATA)
  .filter((article) => article.schemaType === 'Article')
  .map((article) => ({
    path: article.path,
    title: article.title,
    summary: article.metaDescription,
  }));

const FEATURED_PRODUCT_IDS = ['hiperliga-3kg', 'reboco-polimerico', 'repara-paredes-150g', 'rejunte-polimerico-1kg'];
const FEATURED_PRODUCTS = FEATURED_PRODUCT_IDS
  .map((id) => PRODUCTS_DATA.find((product) => product.id === id))
  .filter((product): product is NonNullable<typeof product> => Boolean(product));

export default function ContentPage() {
  const [query, setQuery] = useState('');

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

    document.title = CONTENT_TITLE;
    description.setAttribute('name', 'description');
    description.setAttribute('content', CONTENT_DESCRIPTION);
    robots.setAttribute('name', 'robots');
    robots.setAttribute('content', 'index, follow');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://hiperliga.com.br/conteudos/');
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

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR');
    if (!normalizedQuery) return ARTICLES;
    return ARTICLES.filter((article) => `${article.title} ${article.summary}`.toLocaleLowerCase('pt-BR').includes(normalizedQuery));
  }, [query]);

  return (
    <section id="conteudos-page" className="bg-slate-50 px-4 pb-24 pt-32 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Conteúdos Hiperliga</p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">Conteúdos Hiperliga</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">Dicas, aplicações e informações sobre produtos para ajudar no planejamento e na execução da sua obra.</p>
        </header>

        <section className="mt-16" aria-labelledby="articles-title">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Artigos</p>
              <h2 id="articles-title" className="mt-2 font-display text-3xl font-extrabold text-brand-dark">Informação para cada etapa da obra</h2>
            </div>
            <div className="relative w-full sm:max-w-xs">
              <label htmlFor="content-search" className="sr-only">Buscar artigos por título ou resumo</label>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input id="content-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar artigos" className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-10 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              {query && <button type="button" onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Limpar busca"><X className="h-4 w-4" /></button>}
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article) => (
                <article key={article.path} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-xl font-extrabold leading-tight text-slate-900">{article.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{article.summary}</p>
                  <a href={`${article.path}/`} className="mt-6 inline-flex items-center gap-2 self-start text-sm font-bold text-primary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Ler artigo <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <p className="font-semibold text-slate-700">Nenhum artigo encontrado.</p>
              <button type="button" onClick={() => setQuery('')} className="mt-4 rounded-lg px-4 py-2 text-sm font-bold text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary">Limpar busca</button>
            </div>
          )}
        </section>

        <section className="mt-20" aria-labelledby="featured-products-title">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Materiais oficiais</p>
            <h2 id="featured-products-title" className="mt-3 font-display text-3xl font-extrabold text-brand-dark">Produtos em destaque</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">Uma seleção de fotos locais dos produtos apresentados no catálogo do projeto.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PRODUCTS.map((product) => (
              <article key={product.id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-slate-50 p-5">
                  <img src={product.image} alt={`Imagem de ${product.name}`} width="800" height="800" loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="mt-4 font-display text-lg font-extrabold leading-tight text-slate-900">{product.name}</h3>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center"><a href="/solucoes/" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Conhecer as soluções <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a></div>
        </section>

        <p className="mx-auto mt-16 max-w-2xl text-center text-sm text-slate-500">Quer falar sobre um produto? <a href={EXPERT_CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-bold text-primary underline-offset-4 hover:underline">Entre em contato pelo WhatsApp.</a></p>
      </div>
    </section>
  );
}
