import { useEffect, useState } from 'react';
import { 
  ArrowLeftRight, 
  Check, 
  X, 
  Calculator, 
  ShoppingBag, 
  ArrowUpRight, 
  Layers, 
  BookOpen, 
  Info, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Trash2, 
  Award,
  ChevronDown,
  Wrench,
  TrendingDown,
  Hammer,
  RotateCcw,
  BadgeAlert,
  HelpCircle,
  TrendingUp,
  Boxes
} from 'lucide-react';
import { motion } from 'motion/react';
import { SEOPageContent } from '../seoPagesData';
import { BLOCK_TYPES_DATA } from '../data';

interface SeoPageTemplateProps {
  data: SEOPageContent;
  onNavigate: (path: string) => void;
}

interface ThemeConfig {
  type: 'technical' | 'commercial' | 'application' | 'objection' | 'standard';
  bodyBg: string;
  headerBg: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  accentText: string;
  accentBg: string;
  primaryButton: string;
  cardBg: string;
  cardBorder: string;
  heroGlow: string;
}

// Dynamically classify and assign styles based on path slug keywords to prevent search engine layout footprint penalties
function getThemeBySlug(path: string): ThemeConfig {
  const s = path.toLowerCase();
  
  if (s.includes('tecnico') || s.includes('mpa') || s.includes('resistencia') || s.includes('compressao') || s.includes('laudo') || s.includes('normas') || s.includes('ac2') || s.includes('estrutura') || s.includes('arrancamento') || s.includes('cimento')) {
    return {
      type: 'technical',
      bodyBg: 'bg-slate-50 text-slate-800',
      headerBg: 'bg-slate-900',
      badgeBg: 'bg-blue-500/10',
      badgeBorder: 'border-blue-500/30',
      badgeText: 'text-blue-600 dark:text-blue-400',
      accentText: 'text-blue-600',
      accentBg: 'bg-blue-50',
      primaryButton: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/10',
      cardBg: 'bg-white',
      cardBorder: 'border-slate-200/90 hover:border-blue-300',
      heroGlow: 'bg-blue-500/10'
    };
  } else if (s.includes('preco') || s.includes('comprar') || s.includes('fabrica') || s.includes('atacado') || s.includes('quantidade') || s.includes('frete') || s.includes('loja') || s.includes('rendimento') || s.includes('venda') || s.includes('estocar') || s.includes('espaco')) {
    return {
      type: 'commercial',
      bodyBg: 'bg-[#faf8f5] text-stone-800',
      headerBg: 'bg-stone-950',
      badgeBg: 'bg-amber-600/10',
      badgeBorder: 'border-amber-600/30',
      badgeText: 'text-amber-800 dark:text-amber-400',
      accentText: 'text-amber-700',
      accentBg: 'bg-amber-50',
      primaryButton: 'bg-amber-700 hover:bg-amber-800 text-white shadow-amber-600/10',
      cardBg: 'bg-white',
      cardBorder: 'border-stone-200 hover:border-amber-400',
      heroGlow: 'bg-amber-500/10'
    };
  } else if (s.includes('como-') || s.includes('passo-') || s.includes('aplicar') || s.includes('assentar') || s.includes('fazer') || s.includes('uso') || s.includes('guias') || s.includes('massa-pronta') || s.includes('chapisco') || s.includes('reboco')) {
    return {
      type: 'application',
      bodyBg: 'bg-[#f6faf8] text-slate-800',
      headerBg: 'bg-emerald-950',
      badgeBg: 'bg-emerald-600/15',
      badgeBorder: 'border-emerald-600/30',
      badgeText: 'text-emerald-800 dark:text-emerald-400',
      accentText: 'text-emerald-700',
      accentBg: 'bg-emerald-50',
      primaryButton: 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-600/10',
      cardBg: 'bg-white',
      cardBorder: 'border-emerald-100/90 hover:border-emerald-400',
      heroGlow: 'bg-emerald-500/10'
    };
  } else if (s.includes('problema') || s.includes('se-chover') || s.includes('infiltracao') || s.includes('trinca') || s.includes('risco') || s.includes('duvida') || s.includes('obeco') || s.includes('mitos') || s.includes('rejeitar')) {
    return {
      type: 'objection',
      bodyBg: 'bg-[#0f172a] text-slate-100', // Immersion Slate Dark Mode for Objections handle
      headerBg: 'bg-slate-950 border-b border-slate-800',
      badgeBg: 'bg-teal-500/15',
      badgeBorder: 'border-teal-500/30',
      badgeText: 'text-teal-400',
      accentText: 'text-teal-400',
      accentBg: 'bg-teal-950/30 border border-teal-800/40',
      primaryButton: 'bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold',
      cardBg: 'bg-slate-800/60',
      cardBorder: 'border-slate-700/60 hover:border-teal-500/60',
      heroGlow: 'bg-teal-500/10'
    };
  } else {
    return {
      type: 'standard',
      bodyBg: 'bg-white text-slate-900',
      headerBg: 'bg-slate-900',
      badgeBg: 'bg-emerald-500/10',
      badgeBorder: 'border-emerald-500/30',
      badgeText: 'text-primary',
      accentText: 'text-primary',
      accentBg: 'bg-emerald-50/50',
      primaryButton: 'bg-primary hover:bg-primary-dark text-white',
      cardBg: 'bg-white',
      cardBorder: 'border-slate-200/80 hover:border-primary/50',
      heroGlow: 'bg-emerald-500/10'
    };
  }
}

export function SeoPageTemplate({ data, onNavigate }: SeoPageTemplateProps) {
  const { type, bodyBg, headerBg, badgeBg, badgeBorder, badgeText, accentText, accentBg, primaryButton, cardBg, cardBorder, heroGlow } = getThemeBySlug(data.path);

  // Page Meta & SEO Headers Injection on Mount
  useEffect(() => {
    document.title = data.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', data.metaDescription);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', data.canonical);

    // Dynamic JSON-LD injection
    const scriptId = 'seo-json-ld-script';
    let jsonLdScript = document.getElementById(scriptId) as HTMLScriptElement;
    if (jsonLdScript) {
      jsonLdScript.remove();
    }
    
    jsonLdScript = document.createElement('script');
    jsonLdScript.id = scriptId;
    jsonLdScript.type = 'application/ld+json';

    let schemaObject: any = {};

    if (data.schemaType === 'FAQPage') {
      schemaObject = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': data.faq.map(item => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        }))
      };
    } else if (data.schemaType === 'Product') {
      schemaObject = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': data.title,
        'image': 'https://loja.hiperliga.com.br/wp-content/uploads/2025/08/25-0KG-800.png',
        'description': data.metaDescription,
        'brand': {
          '@type': 'Brand',
          'name': 'Hiperliga'
        },
        'offers': {
          '@type': 'AggregateOffer',
          'url': 'https://loja.hiperliga.com.br/',
          'priceCurrency': 'BRL',
          'lowPrice': '35.00',
          'highPrice': '290.00',
          'offerCount': '5'
        }
      };
    } else { // Article
      schemaObject = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        'headline': data.h1,
        'description': data.metaDescription,
        'image': [
          'https://loja.hiperliga.com.br/wp-content/uploads/2025/08/25-0KG-800.png'
        ],
        'datePublished': '2026-01-10T08:00:00+08:00',
        'dateModified': '2026-06-22T08:00:00+08:00',
        'author': {
          '@type': 'Organization',
          'name': 'Engenharia Hiperliga',
          'url': 'https://loja.hiperliga.com.br'
        }
      };
    }

    jsonLdScript.text = JSON.stringify(schemaObject);
    document.head.appendChild(jsonLdScript);

    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      const targetScript = document.getElementById(scriptId);
      if (targetScript) targetScript.remove();
    };
  }, [data]);

  // Dynamic Calculator States
  const [calcArea, setCalcArea] = useState<number>(100);
  const [selectedBlockId, setSelectedBlockId] = useState<string>('ceramic_8_hole');
  const selectedBlock = BLOCK_TYPES_DATA.find(b => b.id === selectedBlockId) || BLOCK_TYPES_DATA[0];

  // Output yield equations
  const requiredKg = Number((calcArea * selectedBlock.consumptionPerSqm).toFixed(1));
  const bisnagas3kg = Math.ceil(requiredKg / 3);
  const barricas25kg = Math.ceil(requiredKg / 25);
  const barricas40kg = Math.ceil(requiredKg / 40);
  const timeSavedHours = Math.max(1, Math.round((calcArea * 0.8) - (calcArea * 0.25)));
  const weightSavedKg = Math.max(10, Math.round((calcArea * 23) - requiredKg));

  // Financial calculations for Commercial pages highlight
  const estimatedCostDiff = Math.max(140, Math.round(calcArea * 18.5));

  // Accordion indices
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0); // Initialize first FAQ as expanded for helpful immediate rendering

  // Buttons customization
  const ctaTranslations = [
    'Comprar na Loja Oficial',
    'Simular Rendimento Completo',
    'Garantir Desconto de Fábrica',
    'Solicitar Orçamento Especial',
    'Ver Promoções Ativas'
  ];
  const getCtaText = (seed: number) => ctaTranslations[seed % ctaTranslations.length];

  // Helper markup components to maintain code modularity & cleaner DOM trees
  const Breadcrumbs = () => (
    <div className={`${headerBg} border-b border-white/5 pt-24 pb-4 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 text-xs font-mono text-gray-400">
            <li>
              <button 
                onClick={() => onNavigate('/')}
                className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-300 font-bold"
              >
                Home
              </button>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-3 h-3 text-gray-600 shrink-0 mx-1" />
              <span className="text-gray-400">Hub Técnico</span>
            </li>
            <li className="flex items-center" aria-current="page">
              <ChevronRight className="w-3 h-3 text-gray-600 shrink-0 mx-1" />
              <span className="text-white font-bold truncate max-w-[220px] sm:max-w-xs">{data.h1.split('|')[0]}</span>
            </li>
          </ol>
        </nav>
        <button 
          onClick={() => onNavigate('/')}
          className="text-xs font-mono text-emerald-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
        >
          ← Voltar ao Início
        </button>
      </div>
    </div>
  );

  const HeroSection = () => {
    let badgeLabel = "Selo de Garantia Hiperliga";
    if (type === 'technical') badgeLabel = "Laudo Técnico e Certificações";
    if (type === 'commercial') badgeLabel = "Preços Especiais Direto de Fábrica";
    if (type === 'application') badgeLabel = "Guia Operacional Prático";
    if (type === 'objection') badgeLabel = "Esclarecimento de Mitos do Canteiro";

    return (
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className={`absolute top-0 right-0 w-96 h-96 ${heroGlow} rounded-full blur-[120px] pointer-events-none`} />
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <span className={`font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider ${badgeBg} border ${badgeBorder} ${badgeText} px-4 py-1.5 rounded-full inline-block`}>
            {badgeLabel}
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-tight max-w-4xl mx-auto text-white">
            {data.h1}
          </h1>
          <p className="text-slate-300 font-sans text-xs sm:text-base max-w-3xl mx-auto leading-relaxed">
            {data.tagline}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://loja.hiperliga.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 ${primaryButton} font-sans font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition-all shadow-md hover:-translate-y-0.5`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{getCtaText(0)}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#estimativa-rendimento"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 font-sans font-medium text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all border border-slate-700"
            >
              <Calculator className="w-4 h-4" />
              <span>Simular Meu Rendimento</span>
            </a>
          </div>
        </div>
      </section>
    );
  };

  const ProblemSolutionGrid = () => {
    // Customize text slightly contextually inside the boxes for some extra variety
    const isObjection = type === 'objection';

    return (
      <section className="py-16 bg-transparent px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* The Problem/Myth Block */}
            <div className={`${cardBg} border ${cardBorder} p-8 rounded-3xl flex flex-col justify-between shadow-xs relative overflow-hidden transition-all duration-300`}>
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500" />
              <div>
                <span className="text-red-500 font-mono text-[9px] tracking-wider uppercase font-bold bg-red-100 dark:bg-red-950/40 px-2 py-0.5 rounded">
                  {isObjection ? 'Dúvida Comum / Mito Inicial' : 'Obstáculo Tradicional'}
                </span>
                <h2 className={`text-xl sm:text-2xl font-display font-extrabold mt-4 leading-tight ${type === 'objection' ? 'text-white' : 'text-slate-900'}`}>
                  {data.problemTitle}
                </h2>
                <p className={`text-xs sm:text-sm leading-relaxed mt-4 ${type === 'objection' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {data.problemDescription}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800 flex items-center gap-2 text-red-500 text-xs font-semibold">
                <X className="w-4 h-4 shrink-0" />
                <span>Impacto: Desperdício de tempo faturado, perdas materiais e dores logísticas.</span>
              </div>
            </div>

            {/* The Solution/Truth Block */}
            <div className="bg-slate-950 border border-slate-900 p-8 rounded-3xl flex flex-col justify-between shadow-lg relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
              <div>
                <span className="text-emerald-400 font-mono text-[9px] tracking-wider uppercase font-extrabold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {isObjection ? 'Fato Científico Comprovado' : 'Solução Polimérica Hiperliga'}
                </span>
                <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-4 leading-tight">
                  {data.solutionTitle}
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-4">
                  {data.solutionDescription}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Resultado: Colagem segura, prumo garantido e obra até 3x mais limpa.</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  };

  const BenefitsGrid = () => (
    <section className="py-16 bg-slate-100/40 dark:bg-slate-900/60 border-y border-slate-200/40 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <span className={`font-mono text-[10px] tracking-widest uppercase font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-full inline-block`}>
          Vantagens de Alto Impacto
        </span>
        <h2 className={`text-2xl sm:text-3xl font-display font-black mt-4 max-w-xl mx-auto tracking-tight ${type === 'objection' ? 'text-white' : 'text-slate-900'}`}>
          Por que profissionais preferem a Hiperliga?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-left">
          {data.benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className={`${cardBg} ${cardBorder} p-6 rounded-2xl shadow-xs border flex flex-col justify-between group transition-all duration-300`}
            >
              <div>
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs font-mono mb-4">
                  0{idx + 1}
                </span>
                <h3 className={`font-display font-bold text-base mb-2 group-hover:text-emerald-500 transition-colors ${type === 'objection' ? 'text-white' : 'text-slate-900'}`}>
                  {benefit.title}
                </h3>
                <p className={`font-sans text-xs sm:text-sm leading-relaxed ${type === 'objection' ? 'text-slate-300' : 'text-gray-600'}`}>
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ComparativeTable = () => (
    <section className="py-16 bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-mono text-[9px] tracking-wider uppercase font-bold bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">
            Análise Operacional de Canteiro
          </span>
          <h2 className={`text-2xl font-display font-bold mt-2 ${type === 'objection' ? 'text-white' : 'text-slate-900'}`}>
            Comparação Direta: Tradicional vs Hiperliga
          </h2>
        </div>

        <div className="border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-sans">
              <thead>
                <tr className="bg-slate-900 text-white font-display text-[10px] tracking-wider uppercase">
                  <th className="p-4">Índice Comparado</th>
                  <th className="p-4">Argamassa de Cal e Pó</th>
                  <th className="p-4 text-emerald-400">Polimérica Hiperliga</th>
                </tr>
              </thead>
              <tbody className={`divide-y divide-slate-100 dark:divide-slate-800 ${type === 'objection' ? 'bg-slate-900/40 text-slate-300' : 'bg-white text-slate-700'}`}>
                <tr>
                  <td className="p-4 font-semibold text-emerald-500">Massa por m² levantado</td>
                  <td className="p-4">Até 35 kg / m²</td>
                  <td className="p-4 font-bold text-emerald-600 bg-emerald-500/5">Apenas 1,5 kg a 2,0 kg</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-emerald-500">Velocidade de Processamento</td>
                  <td className="p-4">Lento (exige betoneira)</td>
                  <td className="p-4 font-bold text-emerald-600 bg-emerald-500/5">Instantâneo (bisnagas prontas)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-emerald-500">Entulho e Perda Seca</td>
                  <td className="p-4">Cerca de 20% de perda no chão</td>
                  <td className="p-4 font-bold text-emerald-600 bg-emerald-500/5">Praticamente 0% desperdiçado</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-emerald-500">Espessura da Junta Coberta</td>
                  <td className="p-4">Espessa (1,5 cm a 2,0 cm)</td>
                  <td className="p-4 font-bold text-emerald-600 bg-emerald-500/5">Fina (2 mm a 3 mm)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );

  const UsageMeasures = () => (
    <section className="py-16 bg-slate-950 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 font-mono text-[9px] uppercase font-bold">
              <Check className="w-3.5 h-3.5 shrink-0" />
              <span>Onde se Consagra</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-black text-white">
              Aplicações e Cenários Recomendados
            </h2>
            <ul className="space-y-3 pt-2">
              {data.whenToUse.map((it, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20 font-mono text-[9px] uppercase font-bold">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Limitações e Cuidados</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-black text-white">
              Onde NÃO aplicar e advertências
            </h2>
            <ul className="space-y-3 pt-2">
              {data.whenNotToUse.map((it, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm">
                  <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );

  const StepByStepGuide = () => {
    // Determine card structure for Application Guide pages to ensure unique layouts
    const isApplication = type === 'application';

    return (
      <section className="py-16 bg-transparent px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="font-mono text-[9px] tracking-widest uppercase font-bold bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">
            Manual de Boas Práticas
          </span>
          <h2 className={`text-2xl font-display font-bold mt-2 ${type === 'objection' ? 'text-white' : 'text-slate-900'}`}>
            Procedimento Correto de Aplicação
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1 max-w-lg mx-auto">
            Siga estas diretrizes do laboratório de engenharia para atingir a resistência de colagem ideal especificada.
          </p>
        </div>

        {isApplication ? (
          // Creative Alternating Bento-Style list for application guides
          <div className="max-w-3xl mx-auto space-y-6">
            {data.steps.map((step, idx) => (
              <div 
                key={idx} 
                className="flex flex-col sm:flex-row gap-6 bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-emerald-100 hover:border-emerald-400 transition-all shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-mono font-black text-xl flex items-center justify-center shrink-0">
                  {step.step}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display font-extrabold text-base text-slate-900 dark:text-white">{step.title}</h4>
                  <p className="text-slate-500 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Clean Horizontal Columns for standard technical listings
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            {data.steps.map((step, idx) => (
              <div key={idx} className="relative z-10 space-y-3 p-4 bg-white/50 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-slate-950 text-white font-mono font-black text-sm flex items-center justify-center">
                  {step.step}
                </div>
                <h3 className={`font-display font-bold text-sm ${type === 'objection' ? 'text-white' : 'text-slate-900'}`}>
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  };

  const EstimatorCalculatorWidget = () => (
    <section 
      id="estimativa-rendimento" 
      className="py-16 bg-slate-100/60 dark:bg-slate-950 border-t border-b border-slate-200/50 dark:border-slate-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls column */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              <div>
                <span className="text-emerald-600 font-mono text-[9px] tracking-wider uppercase font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  Simulação de Demanda
                </span>
                <h3 className="text-lg sm:text-2xl font-display font-black text-slate-950 dark:text-white mt-1">
                  {data.calculatorTitle}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mt-1">
                  Estime o rendimento de bisnagas ou barricas de cola de forma totalmente customizada de acordo com a metragem da sua alvenaria de tijolos.
                </p>
              </div>

              {/* Slider area */}
              <div className="space-y-2">
                <label htmlFor="area-slider" className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex justify-between">
                  <span>Metragem total da parede</span>
                  <strong className="text-emerald-700 dark:text-emerald-300 font-mono bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded text-xs">
                    {calcArea} m²
                  </strong>
                </label>
                <input
                  id="area-slider"
                  type="range"
                  min="5"
                  max="500"
                  value={calcArea}
                  onChange={(e) => setCalcArea(Number(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex gap-2 justify-between flex-wrap">
                  {[20, 50, 100, 200, 400].map((val) => (
                    <button
                      key={val}
                      onClick={() => setCalcArea(val)}
                      className={`px-2 py-0.5 rounded font-mono text-[9px] border transition-colors cursor-pointer ${
                        calcArea === val 
                          ? 'bg-emerald-600 text-white border-emerald-600' 
                          : 'bg-white text-slate-500 hover:bg-slate-100 border-slate-200'
                      }`}
                    >
                      {val} m²
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector */}
              <div className="space-y-1.5">
                <label htmlFor="block-selector" className="text-xs font-medium text-slate-700 dark:text-slate-300">Formato / Formato do Bloco</label>
                <select
                  id="block-selector"
                  value={selectedBlockId}
                  onChange={(e) => setSelectedBlockId(e.target.value)}
                  className="w-full border border-slate-200 bg-slate-50 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-emerald-600 cursor-pointer"
                >
                  {BLOCK_TYPES_DATA.map((block) => (
                    <option key={block.id} value={block.id}>
                      {block.name} (consumo: {block.consumptionPerSqm} kg/m²)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Micro disclaimer */}
            <div className="mt-6 bg-slate-50 border border-slate-100 p-3.5 rounded-lg flex gap-2 text-[10px] text-gray-500">
              <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p>
                *Rendimento ideal baseado em blocos limpos, sem quebras grosseiras nas frentes de assentamento das fiadas.
              </p>
            </div>
          </div>

          {/* Results column */}
          <div className="lg:col-span-12 xl:col-span-7 bg-slate-950 text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden border border-slate-900 shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-white font-display font-medium text-xs sm:text-sm">Consumo Estimado Técnico</h4>
                  <span className="text-gray-400 font-mono text-[9px]">CÁLCULO ATUALIZADO</span>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 font-mono text-[9px] px-2 py-0.5 rounded">
                  Economia Gerada
                </span>
              </div>

              {/* Displaying numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                  <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider block">Peso Estimado Total</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-display font-black text-emerald-400">{requiredKg}</span>
                    <span className="text-sm font-display text-gray-400">Kilogramas</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                  <span className="text-emerald-400 font-mono text-[9px] uppercase tracking-wider block">Tempo de Mão de Obra Salvo</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-display font-black text-white">~{timeSavedHours}</span>
                    <span className="text-sm text-gray-400">Horas Úteis</span>
                  </div>
                </div>
              </div>

              {type === 'commercial' && (
                // Extra custom visual element specifically for commercial intents
                <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl flex items-center justify-between text-left">
                  <div className="space-y-0.5">
                    <span className="text-emerald-400 font-mono text-[9px] font-bold block uppercase">Preço / Payback Total Estimado</span>
                    <h5 className="text-white font-display font-bold text-sm">Economia financeira direta estimada:</h5>
                    <p className="text-slate-300 text-[11px]">Substituindo masseiras tradicionais no canteiro.</p>
                  </div>
                  <strong className="text-emerald-400 font-display text-lg sm:text-xl font-black bg-emerald-500/10 px-3 py-1.5 rounded-lg shrink-0">
                    ~ R$ {estimatedCostDiff.toLocaleString('pt-BR')}
                  </strong>
                </div>
              )}

              {/* Package quantities mapping */}
              <div className="space-y-3 pt-2">
                <span className="text-slate-400 font-mono text-[9px] tracking-wider uppercase block">Embalagens recomendadas:</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white/5 border border-white/5 p-3 rounded-lg text-left">
                    <span className="text-[9px] text-zinc-400 block font-mono">BISNAGA 3KG</span>
                    <strong className="text-sm text-white font-mono mt-0.5 block">{bisnagas3kg} unidades</strong>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-lg text-left">
                    <span className="text-[9px] text-zinc-400 block font-mono">BARRICA 25KG</span>
                    <strong className="text-sm text-white font-mono mt-0.5 block">{barricas25kg} unidades</strong>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-lg text-left">
                    <span className="text-[9px] text-zinc-400 block font-mono">BARRICA 40KG</span>
                    <strong className="text-sm text-white font-mono mt-0.5 block">{barricas40kg} unidades</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Shop button CTA */}
            <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4 relative z-10">
              <a
                href="https://loja.hiperliga.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-sans font-bold text-xs px-5 py-3 rounded-xl transition-all shadow"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Ir à Loja de Fábrica Online</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );

  const BrandAuthorityAndCertifications = () => (
    <section className="py-16 bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="font-mono text-[9px] tracking-widest uppercase font-bold bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">
          Conformidade e Laudos
        </span>
        <h2 className={`text-2xl font-display font-bold mt-2 ${type === 'objection' ? 'text-white' : 'text-slate-900'}`}>
          Tecnologia Hiperliga: Qualidade Cientificamente Aprovada
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className={`${cardBg} ${cardBorder} p-6 rounded-xl border`}>
          <Award className="w-8 h-8 text-emerald-500" />
          <h4 className={`font-display font-bold text-base mt-4 mb-2 ${type === 'objection' ? 'text-white' : 'text-slate-900'}`}>Ensaios Dinâmicos</h4>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Nossos lotes de resinas passam por auditoria microscópica com laudo de teste de arrancamento por tração direta de MPA regulamentados.
          </p>
        </div>

        <div className={`${cardBg} ${cardBorder} p-6 rounded-xl border`}>
          <ShieldCheck className="w-8 h-8 text-emerald-500" />
          <h4 className={`font-display font-bold text-base mt-4 mb-2 ${type === 'objection' ? 'text-white' : 'text-slate-900'}`}>Estanqueidade Absoluta</h4>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Diga adeus à umidade ascendente e infiltrações indesejadas no pé da parede de vedação exterior através da barreira elástica do produto.
          </p>
        </div>

        <div className={`${cardBg} ${cardBorder} p-6 rounded-xl border`}>
          <Layers className="w-8 h-8 text-emerald-500" />
          <h4 className={`font-display font-bold text-base mt-4 mb-2 ${type === 'objection' ? 'text-white' : 'text-slate-900'}`}>Aprovado por Incorporadoras</h4>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Recomendada por engenheiros de grandes condomínios e residenciais multifamiliares de múltiplos pavimentos do país.
          </p>
        </div>
      </div>
    </section>
  );

  const FAQAccordion = () => (
    <section className="py-16 bg-slate-100/40 dark:bg-slate-950 border-t border-slate-200/40 dark:border-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-mono text-[9px] tracking-widest uppercase font-bold bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">
            Perguntas Técnicas
          </span>
          <h2 className={`text-2xl font-display font-bold mt-2 ${type === 'objection' ? 'text-white' : 'text-slate-900'}`}>
            Dúvidas Técnicas Esclarecidas
          </h2>
        </div>

        <div className="space-y-3.5">
          {data.faq.map((it, i) => (
            <div 
              key={i} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${cardBg} ${cardBorder}`}
            >
              <button 
                onClick={() => setExpandedFaqIndex(expandedFaqIndex === i ? null : i)}
                className="w-full text-left p-4 sm:p-5 font-display font-bold text-xs sm:text-base flex justify-between items-center cursor-pointer select-none"
              >
                <span className={type === 'objection' ? 'text-slate-100' : 'text-slate-900'}>{it.question}</span>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-850 transition-all ${expandedFaqIndex === i ? 'rotate-180 text-emerald-500' : ''}`}>
                  <ChevronDown className="w-4 h-4 shrink-0" />
                </span>
              </button>
              {expandedFaqIndex === i && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-sans border-t border-slate-100 dark:border-slate-800">
                  {it.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const BottomConversionCTA = () => (
    <section className="py-16 bg-neutral-950 text-white text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-in">
        <h2 className="text-xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
          Pronto para otimizar as alvenarias da sua construção?
        </h2>
        <p className="text-gray-400 font-sans text-xs sm:text-sm max-w-xl mx-auto">
          Adquira as bisnagas de 3kg ou encomende pallets fechados de barricas industriais de 25kg e 40kg direto da fábrica online com garantia absoluta de qualidade.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://loja.hiperliga.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-sans font-bold text-xs sm:text-sm px-8 py-3 rounded-xl transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-emerald-950 shrink-0" />
            <span>Adquirir na Loja Oficial</span>
          </a>
          <a
            href="https://wa.me/554188883365"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-850 text-slate-100 font-sans text-xs sm:text-sm px-6 py-3 rounded-xl transition-all border border-slate-800"
          >
            <span>WhatsApp Atendente Geral</span>
          </a>
        </div>
      </div>
    </section>
  );

  const RelatedGuidesFooterLinks = () => (
    <section className="py-12 bg-transparent border-t border-slate-200/40 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-left space-y-4">
        <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Consulte Coleções Relacionadas:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {data.relatedLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(link.href)}
              className="p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800 hover:border-emerald-500 bg-white/40 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition-all text-xs font-semibold text-left flex items-center justify-between group cursor-pointer"
            >
              <span className="truncate pr-1 group-hover:text-emerald-500">{link.label}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );

  // Render Pipeline dynamically varying order/layout of pages depending on slug taxonomy
  return (
    <article className={`min-h-screen ${bodyBg} font-sans`} id="seo-page-main-container">
      <Breadcrumbs />

      {type === 'technical' && (
        <>
          <HeroSection />
          <ComparativeTable />
          <ProblemSolutionGrid />
          <BenefitsGrid />
          <StepByStepGuide />
          <EstimatorCalculatorWidget />
          <BrandAuthorityAndCertifications />
          <FAQAccordion />
          <BottomConversionCTA />
          <RelatedGuidesFooterLinks />
        </>
      )}

      {type === 'commercial' && (
        <>
          <HeroSection />
          <EstimatorCalculatorWidget />
          <BenefitsGrid />
          <ProblemSolutionGrid />
          <BrandAuthorityAndCertifications />
          <FAQAccordion />
          <BottomConversionCTA />
          <RelatedGuidesFooterLinks />
        </>
      )}

      {type === 'application' && (
        <>
          <HeroSection />
          <StepByStepGuide />
          <ProblemSolutionGrid />
          <ComparativeTable />
          <BenefitsGrid />
          <EstimatorCalculatorWidget />
          <FAQAccordion />
          <BottomConversionCTA />
          <RelatedGuidesFooterLinks />
        </>
      )}

      {type === 'objection' && (
        <>
          <HeroSection />
          <ProblemSolutionGrid />
          <FAQAccordion />
          <BenefitsGrid />
          <BrandAuthorityAndCertifications />
          <ComparativeTable />
          <EstimatorCalculatorWidget />
          <BottomConversionCTA />
          <RelatedGuidesFooterLinks />
        </>
      )}

      {type === 'standard' && (
        <>
          <HeroSection />
          <ProblemSolutionGrid />
          <BenefitsGrid />
          <ComparativeTable />
          <StepByStepGuide />
          <EstimatorCalculatorWidget />
          <FAQAccordion />
          <BrandAuthorityAndCertifications />
          <BottomConversionCTA />
          <RelatedGuidesFooterLinks />
        </>
      )}
    </article>
  );
}

export default SeoPageTemplate;
