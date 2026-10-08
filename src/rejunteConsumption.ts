export type GroutConsumptionRow = {
  heightCm: number;
  widthCm: number;
  thicknessMm: number;
  consumptionKgPerSqm: readonly [number, number, number, number, number, number];
};

export const JOINT_WIDTHS_MM = [1, 2, 3, 4, 5, 6] as const;

export const GROUT_CONSUMPTION_TABLE: readonly GroutConsumptionRow[] = [
  { heightCm: 5, widthCm: 5, thicknessMm: 5, consumptionKgPerSqm: [3.7, 7.3, 11.0, 14.6, 18.3, 22.0] },
  { heightCm: 7.5, widthCm: 7.5, thicknessMm: 6, consumptionKgPerSqm: [2.9, 5.9, 8.8, 11.7, 14.6, 17.6] },
  { heightCm: 10, widthCm: 10, thicknessMm: 6, consumptionKgPerSqm: [2.2, 4.4, 6.6, 8.8, 11.0, 13.2] },
  { heightCm: 15, widthCm: 15, thicknessMm: 6, consumptionKgPerSqm: [1.5, 2.9, 4.4, 5.9, 7.3, 8.8] },
  { heightCm: 20, widthCm: 20, thicknessMm: 6, consumptionKgPerSqm: [1.1, 2.2, 3.3, 4.4, 5.5, 6.6] },
  { heightCm: 20, widthCm: 30, thicknessMm: 6, consumptionKgPerSqm: [0.9, 1.8, 2.7, 3.7, 4.6, 5.5] },
  { heightCm: 24, widthCm: 11.5, thicknessMm: 10, consumptionKgPerSqm: [2.4, 4.7, 7.1, 9.4, 11.8, 14.1] },
  { heightCm: 30, widthCm: 30, thicknessMm: 8, consumptionKgPerSqm: [1.0, 2.0, 2.9, 3.9, 4.9, 5.9] },
  { heightCm: 40, widthCm: 40, thicknessMm: 6, consumptionKgPerSqm: [0.5, 1.1, 1.6, 2.2, 2.7, 3.3] },
  { heightCm: 45, widthCm: 45, thicknessMm: 8, consumptionKgPerSqm: [0.7, 1.3, 2.0, 2.6, 3.3, 3.9] },
  { heightCm: 50, widthCm: 50, thicknessMm: 8, consumptionKgPerSqm: [0.6, 1.2, 1.8, 2.3, 2.9, 3.5] },
  { heightCm: 60, widthCm: 60, thicknessMm: 8, consumptionKgPerSqm: [0.5, 1.0, 1.5, 2.0, 2.4, 2.9] },
  { heightCm: 60, widthCm: 30, thicknessMm: 10, consumptionKgPerSqm: [0.9, 1.8, 2.7, 3.7, 4.6, 5.5] },
  { heightCm: 80, widthCm: 80, thicknessMm: 10, consumptionKgPerSqm: [0.5, 0.9, 1.4, 1.8, 2.3, 2.7] },
  { heightCm: 100, widthCm: 100, thicknessMm: 10, consumptionKgPerSqm: [0.4, 0.7, 1.1, 1.5, 1.8, 2.2] },
  { heightCm: 120, widthCm: 60, thicknessMm: 10, consumptionKgPerSqm: [0.5, 0.9, 1.4, 1.8, 2.3, 2.7] },
];

export type GroutCalculation = {
  areaSqm: number;
  row: GroutConsumptionRow;
  jointWidthMm: number;
  consumptionKgPerSqm: number;
  totalKg: number;
  packages: number;
};

export function parseAreaInput(value: string): number | null {
  const normalized = value.trim().replace(',', '.');
  if (!normalized || !/^\d+(\.\d+)?$/.test(normalized)) return null;
  const area = Number(normalized);
  return Number.isFinite(area) && area > 0 ? area : null;
}

export function calculateGroutConsumption(areaSqm: number, rowIndex: number, jointWidthMm: number): GroutCalculation | null {
  const row = GROUT_CONSUMPTION_TABLE[rowIndex];
  const jointIndex = JOINT_WIDTHS_MM.indexOf(jointWidthMm as (typeof JOINT_WIDTHS_MM)[number]);
  if (!row || jointIndex < 0 || !Number.isFinite(areaSqm) || areaSqm <= 0) return null;

  const consumptionKgPerSqm = row.consumptionKgPerSqm[jointIndex];
  const totalKg = Math.round(areaSqm * consumptionKgPerSqm * 1_000_000) / 1_000_000;
  return {
    areaSqm,
    row,
    jointWidthMm,
    consumptionKgPerSqm,
    totalKg,
    packages: Math.ceil(totalKg - 1e-9),
  };
}
