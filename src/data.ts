import { Product, BlockType } from './types';

export const EXPERT_CONTACT_WHATSAPP = 'https://wa.me/554188883365?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+Argamassa+Polim%C3%A9rica+Hiperliga.';

export const HOME_PRODUCT_GROUPS = [
  {
    id: 'mais-vendidos',
    title: 'Mais Vendidos',
    products: [
      { name: 'Argamassa Polimérica Cola Blocos e Tijolos Hiperliga 3 kg', productId: 'hiperliga-3kg' },
      { name: 'Massa Repara Paredes Corrige Imperfeições Hiperliga 150 g', productId: 'repara-paredes-150g' },
      { name: 'Reboco Polimérico Hiperliga Cinza 3 kg', productId: 'reboco-polimerico' },
    ],
  },
  {
    id: 'destaques',
    title: 'Destaques',
    products: [
      { name: 'Rejunte Polimérico Hiperliga Pronto Para Uso Cor Branco 1 kg', productId: 'rejunte-polimerico-1kg' },
      { name: 'Massa Nivela Madeira Hiperliga Cor Branca 150 g', productId: 'nivela-madeira-150g' },
    ],
  },
  {
    id: 'novidades',
    title: 'Novidades',
    products: [
      { name: 'Massa Calafetar Repara Madeira 150 g', productId: 'repara-madeira-150g' },
      { name: 'Massa Repara Paredes Corrige Imperfeições Hiperliga 1 kg', productId: 'repara-paredes-1kg' },
    ],
  },
] as const;

export const MARKETPLACE_LINKS = {
  mercadoLivre: {
    label: 'Mercado Livre',
    buttonLabel: 'Comprar no Mercado Livre',
    href: 'https://www.mercadolivre.com.br/rejunte-polimerico-hiperliga-pronta-p-uso-varias-cores-1kg/up/MLBU4779271785',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Mercado_Livre_wordmark_%28Portuguese_version%29.svg',
  },
  shopee: {
    label: 'Shopee',
    buttonLabel: 'Comprar na Shopee',
    href: 'https://shopee.com.br/product/1494792896/58266527828/',
    logoSrc: 'https://cdn.simpleicons.org/shopee/EE4D2D',
  },
} as const;

const driveGallery = (...ids: string[]) => ids.map((id) => `/images/products/drive-${id}.png`);

const ARGAMASSA_3KG_GALLERY = driveGallery(
  '1TR041UBF2m6vJnnzfbh26Iax6RLNvZke', '1iLQ6aqSt6xso0qffTOE61jhhDE6uuNiC', '1t8HDVTJFeuteumouAF8zNrEwvjostzCb', '1i4kqCqQ8GT4acDQ3boS9ymonxj4kz85o', '1gYvDdlqp7X6TOmW2S7ZSsHgBt-xP2XUN', '1BRGIvVbdzC7qgdSr_Gk2NG3LD-VItJI8', '1AZEIs2qdZ_X9rzKWRgDMEUIWvMuEHJFC', '1Y-uS6mxI4KiCGMQDR1Nx8G-MyLhAATzm', '1FSfXqM4k8bRMKZWCguhFv6piB_rs7lU1', '1UeeEX1Yhh1dOUG0v3xwIdPd-3qY5MDx2', '1dGBlVeKpY7PV9kJsxTJTOrHIDoBF7O-_', '1EG5dfknWbWyhP3NwTFpPHBt77ZkjyZS4', '1PiY2k9vvNVZwuZvxNLxUY_RoKw80Gsso', '1aUXx9WPtdntJb3CQY9aBPkNcCcRifenR', '1E5pZv55TThX_msYq4lTPF5sYHs-1GJQQ', '1_qnagjPxn0Lzee_BlbmcavL_sp0J6ej8', '1fy2tyX1UAiILhLrX5A3lzV5WI464Xz1h', '167aKHGKhfbuHjfNw1M5KNjpmqlqTA9Dy', '15RrgR0BWyR-3U-qijdd6MK_ZrdyDrAay', '1dcm3zcgDkYOcb4AHQ6cXOagBFNlKaEKY', '1VetPkbahpA8sLMYwb67NtJrx-SkzQ6Oi', '1FkuRHBH37VSPXfAGOWG4S7LfHMxNS5F7', '12aI62mWcziuVLOABWBfak2tqtMM581px', '1gwubfQ_LeULCo0QFwdkBiqQ4jGFen59T', '1wak_UU2AzEsRAXbSu8MxrD0eT3HW0p0H', '1EMIGUMVycyyAvBTwD7nf4uHlsG1oLBNo', '113P9NnUbAL9olTurL7FMC8AjZ53VqPIH', '1m0s0keRZseREFVsEeP6QJKaxJotiNcOT', '1peG4_VM7TWe3LZ__TGd6R8rAFvJxq124', '1NYsDbbPs4-2DWCJJSA87OMZ65Dqa4XCG', '14iu6pS2TQzGXsOY8anjF28ce-dmvoyK7', '1gWfh4Ggw0jSRizFHKLvZ22oJ_QAc2i4z', '1jRS-TxArISaldrAdM_FSL9zrrNZ7Cm3M', '1O3j-UGGYAUrfDdMYtMLpfizS9Gae6aTk', '1qUGltFTp80URp23aqGrlF_yoW9SElj-O', '1RV2-RYt3k9J1lMhEY8drzskAxPEvilxt', '1C3sheyYgcz3arxPO_Jjc6aQih1BgvMZ2', '1Chozmfk5iJCK492IhT9EF62PrbvincDz', '1tnpazHHGeYs8NdCg3QIOdNy0A8DDMcrp', '1jri5xdNFM4o6y2fewUYhR_MDl0ZJRfmx', '1e0Ou8fPJcwWlvGauleW34rLvgbpSMGtE', '1MxYXreIPvzKAeT8omJ0eBMRI3Ci20OsB', '1aVkPYGp8eEkBfpsrszE5wx7evxWvngHQ', '17atJD5_jrWIQcK8aG929X8MozV1Nl3tm', '1xbel3ootJWxZ2UDMwMfuKLb-0Mt4mYuY', '1w8V8hjJG7p8QtFb9QVw1qdRF1x87IFdu', '1SwFLQU6rCqc04SloIceHdrLTk9oCkJ_Q', '138_smKXvzqe0itkPs7pcXlz69dZTHsIe', '12MOljaHNCaBrZ42IfXHSu5fnBlu4IG5t', '1bJuCBiwW82qzep8fi4_U54-NwC_oyit1', '1DOD0hky0iuqxUI2YiwyQsttqVogCjKxA', '137brqQ9lATHMz-BtWjvRjQ-g-sSNz86x', '1xK5DrRrb_oO9D7ZYAhXs5nkAG6yPAkvZ', '1F6WKs51zRq_t0lif5yQx-Cc3tA-1tffG', '1lXBZxrnKyexw5EIbj2ak5oUTq9ygrwzt', '1eu6qKewPEvoOFDOHmMQFMGwUfvKtR06Q', '1kbQj-2zv2EELABxgTYqp2ga6Mi5dmSX6', '1JqnJzf-OoJnKnYMBvqUT5AQ6DzLz0yHb', '14-pM8hGKqZ9_VnunCdmMcW7ENHVFncap', '1gV5cVYUSjC-Mgj88TO1y0I9wFv4j8Vo-', '1Vi9rgW8xWGbiIMi2XY1Zq-1CZ6creg7u', '11pFBSd-uJQccu7BtTLbyBfGYB_vWU7cV', '1CmiqgZAmdrPpoMdIMklcL3IaVVw4a0aY', '1RDAz0rv_2oS-CEXG518wheCjcM8fhbaG', '1hQFNyOUehnX9yQNCp4dq0fcD6N5qvLFK', '10hNmSm9ijRB4Jzou9zuQGc_L63RdXVa1', '12hqKy2tfaQjwQSQv3Ahcrz5dM_FW16iO'
);
const REPARA_PAREDES_150G_GALLERY = driveGallery('1m0s0keRZseREFVsEeP6QJKaxJotiNcOT', '1peG4_VM7TWe3LZ__TGd6R8rAFvJxq124', '1NYsDbbPs4-2DWCJJSA87OMZ65Dqa4XCG', '14iu6pS2TQzGXsOY8anjF28ce-dmvoyK7', '1gWfh4Ggw0jSRizFHKLvZ22oJ_QAc2i4z', '1jRS-TxArISaldrAdM_FSL9zrrNZ7Cm3M', '1O3j-UGGYAUrfDdMYtMLpfizS9Gae6aTk');
const REBOCO_3KG_GALLERY = driveGallery('1bJuCBiwW82qzep8fi4_U54-NwC_oyit1', '1DOD0hky0iuqxUI2YiwyQsttqVogCjKxA', '137brqQ9lATHMz-BtWjvRjQ-g-sSNz86x', '1xK5DrRrb_oO9D7ZYAhXs5nkAG6yPAkvZ', '1F6WKs51zRq_t0lif5yQx-Cc3tA-1tffG', '1lXBZxrnKyexw5EIbj2ak5oUTq9ygrwzt', '1eu6qKewPEvoOFDOHmMQFMGwUfvKtR06Q', '1kbQj-2zv2EELABxgTYqp2ga6Mi5dmSX6');
const REJUNTE_1KG_GALLERY = driveGallery('1wak_UU2AzEsRAXbSu8MxrD0eT3HW0p0H', '1EMIGUMVycyyAvBTwD7nf4uHlsG1oLBNo', '113P9NnUbAL9olTurL7FMC8AjZ53VqPIH');
const NIVELA_MADEIRA_150G_GALLERY = driveGallery('1qUGltFTp80URp23aqGrlF_yoW9SElj-O', '1RV2-RYt3k9J1lMhEY8drzskAxPEvilxt');
const REPARA_MADEIRA_150G_GALLERY = driveGallery('1C3sheyYgcz3arxPO_Jjc6aQih1BgvMZ2', '1Chozmfk5iJCK492IhT9EF62PrbvincDz', '1tnpazHHGeYs8NdCg3QIOdNy0A8DDMcrp');
const REPARA_PAREDES_1KG_GALLERY = REPARA_PAREDES_150G_GALLERY;

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'hiperliga-3kg',
    name: 'Argamassa Polimérica Cola Blocos e Tijolos Hiperliga 3 kg',
    weight: '3 Kg',
    image: ARGAMASSA_3KG_GALLERY[0],
    images: ARGAMASSA_3KG_GALLERY,
    storeUrl: 'https://loja.hiperliga.com.br/product/argamassa/',
    tagline: 'Ideal para pequenas reformas e reparos rápidos. Aperte e aplique!',
    description: 'Argamassa polimérica pronta para uso que substitui a argamassa convencional no assentamento de blocos e tijolos. Dispensa areia, cimento e água, com aplicação por bisnaga, alta aderência e excelente acabamento.',
    yieldPerSqm: '1.5 kg/m²',
    idealFor: [
      'Pequenas reformas residenciais',
      'Paredes de fechamento interno',
      'Instalações rápidas sem sujeira',
      'Hobbistas and DIY (Faça Você Mesmo)'
    ],
    specs: [
      { label: 'Embalagem', value: 'Bisnaga flexível de 3 Kg' },
      { label: 'Rendimento Médio', value: 'Até 2.0 m² de parede por bisnaga' },
      { label: 'Aplicação', value: 'Bico dosador de corte fácil' },
      { label: 'Secagem Inicial', value: '6 a 12 horas' },
      { label: 'Cura Total', value: '72 horas' }
    ]
  },
  {
    id: 'hiperliga-25kg',
    name: 'Hiperliga Barrica 25 Kg',
    weight: '25 Kg',
    image: 'https://loja.hiperliga.com.br/wp-content/uploads/2025/08/25-0KG-800.png',
    tagline: 'O equilíbrio perfeito para obras residenciais de médio e grande porte.',
    description: 'A versão de 25 Kg atende perfeitamente a empreiteiros e construtores que buscam agilidade e alto rendimento. Fácil de manusear no canteiro de obras, reduz drasticamente o esforço físico da equipe e acelera o cronograma.',
    yieldPerSqm: '1.5 kg/m²',
    idealFor: [
      'Obras residenciais e comerciais',
      'Assentamento de blocos cerâmicos ou concreto',
      'Reformas comerciais de alta velocidade',
      'Empreiteiras e construtoras de médio porte'
    ],
    specs: [
      { label: 'Embalagem', value: 'Saco valvulado resistente de 25 Kg' },
      { label: 'Rendimento Médio', value: 'Até 16 m² de parede por saco' },
      { label: 'Modo de Uso', value: 'Aplicado com bisnaga aplicadora ou aplicador mecânico' },
      { label: 'Vantagem Logística', value: 'Paletização inteligente e fácil estocagem' },
      { label: 'Cura Total', value: '72 horas' }
    ]
  },
  {
    id: 'hiperliga-40kg',
    name: 'Hiperliga Barrica 40 Kg',
    weight: '40 Kg',
    image: 'https://loja.hiperliga.com.br/wp-content/uploads/2025/08/40-KG-800.png',
    tagline: 'Rendimento extremo para grandes obras e projetos de larga escala.',
    description: 'Desenvolvido especificamente para o segmento corporativo e construtoras de grande escala. O saco de 40 Kg maximiza a economia de escala, diminuindo o custo por metro quadrado assentado e garantindo produtividade astronômica.',
    yieldPerSqm: '1.5 kg/m²',
    idealFor: [
      'Grandes obras residenciais verticais e horizontais',
      'Galpões industriais e condomínios confessados',
      'Construção civil de alta produtividade',
      'Sistemas de aplicação mecanizada'
    ],
    specs: [
      { label: 'Embalagem', value: 'Saco reforçado industrial de 40 Kg' },
      { label: 'Rendimento Médio', value: 'Até 27 m² de parede por saco' },
      { label: 'Aplicação', value: 'Mecanizada por bomba de argamassa ou aplicador profissional' },
      { label: 'Economia', value: 'Menor custo por quilo da categoria' },
      { label: 'Eco-Certificado', value: 'Gera resíduo zero na obra' }
    ]
  },
  {
    id: 'sela-trinca',
    name: 'Sela Trinca',
    weight: '1.5 Kg',
    image: 'https://loja.hiperliga.com.br/wp-content/uploads/2026/06/Design-sem-nome-16.png',
    images: [
      'https://loja.hiperliga.com.br/wp-content/uploads/2026/06/Design-sem-nome-16.png',
      'https://loja.hiperliga.com.br/wp-content/uploads/2026/06/D_NQ_NP_2X_687392-MLU77434925922_072024-F.webp'
    ],
    tagline: 'Argamassa Sela Trinca E Pequenos Reparos Interno E Externo.',
    description: 'Eficiência Imbatível: Desenvolvida com alta tecnologia, nossa Sela Trinca garante resultados rápidos e duradouros. Com uma densidade de 1,85 g/cm³, oferece uma aplicação robusta e eficaz de alto padrão.',
    yieldPerSqm: 'Alto rendimento',
    idealFor: [
      'Sela trincas de alvenaria e concreto',
      'Pequenos reparos internos e externos',
      'Tratamento de fissuras dinâmicas e estáticas',
      'Acabamento ultra-liso aceitando pintura'
    ],
    specs: [
      { label: 'Densidade', value: '1.85 g/cm³' },
      { label: 'Ambiente', value: 'Interno e Externo' },
      { label: 'Textura', value: 'Fina e maleável' },
      { label: 'Base', value: 'Acrílica elastomérica' },
      { label: 'Resistência UV', value: 'Excelente contra intempéries' }
    ]
  },
  {
    id: 'repara-paredes-150g',
    name: 'Massa Repara Paredes Corrige Imperfeições Hiperliga 150 g',
    weight: '150 g',
    image: REPARA_PAREDES_150G_GALLERY[0],
    images: REPARA_PAREDES_150G_GALLERY,
    tagline: 'Correção prática de imperfeições em paredes internas.',
    description: 'Massa pronta para uso que corrige imperfeições, buracos, furos de parafuso e pequenas trincas em paredes internas. Aplicação simples com espátula, secagem rápida e superfície lisa pronta para lixar e pintar.',
    yieldPerSqm: 'Conforme a aplicação',
    idealFor: ['Paredes internas', 'Furos de parafuso', 'Pequenas trincas'],
    specs: [{ label: 'Embalagem', value: '150 g' }, { label: 'Aplicação', value: 'Espátula' }]
  },
  {
    id: 'rejunte-polimerico-1kg',
    name: 'Rejunte Polimérico Hiperliga Pronto Para Uso Cor Branco 1 kg',
    weight: '1 Kg',
    image: REJUNTE_1KG_GALLERY[0],
    images: REJUNTE_1KG_GALLERY,
    tagline: 'Rejunte branco pronto para uso em pisos e azulejos.',
    description: 'Rejunte polimérico pronto para uso na cor branca, indicado para áreas internas e externas. Dispensa mistura com água, com alta aderência, flexibilidade e resistência a mofo e manchas.',
    yieldPerSqm: 'Conforme a junta',
    idealFor: ['Pisos e azulejos', 'Áreas internas e externas', 'Juntas uniformes'],
    specs: [{ label: 'Embalagem', value: '1 Kg' }, { label: 'Cor', value: 'Branco' }]
  },
  {
    id: 'nivela-madeira-150g',
    name: 'Massa Nivela Madeira Hiperliga Cor Branca 150 g',
    weight: '150 g',
    image: NIVELA_MADEIRA_150G_GALLERY[0],
    images: NIVELA_MADEIRA_150G_GALLERY,
    tagline: 'Nivela e corrige imperfeições em superfícies de madeira.',
    description: 'Massa niveladora pronta para uso na cor branca, formulada para preencher furos, riscos, trincas e emendas em portas, janelas, rodapés, batentes e móveis. Após secar, pode ser lixada, pintada ou envernizada.',
    yieldPerSqm: 'Conforme a aplicação',
    idealFor: ['Portas e janelas', 'Móveis e rodapés', 'Correção de riscos e furos'],
    specs: [{ label: 'Embalagem', value: '150 g' }, { label: 'Cor', value: 'Branca' }]
  },
  {
    id: 'repara-madeira-150g',
    name: 'Massa Calafetar Repara Madeira 150 g',
    weight: '150 g',
    image: REPARA_MADEIRA_150G_GALLERY[0],
    images: REPARA_MADEIRA_150G_GALLERY,
    tagline: 'Repara e calafeta imperfeições em madeira.',
    description: 'Massa pronta para calafetar e reparar madeira, preenchendo furos, trincas e imperfeições em portas, janelas, rodapés, batentes e móveis. Após secar, pode ser lixada, pintada ou envernizada.',
    yieldPerSqm: 'Conforme a aplicação',
    idealFor: ['Portas e janelas', 'Móveis e batentes', 'Furos e trincas'],
    specs: [{ label: 'Embalagem', value: '150 g' }]
  },
  {
    id: 'repara-paredes-1kg',
    name: 'Massa Repara Paredes Corrige Imperfeições Hiperliga 1 kg',
    weight: '1 Kg',
    image: REPARA_PAREDES_1KG_GALLERY[0],
    images: REPARA_PAREDES_1KG_GALLERY,
    tagline: 'Mais produto para corrigir imperfeições em paredes internas.',
    description: 'Massa pronta para uso que corrige imperfeições, buracos, furos de parafuso e pequenas trincas em paredes internas. Aplicação simples com espátula, secagem rápida e superfície lisa pronta para lixar e pintar.',
    yieldPerSqm: 'Conforme a aplicação',
    idealFor: ['Paredes internas', 'Furos de parafuso', 'Pequenas trincas'],
    specs: [{ label: 'Embalagem', value: '1 Kg' }, { label: 'Aplicação', value: 'Espátula' }]
  },
  {
    id: 'reboco-polimerico',
    name: 'Reboco Polimérico Hiperliga Cinza 3 kg',
    weight: '3 Kg',
    image: REBOCO_3KG_GALLERY[0],
    images: REBOCO_3KG_GALLERY,
    tagline: 'Vem pronta para o uso sem bater ou adicionar água.',
    description: 'Reboco polimérico pronto para uso que substitui o reboco tradicional de areia e cimento. Aplicação com desempenadeira, alta aderência, secagem rápida e acabamento uniforme, reduzindo desperdício, peso e tempo de obra.',
    yieldPerSqm: 'Rendimento excelente',
    idealFor: [
      'Reboco fino e direto sobre blocos',
      'Eliminação total de betoneiras e poeiras',
      'Agilidade em revestimentos de paredes',
      'Obras limpas e sustentáveis de alto rendimento'
    ],
    specs: [
      { label: 'Preparo', value: 'Nulo (pronta para uso)' },
      { label: 'Consumo Água', value: 'Zero litros adicionais' },
      { label: 'Equipamento', value: 'Dispensa misturador mecânico' },
      { label: 'Aplicação', value: 'Desempenadeira ou pistola de projeção' }
    ]
  },
  {
    id: 'revestimento-telhas',
    name: 'Revestimento para Telhas',
    weight: '18 L',
    image: 'https://loja.hiperliga.com.br/wp-content/uploads/2026/06/Tinta-termica-para-telhado-fibrocimento-foto-Solucoes-Industriais-n3cfgCJXbxPrh59bgUxp8RA2cSFK7m.webp',
    images: [
      'https://loja.hiperliga.com.br/wp-content/uploads/2026/06/Tinta-termica-para-telhado-fibrocimento-foto-Solucoes-Industriais-n3cfgCJXbxPrh59bgUxp8RA2cSFK7m.webp',
      'https://loja.hiperliga.com.br/wp-content/uploads/2026/06/Casa_telhado_branco_sol_forte_202605051352.webp'
    ],
    tagline: 'Impermeabilização e proteção térmica de alta performance.',
    description: 'Produto premium à base de emulsões acrílicas e componentes hidro-repelentes de última geração, desenvolvido sob medida para impermeabilização profunda e refletância térmica em telhados de fibrocimento, asbesto, amianto ou acartonados.',
    yieldPerSqm: 'Alta cobertura',
    idealFor: [
      'Impermeabilização de telhados de todos os tipos',
      'Proteção térmica ativa contra calor solar intenso',
      'Prevenção de infiltrações de água pluvial',
      'Eliminação de fungos, algas e umidade em lajes'
    ],
    specs: [
      { label: 'Base Hidro', value: 'Emulsões acrílicas com resinas' },
      { label: 'Ação', value: 'Hidro-repelente e Refletor Térmico' },
      { label: 'Diluição', value: 'Pronta para uso ou até 10% água' },
      { label: 'Aplicação', value: 'Rolo, trincha ou airless profissional' }
    ]
  }
];

export const BLOCK_TYPES_DATA: BlockType[] = [
  {
    id: 'ceramic_8_hole',
    name: 'Tijolo Cerâmico de 8 furos (em pé)',
    dimensions: '9x19x19 cm',
    consumptionPerSqm: 1.5, // 1.5 kg de argamassa por m²
    description: 'O tijolo cerâmico tradicional mais comum. Requer duas linhas finas do cordão de argamassa de aproximadamente 1cm de largura.'
  },
  {
    id: 'ceramic_9_hole',
    name: 'Tijolo Cerâmico de 9 furos (deitado)',
    dimensions: '11.5x14x24 cm',
    consumptionPerSqm: 1.8, // 1.8 kg de argamassa por m²
    description: 'Tijolo assentado horizontalmente. Requer aplicação contínua de dois cordões paralelos bem uniformes.'
  },
  {
    id: 'concrete_block',
    name: 'Bloco de Concreto Estrutural ou de Vedação',
    dimensions: '14x19x39 cm',
    consumptionPerSqm: 2.2, // 2.2 kg de argamassa por m² devido à maior parede de contato
    description: 'Bloco de concreto. Requer dois cordões de assentamento nas bordas do bloco. Garante estabilidade excelente.'
  },
  {
    id: 'cellular_concrete',
    name: 'Bloco de Concreto Celular autoclaved',
    dimensions: '10x30x60 cm',
    consumptionPerSqm: 1.2, // Superfícies muito planas requerem menos argamassa
    description: 'Blocos ultra-nivelados. Permitem uma junta extremamente fina e máxima velocidade de assentamento.'
  }
];

export const ADVANTAGES_DATA = [
  {
    title: 'Pronto para Uso',
    description: 'Abra e aplique sem perder tempo. Não precisa adicionar água, areia, cal ou misturadores hidráulicos na obra.',
    iconName: 'Wand2'
  },
  {
    title: 'Velocidade Triplicada',
    description: 'Aplica-se em apenas dois cordões finos, sem a necessidade de colher de pedreiro. Faça sua parede até 3 vezes mais rápido.',
    iconName: 'Zap'
  },
  {
    title: 'Desperdício Zero',
    description: 'Sem perdas no chão, sem sobras na masseira. Toda a argamassa do saco vai direto para a estrutura da junta da parede.',
    iconName: 'Sparkles'
  },
  {
    title: 'Estrutura Mais Leve',
    description: 'Espessura de junta de apenas 1,5 mm vs 15 mm da argamassa tradicional, reduzindo o Peso Morto da parede em até 90%.',
    iconName: 'Feather'
  },
  {
    title: 'Impermeabilidade Total',
    description: 'Composição polimérica inovadora que combate infiltrações na base da parede. Bloqueia a umidade ascendente.',
    iconName: 'Droplet'
  },
  {
    title: 'Altíssima Resistência',
    description: 'Resultados de tração e compressão superiores aos da argamassa convencional em testes laboratoriais rigorosos.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Sustentabilidade Real',
    description: 'Redução drástica nas emissões de CO₂, zero extração de areia dos rios e redução de resíduos plásticos e pó na obra.',
    iconName: 'Leaf'
  },
  {
    title: 'Organização e Limpeza',
    description: 'Canteiro limpo, livre de poeira e sacos rasgados de cimento. Um ambiente de trabalho infinitamente mais produtivo e salubre.',
    iconName: 'CheckCircle2'
  }
];

export const APPLICATION_STEPS = [
  {
    number: '01',
    title: 'Alinhamento Perfeito',
    description: 'A primeira fiada deve ser assentada com argamassa convencional para garantir o nível absoluto e prumo exato horizontal.'
  },
  {
    number: '02',
    title: 'Dois Cordões Continuos',
    description: 'Aplique dois cordões paralelos de Hiperliga sobre os blocos, com cerca de 1 cm de largura cada.'
  },
  {
    number: '03',
    title: 'Ajuste sob Pressão',
    description: 'Pressione firmemente o bloco superior sobre os cordões de argamassa de forma que ela se espalhe uniformemente, cobrindo o bloco.'
  },
  {
    number: '04',
    title: 'Estabilidade e Pronto',
    description: 'Ao final do dia, a fiada já estará travada e firme. Sem sujeira, sem masseiras para limpar, sem desperdício.'
  }
];
