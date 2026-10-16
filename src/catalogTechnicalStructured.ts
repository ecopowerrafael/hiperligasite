import technicalSheets from './catalogTechnicalStructured.json';

export type TechnicalPackage = {
  packaging: string;
  color: string;
  sku: string;
  ean: string;
};

export type TechnicalSheet = {
  status: 'DADOS DE FÁBRICA' | 'DADOS DE REFERÊNCIA DE MERCADO';
  subtitle: string;
  description: string;
  indications: string[];
  applicationSteps: string[];
  limitations: string[];
  specs: { label: string; value: string }[];
  packages: TechnicalPackage[];
  note?: string;
  summary: { label: string; value: string }[];
};

export const CATALOG_TECHNICAL_SHEETS = technicalSheets as Record<string, TechnicalSheet>;
