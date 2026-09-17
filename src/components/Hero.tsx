import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Shield, Zap, Sparkles } from 'lucide-react';
import { EXPERT_CONTACT_WHATSAPP } from '../data';

export default function Hero() {
  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section 
      id="hero-header"
      className="relative min-h-screen bg-slate-950 pt-32 sm:pt-36 pb-20 sm:pb-28 overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      >
        <source 
          src="https://loja.hiperliga.com.br/wp-content/uploads/2026/09/WhatsApp-Video-2026-09-03-at-09.45.06.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Dark semi-transparent color overlay ensuring perfect text contrast and readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/60 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-slate-950/40 z-0 pointer-events-none" />
      
      {/* Background Subtle Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div 
          className="space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase shadow-lg"
            id="hero-tech-badge"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Tecnologia Alemã em Argamassa Polimérica</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white tracking-tight leading-tight max-w-4xl mx-auto"
            id="hero-main-title"
          >
            Construa até <span className="text-primary relative inline-block">
              3x mais rápido
              <span className="absolute left-0 bottom-1 w-full h-1.5 bg-primary/40 rounded-full" />
            </span> com desperdício zero.
          </motion.h1>

          {/* Pitch Text */}
          <motion.p 
            variants={itemVariants}
            className="text-slate-200 font-sans text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
            id="hero-description"
          >
            Conheça a Hiperliga: a argamassa polimérica pronta para uso que substitui o cimento convencional. Reduza custos de logística, elimine infiltrações e economize até 50% no custo final da alvenaria estrutural e de vedação.
          </motion.p>

          {/* Quick Metrics Line */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto py-2"
            id="hero-quick-metrics"
          >
            <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center shadow-lg">
              <dt className="text-primary font-display font-black text-3xl sm:text-4xl">3 Kg</dt>
              <dd className="text-gray-300 font-sans text-xs sm:text-sm uppercase tracking-wider mt-1.5 font-medium">Substitui 60kg de Argamassa Comum</dd>
            </div>
            <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center shadow-lg">
              <dt className="text-emerald-400 font-display font-black text-3xl sm:text-4xl">+50%</dt>
              <dd className="text-gray-300 font-sans text-xs sm:text-sm uppercase tracking-wider mt-1.5 font-medium">De Produtividade Diária na Obra</dd>
            </div>
            <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-center shadow-lg">
              <dt className="text-white font-display font-black text-3xl sm:text-4xl">0%</dt>
              <dd className="text-gray-300 font-sans text-xs sm:text-sm uppercase tracking-wider mt-1.5 font-medium">Água Desperdiçada ou Poeira</dd>
            </div>
          </motion.div>

          {/* Interactive CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            id="hero-action-buttons"
          >
            <button
              onClick={() => handleSmoothScroll('#calculadora')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(242,90,36,0.4)] text-base cursor-pointer shadow-lg hover:-translate-y-0.5"
            >
              <span>Calcular Economia</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <a
              href="https://loja.hiperliga.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-sans font-bold px-8 py-4 rounded-xl transition-all duration-300 text-base shadow-lg hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>Solicitar Orçamento</span>
            </a>
          </motion.div>

          {/* Real Proof Elements */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-xs font-mono text-gray-300"
          >
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span>Normas NBR ABNT Atendidas</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Laudos Tecnológicos do IPT</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Garantia Direto de Fábrica</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
