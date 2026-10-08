import { FormEvent, useEffect, useState } from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import { EXPERT_CONTACT_WHATSAPP } from '../data';

const WHATSAPP_NUMBER = 'https://wa.me/554188883365';

const sectors = ['Compras', 'Vendas', 'Reclamações', 'Dúvidas'] as const;

export default function ContactPage() {
  const [name, setName] = useState('');
  const [sector, setSector] = useState('');

  useEffect(() => {
    const previousTitle = document.title;
    const existingRobots = document.querySelector('meta[name="robots"]');
    const existingDescription = document.querySelector('meta[name="description"]');
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    const robots = existingRobots ?? document.createElement('meta');
    const metaDescription = existingDescription ?? document.createElement('meta');
    const canonical = existingCanonical ?? document.createElement('link');
    const previousRobotsContent = existingRobots?.getAttribute('content');
    const previousDescriptionContent = existingDescription?.getAttribute('content');
    const previousCanonical = existingCanonical?.getAttribute('href');

    document.title = 'Contato Hiperliga | Fale com nossa equipe';
    robots.setAttribute('name', 'robots');
    robots.setAttribute('content', 'index, follow');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Fale com a Hiperliga pelo WhatsApp, e-mail ou formulário de atendimento por setor.');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://hiperliga.com.br/contato/');
    if (!existingRobots) document.head.appendChild(robots);
    if (!existingDescription) document.head.appendChild(metaDescription);
    if (!existingCanonical) document.head.appendChild(canonical);

    return () => {
      document.title = previousTitle;
      if (existingRobots && previousRobotsContent !== null) robots.setAttribute('content', previousRobotsContent);
      else robots.remove();
      if (existingDescription && previousDescriptionContent !== null) metaDescription.setAttribute('content', previousDescriptionContent);
      else metaDescription.remove();
      if (existingCanonical && previousCanonical !== null) canonical.setAttribute('href', previousCanonical);
      else canonical.remove();
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName || !sector) return;

    const message = `Olá! Meu nome é ${trimmedName}. Gostaria de falar com o setor de ${sector}.`;
    window.open(`${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-white px-4 pb-24 pt-32 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">Hiperliga</p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">Fale com a Hiperliga</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">Escolha um canal de atendimento ou inicie uma conversa com o setor certo para sua necessidade.</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <section aria-labelledby="contatos-rapidos" className="rounded-3xl bg-brand-dark p-7 text-white shadow-xl sm:p-9">
            <h2 id="contatos-rapidos" className="font-display text-2xl font-bold">Contatos Rápidos</h2>
            <div className="mt-8 space-y-7">
              <a href={EXPERT_CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex gap-4 rounded-2xl border border-white/10 p-4 transition-colors hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <span><strong className="block">WhatsApp Suporte</strong><span className="mt-1 block text-white/75">+55 41 8888-3365</span></span>
              </a>
              <a href="mailto:contato@hiperliga.com.br" className="flex gap-4 rounded-2xl border border-white/10 p-4 transition-colors hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <span><strong className="block">E-mail Comercial</strong><span className="mt-1 block text-white/75">contato@hiperliga.com.br</span></span>
              </a>
              <div className="flex gap-4 rounded-2xl border border-white/10 p-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                <span><strong className="block">Fábrica Matriz</strong><span className="mt-1 block text-white/75">R. Antônio Camargo, 122 - Areias, Alm. Tamandaré - PR, 83514-140</span></span>
              </div>
            </div>
          </section>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm sm:p-9">
            <h2 className="font-display text-2xl font-bold text-brand-dark">Inicie uma conversa</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Informe seus dados para abrir o WhatsApp com a mensagem personalizada.</p>
            <div className="mt-8 space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-bold text-slate-700">Nome</label>
                <input id="contact-name" name="name" type="text" required value={name} onChange={(event) => setName(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label htmlFor="contact-sector" className="mb-2 block text-sm font-bold text-slate-700">Setor</label>
                <select id="contact-sector" name="sector" required value={sector} onChange={(event) => setSector(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option value="">Selecione um setor</option>
                  {sectors.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Iniciar conversa no WhatsApp <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
