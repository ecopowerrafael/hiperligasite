import { useState, useEffect } from 'react';
import { BLOCK_TYPES_DATA } from '../data';
import { BlockTypeId, CalculationResult } from '../types';
import { Calculator, HelpCircle, Layers, Weight, Clock, Droplet, Check, Sparkles, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function EstimatorCalculator() {
  const [area, setArea] = useState<number>(120);
  const [blockTypeId, setBlockTypeId] = useState<BlockTypeId>('ceramic_8_hole');
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const calculateSavings = () => {
    const selectedBlock = BLOCK_TYPES_DATA.find(b => b.id === blockTypeId) || BLOCK_TYPES_DATA[0];
    const consumptionPerSqm = selectedBlock.consumptionPerSqm;

    // 1. Total Hiperliga needed in Kg
    const productQtyKg = Number((area * consumptionPerSqm).toFixed(1));

    // 2. Packages calculation (independent options)
    const packages3kg = Math.ceil(productQtyKg / 3);
    const packages25kg = Math.ceil(productQtyKg / 25);
    const packages40kg = Math.ceil(productQtyKg / 40);

    // 3. Traditional equivalent (approx 23 kg of mix per sqm)
    const traditionalMortarWeightKg = area * 23;
    const traditionalCementBags = Math.ceil(traditionalMortarWeightKg / 50); // 50kg bags

    // 4. Weight Saved
    const weightSavedKg = traditionalMortarWeightKg - productQtyKg;

    // 5. Time Saved (traditional: ~0.8 hrs/m², Hiperliga: ~0.25 hrs/m²)
    const traditionalTime = area * 0.8;
    const hiperligaTime = area * 0.25;
    const timeSavedHours = Math.max(1, Math.round(traditionalTime - hiperligaTime));

    // 6. Water saved (conventional uses about 4.5 liters per sqm of wall)
    const waterSavedLiters = Math.round(area * 4.5);

    setResults({
      area,
      productQtyKg,
      packages3kg,
      packages25kg,
      packages40kg,
      traditionalMortarWeightKg,
      traditionalCementBags,
      weightSavedKg,
      timeSavedHours,
      waterSavedLiters
    });
  };

  useEffect(() => {
    calculateSavings();
    setCopied(false);
  }, [area, blockTypeId]);

  const handleShareOnWhatsApp = () => {
    if (!results) return;
    const selected = BLOCK_TYPES_DATA.find(b => b.id === blockTypeId);
    const text = `*Orçamento Estimado - Hiperliga*
----------------------------------
📐 *Área de Paredes:* ${results.area} m²
🧱 *Tipo de Bloco:* ${selected?.name}
💧 *Água Salva:* ${results.waterSavedLiters} Litros
⏱️ *Tempo de Obra Salvo:* ~${results.timeSavedHours} Horas
⚖️ *Peso Aliviado na Obra:* ${results.weightSavedKg.toLocaleString('pt-BR')} Kg

*Quantidade de Hiperliga Média Necessária:*
- Opção Bisnaga 3kg: *${results.packages3kg} unidades*
- Opção Barrica 25kg: *${results.packages25kg} unidades*
- Opção Barrica 40kg: *${results.packages40kg} unidades*

Gostaria de falar com um especialista sobre esses produtos!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/554188883365?text=${encodedText}`, '_blank');
  };

  return (
    <section 
      id="calculadora" 
      className="py-24 bg-slate-50 text-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full inline-block">
            <Calculator className="w-3.5 h-3.5 inline-block mr-1.5 align-text-bottom" />
            Simulador de Rendimento & Logística
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
            Descubra quanto você vai <span className="text-primary">economizar</span>
          </h2>
          <p className="text-gray-600 font-sans text-sm sm:text-base">
            Configure o tamanho da alvenaria do seu projeto e veja instantaneamente o rendimento do produto, a logística reduzida e as horas de mão de obra poupadas.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block - Controls */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-display font-extrabold text-lg text-slate-900">Configuração da Obra</h3>
                <span className="text-slate-400 font-mono text-[11px] uppercase">Passo 1 de 2</span>
              </div>

              {/* Area Input */}
              <div className="space-y-2 text-left">
                <label className="block text-sm font-semibold text-slate-800 flex justify-between items-center pr-1">
                  <span>Área de Alvenaria (Parede)</span>
                  <span className="text-primary font-mono font-bold text-base bg-primary/10 px-2 py-0.5 rounded">
                    {area} m²
                  </span>
                </label>
                
                {/* Custom Slider */}
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  id="calc-area-range"
                />
                
                {/* Numeric quick selection buttons */}
                <div className="flex gap-2 pt-1.5 overflow-x-auto">
                  {[50, 100, 150, 250, 400].map((quickValue) => (
                    <button
                      key={quickValue}
                      type="button"
                      onClick={() => setArea(quickValue)}
                      className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors border shrink-0 ${
                        area === quickValue
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200'
                      }`}
                    >
                      {quickValue} m²
                    </button>
                  ))}
                  
                  {/* Manual input replacement */}
                  <div className="ml-auto flex items-center gap-1.5 shrink-0">
                    <span className="text-xs text-gray-400">Manual:</span>
                    <input
                      type="number"
                      min="1"
                      max="10000"
                      value={area}
                      onChange={(e) => setArea(Math.max(1, Number(e.target.value)))}
                      className="w-16 px-1.5 py-0.5 text-xs text-center border border-slate-200 rounded font-bold font-mono focus:outline-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Block Selection */}
              <div className="space-y-3 text-left">
                <label className="block text-sm font-semibold text-slate-800">
                  Tipo de Bloco / Tijolo Utilizado
                </label>
                
                <div className="grid grid-cols-1 gap-2.5" id="calc-block-selector">
                  {BLOCK_TYPES_DATA.map((block) => (
                    <button
                      key={block.id}
                      onClick={() => setBlockTypeId(block.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 relative overflow-hidden ${
                        blockTypeId === block.id
                          ? 'border-primary bg-primary/5 shadow-sm text-slate-900'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/60'
                      }`}
                    >
                      {blockTypeId === block.id && (
                        <div className="absolute right-0 top-0 bg-primary text-white p-1 rounded-bl-xl">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                      
                      <div className="p-2 rounded-lg bg-white border border-slate-100 shrink-0 text-slate-400 mt-0.5">
                        <Layers className="w-4 h-4" />
                      </div>
                      
                      <div>
                        <div className="font-display font-bold text-sm text-slate-900 leading-tight">
                          {block.name}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-mono bg-slate-200/60 px-1.5 py-0.5 rounded text-slate-600">
                            Dimensões: {block.dimensions}
                          </span>
                          <span className="text-[10px] font-mono text-primary font-bold">
                            Consumo: {block.consumptionPerSqm} kg/m²
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Quick construction tip based on state selection */}
            <div className="mt-8 bg-slate-50 border border-slate-100 rounded-2xl p-4 text-left flex items-start gap-2.5 text-xs text-gray-500">
              <HelpCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800">Recomendação de junta:</strong> Aplicar dois filetes paralelos uniformes de 1cm de largura. A fiada de base (primeira fiada) deve ser feita pontualmente com massa convencional para garantir o prumo absoluto.
              </div>
            </div>

          </div>

          {/* Right Block - Dynamic results displaying authority stats */}
          <div className="lg:col-span-7 bg-brand-dark/90 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="text-left">
                  <h3 className="font-display font-extrabold text-lg text-white">Relatório Técnico de Economia</h3>
                  <p className="text-gray-400 font-mono text-[10px] tracking-wide mt-0.5">ESTIMATIVA PARA OBRA DE {area}m²</p>
                </div>
                <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold px-2 py-1 rounded">
                  Laudo IPT Estimado
                </span>
              </div>

              {/* Major consumption visual callout */}
              {results && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Total Hiperliga needed weight card */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-left">
                    <span className="text-primary font-mono text-[10px] tracking-widest uppercase block mb-1">MÉDIA DE MATERIAL NECESSÁRIO</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                        {results.productQtyKg.toLocaleString('pt-BR')}
                      </span>
                      <span className="text-xl font-display font-medium text-gray-400">Kg</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed mt-2">
                      Volume total de massa polimérica pronto, substituindo caminhões de resíduos secos.
                    </p>
                  </div>

                  {/* Weight alignment comparison card */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-left flex flex-col justify-between">
                    <div>
                      <span className="text-emerald-400 font-mono text-[10px] tracking-widest uppercase block mb-1">CUIDADO LOGÍSTICO REFRATADO</span>
                      <div className="flex items-baseline gap-1 bg-emerald-500/10 px-2 py-1 rounded-lg w-max mb-1">
                        <Weight className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold font-mono text-xs">
                          -{results.weightSavedKg.toLocaleString('pt-BR')} Kg Aliviados
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1">
                      Você deixa de carregar e erguer cerca de <strong className="text-white">{(results.traditionalMortarWeightKg / 1000).toFixed(1)} toneladas</strong> de cimento tradicional pesado na estrutura.
                    </p>
                  </div>

                </div>
              )}

              {/* suggested dynamic shopping packages cards */}
              {results && (
                <div className="space-y-3.5 text-left pt-2">
                  <h4 className="text-white font-display font-extrabold text-xs tracking-wider uppercase">
                    Configuração de Embalagens Recomendada (Selecione o ideal para seu perfil)
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    
                    {/* Pack 1: 3Kg */}
                    <div className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-mono font-bold text-slate-400">BISNAGA 3 KG</span>
                        <div className="font-display font-extrabold text-xl text-white mt-1 border-b border-white/5 pb-1 flex items-baseline gap-1">
                          {results.packages3kg} <span className="text-xs text-gray-400 font-medium font-sans">bisnagas</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-400 leading-relaxed mt-2">
                        Perfeito se deseja trabalhar já com aplicadores rápidos integrados na embalagem.
                      </p>
                    </div>

                    {/* Pack 2: 25Kg */}
                    <div className="bg-white/5 hover:bg-white/10 border border-emerald-500/20 p-4 rounded-xl transition-all flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-mono font-bold text-emerald-400">BARRICA 25 KG</span>
                        <div className="font-display font-extrabold text-xl text-white mt-1 border-b border-white/5 pb-1 flex items-baseline gap-1">
                          {results.packages25kg} <span className="text-xs text-emerald-400 font-medium font-sans">barricas</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-400 leading-relaxed mt-2">
                        O queridinho das obras residenciais médias e construtores exigentes.
                      </p>
                    </div>

                    {/* Pack 3: 40Kg */}
                    <div className="bg-white/5 hover:bg-white/10 border border-primary/20 p-4 rounded-xl transition-all flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-mono font-bold text-primary">BARRICA 40 KG</span>
                        <div className="font-display font-extrabold text-xl text-white mt-1 border-b border-white/5 pb-1 flex items-baseline gap-1">
                          {results.packages40kg} <span className="text-xs text-primary font-medium font-sans">barricas</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-400 leading-relaxed mt-2">
                        Mais rentável. Destinado a grandes incorporações, galpões e aplicação mecanizada.
                      </p>
                    </div>

                  </div>
                </div>
              )}

              {/* Sustainability indicators */}
              {results && (
                <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-left">
                  
                  <div className="flex items-start gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Droplet className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase font-mono tracking-wider">ÁGUA SALVA</span>
                      <strong className="text-sm font-display text-white">{results.waterSavedLiters} L</strong>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase font-mono tracking-wider">MÃO DE OBRA</span>
                      <strong className="text-sm font-display text-white">~{results.timeSavedHours} Horas</strong>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase font-mono tracking-wider">PERDA COMUM</span>
                      <strong className="text-sm font-display text-white">0% Desperdiçado</strong>
                    </div>
                  </div>

                </div>
              )}

            </div>

            {/* Direct Send Result CTA (Lead to Specialist) */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={handleShareOnWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-sans font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-300"
                id="calc-share-whatsapp-btn"
              >
                <Send className="w-4 h-4 rounded" />
                <span>Enviar Resultado para WhatsApp</span>
              </button>
              <span className="text-xs text-gray-500 max-w-sm text-center sm:text-left">
                *Cálculo teórico de acordo com as especificações padrão Hiperliga. Os resultados reais podem variar dependendo da qualidade de prumo e tipo de bloco.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
