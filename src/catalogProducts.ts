import { EXPERT_CONTACT_WHATSAPP, PRODUCTS_DATA } from './data';
import { Product } from './types';
import { CATALOG_TECHNICAL_SHEETS } from './catalogTechnical';

export type CatalogProduct = {
  slug: string;
  name: string;
  category: string;
  description: string;
  product?: Product;
  image?: string;
  images?: string[];
  technicalSpecs?: { label: string; value: string }[];
  pendingImage?: boolean;
  technicalStatus: string;
  imageStatus: string;
  imageNote: string;
  sourcePdfPage: number;
  pdfPath: string;
  technicalSheet: string;
};

const productById = (id: string) => PRODUCTS_DATA.find((product) => product.id === id);
const whatsappFor = (name: string) => `${EXPERT_CONTACT_WHATSAPP.split('?')[0]}?text=${encodeURIComponent(`Olá! Gostaria de informações sobre ${name}.`)}`;

const PACKAGE_IMAGES: Record<string, string[]> = {
  'argamassa-polimerica': ['embalagem-3kg.png', 'embalagem-30kg.png', 'barrica-peso-nao-confirmado.png', 'kit-3-sachets.png', 'kit-5-sachets.png', 'kit-10-sachets.png', 'aplicacao-cordao.png', 'aplicacao-blocos.png', 'arte-promocional.png'],
  'sela-trinca': ['embalagem-generica.png', 'massa-branca-contexto.png', 'massa-cinza-contexto.png', 'kit-generico-3.png', 'kit-generico-5.png', 'kit-generico-10.png'],
  'reboco-polimerico': ['embalagem-generica.png', 'massa-branca-contexto.png', 'massa-cinza-contexto.png'],
  'acabamento-piso-laje': ['aplicacao-piso.png', 'piso-acabado-cinza.png', 'piso-acabado-claro.png', 'barrica-generica-30kg.png', 'barrica-generica.png'],
  'base-coat': ['fachada-aplicacao-fornecida.png', 'embalagem-generica.png', 'massa-branca-contexto.png', 'massa-cinza-contexto.png'],
  'revestimento-eps': ['eps-revestido-cinza.png', 'eps-revestido-branco.png', 'parede-acabada-contexto.png', 'ambiente-acabado-contexto.png'],
  'cola-cobogo': ['cobogos-aplicacao-fornecida.png', 'embalagem-generica.png'],
  'massa-repara-paredes': ['embalagem-150g.png', 'embalagem-1kg.png', 'aplicacao.png', 'produto-em-aplicacao.png', 'antes-depois.png', 'composicao-publicitaria.png'],
  'repara-madeira': ['embalagem-150g.png', 'produto-em-aplicacao.png', 'antes-depois.png'],
  'nivela-madeira': ['embalagem-150g.png', 'produto-na-bancada.png'],
  'rejunte-polimerico': ['embalagem-1kg.png', 'produto-em-aplicacao.png', 'arte-promocional.png'],
};

const PACKAGE_META: Record<string, Pick<CatalogProduct, 'technicalStatus' | 'imageStatus' | 'imageNote' | 'sourcePdfPage'>> = {
  'argamassa-polimerica': { technicalStatus: 'DADOS DE FÁBRICA', imageStatus: 'Identificação pelo rótulo', imageNote: 'Sachê de 3 kg e barrica de 30 kg identificáveis; kits separados das artes promocionais.', sourcePdfPage: 3 },
  'sela-trinca': { technicalStatus: 'DADOS DE FÁBRICA', imageStatus: 'Associação da cliente; embalagem genérica', imageNote: 'As embalagens são ilustrativas e não comprovam peso, cor ou produto exato.', sourcePdfPage: 4 },
  'reboco-polimerico': { technicalStatus: 'DADOS DE FÁBRICA', imageStatus: 'Associação da cliente; embalagem genérica', imageNote: 'A associação visual foi preservada conforme o mapeamento fornecido.', sourcePdfPage: 5 },
  'acabamento-piso-laje': { technicalStatus: 'DADOS DE FÁBRICA', imageStatus: 'Aplicação fornecida; embalagem genérica', imageNote: 'As imagens de aplicação não representam fotografia de embalagem identificada.', sourcePdfPage: 6 },
  'base-coat': { technicalStatus: 'DADOS DE REFERÊNCIA DE MERCADO', imageStatus: 'Aplicação fornecida; embalagem genérica', imageNote: 'Informações técnicas de referência, sujeitas à confirmação do fabricante.', sourcePdfPage: 7 },
  'revestimento-eps': { technicalStatus: 'DADOS DE REFERÊNCIA DE MERCADO', imageStatus: 'Aplicação fornecida; sem embalagem identificada', imageNote: 'Informações técnicas de referência, sujeitas à confirmação do fabricante.', sourcePdfPage: 8 },
  'cola-cobogo': { technicalStatus: 'DADOS DE REFERÊNCIA DE MERCADO', imageStatus: 'Aplicação fornecida; embalagem genérica', imageNote: 'Informações técnicas de referência, sujeitas à confirmação do fabricante.', sourcePdfPage: 9 },
  'cola-vidro': { technicalStatus: 'DADOS DE REFERÊNCIA DE MERCADO', imageStatus: 'Sem imagem localizada', imageNote: 'Imagem em breve. Informações técnicas de referência, sujeitas à confirmação do fabricante.', sourcePdfPage: 10 },
  'massa-repara-paredes': { technicalStatus: 'DADOS DE REFERÊNCIA DE MERCADO', imageStatus: 'Identificação pelo rótulo', imageNote: 'Informações técnicas de referência, sujeitas à confirmação do fabricante.', sourcePdfPage: 11 },
  'repara-madeira': { technicalStatus: 'DADOS DE FÁBRICA', imageStatus: 'Identificação pelo rótulo', imageNote: 'Imagens de aplicação e antes/depois estão identificadas separadamente.', sourcePdfPage: 12 },
  'nivela-madeira': { technicalStatus: 'DADOS DE FÁBRICA', imageStatus: 'Identificação pelo rótulo', imageNote: 'A imagem contextual está identificada separadamente da embalagem.', sourcePdfPage: 13 },
  'rejunte-polimerico': { technicalStatus: 'DADOS DE REFERÊNCIA DE MERCADO', imageStatus: 'Identificação pelo rótulo', imageNote: 'Informações técnicas de referência, sujeitas à confirmação do fabricante.', sourcePdfPage: 14 },
  'grafiato': { technicalStatus: 'DADOS DE FÁBRICA', imageStatus: 'Sem imagem localizada', imageNote: 'Imagem em breve.', sourcePdfPage: 15 },
  'textura': { technicalStatus: 'DADOS DE FÁBRICA', imageStatus: 'Sem imagem localizada', imageNote: 'Imagem em breve.', sourcePdfPage: 16 },
};

export const CATALOG_PRODUCTS: readonly CatalogProduct[] = [
  { slug: 'argamassa-polimerica', name: 'Argamassa Polimérica Cola Blocos e Tijolos', category: 'Argamassas', description: 'Argamassa pronta para assentamento de blocos e tijolos em alvenaria de vedação.', product: productById('hiperliga-3kg') },
  { slug: 'sela-trinca', name: 'Argamassa Sela Trinca e Pequenos Reparos', category: 'Reparos e Correções', description: 'Argamassa polimérica para vedação de fissuras, trincas e pequenos reparos.', product: productById('sela-trinca') },
  { slug: 'reboco-polimerico', name: 'Reboco Polimérico', category: 'Argamassas', description: 'Revestimento polimérico para acabamento final de paredes, disponível em cinza e branco.', product: productById('reboco-polimerico') },
  { slug: 'acabamento-piso-laje', name: 'Argamassa Polimérica Acabamento Piso e Laje', category: 'Argamassas', description: 'Revestimento polimérico para acabamento final e proteção de pisos e lajes.' },
  { slug: 'base-coat', name: 'Argamassa Base Coat', category: 'Argamassas', description: 'Camada base para placas cimentícias e sistemas de fachada.' },
  { slug: 'revestimento-eps', name: 'Revestimento Polimérico para EPS', category: 'Argamassas', description: 'Produto para proteção e acabamento de molduras e placas de EPS.' },
  { slug: 'cola-cobogo', name: 'Argamassa Cola Cobogó', category: 'Adesivos e Colas', description: 'Argamassa pronta para assentamento de cobogós e elementos vazados.' },
  { slug: 'cola-vidro', name: 'Cola Vidro', category: 'Adesivos e Colas', description: 'Argamassa para assentamento de tijolos e blocos de vidro.', pendingImage: true },
  { slug: 'massa-repara-paredes', name: 'Massa Repara Paredes — Corrige Imperfeições', category: 'Reparos e Correções', description: 'Massa pronta para corrigir furos, buracos e pequenas imperfeições em paredes.', product: productById('repara-paredes-1kg') },
  { slug: 'repara-madeira', name: 'Massa Calafetar / Repara Madeira — Restauração', category: 'Produtos para Madeira', description: 'Massa para preencher fissuras e reparar danos em superfícies de madeira.', product: productById('repara-madeira-150g') },
  { slug: 'nivela-madeira', name: 'Massa Nivela Madeira', category: 'Produtos para Madeira', description: 'Massa branca de acabamento fino para madeira antes da pintura.', product: productById('nivela-madeira-150g') },
  { slug: 'rejunte-polimerico', name: 'Rejunte Polimérico Premium — Pronto para Uso', category: 'Rejuntes', description: 'Rejunte de base polimérica pronto para uso em áreas secas e molhadas.', product: productById('rejunte-polimerico-1kg') },
  { slug: 'grafiato', name: 'Grafiato', category: 'Pinturas e Acabamentos', description: 'Revestimento acrílico texturizado com efeito riscado.', pendingImage: true },
  { slug: 'textura', name: 'Textura', category: 'Pinturas e Acabamentos', description: 'Revestimento acrílico texturizado para acabamento decorativo interno e externo.', pendingImage: true },
].map((entry) => ({
  ...entry,
  image: PACKAGE_IMAGES[entry.slug]?.[0] ? `/images/produtos/${entry.slug}/${PACKAGE_IMAGES[entry.slug][0]}` : undefined,
  images: PACKAGE_IMAGES[entry.slug]?.map((file) => `/images/produtos/${entry.slug}/${file}`),
  ...PACKAGE_META[entry.slug],
  pdfPath: `/pdfs/produtos/${entry.slug}/ficha-tecnica.pdf`,
  technicalSheet: CATALOG_TECHNICAL_SHEETS[entry.slug],
}));

export const getCatalogProduct = (slug: string) => CATALOG_PRODUCTS.find((product) => product.slug === slug);
export const getCatalogProductPath = (product: CatalogProduct) => product.slug === 'rejunte-polimerico' ? '/rejunte-polimerico/' : `/produtos/${product.slug}/`;
export const getCatalogProductStoreUrl = (product: CatalogProduct) => product.product?.storeUrl ?? 'https://loja.hiperliga.com.br/';
export const getCatalogProductWhatsappUrl = (product: CatalogProduct) => whatsappFor(product.name);
