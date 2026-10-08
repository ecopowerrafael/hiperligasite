import { FormEvent, useState } from 'react';
import { Calculator, CheckCircle2 } from 'lucide-react';
import {
  calculateGroutConsumption,
  GROUT_CONSUMPTION_TABLE,
  JOINT_WIDTHS_MM,
  parseAreaInput,
  GroutCalculation,
} from '../rejunteConsumption';

const formatNumber = (value: number) => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 6 }).format(value);

export default function GroutCalculator() {
  const [area, setArea] = useState('');
  const [rowIndex, setRowIndex] = useState('');
  const [jointWidth, setJointWidth] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState<GroutCalculation | null>(null);

  const invalidateResult = () => {
    setResult(null);
    setError('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsedArea = parseAreaInput(area);
    const parsedRowIndex = Number(rowIndex);
    const parsedJointWidth = Number(jointWidth);
    if (parsedArea === null) {
      setResult(null);
      setError('Informe uma área positiva, usando apenas números.');
      return;
    }
    if (!GROUT_CONSUMPTION_TABLE[parsedRowIndex]) {
      setResult(null);
      setError('Selecione o tamanho da cerâmica.');
      return;
    }
    if (!JOINT_WIDTHS_MM.includes(parsedJointWidth as (typeof JOINT_WIDTHS_MM)[number])) {
      setResult(null);
      setError('Selecione a largura da junta.');
      return;
    }
    const calculation = calculateGroutConsumption(parsedArea, parsedRowIndex, parsedJointWidth);
    if (!calculation) {
      setResult(null);
      setError('Não foi possível calcular com os dados informados.');
      return;
    }
    setError('');
    setResult(calculation);
  };

  return (
    <section id="calculadora-rejunte" className="scroll-mt-28 rounded-3xl bg-brand-dark p-6 text-white shadow-xl sm:p-9">
      <div className="flex items-start gap-4">
        <Calculator className="mt-1 h-6 w-6 shrink-0 text-secondary" aria-hidden="true" />
        <div>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Calculadora de consumo</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">Informe a área, o formato da cerâmica e a largura da junta para estimar as embalagens de 1 kg.</p>
        </div>
      </div>

      <form className="mt-8 grid gap-5 md:grid-cols-3" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="grout-area" className="mb-2 block text-sm font-bold">Área a rejuntar (m²)</label>
          <input id="grout-area" name="area" type="text" inputMode="decimal" value={area} onChange={(event) => { setArea(event.target.value); invalidateResult(); }} aria-invalid={Boolean(error && !parseAreaInput(area))} aria-describedby={error ? 'grout-error' : undefined} className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-slate-900 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30" placeholder="Ex.: 12,5" />
        </div>
        <div>
          <label htmlFor="grout-format" className="mb-2 block text-sm font-bold">Tamanho da cerâmica</label>
          <select id="grout-format" name="format" value={rowIndex} onChange={(event) => { setRowIndex(event.target.value); invalidateResult(); }} aria-describedby={error ? 'grout-error' : undefined} className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-slate-900 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30">
            <option value="">Selecione</option>
            {GROUT_CONSUMPTION_TABLE.map((row, index) => <option key={`${row.heightCm}-${row.widthCm}-${row.thicknessMm}`} value={index}>{row.heightCm} × {row.widthCm} cm — espessura de {row.thicknessMm} mm</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="grout-joint" className="mb-2 block text-sm font-bold">Largura da junta (mm)</label>
          <select id="grout-joint" name="joint" value={jointWidth} onChange={(event) => { setJointWidth(event.target.value); invalidateResult(); }} aria-describedby={error ? 'grout-error' : undefined} className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-slate-900 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30">
            <option value="">Selecione</option>
            {JOINT_WIDTHS_MM.map((width) => <option key={width} value={width}>{width} mm</option>)}
          </select>
        </div>
        <div className="md:col-span-3">
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-xl bg-secondary px-5 py-3.5 text-sm font-bold text-brand-dark transition-colors hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-brand-dark">Calcular quantidade</button>
        </div>
      </form>

      {error && <p id="grout-error" role="alert" className="mt-4 rounded-xl border border-red-300/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</p>}

      {result && (
        <div className="mt-8 rounded-2xl border border-secondary/30 bg-white/10 p-5" aria-live="polite">
          <div className="flex items-center gap-2 text-secondary"><CheckCircle2 className="h-5 w-5" aria-hidden="true" /><h3 className="font-display text-lg font-bold">Estimativa de consumo</h3></div>
          <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
            <p><span className="block text-white/60">Consumo estimado por m²</span><strong>{formatNumber(result.consumptionKgPerSqm)} kg/m²</strong></p>
            <p><span className="block text-white/60">Quantidade total estimada</span><strong>{formatNumber(result.totalKg)} kg</strong></p>
            <p><span className="block text-white/60">Formato e espessura</span><strong>{result.row.heightCm} × {result.row.widthCm} cm — {result.row.thicknessMm} mm</strong></p>
            <p><span className="block text-white/60">Junta e área</span><strong>{result.jointWidthMm} mm — {formatNumber(result.areaSqm)} m²</strong></p>
          </div>
          <p className="mt-5 rounded-xl bg-secondary/15 px-4 py-3 text-base font-bold text-white">Quantidade estimada: {result.packages} embalagens de 1 kg.</p>
          <p className="mt-4 text-xs leading-relaxed text-white/60">Estimativa calculada conforme a tabela de consumo fornecida pela Hiperliga. O consumo real pode variar conforme as condições de aplicação.</p>
        </div>
      )}
    </section>
  );
}
