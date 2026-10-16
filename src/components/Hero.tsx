import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const HERO_PHRASES = [
  'Mais tecnologia.',
  'Menos etapas.',
  'Melhor construção.'
];

const TYPE_DELAY_MS = 170;
const DELETE_DELAY_MS = 45;
const COMPLETE_PHRASE_DELAY_MS = 3600;

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handlePreferenceChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handlePreferenceChange();
    mediaQuery.addEventListener('change', handlePreferenceChange);
    return () => mediaQuery.removeEventListener('change', handlePreferenceChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const currentPhrase = HERO_PHRASES[phraseIndex];
    const isPhraseComplete = displayText === currentPhrase;
    const delay = isDeleting
      ? DELETE_DELAY_MS
      : isPhraseComplete
        ? COMPLETE_PHRASE_DELAY_MS
        : TYPE_DELAY_MS;

    const timer = window.setTimeout(() => {
      if (isDeleting) {
        const nextText = displayText.slice(0, -1);
        setDisplayText(nextText);
        if (!nextText) {
          setIsDeleting(false);
          setPhraseIndex((currentIndex) => (currentIndex + 1) % HERO_PHRASES.length);
        }
        return;
      }

      const nextText = currentPhrase.slice(0, displayText.length + 1);
      setDisplayText(nextText);
      if (nextText === currentPhrase) setIsDeleting(true);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, prefersReducedMotion]);

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
      <div className="absolute inset-0 bg-slate-950/30 z-0 pointer-events-none" />
      
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
          {/* Brand Identification */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base font-bold uppercase tracking-[0.3em] text-primary"
            id="hero-identification"
          >
            HIPERLIGA
          </motion.p>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="min-h-[7.5rem] sm:min-h-[6rem] lg:min-h-[7.5rem] max-w-4xl mx-auto flex items-center justify-center text-3xl sm:text-5xl lg:text-7xl font-mono font-black text-white tracking-tight leading-tight drop-shadow-md"
            id="hero-main-title"
          >
            <span className="sr-only">Mais tecnologia. Menos etapas. Melhor construção.</span>
            {prefersReducedMotion ? (
              <span aria-hidden="true" className="flex flex-col items-center">
                {HERO_PHRASES.map((phrase) => <span key={phrase}>{phrase}</span>)}
              </span>
            ) : (
              <span aria-hidden="true" className="min-w-0 max-w-full break-words">
                {displayText}<span className="ml-1 inline-block h-[1em] w-px animate-pulse bg-primary align-[-0.08em]" />
              </span>
            )}
          </motion.h1>

          {/* Pitch Text */}
          <motion.p 
            variants={itemVariants}
            className="text-slate-200 font-sans text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-sm font-medium"
            id="hero-description"
          >
            Tecnologia que transforma a maneira de construir.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
