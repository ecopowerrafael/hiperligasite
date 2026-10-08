import { useEffect } from 'react';

type InstitutionalPageProps = {
  title: string;
  description: string;
};

export default function InstitutionalPage({ title, description }: InstitutionalPageProps) {
  useEffect(() => {
    const previousTitle = document.title;
    const existingRobots = document.querySelector('meta[name="robots"]');
    const existingDescription = document.querySelector('meta[name="description"]');
    const robots = existingRobots ?? document.createElement('meta');
    const metaDescription = existingDescription ?? document.createElement('meta');
    const previousRobotsContent = existingRobots?.getAttribute('content');
    const previousDescriptionContent = existingDescription?.getAttribute('content');

    document.title = `${title} | Hiperliga`;
    robots.setAttribute('name', 'robots');
    robots.setAttribute('content', 'noindex, follow');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    if (!existingRobots) document.head.appendChild(robots);
    if (!existingDescription) document.head.appendChild(metaDescription);

    return () => {
      document.title = previousTitle;
      if (existingRobots && previousRobotsContent !== null) robots.setAttribute('content', previousRobotsContent);
      else robots.remove();
      if (existingDescription && previousDescriptionContent !== null) metaDescription.setAttribute('content', previousDescriptionContent);
      else metaDescription.remove();
    };
  }, [title]);

  return (
    <section className="min-h-[55vh] bg-white px-4 pb-20 pt-32 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Hiperliga</p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>
      </div>
    </section>
  );
}
