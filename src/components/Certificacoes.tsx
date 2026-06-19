import { ShieldCheck, Award, FileSpreadsheet, Building2, CheckCircle } from 'lucide-react';

export default function Certificacoes() {
  const complianceData = [
    {
      title: 'ABNT NBR 15575',
      code: 'Desempenho Estrutural',
      desc: 'Atende perfeitamente a todos os requisitos de segurança estrutural, resistência ao fogo e isolamento termoacústico para edificações habitacionais de qualquer porte.',
      icon: ShieldCheck
    },
    {
      title: 'Laudos de IPT',
      code: 'Estanqueidade & Cisalhamento',
      desc: 'Testado exaustivamente no renomado Instituto de Pesquisas Tecnológicas (IPT), comprovando aderência de tração superior à argamassa comum.',
      icon: FileSpreadsheet
    },
    {
      title: 'Selo Eco-Lógica',
      code: 'Sustentabilidade Civil',
      desc: 'Economiza 100% da água de mistura, diminui o frete pesado (menor queima de diesel) e gera resíduo zero nos canteiros.',
      icon: Award
    }
  ];

  return (
    <section 
      id="certificacoes" 
      className="py-20 bg-white text-slate-900 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Decorative divider logo */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px bg-slate-200 flex-1" />
          <Building2 className="w-6 h-6 text-primary shrink-0 opacity-40" />
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column: Slogans of trust */}
          <div className="lg:col-span-4 text-left space-y-4">
            <span className="text-primary font-mono text-xs font-bold uppercase tracking-wider bg-orange-100 px-2.5 py-1 rounded-md">
              Laudos & Qualidade
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900">
              Segurança atestada por órgãos de engenharia
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Desenvolvida sob rígidos padrões laboratoriais, a fórmula química da Hiper Liga passou por testes destrutivos de tração, compressão excêntrica e elasticidade estrutural, certificando que a segurança da obra é igual ou superior ao modelo tradicional de alvenaria.
            </p>
            
            <div className="space-y-2 pt-2 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Ensaio de compressão diagonal em prismas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Isolamento acústico de acordo com a norma</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Aderência à tração superior a 0.3 MPa</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bento grids cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceData.map((data, index) => {
              const IconComp = data.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-left hover:shadow-md transition-shadow relative overflow-hidden group"
                  id={`cert-item-${index}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 mb-4 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-extrabold text-slate-900 text-base leading-snug">
                    {data.title}
                  </h4>
                  <span className="text-[10px] font-mono text-primary uppercase tracking-wider block mt-1">
                    {data.code}
                  </span>
                  <p className="text-gray-500 text-xs leading-relaxed font-sans mt-2">
                    {data.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
