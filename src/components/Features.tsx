import React from 'react';
import { motion } from 'motion/react';
import { 
  Wand2, 
  Zap, 
  Sparkles, 
  Feather, 
  Droplet, 
  ShieldCheck, 
  Leaf, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { ADVANTAGES_DATA } from '../data';

// Map icon names to lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wand2: Wand2,
  Zap: Zap,
  Sparkles: Sparkles,
  Feather: Feather,
  Droplet: Droplet,
  ShieldCheck: ShieldCheck,
  Leaf: Leaf,
  CheckCircle2: CheckCircle2
};

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section 
      id="diferenciais" 
      className="py-24 bg-white text-slate-900 overflow-hidden relative"
    >
      {/* Subtle decorative vector lines */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50 rounded-full blur-l opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block with Premium Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full inline-block">
            Eficiência e Inovação na Construção Civil
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
            Por que construtoras e pedreiros preferem a <span className="text-primary">Hiperliga</span>?
          </h2>
          <p className="text-gray-600 font-sans text-base sm:text-lg">
            Substituir a argamassa convencional por polímeros não é apenas uma escolha sustentável, é um salto exponencial em produtividade e qualidade técnica para a sua parede.
          </p>
        </div>

        {/* Bento/Modern Grid for Advantages */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          id="features-advantages-grid"
        >
          {ADVANTAGES_DATA.map((adv, index) => {
            const IconComponent = iconMap[adv.iconName] || ShieldCheck;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-left transition-all hover:bg-slate-900 hover:text-white group relative overflow-hidden"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Icon Container with glowing orange bg inside white layout */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-display font-bold text-slate-900 mb-2 group-hover:text-white transition-colors duration-300 flex items-center justify-between">
                  {adv.title}
                  <ArrowUpRight className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                
                <p className="text-gray-600 text-sm font-sans leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic Highlight Trust banner */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent pointer-events-none" />
          <div className="space-y-3 text-left relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-primary font-mono text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4 text-primary animate-bounce" />
              <span>Garantia de Performance</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
              Sua obra com desperdício zero de material.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Laudos técnicos comprovam que as paredes construídas com Hiperliga resistem a cargas elevadas e estanqueidade à água de forma muito superior ao cimento ensacado tradicional.
            </p>
          </div>
          <div className="relative z-10 w-full md:w-auto shrink-0 flex flex-col sm:flex-row gap-4">
            <a
              href="#calculadora"
              className="bg-primary hover:bg-primary-dark text-white font-sans font-semibold text-sm px-6 py-3.5 rounded-xl text-center transition-all duration-300 hover:shadow-lg"
            >
              Fazer uma Simulação Grátis
            </a>
            <a
              href="#produtos"
              className="bg-white/10 hover:bg-white/20 border border-white/15 text-white font-sans font-semibold text-sm px-6 py-3.5 rounded-xl text-center transition-all duration-300"
            >
              Ver Especificações de Packs
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
