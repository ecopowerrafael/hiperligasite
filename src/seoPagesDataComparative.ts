import { SEOPageContent } from './seoPagesData';

export function generateComparativePages(): Record<string, SEOPageContent> {
  const pages: Record<string, SEOPageContent> = {};

  const comparativeDefs = [
    {
      slug: 'substituir-cal-e-areia-por-massa-pronta',
      title: 'Substituir Cal e Areia por Massa Pronta? Prós e Contras',
      metaDescription: 'Descubra as vantagens reais de substituir cal, cimento e areia pela massa polimérica pronta Hiperliga. Veja comparativos de custos e agilidade.',
      h1: 'Substituir Cal e Areia por Massa Pronta: Guia de Transição',
      tagline: 'Esqueça as masseiras pesadas. Entenda como funciona a substituição direta da mistura convencional pela solda química de junta fina.',
      problemTitle: 'O Inferno Logístico e Desperdício da Mistura Tradicional de Canteiro',
      problemDescription: 'Bater massa de forma manual ou em betoneira utilizando pás, carregando carrinhos de mão pesados de areia úmida, sacos de cal que causam alergia respiratória e sacos de cimento de 50kg consome um tempo precioso e desgasta a saúde dos operários. Além disso, estima-se que até 30% de toda a massa convencional seja totalmente perdida por cura precoce no chão, respingos laterais ou excesso de dosagem nas juntas grossas.',
      solutionTitle: 'Solda Química Pronta Monolítica: Desempenho e Praticidade',
      solutionDescription: 'Substituir a cal, areia e cimento pela Argamassa Polimérica Hiperliga simplifica a obra por completo. O produto já vem perfeitamente balanceado quimicamente e pronto para aplicação diretamente na parede, dispensando aditivos, água extra ou energia para misturar. Uma bisnaga de 3kg substitui o equivalente a até 60kg de massa de cimento tradicional de reboco ou junta, resultando em velocidade surreal de montagem e um canteiro de obras limpo de dar inveja.',
      whenToUse: [
        'Levantamento residencial de vedação utilizando tijolos cerâmicos e blocos de concreto',
        'Reformas rápidas comerciais que buscam eliminar barulho de betoneiras e sujeira de areia',
        'Obras de alto padrão com foco em produtividade operacional extrema e controle rígido de material'
      ],
      whenNotToUse: [
        'Não utilizar para preenchimento de fendas gigantescas decorrentes de blocos severamente tortos',
        'Não utilizar para assentamento da primeiríssima fiada de arranco que obrigatoriamente serve para corrigir o contra-piso convencional'
      ],
      benefits: [
        { title: 'Velocidade Multiplicada', desc: 'Sua equipe de pedreiros consegue erguer a mesma metragem de alvenaria em até 1/3 do tempo normal.' },
        { title: 'Zero Desperdício Construtivo', desc: 'Material sob dosagem exata do bico aplicador sem perdas por queda de massa no pé de parede.' },
        { title: 'Logística Totalmente Simplificada', desc: 'Elimina carretos pesados de caminhões de areia, betoneiras barulhentas e sacarias de cal rasgando.' },
        { title: 'Melhoria na Saúde Ocupacional', desc: 'Material atóxico, sem poeira de cal e sem exigência de carregamento de peso morto nas costas.' }
      ],
      steps: [
        { step: '1', title: 'Equacione os Insumos do Projeto', desc: 'Avalie a economia de tempo e eliminação completa de cal e areia do seu orçamento de fechamento.' },
        { step: '2', title: 'Alinhe a Fiada de Fundação', desc: 'Assegure-se de que a base de assentamento inicial está nivelada e aprumada por argamassa grossa cimentícia.' },
        { step: '3', title: 'Aplique em Espessura Justa', desc: 'Use os bicos aplicadores de fábrica para deitar os dois filetes paralelos contínuos de 1cm de diâmetro.' },
        { step: '4', title: 'Curta o Canteiro Organizado', desc: 'Monitore a velocidade e desfrute de um piso limpo livre de lodos cinzentos irritantes.' }
      ],
      calculatorTitle: 'Calculadora Comparativa: Cimento Tradicional vs Hiperliga',
      calculatorType: 'block' as const,
      faq: [
        { question: 'A parede fica tão forte quanto a de cimento, cal e areia?', answer: 'Fica superior. A fusão química promovida pela resina acrílica Hiperliga gera resistência ao arrancamento e flexão que supera os índices normatizados do método convencional.' },
        { question: 'Como faço para cobrir os blocos na base?', answer: 'A base (primeira fiada) deve ser feita tradicionalmente com cimento e areia para garantir o prumo da parede inteira. Da segunda fiada em diante, a substituição com a polimérica é total.' },
        { question: 'Qual a economia real financeira ao fazer a substituição?', answer: 'Embora o custo unitário por quilo da cola bloco seja superior, a velocidade 3 vezes mais rápida de mão de obra e o desperdício de zero por cento compensam amplamente, reduzindo o custo global.' }
      ],
      relatedLinks: [
        { label: 'Diferença entre argamassa ac2 e argamassa polimérica', href: '/diferenca-entre-argamassa-ac2-e-argamassa-polimerica' },
        { label: 'Qual a espessura ideal do cordão de argamassa polimérica', href: '/qual-a-espessura-ideal-do-cordao-de-argamassa-polimerica' },
        { label: 'Como Assentar Bloco Mais Rápido', href: '/como-assentar-boco-mais-rapido' }
      ]
    },
    {
      slug: 'diferenca-entre-argamassa-ac2-e-argamassa-polimerica',
      title: 'Espaço Técnico: Diferença entre Argamassa AC2 e Argamassa Polimérica',
      metaDescription: 'Entenda por que você não deve usar argamassa AC2 de assentamento cerâmico para erguer paredes e o papel correto da Argamassa Polimérica Hiperliga.',
      h1: 'Argamassa AC2 vs Argamassa Polimérica: Principais Diferenças',
      tagline: 'Não comete erros patológicos de colagem. Saiba por que cada material ocupa uma classe técnica exclusiva na obra.',
      problemTitle: 'O Erro Crítico de Tentar Assentar Tijolos Usando Argamassas Colantes do Tipo AC2',
      problemDescription: 'Alguns profissionais da construção tentam improvisar na alvenaria misturando argamassa colante do tipo AC2 (feita originalmente para fixação de revestimentos cerâmicos em pisos e paredes) com cimento comum para erguer de fiadas. O composto AC2 possui cinética de cura, retenção de água e tenacidade inadequadas para juntas horizontais de tijolos baianos, o que pode originar secagem falsa e posterior desplacamento da parede sob ventos.',
      solutionTitle: 'Especificação Focada: A Fórmula Exclusiva Hiperliga para Alvenaria',
      solutionDescription: 'A Argamassa Polimérica Hiperliga foi formulada exclusivamente para a união mecânica e química de blocos de alvenaria. Diferente do AC2 que exige mistura com água abundante e aplicação de dentes espessos, a Hiperliga é pronta para o uso, possui copolímeros acrílicos modificados de elevadíssima flexibilidade e ancoragem que colam os poros cerâmicos de forma duradoura. Ela é ultra resistente a intempéries e garante que as fiadas trabalhem juntas como uma parede monolítica estável.',
      whenToUse: [
        'Erguer divisórias de alvenaria com blocos e tijolos de forma durável e segura',
        'Vedar construções modernas com agilidade utilizando bicos aplicadores precisos',
        'Exigência de excelente resistência mecânica à deformações físicas'
      ],
      whenNotToUse: [
        'Não utilizar a argamassa polimérica para colar azulejos e cerâmicas no chão (para isso use o AC2 próprio)',
        'Não aplicar o gel sobre faces totalmente empoeiradas ou oleosas dos materiais'
      ],
      benefits: [
        { title: 'Aderência Dedicada', desc: 'Formulação específica que penetra de forma profunda nos poros dos tijolos cerâmicos e de concreto.' },
        { title: 'Embalagem de Uso Direto', desc: 'Sem necessidade de misturar pós, dosar águas em masseiras de obra ou sujar colheres.' },
        { title: 'Elasticidade Superior', desc: 'Suporta as trepidações normais do solo sem rachar ou perder a liga ao longo dos anos.' },
        { title: 'Certificação de Desempenho', desc: 'Atende todas as boas regências normatizadas brasileiras para sistemas de vedação.' }
      ],
      steps: [
        { step: '1', title: 'Selecione o Insumo Correto', desc: 'Use AC2 estritamente para ladrilhos e cerâmicas e Hiperliga para levantar as muretas.' },
        { step: '2', title: 'Prepare a Face de Contato', desc: 'Varra os blocos retirando poeiras que possam prejudicar a ancoragem molecular química.' },
        { step: '3', title: 'Corra Duas Linhas de Cola', desc: 'Desenhe dois filetes contínuos de 10mm distanciados das bordas externas de segurança do tijolo.' },
        { step: '4', title: 'Encaixe e Nivele com Agilidade', desc: 'Posicione o bloco superior e aperte suavemente para esmagar as resinas de forma uniforme.' }
      ],
      calculatorTitle: 'Calculadora de Rendimento e Consumo de Cola Bloco',
      calculatorType: 'block' as const,
      faq: [
        { question: 'Posso usar argamassa AC3 para assentar tijolos?', answer: 'Não. Assim como o AC2, a argamassa colante AC3 foi desenvolvida para aplicação de revestimentos cerâmicos complexos ou porcelanatos de grande porte, e não possui as propriedades de enchimento e cura fina necessárias para erguer paredes.' },
        { question: 'A argamassa polimérica serve para rebocar?', answer: 'Não de forma alguma. A argamassa polimérica é um gel colante de altíssima colagem com aplicação restrita às juntas horizontais finas e não funciona para cobertura de fachadas.' },
        { question: 'Quais as desvantagens de usar AC2 na alvenaria?', answer: 'A junta de AC2 perde aderência muito fácil diante de umidade interna dos tijolos cerâmicos, além de apresentar alto índice de retração mecânica com aparecimento constante de trincas na alvenaria.' }
      ],
      relatedLinks: [
        { label: 'Substituir cal e areia por massa pronta', href: '/substituir-cal-e-areia-por-massa-pronta' },
        { label: 'Riscos de usar argamassa polimérica na estrutura', href: '/riscos-de-usar-argamassa-polimerica-na-estrutura' },
        { label: 'Argamassa Polimérica dá Infiltração? Estudo Técnico', href: '/argamassa-polimerica-da-infiltracao' }
      ]
    },
    {
      slug: 'argamassa-polimerica-substitui-o-reboco',
      title: 'Argamassa Polimérica Substitui o Reboco? Saiba a Verdade',
      metaDescription: 'Descubra as diferenças de funções entre colar blocos de alvenaria de vedação e a necessidade do reboco clássico ou gesso liso de acabamento.',
      h1: 'Argamassa Polimérica Substitui o Reboco na Obra?',
      tagline: 'Mitos e verdades construtivas. Entenda de uma vez as funções técnicas exclusivas e independentes de cada material.',
      problemTitle: 'A Dúvida de Tentar Usar Cola Bloco para Cobrir Fachadas e Impermeabilizar',
      problemDescription: 'Buscando acelerar as etapas de fechamento e reboco, alguns proprietários de obras acreditam equivocadamente que, por ser impermeável e de alta aderência, a argamassa polimérica pode substituir completamente a camada de reboco, emboço ou chapisco das paredes erguidas, ou que o produto pode ser espalhado com espátula em toda a face externa dos blocos para protegê-los das chuvas.',
      solutionTitle: 'Definição das Etapas Construtivas: Hiperliga para Colar, Reboco para Alisar',
      solutionDescription: 'A Argamassa Polimérica Hiperliga foi projetada especificamente com a função única de colar e unir os blocos e tijolos da parede. Ela não substitui e não deve ser usada como reboco de acabamento. O reboco tradicional (ou gesso liso decorativo em paredes internas) ainda é essencial para planejar e alisar a superfície, além de servir como barreira protetora final de pintura. Contudo, ao usar a Hiperliga, por obter juntas horizontais milimétricas regulares super organizadas, o consumo de massa de reboco cai consideravelmente devido à excelente linearidade do prumo.',
      whenToUse: [
        'Utilização da Hiperliga exclusivamente para juntas horizontais e verticais finas da alvenaria',
        'Aplicação posterior de reboco clássico ou gesso projetado sobre a parede limpa e curada',
        'Otimização do prumo da parede que resulta em economia de até 30% na espessura do acabamento'
      ],
      whenNotToUse: [
        'Não tentar espalhar a cola bloco sobre a face do tijolo como emboço isolador',
        'Não diluir o produto para usá-lo como tinta impermeabilizante líquida em fachadas externas'
      ],
      benefits: [
        { title: 'Acabamentos Mais Finos', desc: 'Paredes alinhadas com junta fina exigem menor quantidade de reboco para ficarem planas.' },
        { title: 'Economia com Massa Corrida', desc: 'A ausência de degraus horizontais entre tijolos facilita o trabalho de lixamento de gesso liso.' },
        { title: 'Alinhamento Perfeito das Fiadas', desc: 'Facilidade para subir o prumo reto das paredes, diminuindo remendos corretivos.' },
        { title: 'Excelente Interface Construtiva', desc: 'O reboco regular adere perfeitamente sobre os blocos assentados com a nossa junta fina.' }
      ],
      steps: [
        { step: '1', title: 'Erga as Paredes com Hiperliga', desc: 'Assente os blocos baianos paralelos de forma rápida desenhando os dois filetes limpos de 1cm.' },
        { step: '2', title: 'Aguarde a Secagem de Cura', desc: 'Permita que as juntas tenham sua cura firme de 3 dias para garantir estabilidade mecânica.' },
        { step: '3', title: 'Chapisque Adequadamente', desc: 'Aplique o chapisco convencional ou cimentício roletado sobre os blocos de forma regular para grip.' },
        { step: '4', title: 'Dispare o Reboco de Nivelamento', desc: 'Execute o emboço ou reboco fino de acabamento liso, aproveitando a parede reta monolítica.' }
      ],
      calculatorTitle: 'Calculadora de Consumo de Junta Fina de Alvenaria',
      calculatorType: 'block' as const,
      faq: [
        { question: 'A argamassa polimérica substitui o gesso liso interno?', answer: 'Não. O gesso liso é uma técnica de acabamento estético fino e polido para pintura de ambientes internos, enquanto a Hiperliga atua na base unindo os tijolos escondidos.' },
        { question: 'Posso rebocar direto sobre a parede sem dar chapisco?', answer: 'Em blocos cerâmicos muito porosos sim se a parede estiver limpa. No entanto, o chapisco tradicional ainda é a diretriz mais recomendável pelos especialistas de engenharia para criar a base áspera de aderência do reboco.' },
        { question: 'Por que a junta fina ajuda a gastar menos reboco?', answer: 'Porque as juntas grossas de cimento de 2cm do método clássico geram desalinhamentos, dentes e calombos que obrigam o pedreiro a carregar e engrossar o reboco para nivelar.' }
      ],
      relatedLinks: [
        { label: 'Substituir cal e areia por massa pronta', href: '/substituir-cal-e-areia-por-massa-pronta' },
        { label: 'Massa pronta serve para chapisco', href: '/massa-pronta-serve-para-chapisco' },
        { label: 'Como Assentar Bloco Mais Rápido', href: '/como-assentar-bloco-mais-rapido' }
      ]
    },
    {
      slug: 'massa-pronta-serve-para-chapisco',
      title: 'Massa Pronta Serve para Chapisco? Saiba Como Fazer',
      metaDescription: 'Descubra se a massa pronta convencional serve para chapisco e como a alvenaria erguida com a junta fina da Hiperliga recebe essa etapa com eficiência.',
      h1: 'Massa Pronta Serve para Chapisco na Alvenaria?',
      tagline: 'Esclareça suas dúvidas técnicas e garanta a perfeita ancoragem dos revestimentos nas suas paredes erguidas.',
      problemTitle: 'A Confusão de Usar Massa de Colagem de Blocos como Chapisco',
      problemDescription: 'Existem diversos tipos de massa pronta no mercado. Uma dúvida recorrente dos construtores é se a massa pronta clássica (geralmente embalada em sacos de cimento e areia pré-misturada) ou a argamassa polimérica coladora Hiperliga servem para realizar a etapa física de chapisco, que exige textura áspera e caldos fluidores.',
      solutionTitle: 'Definições Distintas: Chapisco Tradicional sobre Parede de Junta Fina',
      solutionDescription: 'Massa pronta de assentamento comum em sacos de pó cinzento de fato serve se acrescida de água abundante e aditivos de fixação (como polímeros líquidos acrilato). Contudo, a Argamassa Polimérica em bisnaga gel Hiperliga não serve e não deve ser usada de chapisco, pois sua função única é colagem estrutural interna das juntas de apoio. Nas paredes levantadas com a Hiperliga, o chapisco deve ser executado da forma clássica tradicional (cimento e areia 1:3 muito fluida) ou utilizando rolo de textura acrílica, o que confere aderência sensacional para o posterior reboco liso térmico.',
      whenToUse: [
        'Execução de chapisco cimentício padrão roliço ou convencional sobre blocos cerâmicos porosos',
        'Uso de areia grossa e cimento na proporção de 1 para 3 para criar ranhuras de aderência',
        'Garantia técnica de aderência total dos emboços finos em fachadas que recebem ventulações'
      ],
      whenNotToUse: [
        'Não tentar diluir a massa de cola bloco Hiperliga com água para borrifar na parede imitando chapisco',
        'Não chapiscar sobre superfícies que possuam poeiras soltas, gorduras ou musgos de chuvas'
      ],
      benefits: [
        { title: 'Perfeita Ancoragem', desc: 'Chapisco tradicional bem feito fornece milhares de dentes mecânicos que seguram os emboços pesados.' },
        { title: 'Estabilidade Total na Parede', desc: 'Evita desplacamentos estéticos futuros do reboco do acabamento interno da residência.' },
        { title: 'Fácil Execução da Equipe', desc: 'Técnicas comuns dominadas por qualquer ajudante prático de obras do canteiro brasileiro.' },
        { title: 'Compatibilidade de Materiais', desc: 'O chapisco adere perfeitamente sobre a alvenaria de vedação erguida com a junta milimétrica.' }
      ],
      steps: [
        { step: '1', title: 'Erga no padrão Hiperliga', desc: 'Monte as fiadas de blocos cerrados ou baianos de 9 furos mantendo as faces externas limpas.' },
        { step: '2', title: 'Prepare a Mistura de Chapisco', desc: 'Misture areia grossa lavada e cimento na proporção clássica de 3 x 1 adicionando aditivos se preferir.' },
        { step: '3', title: 'Mantenha Fluidez Líquida', desc: 'A calda do chapisco convencional deve ser bem mole e fluida de modo a espirrar mecanicamente.' },
        { step: '4', title: 'Arremesse Próximo na Textura', desc: 'Arremesse a massa na parede de forma a cobrir uniformemente os blocos com cavidades ásperas.' }
      ],
      calculatorTitle: 'Calculadora de Consumo e Rendimento de Cola Bloco',
      calculatorType: 'block' as const,
      faq: [
        { question: 'A argamassa polimérica substitui o chapisco?', answer: 'Não. A argamassa polimérica Hiperliga serve exclusivamente para colar tijolos em juntas horizontais finas. O chapisco clássico para dar grip ao reboco continua sendo necessário e muito recomendável.' },
        { question: 'O que é chapisco roletado?', answer: 'É uma técnica prática e moderna onde se aplica uma massa fluida colante utilizando um rolo de textura áspera próprio, dispensando o arremesso cansativo de colheres na parede de tijolos.' },
        { question: 'Posso chapiscar logo após subir a parede?', answer: 'O ideal é aguardar pelo menos 24 a 48 horas para que a cola bloco conclua sua ancoragem física primária inicial e a parede esteja perfeitamente estruturada contra balanços físicos.' }
      ],
      relatedLinks: [
        { label: 'Argamassa polimérica substitui o reboco', href: '/argamassa-polimerica-substitui-o-reboco' },
        { label: 'Substituir cal e areia por massa pronta', href: '/substituir-cal-e-areia-por-massa-pronta' },
        { label: 'Qual a espessura ideal do cordão de argamassa polimérica', href: '/qual-a-espessura-ideal-do-cordao-de-argamassa-polimerica' }
      ]
    }
  ];

  comparativeDefs.forEach((def) => {
    pages[def.slug] = {
      path: `/${def.slug}`,
      title: def.title,
      metaDescription: def.metaDescription,
      canonical: `https://hiperliga.com.br/${def.slug}`,
      h1: def.h1,
      tagline: def.tagline,
      problemTitle: def.problemTitle,
      problemDescription: def.problemDescription,
      solutionTitle: def.solutionTitle,
      solutionDescription: def.solutionDescription,
      whenToUse: def.whenToUse,
      whenNotToUse: def.whenNotToUse,
      benefits: def.benefits,
      steps: def.steps,
      calculatorTitle: def.calculatorTitle || 'Simulador de Rendimento e Economia',
      calculatorType: def.calculatorType || 'block',
      faq: def.faq || [],
      schemaType: 'FAQPage',
      relatedLinks: def.relatedLinks || []
    };
  });

  return pages;
}
