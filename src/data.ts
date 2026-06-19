import { Product, BlockType } from './types';

export const EXPERT_CONTACT_WHATSAPP = 'https://wa.me/554188883365?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+Argamassa+Polim%C3%A9rica+Hiper+Liga.';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'hiperliga-3kg',
    name: 'Hiper Liga Bisnaga 3 Kg',
    weight: '3 Kg',
    image: 'https://hiperliga.com.br/wp-content/uploads/2025/08/3-KG-800.png',
    tagline: 'Ideal para pequenas reformas e reparos rápidos. Aperte e aplique!',
    description: 'A embalagem de 3 Kg é perfeita para o consumidor final, reformas rápidas, pequenos reparos ou paredes menores. Vem com o bico aplicador integrado: basta cortar a ponta e aplicar diretamente nos blocos.',
    yieldPerSqm: '1.5 kg/m²',
    idealFor: [
      'Pequenas reformas residenciais',
      'Paredes de fechamento interno',
      'Instalações rápidas sem sujeira',
      'Hobbistas e DIY (Faça Você Mesmo)'
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
    name: 'Hiper Liga Barrilha 25 Kg',
    weight: '25 Kg',
    image: 'https://hiperliga.com.br/wp-content/uploads/2025/08/25-0KG-800.png',
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
    name: 'Hiper Liga Barrilha 40 Kg',
    weight: '40 Kg',
    image: 'https://hiperliga.com.br/wp-content/uploads/2025/08/40-KG-800.png',
    tagline: 'Rendimento extremo para grandes obras e projetos de larga escala.',
    description: 'Desenvolvido especificamente para o segmento corporativo e construtoras de grande escala. O saco de 40 Kg maximiza a economia de escala, diminuindo o custo por metro quadrado assentado e garantindo produtividade astronômica.',
    yieldPerSqm: '1.5 kg/m²',
    idealFor: [
      'Grandes obras residenciais verticais e horizontais',
      'Galpões industriais e condomínios fechados',
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
    description: 'Aplique dois cordões paralelos de Hiper Liga sobre os blocos, com cerca de 1 cm de largura cada.'
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
