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
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';
import { SEOPageContent } from '../seoPagesData';
import { BLOCK_TYPES_DATA } from '../data';

interface SeoPageTemplateProps {
  data: SEOPageContent;
  onNavigate: (path: string) => void;
}

export function SeoPageTemplate({ data, onNavigate }: SeoPageTemplateProps) {
  // Page Meta & SEO Headers Injection on Mount
  useEffect(() => {
    // 1. Title
    document.title = data.title;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', data.metaDescription);

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', data.canonical);

    // 4. JSON-LD Dynamic Injection
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

    // Scroll to top on load
    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      // Remove JSON-LD on unmount to keep clean DOM
      const targetScript = document.getElementById(scriptId);
      if (targetScript) targetScript.remove();
    };
  }, [data]);

  // Dynamic Widget Calculator State
  const [calcArea, setCalcArea] = useState<number>(80);
  const [selectedBlockId, setSelectedBlockId] = useState<string>('ceramic_8_hole');
  const selectedBlock = BLOCK_TYPES_DATA.find(b => b.id === selectedBlockId) || BLOCK_TYPES_DATA[0];

  // Calculadora Express formulas
  const requiredKg = Number((calcArea * selectedBlock.consumptionPerSqm).toFixed(1));
  const bisnagas3kg = Math.ceil(requiredKg / 3);
  const barricas25kg = Math.ceil(requiredKg / 25);
  const barricas40kg = Math.ceil(requiredKg / 40);
  const timeSavedHours = Math.max(1, Math.round((calcArea * 0.8) - (calcArea * 0.25)));
  const weightSavedKg = Math.max(10, Math.round((calcArea * 23) - requiredKg));

  // FAQ Expanded index state (rendered semantic, so always searchable, but visual toggling for nice UI)
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  // Conversion Button Texts
  const ctaBtnTexts = [
    'Comprar na Loja Oficial',
    'Ver Produtos Hiperliga',
    'Calcular Rendimento',
    'Solicitar Orçamento',
    'Ver Opções para Minha Obra'
  ];

  const getCtaText = (index: number) => ctaBtnTexts[index % ctaBtnTexts.length];

  return (
    <article className="min-h-screen bg-white text-slate-900 font-sans" id="seo-page-main-container">
      {/* 1. Header/Navigation Anchor & Dynamic Rich Breadcrumbs */}
      <div className="bg-slate-900 border-b border-slate-800 pt-24 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <nav className="flex" aria-label="Breadcrumb" id="seo-breadcrumbs-nav">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 text-xs font-mono text-gray-400">
              <li className="inline-flex items-center">
                <button 
                  onClick={() => onNavigate('/')}
                  className="inline-flex items-center hover:text-primary transition-colors cursor-pointer text-slate-300 font-bold"
                >
                  Home
                </button>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-3 h-3 text-gray-500 shrink-0 mx-1" />
                  <span className="text-gray-400 font-medium">Soluções</span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-3 h-3 text-gray-500 shrink-0 mx-1" />
                  <span className="text-white font-bold truncate max-w-[200px] sm:max-w-xs">{data.h1.split('|')[0]}</span>
                </div>
              </li>
            </ol>
          </nav>
          <button 
            onClick={() => onNavigate('/')}
            className="text-xs font-mono text-primary font-bold hover:underline self-start md:self-center flex items-center gap-1.5 cursor-pointer"
          >
            ← Voltar para a Página Principal
          </button>
        </div>
      </div>

      {/* 2. PREMIUM HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <span className="text-primary font-mono text-xs font-extrabold uppercase tracking-widest bg-primary/15 border border-primary/30 px-3.5 py-1.5 rounded-full inline-block">
            Selo de Confiabilidade Construtiva
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight max-w-4xl mx-auto text-white">
            {data.h1}
          </h1>
          <p className="text-slate-300 font-sans text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {data.tagline}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://loja.hiperliga.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-extrabold text-sm px-8 py-4.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
              id="hero-cta-btn"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{getCtaText(0)}</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
            <a
              href="#calculadora-seo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 font-sans font-semibold text-sm px-8 py-4.5 rounded-xl transition-all border border-slate-700"
            >
              <Calculator className="w-4 h-4" />
              <span>{getCtaText(2)}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. CORE CONTENT MODULE: PROBLEM VS SOLUTION (BENTO-STYLE GRID) */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* The Problem Block */}
            <div className="bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-3xl flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500" />
              <div>
                <span className="text-red-500 font-mono text-[10px] tracking-wider uppercase font-bold bg-red-100 px-2 py-1 rounded">Análise de Campo</span>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 mt-4 leading-tight">
                  {data.problemTitle}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-5">
                  {data.problemDescription}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-3 text-red-600 text-xs font-semibold">
                <X className="w-4 h-4" />
                <span>Método tradicional: Cansaço, desperdício mecânico e custos de manutenção pós-obra.</span>
              </div>
            </div>

            {/* The Hiperliga Solution Block */}
            <div className="bg-slate-950 border border-slate-900 p-8 sm:p-10 rounded-3xl flex flex-col justify-between shadow-xl relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <span className="text-primary font-mono text-[10px] tracking-wider uppercase font-extrabold bg-primary/15 px-2.5 py-1 rounded border border-primary/30">Ciência Aplicada</span>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-4 leading-tight">
                  {data.solutionTitle}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-5">
                  {data.solutionDescription}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3 text-primary text-xs font-bold">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Modernidade Hiperliga: Pronto para uso, alto rendimento físico e aderência máxima de ancoragem.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PRACTICAL BENEFITS LISTING */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary font-mono text-xs font-extrabold uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full inline-block">
            Vantagens Operacionais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 mt-4 tracking-tight">
            Por que trocar o cimento por Hiperliga?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-2 mb-12">
            Métricas de desempenho reais comprovadas em ensaios laboratoriais e obras de incorporações de grande porte.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between text-left group hover:border-primary transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-base mb-4 shrink-0 font-mono">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-sans text-xs sm:text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMPARATIVE MATRIX (TABLE) */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <span className="text-primary font-mono text-xs font-extrabold uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full inline-block">
            Métricas Técnico-Financeiras
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 mt-4">
            Comparativo de Desempenho Construtivo
          </h2>
        </div>

        <div className="max-w-4xl mx-auto border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm font-sans">
              <thead>
                <tr className="bg-slate-900 text-white font-display border-b border-slate-800 text-xs tracking-wider uppercase font-bold">
                  <th className="p-4 sm:p-5">Critério de Avaliação</th>
                  <th className="p-4 sm:p-5">Método Tradicional (Cimento/Areia)</th>
                  <th className="p-4 sm:p-5 text-primary">Argamassa Polimérica Hiperliga</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 bg-white text-xs sm:text-sm">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Velocidade de assentamento</td>
                  <td className="p-4 sm:p-5">Até 400 blocos por pedreiro/dia</td>
                  <td className="p-4 sm:p-5 font-semibold text-emerald-600 bg-emerald-50/20">Até 1.500 blocos por pedreiro/dia</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Desperdício de massa no chão</td>
                  <td className="p-4 sm:p-5">Entre 20% e 25% de quebra nas masseiras</td>
                  <td className="p-4 sm:p-5 font-semibold text-emerald-600 bg-emerald-50/20">Aproximadamente 0% (direto no bloco)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Peso aplicado à estrutura</td>
                  <td className="p-4 sm:p-5">~23 kg por metro quadrado de alvenaria</td>
                  <td className="p-4 sm:p-5 font-semibold text-emerald-600 bg-emerald-50/20">~1.5 kg por metro quadrado de alvenaria</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Água e Energia no canteiro</td>
                  <td className="p-4 sm:p-5">Abastecimento frequente de betoneiras</td>
                  <td className="p-4 sm:p-5 font-semibold text-emerald-600 bg-emerald-50/20">Zero consumo. Produto pré-misturado</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Espessura média de junta</td>
                  <td className="p-4 sm:p-5 font-semibold">1,5 cm a 2,0 cm de vão grosseiro</td>
                  <td className="p-4 sm:p-5 font-semibold text-emerald-600 bg-emerald-50/20">2 mm a 3 mm de união colada microfina</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. WHEN TO USE & WHEN NOT TO USE OR SAFETY MEASURES */}
      <section className="py-20 bg-slate-950 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Grid vector in dark bg */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* When to use block */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 font-mono text-xs uppercase font-extrabold">
                <Check className="w-3.5 h-3.5" />
                <span>Recomendado & Indicado</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Situações ideais: Quando usar?
              </h2>
              <p className="text-gray-400 text-sm">
                Economize custos operacionais nos seguintes vãos estruturais e obras autorizadas:
              </p>
              <ul className="space-y-3.5 pt-2" id="seo-when-to-use-list">
                {data.whenToUse.map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-200 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When not to use / safety measures */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20 font-mono text-xs uppercase font-extrabold">
                <Info className="w-3.5 h-3.5" />
                <span>Restrições & Cuidados</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Quando NÃO usar e cuidados essenciais
              </h2>
              <p className="text-gray-400 text-sm">
                Garantir a integridade da parede exige seguir de forma ética as limitações técnicas e normativas:
              </p>
              <ul className="space-y-3.5 pt-2" id="seo-when-not-to-use-list">
                {data.whenNotToUse.map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-200 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 7. STEP-BY-STEP APPLICATION GUIDE */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span className="text-primary font-mono text-xs font-extrabold uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full inline-block">
            Procedimento Operacional
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 mt-4 leading-tight">
            Passo a passo de aplicação correto
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Seguir os passos corretos garante estanqueidade, aprumo, ancoragem física total e conformidade técnica no canteiro.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.steps.map((step, idx) => (
            <div key={idx} className="relative group text-left">
              {/* Connector line for large screens */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-7 left-full w-full h-[1.5px] bg-slate-200 -translate-x-4 z-0" />
              )}
              
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white font-mono font-black text-xl flex items-center justify-center shadow-md relative outline-offset-4 outline-slate-100 group-hover:bg-primary transition-colors">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base leading-snug">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. DYNAMIC CALCULATOR WIDGET FOR COMPATIBLE PAGES */}
      <section 
        id="calculadora-seo" 
        className="py-20 bg-slate-50 border-t border-b border-slate-200/60 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Controls Block left */}
            <div className="lg:col-span-5 bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xs">
              <div className="space-y-6">
                <div>
                  <span className="text-primary font-mono text-[10px] tracking-wider uppercase font-bold bg-primary/10 px-2.5 py-1 rounded">Mecanismo de Métricas</span>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 mt-3">
                    {data.calculatorTitle}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                    Insira as dimensões estimadas de alvenaria para saber exatamente quanto comprar da fábrica, economizando em excesso e sobras de armazém.
                  </p>
                </div>

                {/* Range Slider Area */}
                <div className="space-y-2">
                  <label htmlFor="seo-calc-area" className="text-xs sm:text-sm font-semibold text-slate-800 flex justify-between pr-1">
                    <span>Área total de paredes (vedação)</span>
                    <strong className="text-primary font-mono font-extrabold bg-primary/10 px-2 py-0.5 rounded text-sm shrink-0">
                      {calcArea} m²
                    </strong>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="600"
                    value={calcArea}
                    onChange={(e) => setCalcArea(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                    id="seo-calc-area"
                  />
                  <div className="flex gap-2.5 mt-2 justify-between flex-wrap">
                    {[30, 60, 100, 200, 350].map((val) => (
                      <button
                        key={val}
                        onClick={() => setCalcArea(val)}
                        className={`px-3 py-1 rounded font-mono text-[10px] border transition-colors cursor-pointer ${
                          calcArea === val 
                            ? 'bg-slate-900 text-white border-slate-900' 
                            : 'bg-white text-slate-500 hover:bg-slate-50 border-slate-200'
                        }`}
                      >
                        {val} m²
                      </button>
                    ))}
                  </div>
                </div>

                {/* Block select control */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-800">Tipo de Tijolo / Bloco a utilizar</label>
                  <select
                    value={selectedBlockId}
                    onChange={(e) => setSelectedBlockId(e.target.value)}
                    className="w-full border border-slate-200 bg-slate-50 rounded-xl px-3 py-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-primary cursor-pointer"
                  >
                    {BLOCK_TYPES_DATA.map((block) => (
                      <option key={block.id} value={block.id}>
                        {block.name} (consumo: {block.consumptionPerSqm} kg/m²)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Legal note */}
              <div className="mt-8 bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-start gap-2.5 text-[10px] text-gray-500">
                <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p>
                  *O rendimento médio de 1,5 kg/m² é baseado em blocos perfeitamente homogêneos. Blocos quebrados ou com variações no tamanho podem gastar mais argamassa.
                </p>
              </div>
            </div>

            {/* Results Block right */}
            <div className="lg:col-span-7 bg-slate-950 text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden border border-slate-900 shadow-xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <h4 className="text-white font-display font-extrabold text-sm sm:text-base">Métricas sugeridas pela Engenharia</h4>
                    <span className="text-gray-400 font-mono text-[9px] tracking-wide uppercase">CÁLCULO PARA PAREDES DE {calcArea} M²</span>
                  </div>
                  <span className="bg-primary/20 border border-primary/30 text-primary font-mono text-[9px] font-black px-2 py-0.5 rounded uppercase">Consumo Estimado</span>
                </div>

                {/* Main numbers callout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <span className="text-primary font-mono text-[9px] tracking-wider uppercase block">Volume do Produto</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl font-display font-black text-white">{requiredKg}</span>
                      <span className="text-lg font-display text-gray-400">Kilogramas</span>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                    <span className="text-emerald-400 font-mono text-[9px] tracking-wider uppercase block">Tempo de Mão de Obra Salvo</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl font-display font-black text-emerald-400">~{timeSavedHours}</span>
                      <span className="text-lg font-display text-emerald-500">Horas</span>
                    </div>
                  </div>
                </div>

                {/* Dynamic Package Options mapping */}
                <div className="space-y-3 pt-2">
                  <span className="text-slate-400 font-mono text-[9px] tracking-widest uppercase block">Volume de embalagens para a compra:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    
                    <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl text-left">
                      <span className="text-[10px] text-zinc-400 font-mono block">BISNAGA 3KG</span>
                      <strong className="text-base font-display text-white mt-1 block">{bisnagas3kg} bisnagas</strong>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl text-left">
                      <span className="text-[10px] text-zinc-400 font-mono block">BARRICA 25KG</span>
                      <strong className="text-base font-display text-white mt-1 block">{barricas25kg} barricas</strong>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl text-left">
                      <span className="text-[10px] text-zinc-400 font-mono block">BARRICA 40KG</span>
                      <strong className="text-base font-display text-white mt-1 block">{barricas40kg} barricas</strong>
                    </div>

                  </div>
                </div>

                {/* Physical benefits saved */}
                <div className="border-t border-white/5 pt-4 flex items-center justify-between text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span>Conclusão em 1/3 do tempo</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Trash2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>-{weightSavedKg.toLocaleString('pt-BR')} kg de entulho no chão</span>
                  </div>
                </div>

              </div>

              {/* Button Action CTA */}
              <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://loja.hiperliga.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-sans font-bold text-xs sm:text-sm px-6 py-4 rounded-xl transition-all shadow-md cursor-pointer"
                  id="seo-calc-cta-shop-btn"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{getCtaText(1)}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 9. BRAND AUTHORITY */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span className="text-primary font-mono text-xs font-extrabold uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full inline-block">
            Autoridade & Confiança Industrial
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 mt-4 leading-tight">
            Tecnologia Brasileira com Garantia Industrial
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Somos pioneiros na produção e distribuição de argamassa polimérica de alta aderência, com laboratório próprio de controle de qualidade e engenharia ativa.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <Award className="w-10 h-10 text-primary shrink-0" />
            <h3 className="font-display font-bold text-lg text-slate-900 mt-4 mb-2">Padrão ISO e IPT</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Todos os lotes de resinas acrílicas que saem de nosso parque industrial passam por rigorosos ensaios de densidade e arrancamento de tração simulados em prensa hidráulica calibrada.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <ShieldCheck className="w-10 h-10 text-primary shrink-0" />
            <h3 className="font-display font-bold text-lg text-slate-900 mt-4 mb-2">Desempenho Comprovado</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Utilizado por dezenas de grandes construtoras e empreiteiras em edifícios de múltiplos pavimentos ao redor do país, comprovando a alta segurança térmica e estabilidade construtiva de vedação.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <Layers className="w-10 h-10 text-primary shrink-0" />
            <h3 className="font-display font-bold text-lg text-slate-900 mt-4 mb-2">Pronto para Grandes Obras</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Fornecemos em barricas de 40 kg com bicos sobressalentes ou sob a forma de paletes para descarga mecanizada ágil, perfeitamente integrados ao cronograma de suprimentos da engenharia.
            </p>
          </div>
        </div>
      </section>

      {/* 10. GOOGLE RICH FAQ ACCORDION SECTION (STATIC BUT INTERACTIVE DETAILS) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-xs font-extrabold uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full inline-block">
              Perguntas Frequentes do Tema
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 mt-4">
              Dúvidas Técnicas Esclarecidas
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm max-w-xl mx-auto mt-2">
              Informações transparentes e realistas da nossa equipe de engenharia para você planejar seu projeto com total confiança física e financeira.
            </p>
          </div>

          {/* FAQ with details tag for perfect SEO crawling */}
          <div className="space-y-4" id="seo-page-faq-accordion-container">
            {data.faq.map((it, i) => (
              <details 
                key={i} 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden group shadow-2"
                open={expandedFaqIndex === i}
                onClick={(e) => {
                  e.preventDefault();
                  setExpandedFaqIndex(expandedFaqIndex === i ? null : i);
                }}
              >
                <summary className="p-4 sm:p-5 font-display font-bold text-sm sm:text-base text-slate-900 flex justify-between items-center cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
                  <span>{it.question}</span>
                  <span className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center font-bold text-slate-400 group-hover:bg-primary group-hover:text-white transition-all transform group-open:rotate-180">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-50 leading-relaxed font-sans">
                  {it.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. MID & FINAL CTA (HIGH CONVERSION INTERMEDIARY BLOCKS) */}
      <section className="py-20 bg-slate-900 text-white text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight">
            Pronto para revolucionar as alvenarias da sua obra?
          </h2>
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto">
            Experimente a praticidade original do bico aplicador da bisnaga de 3kg ou compre em escala as barricas estruturais de 25kg e 40kg na nossa Loja de Fábrica Online.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://loja.hiperliga.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-extrabold text-sm px-8 py-4.5 rounded-xl transition-all shadow-md cursor-pointer"
              id="final-cta-btn"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{getCtaText(3)}</span>
            </a>
            <a
              href="https://wa.me/554188883365"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 font-sans font-semibold text-sm px-8 py-4.5 rounded-xl transition-all border border-slate-700"
            >
              <span>Falar com Assessor Tecnico</span>
            </a>
          </div>
        </div>
      </section>

      {/* 12. INTERNAL RELATED LINKS WRAPPER */}
      <section className="py-12 bg-white border-t border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-left space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Páginas Relacionadas e Guias Úteis:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="seo-related-internal-links">
            {data.relatedLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onNavigate(link.href);
                }}
                className="p-4 rounded-xl border border-slate-200/70 hover:border-primary bg-slate-50 text-slate-800 hover:text-black transition-all text-xs font-semibold text-left flex items-center justify-between group cursor-pointer"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
export default SeoPageTemplate;
