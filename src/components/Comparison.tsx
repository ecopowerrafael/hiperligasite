import { motion } from 'motion/react';
import { ArrowLeftRight, Check, X, Scale, Flame, RefreshCcw } from 'lucide-react';
import YouTubeVideo from './YouTubeVideo';

export default function Comparison() {
  return (
    <section 
      id="comparativo" 
      className="py-24 bg-brand-dark text-white relative overflow-hidden border-t border-b border-white/5"
    >
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/35 text-primary text-xs font-mono font-bold tracking-wider uppercase">
            <ArrowLeftRight className="w-3 h-3" />
            <span>Comparação Direta de Engenharia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Compare os processos de <span className="text-gray-400">assentamento convencional</span> e <span className="text-primary">argamassa polimérica</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base">
            A escolha do sistema muda as etapas de preparo, aplicação e logística. Consulte a ficha técnica do produto para confirmar o consumo e as condições de uso em cada obra.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Comparison Cards Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Legacy System: Traditional Cement */}
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group"
                id="comparison-legacy"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center">
                    <X className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-white text-base">Alvenaria Tradicional</h3>
                    <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">Cimento + Areia + Aditivos</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm font-sans text-gray-300">
                  <div className="border-b border-white/5 pb-2">
                    <span className="text-gray-500 text-xs block uppercase tracking-wider font-mono">Consumo Médio por m²</span>
                    <strong className="text-red-400 text-lg">Varia conforme traço e superfície</strong>
                  </div>
                  <div className="border-b border-white/5 pb-2">
                    <span className="text-gray-500 text-xs block uppercase tracking-wider font-mono">Processo de Mistura</span>
                    <span>Lento, exige betoneira, poeira tóxica, dependência de água e energia elétrica.</span>
                  </div>
                  <div className="border-b border-white/5 pb-2">
                    <span className="text-gray-500 text-xs block uppercase tracking-wider font-mono">Espessura da Junta</span>
                    <span>A espessura depende do sistema, do bloco e da especificação da obra.</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs block uppercase tracking-wider font-mono">Desperdício Comum</span>
                    <span>As perdas dependem do preparo, transporte e aplicação no canteiro.</span>
                  </div>
                </div>
              </div>

              {/* The Innovation: Hiperliga */}
              <div 
                className="bg-primary/5 border border-primary/20 rounded-2xl p-6 relative overflow-hidden group"
                id="comparison-innovation"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Check className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-white text-base">Argamassa Hiperliga</h3>
                    <p className="text-primary font-mono text-[10px] tracking-widest uppercase">Polímeros de Alta Adesão</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm font-sans text-gray-300">
                  <div className="border-b border-primary/10 pb-2">
                    <span className="text-primary text-xs block uppercase tracking-wider font-mono">Consumo Médio por m²</span>
                    <strong className="text-emerald-400 text-lg">Consulte a ficha do produto</strong>
                  </div>
                  <div className="border-b border-primary/10 pb-2">
                    <span className="text-gray-500 text-xs block uppercase tracking-wider font-mono">Processo de Mistura</span>
                    <span className="text-white">Pronto para uso, com aplicação conforme a ficha técnica do produto.</span>
                  </div>
                  <div className="border-b border-primary/10 pb-2">
                    <span className="text-gray-500 text-xs block uppercase tracking-wider font-mono">Espessura da Junta</span>
                    <span className="text-white">Aplicação em cordões, respeitando as orientações técnicas do produto.</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs block uppercase tracking-wider font-mono">Desperdício Comum</span>
                    <span className="text-emerald-300 font-semibold">O aproveitamento depende da preparação e da técnica de aplicação.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Summary Highlights */}
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex flex-col sm:flex-row gap-6 items-center">
              <div className="bg-primary/20 p-3 rounded-xl text-primary shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div className="text-left space-y-1">
                <h4 className="text-white font-display font-bold text-sm">Por que essa diferença matemática acontece?</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Os sistemas têm formas diferentes de preparo e aplicação. A argamassa polimérica é aplicada pronta para uso; a argamassa convencional exige a preparação do traço indicado para a obra.
                </p>
              </div>
            </div>

          </div>

          {/* Visual Showcase (Video Column) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Main Visual Comparison Frame with entering motion effects */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/20 w-full"
              id="comparison-video-frame"
            >
              {/* Modern Portrait Video Display with Lazy Load */}
              <div className="rounded-2xl overflow-hidden relative bg-slate-950">
                <div className="aspect-[9/16]">
                  <YouTubeVideo
                    videoId="LMtAwZTlG0c"
                    title="Comparação direta de engenharia"
                  />
                </div>
              </div>

              {/* Caption details below the video */}
              <div className="mt-4 text-left px-1">
                <span className="text-primary font-mono text-xs uppercase tracking-widest font-semibold block">Demonstração Prática</span>
                <p className="text-slate-900 font-display font-bold text-lg leading-snug mt-1">
                  Alta velocidade no assentamento de blocos.
                </p>
                <p className="text-slate-500 text-xs font-sans mt-1">
                  Assista ao processo real de aplicação da Argamassa Polimérica Hiperliga diretamente na obra. Sem betoneiras, sem poeira e com rapidez insuperável.
                </p>
              </div>

              {/* Floating contrast circle metric indicator */}
              <div className="absolute -bottom-1 -right-1 bg-primary text-white font-display text-xs p-3 rounded-tl-3xl shadow-xl flex flex-col items-center justify-center font-bold">
                <span className="text-[10px] uppercase font-mono tracking-widest text-white/70">Consulte</span>
                <span className="text-base">Ficha técnica</span>
              </div>
            </motion.div>

            {/* Quick interactive note */}
            <span className="text-gray-500 font-mono text-[10px] tracking-wider uppercase mt-3 block text-center">
              Consulte as condições de uso e limitações na ficha técnica do produto.
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
