import { motion } from 'motion/react';

export default function Hero() {
  // Variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-white tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-md"
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
            className="text-slate-200 font-sans text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-sm font-medium"
            id="hero-description"
          >
            Conheça a Hiperliga: a argamassa polimérica pronta para uso que substitui o cimento convencional. Reduza custos de logística, elimine infiltrações e economize até 50% no custo final da alvenaria estrutural e de vedação.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
