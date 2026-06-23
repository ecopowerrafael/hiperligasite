import { SEOPageContent } from './seoPagesData';

export function generateLogisticsPages(): Record<string, SEOPageContent> {
  const pages: Record<string, SEOPageContent> = {};

  const logisticsDefs = [
    {
      slug: 'validade-da-argamassa-polimerica-na-embalagem',
      title: 'Validade da Argamassa Polimérica na Embalagem | Guia Completo',
      metaDescription: 'Descubra qual a validade da argamassa polimérica Hiperliga fechada e após aberta na obra. Aprenda a ler lotes e evitar prejuízos na estocagem.',
      h1: 'Validade da Argamassa Polimérica na Embalagem: Durabilidade Real',
      tagline: 'Evite desperdícios. Descubra as especificações de vida útil e conservação do produto no canteiro.',
      problemTitle: 'O Medo de Perder Material Estocado Devido a Atrasos na Obra',
      problemDescription: 'Intercorrências no cronograma de construção, atrasos de outras equipes (como fundação ou elétrica) ou paradas sazonais por conta de chuvas frequentes são extremamente comuns. O construtor que comprou material antecipadamente teme que a cola bloco empedre, estrague ou perca o poder de colagem rapidamente na estocagem da obra, assim como acontece com os sacos de cimento comum que sofrem com a umidade.',
      solutionTitle: 'Estabilidade Química Certificada de 12 Meses na Embalagem Lacre',
      solutionDescription: 'A formulação química estabilizada da Argamassa Polimérica Hiperliga foi projetada para oferecer excelente durabilidade. Em sua embalagem original lacrada de fábrica (sejam bisnagas de 3kg ou barricas industriais), o produto mantém suas propriedades físicas de colagem intactas por até 12 meses a partir da data de fabricação. Diferente do cimento que "empedra" com qualquer umidade do ar, a nossa embalagem plástica hermética impede a perda da fase líquida e a reação de cura prematura, garantindo total aproveitamento do investimento.',
      whenToUse: [
        'Organização de compras antecipadas planejadas de grande volume',
        'Armazenamento seguro em depósitos fechados ou contêineres de obras de longo prazo',
        'Uso fracionado do produto com fechamento correto do bocal receptor'
      ],
      whenNotToUse: [
        'Não utilizar o produto se ele apresentar cheiro de putrefação forte ou estiver totalmente calcificado/duro dentro do plástico',
        'Não estocar as caixas em locais expostos à luz solar direta frequente ou calor acima de 45°C'
      ],
      benefits: [
        { title: 'Validade Longa de 1 Ano', desc: 'Dá total flexibilidade para compras planejadas sem o risco de perda por cura rápida típica do cimento.' },
        { title: 'Zero Perda por Umidade do Ar', desc: 'As bisnagas plásticas herméticas blindam o gel contra as névoas e chuvas externas de depósitos.' },
        { title: 'Garantia de Lote Hiperliga', desc: 'Impressão clara de fabricação e vencimento em cada embalagem para controle eficiente de estoque.' },
        { title: 'Aproveitamento de Sobras', desc: 'Se a obra pausar por 30 dias, o produto na embalagem selada estará perfeitamente fluido no retorno.' }
      ],
      steps: [
        { step: '1', title: 'Verifique a Data de Fabricação', desc: 'Olhe a etiqueta industrial impressa de lote no verso da embalagem para acompanhar o cronograma.' },
        { step: '2', title: 'Faça o Rodízio de Estoque', desc: 'Aplique a regra FIFO (Primeiro que entra, primeiro que sai) para consumir primeiro as embalagens antigas.' },
        { step: '3', title: 'Mantenha Longe do Calor Extremo', desc: 'Opte por áreas cobertas na sombra térmica para prolongar a vida útil do gel de resinas acrílicas.' },
        { step: '4', title: 'Inspeção Rápida de Fluidez', desc: 'Basta apalpar a bisnaga de 3kg: se estiver macia e maleável como uma pasta, está perfeitamente pronta para aplicação.' }
      ],
      calculatorTitle: 'Calcule Seu Cronograma e Consumo de Argamassa',
      calculatorType: 'block' as const,
      faq: [
        { question: 'Quanto tempo dura a argamassa polimérica depois de aberta?', answer: 'Se você abrir a embalagem e não utilizar tudo, basta dobrar bem o bico aplicador para impedir totalmente a entrada de ar e prender com fita adesiva ou arame. Dessa forma, o produto restante pode ser conservado e reutilizado por até 15 a 30 dias.' },
        { question: 'Como saber se o produto venceu ou estragou de vez?', answer: 'O produto está estragado quando perde sua textura pastosa e homogênea, tornando-se uma borracha dura e seca dentro da embalagem plástica, ou quando exala odor forte de decomposição.' },
        { question: 'O cimento comum estraga mais rápido do que a Hiperliga na obra?', answer: 'Com certeza. O cimento ensacado em papel geralmente começa a empedrar após 60 a 90 dias devido à absorção de umidade relativa do ar. Já a Hiperliga resiste por 12 meses intacta por conta da vedação plástica forte.' }
      ],
      relatedLinks: [
        { label: 'Como armazenar massa pronta em bisnaga na obra', href: '/como-armazenar-massa-pronta-em-bisnaga-na-obra' },
        { label: 'Ficha técnica argamassa polimérica pdf', href: '/ficha-tecnica-argamassa-polimerica-pdf' },
        { label: 'Espaço necessário para estocar argamassa tradicional x polimérica', href: '/espaco-necessario-para-estocar-argamassa-tradicional-x-polimerica' }
      ]
    },
    {
      slug: 'como-armazenar-massa-pronta-em-bisnaga-na-obra',
      title: 'Como Armazenar Massa Pronta em Bisnaga na Obra | Dicas',
      metaDescription: 'Veja o passo a passo definitivo de como armazenar massa pronta em bisnaga no canteiro de obras. Garanta a conservação e evite perdas de produto.',
      h1: 'Como Armazenar Massa Pronta em Bisnaga na Obra de Forma Segura',
      tagline: 'Organize seu estoque com inteligência e preserve a qualidade original de fábrica das suas bisnagas Hiperliga.',
      problemTitle: 'O Risco de Furos Acidentais e Ressecamento no Chão',
      problemDescription: 'No dia a dia dinâmico de uma obra, materiais deixados de qualquer jeito no chão áspero estão expostos a furos acidentais por pregos, ferramentas pesadas que caem ou circulação de carrinhos de mão. Ao rasgar a bisnaga de plástico, a cola bloco entra em contato contínuo com o oxigênio do ar e sofre cura prematura, inutilizando o material para o assentamento.',
      solutionTitle: 'Armazenagem Estável em Paletes e Sombras Térmicas Cobertas',
      solutionDescription: 'Armazenar a massa pronta Hiperliga é incrivelmente simples e prático. As caixas de bisnagas de 3kg ou as barricas devem ser guardadas sob locais limpos e totalmente cobertos (como barracões de obra ou contêineres trancados). Elas devem ser empilhadas sobre paletes de madeira ou plástico elevado para evitar contato direto com o solo úmido e as caixas nunca devem ultrapassar o empilhamento máximo de segurança especificado na embalagem para não amassar e estourar os plásticos de baixo.',
      whenToUse: [
        'Estocagem diária e organização de insumos após o final do expediente construtivo',
        'Montagem do almoxarifado de empreiteiras e construtoras',
        'Prevenção de quebras e furos em canteiros de alta movimentação operacional'
      ],
      whenNotToUse: [
        'Não apoiar as caixas de papelão protetoras diretamente sobre terra úmida ou lama (deforma o papelão de suporte)',
        'Não empilhar as caixas acima do limite máximo de segurança impresso nas laterais'
      ],
      benefits: [
        { title: 'Organização Visual Clara', desc: 'Caixas empilhadas em paletes facilitam as contagens rápidas de inventário pelo comprador.' },
        { title: 'Zero Perda de Material', desc: 'Evita rupturas físicas acidentais de embalagem provocadas por quedas de ferramentas de aço.' },
        { title: 'Manutenção do Alto Rendimento', desc: 'Garante que a temperatura do gel seja mantida ideal para excelente fluidez.' },
        { title: 'Limpeza do Canteiro', desc: 'Chega de pilhas espalhadas de sacos rasgados de pó cinzento de cimento sujando o ambiente.' }
      ],
      steps: [
        { step: '1', title: 'Prepare a Base de Apoio', desc: 'Coloque paletes secos nivelados no almoxarifado, afastando os materiais das áreas de goteiras.' },
        { step: '2', title: 'Respeite a Carga Máxima', desc: 'Empilhe as caixas lado a lado de forma vertical estável, respeitando o limite físico estipulado.' },
        { step: '3', title: 'Proteja as Sobras de Uso', desc: 'Ao final do dia, vede firmemente os bicos das bisnagas já abertas usando fitas adesivas ou arames.' },
        { step: '4', title: 'Evite Sol Direto e Calor', desc: 'Mantenha os paletes afastados das telhas de zinco que acumulam calor excessivo de irradiação solar.' }
      ],
      calculatorTitle: 'Simule a Quantidade Total Necessária para Sua Alvenaria',
      calculatorType: 'block' as const,
      faq: [
        { question: 'A umidade do cão estraga a embalagem plástica de bisnaga?', answer: 'A umidade não estraga o plástico interno da bisnaga, mas danifica e deforma as caixas externas de papelão que organizam e amparam as bisnagas, afetando a estabilidade das pilhas.' },
        { question: 'Posso deixar na chuva se as caixas forem cobertas com lona?', answer: 'Em casos extremos e temporários sim, mas o ideal é manter as caixas em locais permanentemente fechados e arejados para evitar infiltração de goteiras ou lavagem do papelão protetor.' },
        { question: 'É seguro transportar no porta-malas do carro sem estragar?', answer: 'Sim. A embalagem plástica Hiperliga é extremamente resistente a vibrações e trepidações de transportes terrestres diários.' }
      ],
      relatedLinks: [
        { label: 'Validade da argamassa polimérica na embalagem', href: '/validade-da-argamassa-polimerica-na-embalagem' },
        { label: 'Espaço necessário para estocar argamassa tradicional x polimérica', href: '/espaco-necessario-para-estocar-argamassa-tradicional-x-polimerica' },
        { label: 'Como Assentar Bloco Mais Rápido', href: '/como-assentar-bloco-mais-rapido' }
      ]
    },
    {
      slug: 'quantos-metros-quadrados-rende-uma-caixa-de-argamassa-polimerica',
      title: 'Quantos Metros Rende uma Caixa de Argamassa Polimérica?',
      metaDescription: 'Veja o rendimento exato por metro quadrado de uma caixa de argamassa polimérica Hiperliga. Tabelas de consumo para blocos e tijolos.',
      h1: 'Quantos Metros Rende uma Caixa de Argamassa Polimérica?',
      tagline: 'Planejamento de custos sem erros. Entenda a matemática do rendimento por m² das nossas caixas.',
      problemTitle: 'A Incerteza do Orçamentista Construtivo sobre Quantidades de Compra',
      problemDescription: 'Uma das maiores barreiras de compras de novos insumos na engenharia civil é a dificuldade de calcular com precisão a relação de consumo por metro de alvenaria. Orçamentistas temem comprar material a menos, paralisando a mão de obra no canteiro, ou errar comprando materiais em excesso gerando capital de giro parado na prateleira.',
      solutionTitle: 'Consumo Médio de 1,5kg por m² e o Rendimento das Caixas Hiperliga',
      solutionDescription: 'O rendimento de cada caixa de Argamassa Polimérica Hiperliga (composta por 2 bisnagas de 3kg, totalizando 6kg de material pronto) depende diretamente do tipo de bloco utilizado (cerâmica vazada, concreto de vedação ou bloco ecológico) e suas bitolas. Para o tijolo baiano comum de 9 furos (19x19cm com espessura de face de 9cm), o consumo médio é de apenas 1,5kg do gel por metro quadrado. Isso significa que uma única caixa unificada de 6kg da Hiperliga rende extraordinários 4 metros quadrados (4m²) de alvenaria de vedação concluída de forma extremamente rápida, limpa e prática!',
      whenToUse: [
        'Elaboração de planilhas orçamentárias quantitativas residenciais ou comerciais',
        'Simulação financeira e comparativa de custos contra a argamassa de cal tradicional',
        'Definição de cronogramas de suprimentos para compras e entregas programadas'
      ],
      whenNotToUse: [
        'Não utilizar estas métricas médias para blocos assentados deitados de largura dupla (exigem maior volume de cordões)',
        'Não ignorar a cubagem e o diâmetro regular de 1cm de bico aplicador nos testes de consumo'
      ],
      benefits: [
        { title: 'Métrica de Consumo Estável', desc: 'Rendimento linear confiável baseado em volumetrias controladas por lote fabril.' },
        { title: 'Fácil Transporte de Material', desc: 'Enquanto o cimento exige caminhões de entrega pesados, algumas poucas caixas de Hiperliga cabem no carro de passeio.' },
        { title: 'Ausência Total de Sobras', desc: 'Diga adeus às dezenas de quilos de argamassa inútil que sobram duras nos tachos de mistura tradicionais.' },
        { title: 'Controle Financeiro de Entrada', desc: 'Permite planejar os investimentos da edificação sem desvios orçamentários frustrantes.' }
      ],
      steps: [
        { step: '1', title: 'Identifique o Tamanho do Tijolo', desc: 'Verifique as medidas reais de largura e comprimento do bloco cerâmico ou de concreto adquirido.' },
        { step: '2', title: 'Use a Calculadora de Nosso Aplicativo', desc: 'Insira os metros quadrados totais de alvenaria para calcular a amostragem justa de caixas de 6kg.' },
        { step: '3', title: 'Ajuste a Espessura de Saída', desc: 'Certifique-se de que o bico de plástico aplicador está calibrado na marca de 1cm de largura.' },
        { step: '4', title: 'Distribua Pelos Pavimentos', desc: 'Leve as caixas leves diretamente para os andares que receberão a alvenaria, poupando esforço.' }
      ],
      calculatorTitle: 'Calcule Seu Rendimento Metragem por Caixa',
      calculatorType: 'block' as const,
      faq: [
        { question: 'Quantos metros rende uma barrica industrial de 25kg?', answer: 'Adotando a média clássica de consumo de 1,5kg por m² para tijolo baiano comum, uma única barrica de 25kg realiza o levantamento de cerca de 16m² a 17m² de paredes de vedação de excelente qualidade.' },
        { question: 'Se o bloco for do tipo bloco de concreto fino de 14cm de espessura?', answer: 'Para blocos de concreto mais largos, o consumo aumenta ligeiramente para cerca de 1,8kg a 2,2kg por m² devido à maior largura da face cerâmica/concreta, reduzindo o rendimento da caixa de 6kg para cerca de 3m².' },
        { question: 'O rendimento diminui em dias de muito calor solar?', answer: 'Não. O calor não altera o rendimento de aplicação mecânica do cordão cilíndrico de 1cm, exigindo apenas que você assente e pressione o bloco antes que a película superficial inicie a cura por evaporação.' }
      ],
      relatedLinks: [
        { label: 'Qual a espessura ideal do cordão de argamassa polimérica', href: '/qual-a-espessura-ideal-do-cordao-de-argamassa-polimerica' },
        { label: 'Como Assentar Bloco Mais Rápido', href: '/como-assentar-bloco-mais-rapido' },
        { label: 'Espaço necessário para estocar argamassa tradicional x polimérica', href: '/espaco-necessario-para-estocar-argamassa-tradicional-x-polimerica' }
      ]
    },
    {
      slug: 'espaco-necessario-para-estocar-argamassa-tradicional-x-polimerica',
      title: 'Espaço de Estoque: Argamassa Tradicional vs Polimérica',
      metaDescription: 'Compare a drástica economia de espaço físico de estocagem ao substituir areia, cimento e cal pela Argamassa Polimérica Hiperliga. Otimize sua obra.',
      h1: 'Espaço de Estoque: Argamassa Tradicional vs Polimérica',
      tagline: 'Otimize o layout do canteiro. Descubra a redução de até 95% no espaço de armazenamento de insumos.',
      problemTitle: 'Canteiros de Obras Urbanos Apertados e com Falta de Espaço',
      problemDescription: 'Reformas corporativas em prédios comerciais, construções residenciais em terrenos urbanos estreitos ou condomínios fechados sofrem frequentemente com a falta de espaço físico livre para estocar carradas de areia, montanhas de britas, pilhas de cal e dezenas de sacos pesados de cimento convencional. Esse material volumoso bloqueia a circulação de pedestres, atrai poeira sujando as calçadas e gera perdas sob chuvas severas.',
      solutionTitle: 'Estoques Minimalistas de Alto Rendimento com a Caixa Hiperliga',
      solutionDescription: 'A adoção da junta fina com a Argamassa Polimérica Hiperliga revoluciona a logística e o layout físico do canteiro. Pelo rendimento absurdo (onde 1,5kg substitui até 30kg de argamassa comum), o espaço necessário para estocar a Hiperliga é dezenas de vezes menor. Um único palete de madeira contendo caixas da nossa cola bloco é suficiente para erguer a mesma quantidade de parede de vedação que exigiria um depósito inteiro de areia e dezenas de sacos brutais de cimento e cal comum, otimizando o layout da obra de forma maravilhosa e mantendo tudo 100% limpo.',
      whenToUse: [
        'Construções em centros urbanos apertados ou com limitações de calçadas residenciais',
        'Reformas rápidas em andares altos de edifícios comerciais sem elevadores de carga pesados',
        'Planejamento de layouts de canteiros inteligentes que buscam certificações sustentáveis'
      ],
      whenNotToUse: [
        'Não deixar as caixas protetoras de papelão em áreas sem telhado ou expostas a enchentes e chuvas diretas do canteiro',
        'Não dispensar sapatas de apoio se for estocar em locais com fragilidade de sobrecarga estática'
      ],
      benefits: [
        { title: 'Redução drástica de m³ de Estoque', desc: 'Libera espaço precioso no canteiro de obras para circulação segura de colaboradores e outros materiais.' },
        { title: 'Zero Perda de Insumos', desc: 'Sem montanhas de areia que escorrem com a água da chuva das ruas de acesso de construções.' },
        { title: 'Logística de Entrada Leve', desc: 'Permite descarregar todo o material de alvenaria em minutos sem esforço excessivo das costas de pedreiros.' },
        { title: 'Ambiente Construtivo Limpo', desc: 'Fim dos cumes de cimento e areia molhada espalhando detritos e poeira arenosa pela vizinhança.' }
      ],
      steps: [
        { step: '1', title: 'Calcule as Unidades de Entrada', desc: 'Mapeie o layout e veja como apenas um palete pequeno comporta todas as suas necessidades de fechamento.' },
        { step: '2', title: 'Defina a Posição Almoxarifado', desc: 'Escolha um local de 1m x 1m coberto e seco para posicionar o palete unificado de caixas.' },
        { step: '3', title: 'Transporte Conforme o Turno', desc: 'Leve as caixas em pequenas viagens diretamente ao local de assentamento sem carrinhos de terra pesados.' },
        { step: '4', title: 'Libere as Áreas de Tráfego', desc: 'Aproveite a rua de calçadas totalmente livres de entulhos de areia para acelerar outras equipes de entrega.' }
      ],
      calculatorTitle: 'Calculadora de Redução de Área Física de Estoque',
      calculatorType: 'block' as const,
      faq: [
        { question: 'Qual a diferença de espaço em metros cúbicos?', answer: 'Enquanto o método tradicional cimentício exige cerca de 2m³ a 3m³ de areia, cimento e cal para 100m² de parede, a Hiperliga necessita de apenas 0,15m³ (cerca de 25 caixas pequenas de 6kg), um aproveitamento incomparável.' },
        { question: 'Consigo estocar o equivalente para uma casa dentro de uma sala pequena?', answer: 'Sim. Todo o material Hiperliga necessário para fechar a alvenaria de um sobrado residencial de 200m² cabe perfeitamente em um canto discreto de 1,5m² de uma sala de estar comum.' },
        { question: 'A areia estocada na calçada gera problemas ambientais?', answer: 'Sim. Além do perigo de multas municipais por bloquear vias de circulação civis, as areias escorrem para os bueiros provocando entupimentos, algo que a Hiperliga elimina totalmente.' }
      ],
      relatedLinks: [
        { label: 'Qual a espessura ideal do cordão de argamassa polimérica', href: '/qual-a-espessura-ideal-do-cordao-de-argamassa-polimerica' },
        { label: 'Quantos metros quadrados rende uma caixa de argamassa polimérica', href: '/quantos-metros-quadrados-rende-uma-caixa-de-argamassa-polimerica' },
        { label: 'Como armazenar massa pronta em bisnaga na obra', href: '/como-armazenar-massa-pronta-em-bisnaga-na-obra' }
      ]
    }
  ];

  logisticsDefs.forEach((def) => {
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
