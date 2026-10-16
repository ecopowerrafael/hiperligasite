import acabamentoPisoLaje from './catalog-source/technical/acabamento-piso-laje.txt?raw';
import argamassaPolimerica from './catalog-source/technical/argamassa-polimerica.txt?raw';
import baseCoat from './catalog-source/technical/base-coat.txt?raw';
import colaCobogo from './catalog-source/technical/cola-cobogo.txt?raw';
import colaVidro from './catalog-source/technical/cola-vidro.txt?raw';
import grafiato from './catalog-source/technical/grafiato.txt?raw';
import massaReparaParedes from './catalog-source/technical/massa-repara-paredes.txt?raw';
import nivelaMadeira from './catalog-source/technical/nivela-madeira.txt?raw';
import rebocoPolimerico from './catalog-source/technical/reboco-polimerico.txt?raw';
import rejuntePolimerico from './catalog-source/technical/rejunte-polimerico.txt?raw';
import reparaMadeira from './catalog-source/technical/repara-madeira.txt?raw';
import revestimentoEps from './catalog-source/technical/revestimento-eps.txt?raw';
import selaTrinca from './catalog-source/technical/sela-trinca.txt?raw';
import textura from './catalog-source/technical/textura.txt?raw';

export const CATALOG_TECHNICAL_SHEETS: Record<string, string> = {
  'acabamento-piso-laje': acabamentoPisoLaje,
  'argamassa-polimerica': argamassaPolimerica,
  'base-coat': baseCoat,
  'cola-cobogo': colaCobogo,
  'cola-vidro': colaVidro,
  grafiato,
  'massa-repara-paredes': massaReparaParedes,
  'nivela-madeira': nivelaMadeira,
  'reboco-polimerico': rebocoPolimerico,
  'rejunte-polimerico': rejuntePolimerico,
  'repara-madeira': reparaMadeira,
  'revestimento-eps': revestimentoEps,
  'sela-trinca': selaTrinca,
  textura,
};
