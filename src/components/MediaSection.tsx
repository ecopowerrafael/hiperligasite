import { APPLICATION_STEPS } from '../data';
import { HardHat, Info } from 'lucide-react';

export default function MediaSection() {

  return (
    <section 
      id="como-aplicar" 
      className="py-24 bg-brand-dark text-white relative overflow-hidden font-sans"
    >
      {/* Decorative glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full inline-block">
            <HardHat className="w-3.5 h-3.5 inline-block mr-1 align-text-bottom" />
            Engenharia de Aplicação Prática
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Veja como é simples de <span className="text-primary">aplicar</span> na obra
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base">
            Sem cimento voando, sem misturadores elétricos, sem carrinhos pesados. Siga quatro passos elementares para elevar sua produtividade ao patamar das maiores construtoras do país.
          </p>
        </div>

        {/* Content Splitting Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Visual Steps list */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left">
            
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-xl mb-4 border-b border-white/5 pb-3">
                Processo de Assentamento Prático
              </h3>
              
              <div className="grid grid-cols-1 gap-5 relative">
                {/* Connecting timeline vector overlay */}
                <div className="absolute left-[24px] top-4 bottom-4 w-0.5 bg-white/5 hidden sm:block pointer-events-none" />

                {APPLICATION_STEPS.map((step, idx) => (
                  <div 
                    key={step.number}
                    className="flex flex-col sm:flex-row items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-white/15 hover:bg-white/[0.07] transition-all duration-300"
                  >
                    {/* Circle badge */}
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-display font-extrabold text-base shrink-0 relative z-10">
                      {step.number}
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-white font-display font-extrabold text-base leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Quick Safety highlight */}
            <div className="mt-8 bg-brand-dark/40 border border-white/10 p-4 rounded-xl flex items-start gap-3">
              <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-gray-400 text-xs leading-relaxed font-sans">
                💡 <strong className="text-white">Dica de Engenharia:</strong> Certifique-se de que os blocos estejam completamente limpos de resíduos ou poeira antes de estender os filetes da Hiperliga. Isso garante ancoragem acrílica máxima imediata.
              </p>
            </div>

          </div>

          {/* Right Column: Visual Static Media Frame showcasing simple application directly */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            
            <div className="space-y-4 text-left">
              <h3 className="font-display font-extrabold text-xl border-b border-white/5 pb-3">
                <span>Aplicação simples</span>
              </h3>

              {/* Main Media Player Frame */}
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-brand-dark border border-white/10 shadow-2xl group">
                <img
                  src="https://hiperliga.com.br/wp-content/uploads/2025/04/argamassa3-1.jpg"
                  alt="Aplicação simples"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-transparent opacity-90" />
                
                {/* Dynamic Title overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="text-primary font-mono text-xs uppercase tracking-wider block mb-1">Canteiro de Obras</span>
                  <h4 className="text-white font-display font-extrabold text-lg sm:text-xl leading-tight">
                    Aplicação Prática e Rápida
                  </h4>
                  <p className="text-gray-300 text-xs mt-1">
                    Dois cordões paralelos finos e contínuos para máxima estabilidade
                  </p>
                </div>
              </div>
            </div>

            {/* Quick technical certification disclaimer */}
            <div className="mt-6 text-left border border-white/5 p-4 rounded-2xl bg-white/[0.02]">
              <h4 className="text-white font-display font-extrabold text-sm mb-1.5 flex items-center gap-1.5">
                Laudos e Homologações de Resistência
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Nossos produtos passam por rigorosos ensaios de resistência ao cisalhamento, compressão diagonal e estanqueidade no laboratório de construção civil do IPT (Instituto de Pesquisas Tecnológicas), comprovando eficácia superior exigida pelas normas brasileiras de alvenaria de vedação.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
