import { EXPERT_CONTACT_WHATSAPP, PRODUCTS_DATA } from './data';

export type SolutionDefinition = {
  id: string;
  needTitle: string;
  needDescription: string;
  productName: string;
  brand: string;
  description: string;
  solutionImage: string;
  solutionImageAlt: string;
  productUrl?: string;
};

const whatsappFor = (productName: string) =>
  `${EXPERT_CONTACT_WHATSAPP.split('?')[0]}?text=${encodeURIComponent(`Olá! Gostaria de orientação sobre ${productName}.`)}`;

export const SOLUTIONS_PAGE_DATA: SolutionDefinition[] = [
  {
    id: 'argamassa-polimerica-3kg',
    needTitle: 'Assentamento de blocos e tijolos',
    needDescription: 'Para quem precisa assentar blocos e tijolos com uma solução pronta para uso.',
    productName: 'Argamassa Polimérica Cola Blocos E Tijolos Hiperliga 3 kg',
    brand: 'Hiperliga',
    description: 'Argamassa polimérica pronta para uso que substitui a argamassa convencional no assentamento de blocos e tijolos. Rende até 20 vezes mais que a argamassa tradicional, dispensa areia, cimento e água e é aplicada com bisnaga — obra mais rápida, mais limpa e com muito menos entulho. Alta aderência e excelente acabamento. Embalagem de 3 kg.',
    solutionImage: '/images/solucoes/8.png',
    solutionImageAlt: 'Arte oficial da solução de Argamassa Polimérica Hiperliga para assentamento de blocos e tijolos',
    productUrl: PRODUCTS_DATA.find((product) => product.id === 'hiperliga-3kg')?.storeUrl,
  },
  {
    id: 'acabamento-piso-laje',
    needTitle: 'Regularização e acabamento de pisos e lajes',
    needDescription: 'Para regularizar a superfície e executar o acabamento final de pisos e lajes conforme a indicação do produto.',
    productName: 'Argamassa Polimérica Acabamento Piso e Laje Hiperliga',
    brand: 'Hiperliga',
    description: 'Argamassa polimérica pronta para uso para regularização e acabamento final de pisos e lajes. Nivela a superfície, tem alta resistência mecânica e ótima aderência, dispensando areia e cimento — ideal para contrapiso de acabamento em áreas internas e externas.',
    solutionImage: '/images/products/drive-1dcm3zcgDkYOcb4AHQ6cXOagBFNlKaEKY.png',
    solutionImageAlt: 'Imagem oficial de acabamento para piso e laje Hiperliga',
  },
  {
    id: 'massa-corrida',
    needTitle: 'Pequenas imperfeições em paredes e tetos internos',
    needDescription: 'Para preparar paredes e tetos internos antes da pintura, corrigindo pequenas imperfeições.',
    productName: 'Massa Corrida Branca Granfinalle',
    brand: 'Granfinalle',
    description: 'Massa corrida branca de alta cobertura para nivelar e dar acabamento em paredes e tetos internos. Fácil de aplicar e de lixar, com secagem rápida, deixa a superfície lisa e uniforme, pronta para receber a pintura.',
    solutionImage: '/images/products/drive-1i4kqCqQ8GT4acDQ3boS9ymonxj4kz85o.png',
    solutionImageAlt: 'Imagem oficial da Massa Corrida Branca Granfinalle',
  },
  {
    id: 'massa-repara-paredes',
    needTitle: 'Furos, buracos e pequenas imperfeições em paredes internas',
    needDescription: 'Para corrigir furos, buracos, furos de parafuso e pequenas trincas em paredes internas.',
    productName: 'Massa Repara Paredes',
    brand: 'Hiperliga',
    description: 'Massa pronta para uso que corrige imperfeições, buracos, furos de parafuso e pequenas trincas em paredes internas. Aplicação simples com espátula, secagem rápida e superfície lisa pronta para lixar e pintar.',
    solutionImage: '/images/products/drive-1m0s0keRZseREFVsEeP6QJKaxJotiNcOT.png',
    solutionImageAlt: 'Imagem oficial da Massa Repara Paredes Hiperliga',
  },
  {
    id: 'sela-trinca',
    needTitle: 'Trincas, fissuras e pequenos reparos',
    needDescription: 'Para selar trincas e fissuras e executar pequenos reparos previstos na descrição do produto.',
    productName: 'Argamassa Sela Trinca e Pequenos Reparos',
    brand: 'Hiperliga',
    description: 'Argamassa polimérica pronta para uso desenvolvida para selar trincas e fissuras e executar pequenos reparos em paredes internas e externas. Flexível, de alta aderência e resistente à umidade, garante acabamento uniforme e aceita pintura após a secagem.',
    solutionImage: '/images/products/drive-1bJuCBiwW82qzep8fi4_U54-NwC_oyit1.png',
    solutionImageAlt: 'Imagem oficial da Argamassa Sela Trinca Hiperliga',
  },
];

export const solutionCta = (solution: SolutionDefinition) => ({
  label: solution.productUrl ? 'Conhecer produto' : 'Solicitar orientação',
  href: solution.productUrl ?? whatsappFor(solution.productName),
});
