import { motion } from 'motion/react';
import { ArrowLeftRight, Check, X, Scale, Flame, RefreshCcw } from 'lucide-react';
import { LazyVideo } from './LazyVideo';

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
            Troque <span className="text-gray-400">60 kg de Cimento Convencional</span> por apenas <span className="text-primary">3 kg de Hiperliga</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base">
            Parece mágica, mas é física e química avançadas. A argamassa polimérica atua em película fina de altíssima adesão, eliminando o preenchimento de frestas e gerando rigidez estrutural sem peso morto.
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
                    <strong className="text-red-400 text-lg">25 kg a 30 kg / m²</strong>
                  </div>
                  <div className="border-b border-white/5 pb-2">
                    <span className="text-gray-500 text-xs block uppercase tracking-wider font-mono">Processo de Mistura</span>
                    <span>Lento, exige betoneira, poeira tóxica, dependência de água e energia elétrica.</span>
                  </div>
                  <div className="border-b border-white/5 pb-2">
                    <span className="text-gray-500 text-xs block uppercase tracking-wider font-mono">Espessura da Junta</span>
                    <span>10mm a 15mm de espessura (gera alto peso estrutural nas vigas).</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs block uppercase tracking-wider font-mono">Desperdício Comum</span>
                    <span>Até 25% do material (massa seca na masseira, respingos no chão).</span>
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
                    <strong className="text-emerald-400 text-lg">Apenas 1.5 kg / m²</strong>
                  </div>
                  <div className="border-b border-primary/10 pb-2">
                    <span className="text-gray-500 text-xs block uppercase tracking-wider font-mono">Processo de Mistura</span>
                    <span className="text-white">Pronto para aplicação imediata. Sem betoneira, poeira, água ou energia.</span>
                  </div>
                  <div className="border-b border-primary/10 pb-2">
                    <span className="text-gray-500 text-xs block uppercase tracking-wider font-mono">Espessura da Junta</span>
                    <span className="text-white">Apenas 1.5mm a 2.0mm de espessura (redução brusca e segura de carga).</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs block uppercase tracking-wider font-mono">Desperdício Comum</span>
                    <span className="text-emerald-300 font-semibold">Absolutamente 0% (toda a embalagem é aproveitada).</span>
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
                  A argamassa tradicional serve como preenchimento de irregularidades nos blocos usando volume físico bruto. A Hiperliga, por possuir alto teor de polímeros de ancoragem química de resinas acrílicas, deita-se em filetes autoadesivos densos, gerando resistência elástica superior com 90% menos espessura.
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
                <LazyVideo
                  src="https://res.cloudinary.com/dmvinyayl/video/upload/v1781994207/ssstik.io_1781993985654_p6ooai.mp4"
                  aspectRatio="aspect-[9/16]"
                  label="Assentamento Hiperliga"
                />
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
                <span className="text-[10px] uppercase font-mono tracking-widest text-white/70">Redução</span>
                <span className="text-base">-95% de Peso</span>
              </div>
            </motion.div>

            {/* Quick interactive note */}
            <span className="text-gray-500 font-mono text-[10px] tracking-wider uppercase mt-3 block text-center">
              🛡️ Testado e aprovado de acordo com as normas brasileiras de alvenaria.
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
