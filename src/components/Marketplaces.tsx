import { ArrowUpRight, MessageCircle, ShoppingBag } from 'lucide-react';
import { EXPERT_CONTACT_WHATSAPP, MARKETPLACE_LINKS } from '../data';

const CHANNELS = [
  { label: 'Loja oficial', description: 'Catálogo e compra direta', href: 'https://loja.hiperliga.com.br/', Icon: ShoppingBag },
  { label: 'WhatsApp', description: 'Orientação e atendimento', href: EXPERT_CONTACT_WHATSAPP, Icon: MessageCircle },
  ...Object.values(MARKETPLACE_LINKS).map((marketplace) => ({ label: marketplace.label, description: 'Encontre produtos Hiperliga', href: marketplace.href, Icon: ShoppingBag })),
];

export default function Marketplaces() {
  return (
    <section id="marketplaces" className="bg-white py-24 text-slate-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="grid gap-8 border-b border-slate-200 pb-12 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primary">Onde encontrar</p><h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">Escolha o canal mais conveniente.</h2></div><p className="max-w-md text-base leading-7 text-slate-600 lg:justify-self-end">Acesse a loja, encontre anúncios nos marketplaces ou fale diretamente com a equipe Hiperliga.</p></header>
        <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map(({ label, description, href, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group flex min-h-48 flex-col justify-between bg-white p-6 transition-colors hover:bg-brand-dark hover:text-white sm:p-7 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"><div className="flex items-start justify-between"><Icon className="h-6 w-6 text-primary group-hover:text-emerald-300" aria-hidden="true" /><ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-white" aria-hidden="true" /></div><div><h3 className="font-display text-xl font-extrabold text-brand-dark group-hover:text-white">{label}</h3><p className="mt-2 text-sm text-slate-500 group-hover:text-slate-300">{description}</p></div></a>)}
        </div>
      </div>
    </section>
  );
}
