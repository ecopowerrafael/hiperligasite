export interface Product {
  id: string;
  name: string;
  weight: string;
  image: string;
  images?: string[];
  tagline: string;
  description: string;
  yieldPerSqm: string; // Rendimento por m2 (ex: "1.5 kg/m²")
  idealFor: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export type BlockTypeId = 'ceramic_8_hole' | 'ceramic_9_hole' | 'concrete_block' | 'cellular_concrete';

export interface BlockType {
  id: BlockTypeId;
  name: string;
  dimensions: string; // e.g., "9x19x19cm"
  consumptionPerSqm: number; // Consumo em kg por m2 de parede
  description: string;
}

export interface CalculationResult {
  area: number;
  productQtyKg: number;
  packages3kg: number;
  packages25kg: number;
  packages40kg: number;
  traditionalMortarWeightKg: number; // Argamassa convencional equivalente em Kg
  traditionalCementBags: number; // Sacos de cimento equivalentes
  weightSavedKg: number;
  timeSavedHours: number;
  waterSavedLiters: number;
}
