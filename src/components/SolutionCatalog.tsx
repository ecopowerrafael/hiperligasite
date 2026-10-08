import { useEffect, useRef, useState } from 'react';
import { Maximize2, X } from 'lucide-react';

type CatalogItem = {
  file: string;
  alt: string;
  label: string;
};

const CATALOG_ITEMS: CatalogItem[] = [
  { file: '6.png', label: 'Argamassa Polimérica — necessidade', alt: 'Pessoa misturando argamassa em uma obra, com texto sobre demora, sujeira e desperdício' },
  { file: '8.png', label: 'Argamassa Polimérica — solução', alt: 'Arte oficial da Argamassa Polimérica Hiperliga para assentamento de blocos e tijolos' },
  { file: '1.png', label: 'Sela Trinca — necessidade', alt: 'Parede branca com uma trinca destacada e texto sobre trincas na parede' },
  { file: '2.png', label: 'Sela Trinca — solução', alt: 'Arte oficial da Argamassa Polimérica Sela Trinca Hiperliga' },
  { file: '3.png', label: 'Massa Repara Paredes — necessidade', alt: 'Parede com pequeno furo e texto sobre pequenas imperfeições' },
  { file: '4.png', label: 'Massa Repara Paredes — solução', alt: 'Arte oficial da Massa Repara Paredes Hiperliga' },
  { file: '5.png', label: 'Reboco Polimérico — necessidade', alt: 'Parede com revestimento soltando e texto sobre parede esfarelando' },
  { file: '7.png', label: 'Reboco Polimérico — solução', alt: 'Arte oficial do Reboco Polimérico Hiperliga' },
];

export default function SolutionCatalog() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      requestAnimationFrame(() => triggerRef.current?.focus());
    };
  }, [selectedIndex]);

  const selected = selectedIndex === null ? undefined : CATALOG_ITEMS[selectedIndex];

  return (
    <section className="mt-16" aria-labelledby="solution-catalog-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Materiais fornecidos</p>
        <h2 id="solution-catalog-title" className="mt-3 font-display text-3xl font-extrabold text-brand-dark">Catálogo de soluções</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">Consulte as artes oficiais das soluções e necessidades apresentadas para a obra.</p>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 xl:grid-cols-2">
        {CATALOG_ITEMS.map((item, index) => (
          <figure key={item.file} className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <button
              type="button"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setSelectedIndex(index);
              }}
              className="group block w-full rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={`Ampliar ${item.label}`}
            >
              <img
                src={`/images/solucoes/${item.file}`}
                alt={item.alt}
                width="1692"
                height="2000"
                loading="lazy"
                className="h-auto w-full rounded-2xl object-contain transition-opacity group-hover:opacity-90"
              />
              <figcaption className="flex items-center justify-between gap-3 px-2 pb-1 pt-3 text-xs font-semibold text-slate-600">
                <span>{item.label}</span>
                <span className="inline-flex shrink-0 items-center gap-1 text-primary"><Maximize2 className="h-3.5 w-3.5" /> Ampliar</span>
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-[70] overflow-y-auto bg-brand-dark/95 p-4 sm:p-8" role="dialog" aria-modal="true" aria-labelledby="solution-catalog-dialog-title">
          <div className="mx-auto flex min-h-full max-w-5xl flex-col items-center justify-center">
            <div className="mb-4 flex w-full items-center justify-between gap-4 text-white">
              <h3 id="solution-catalog-dialog-title" className="font-display text-lg font-bold">{selected.label}</h3>
              <button type="button" onClick={() => setSelectedIndex(null)} className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/40 px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white" aria-label="Fechar imagem ampliada">
                <X className="h-5 w-5" /> Fechar
              </button>
            </div>
            <img src={`/images/solucoes/${selected.file}`} alt={selected.alt} width="1692" height="2000" className="h-auto max-h-none w-full rounded-2xl object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
