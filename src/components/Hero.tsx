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

  const bagVariants = (delay: number) => ({
    hidden: { opacity: 0, scale: 0.7, y: 80, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 85,
        damping: 15,
        delay: delay
      }
    }
  });

  return (
    <section 
      id="hero-header"
      className="relative min-h-screen bg-brand-dark pt-28 pb-16 overflow-hidden flex items-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-20"
      >
        <source src="https://res.cloudinary.com/dmvinyayl/video/upload/v1781878422/WhatsApp_Video_2026-06-19_at_11.03.26_a9btlt.mp4" type="video/mp4" />
      </video>

      {/* Dark semi-transparent color overlay emphasizing brand color #015d90. 
          Using radial/gradient mask to keep the central area clean for the bisnaga and products to pop beautifully. */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/80 via-brand-dark/60 to-brand-blue/10 z-0 pointer-events-none" />
      
      {/* Background Decorative Rings/Glows in Brand Blue */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Block: Modern Copy and Value Prop */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue-light text-xs font-mono font-bold tracking-wider uppercase"
              id="hero-tech-badge"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Tecnologia Alemã em Argamassa Polimérica</span>
            </motion.div>

            {/* Main Title - Beautiful Space Grotesk font */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-none"
              id="hero-main-title"
            >
              Construa até <span className="text-primary relative inline-block">
                3x mais rápido
                <span className="absolute left-0 bottom-1 w-full h-1 bg-primary/40 rounded-full" />
              </span> com desperdício zero.
            </motion.h1>

            {/* Pitch Text */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed"
              id="hero-description"
            >
              Conheça a Hiperliga: a argamassa polimérica pronta para uso que substitui o cimento convencional. Reduza custos de logística, elimine infiltrações e economize até 50% no custo final da alvenaria estrutural e de vedação.
            </motion.p>

            {/* Quick Metrics Line */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 py-4 border-y border-white/5 max-w-xl text-left"
              id="hero-quick-metrics"
            >
              <div>
                <dt className="text-primary font-display font-bold text-2xl sm:text-3xl">3 Kg</dt>
                <dd className="text-gray-400 font-sans text-xs uppercase tracking-wider mt-1">Substitui 60kg de Argamassa Comum</dd>
              </div>
              <div className="border-l border-white/10 pl-4">
                <dt className="text-emerald-400 font-display font-bold text-2xl sm:text-3xl">+50%</dt>
                <dd className="text-gray-400 font-sans text-xs uppercase tracking-wider mt-1">De Produtividade Diária na Obra</dd>
              </div>
              <div className="border-l border-white/10 pl-4">
                <dt className="text-white font-display font-bold text-2xl sm:text-3xl">0%</dt>
                <dd className="text-gray-400 font-sans text-xs uppercase tracking-wider mt-1">Água Desperdiçada ou Poeira</dd>
              </div>
            </motion.div>

            {/* Interactive CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              id="hero-action-buttons"
            >
              <button
                onClick={() => handleSmoothScroll('#calculadora')}
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(242,90,36,0.3)] text-base cursor-pointer"
              >
                <span>Calcular Economia</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="https://loja.hiperliga.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400 animate-pulse" />
                <span>Solicitar Orçamento</span>
              </a>
            </motion.div>

            {/* Real Proof Elements */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-6 pt-4 text-xs font-mono text-gray-400"
            >
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span>Normas NBR ABNT Atendidas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Laudos Tecnológicos do IPT</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Block: Dynamic entering and floating product photos */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center items-center h-[420px] sm:h-[480px] lg:h-[520px]">
            {/* Absolute background element with glowing tech circle */}
            <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border-2 border-dashed border-white/5 animate-[spin_100s_linear_infinite]" />
            <div className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full bg-brand-blue/15 blur-[50px]" />

            {/* Product 3: 3 KG Bisnaga (Front-Left) */}
            <motion.div
              variants={bagVariants(0.4)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.06, y: -8, zIndex: 30 }}
              className="absolute left-[-20px] sm:left-0 bottom-[10%] w-[150px] sm:w-[190px] lg:w-[180px] z-20 cursor-pointer drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              id="hero-product-3kg"
            >
              <div className="absolute inset-x-0 bottom-0 h-10 bg-black/40 blur-lg rounded-full transform scale-x-80" />
              <img
                src="https://loja.hiperliga.com.br/wp-content/uploads/2025/08/3-KG-800.png"
                alt="Hiperliga Bisnaga 3 Kg"
                className="w-full object-contain pointer-events-none transform -rotate-12"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-3 -left-3 bg-brand-blue text-white font-display text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/10">
                Bisnaga 3kg
              </div>
            </motion.div>

            {/* Product 1: 40 KG Saco (Center back, tallest) */}
            <motion.div
              variants={bagVariants(0.1)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.04, y: -10, zIndex: 30 }}
              className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[190px] sm:w-[240px] lg:w-[240px] z-10 cursor-pointer drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)]"
              id="hero-product-40kg"
            >
              <div className="absolute inset-x-0 bottom-0 h-14 bg-black/50 blur-xl rounded-full transform scale-x-70" />
              <img
                src="https://loja.hiperliga.com.br/wp-content/uploads/2025/08/40-KG-800.png"
                alt="Hiperliga Barrica 40 Kg"
                className="w-full object-contain pointer-events-none scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-4 right-0 bg-slate-900 border border-white/10 text-white font-mono text-[10px] tracking-wider uppercase px-2.5 py-1.5 rounded bg-opacity-90">
                Barrica 40kg
              </div>
            </motion.div>

            {/* Product 2: 25 KG Saco (Right hand side, overlapping) */}
            <motion.div
              variants={bagVariants(0.25)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, y: -8, zIndex: 30 }}
              className="absolute right-[-20px] sm:right-0 bottom-[15%] w-[160px] sm:w-[200px] lg:w-[200px] z-20 cursor-pointer drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]"
              id="hero-product-25kg"
            >
              <div className="absolute inset-x-0 bottom-0 h-12 bg-black/45 blur-lg rounded-full transform scale-x-75" />
              <img
                src="https://loja.hiperliga.com.br/wp-content/uploads/2025/08/25-0KG-800.png"
                alt="Hiperliga Barrica 25 Kg"
                className="w-full object-contain pointer-events-none transform rotate-6"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-slate-950 font-display text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Barrica 25kg
              </div>
            </motion.div>

            {/* Glowing active badge overlaying the catalog products */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-[2%] left-1/2 -translate-x-1/2 z-30 bg-slate-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3 w-72 shadow-2xl"
              id="hero-floating-badge"
            >
              <div className="bg-primary/20 p-2 rounded-lg text-primary">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-white text-xs font-bold font-sans">Argamassa Eco-Amigável</p>
                <p className="text-gray-400 text-[10px] font-sans">Sem desperdício de água ou poeira na mistura.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
