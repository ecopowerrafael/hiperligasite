import { SEOPageContent } from './seoPagesData';

export function generateObjectionsPages(): Record<string, SEOPageContent> {
  const pages: Record<string, SEOPageContent> = {};

  const objectionsDefs = [
    {
      slug: 'argamassa-polimerica-solta-com-o-tempo',
      title: 'Argamassa Polimérica Solta com o Tempo? Descubra a Verdade',
      metaDescription: 'Entenda se a argamassa polimérica solta com o tempo ou se é durável. Veja testes de aderência, cura química e resistência a intempéries na Hiperliga.',
      h1: 'Argamassa Polimérica Solta com o Tempo? Mitos e Verdades Técnicas',
      tagline: 'Conheça os ensaios técnicos de durabilidade que desmistificam o medo de descolamento de blocos e tijolos na alvenaria.',
      problemTitle: 'O Medo do "Descolamento" do Bloco após Anos da Obra Concluída',
      problemDescription: 'Muitos construtores e proprietários têm receio de que a argamassa polimérica, por ser aplicada em cordões muito finos (apenas alguns milímetros de espessura de junta), possa secar, trincar ou perder a liga sob a ação do tempo, das dilatações térmicas ou do calor, fazendo com que as paredes soltem ou descolem após alguns anos de uso.',
      solutionTitle: 'A Resposta Técnica: Copolímeros Acrílicos Altamente Flexíveis e Duráveis',
      solutionDescription: 'Diferente do cimento, que é rígido e quebradiço, a Argamassa Polimérica Hiperliga é formulada com resinas de copolímeros acrílicos modificadas e cargas minerais selecionadas. Essa combinação exclusiva cria uma colagem flexível-estrutural permanente, funcionando como uma solda química entre os blocos. Ensaios de envelhecimento acelerado simulam décadas de incidência solar, umidade extrema e dilatações térmicas severas, comprovando que a colagem não se degrada com o tempo e mantém uma união infinitamente superior à argamassa de cal e cimento tradicional.',
      whenToUse: [
        'Assentamento de alvenaria de fechamento e vedação interna e externa',
        'Canteiros de obras de construtoras que exigem garantia residencial em longo prazo',
        'Obras em locais com elevada amplitude térmica diária (alta contração/dilatação)',
        'Construções em locais úmidos ou litorâneos que expõem as paredes a intempéries climáticas'
      ],
      whenNotToUse: [
        'Não aplicar sobre blocos com pó acumulado, poeira solta ou eflorescência ativa (reduz a ancoragem física)',
        'Não utilizar para preenchimento de fendas estruturais largas (espessuras acima de 5mm)',
        'Não misturar cimento, areia, cal ou aditivos extras ao produto original de fábrica'
      ],
      benefits: [
        { title: 'Elasticidade Permanente', desc: 'Sua formulação resiste às vibrações estruturais do dia a dia e tremores leves de tráfego de vias sem perder o poder colante.' },
        { title: 'União Molecular Avançada', desc: 'Penetra profundamente nos poros minerais das superfícies dos tijolos, transformando as duas fiadas em uma única peça maciça.' },
        { title: 'Fórmula Resistente ao Envelhecimento', desc: 'Não sofre apodrecimento por umidade ascendente ou biodegradação microbiana ao longo dos anos.' },
        { title: 'Garantia e Credibilidade Hiperliga', desc: 'Produzido sob rígido padrão laboratorial que garante a mesma dosagem técnica em todas as embalagens vendidas.' }
      ],
      steps: [
        { step: '1', title: 'Varra as Superfícies de Contato', desc: 'Utilize uma escova ou escovão de cerdas firmes para extrair qualquer poeira superficial acumulada na estocagem dos blocos.' },
        { step: '2', title: 'Verifique a Calibração de Altura', desc: 'Assegure-se de que os blocos sejam uniformes. Juntas finas exigem faces regulares para promover excelente contato colante.' },
        { step: '3', title: 'Filete Duplo Uniforme', desc: 'Aplique dois cordões de cola paralelos com cerca de 1cm de largura em toda a extensão do bloco anterior.' },
        { step: '4', title: 'Assente e Ajuste Com Firmeza', desc: 'Pressione com firmeza o bloco superior até que a argamassa polimérica espalhe uniformemente, promovendo contato integral.' }
      ],
      calculatorTitle: 'Calcule Seu Rendimento e Reduza Desperdícios',
      calculatorType: 'block' as const,
      faq: [
        { question: 'A argamassa polimérica apodrece ou perde o efeito após 5 anos?', answer: 'Não. Os ensaios mecânicos de envelhecimento térmico acelerado comprovam que as resinas acrílicas Hiperliga não sofrem hidrólise ou ressecamento por intempéries. Sua durabilidade é projetada para durar o ciclo total de vida útil da alvenaria (superior a 50 anos).' },
        { question: 'Se a parede sofrer abalo de porta batendo, o tijolo racha na colagem?', answer: 'Pelo contrário. Como a colagem da argamassa polimérica Hiperliga é mais resistente do que a própria cerâmica do bloco, em testes de impacto a quebra ocorre nos septos do bloco, nunca na junta colada.' },
        { question: 'O sol direto estraga o produto estocado na parede sem reboco?', answer: 'A cura do produto ocorre entre o contato das faces dos blocos, blindada da radiação UV solar. De todo modo, recomenda-se que o reboco ou revestimento decorativo externo seja aplicado em até 180 dias de acordo com as boas práticas de engenharia civil.' }
      ],
      relatedLinks: [
        { label: 'Como Economizar Cimento na Obra', href: '/como-economizar-cimento' },
        { label: 'Argamassa Polimérica Funciona e é Segura?', href: '/argamassa-polimerica-funciona' },
        { label: 'Riscos de usar argamassa polimérica na estrutura', href: '/riscos-de-usar-argamassa-polimerica-na-estrutura' }
      ]
    },
    {
      slug: 'cola-bloco-aguenta-peso-de-laje',
      title: 'Cola Bloco Aguenta o Peso de Laje? Veja Limites de Carga',
      metaDescription: 'Descubra se a cola bloco suporta o peso de lajes ou coberturas na alvenaria. Entenda a diferença entre alvenaria de vedação, estrutural e cintamento com a Hiperliga.',
      h1: 'Cola Bloco Aguenta Peso de Laje e Cargas Superiores?',
      tagline: 'Entenda como funciona a distribuição de carga vertical e as corretas práticas de encunhamento e cintamento de apoio.',
      problemTitle: 'O Receio do Esmagamento Físico das Juntas Finas no Topo',
      problemDescription: 'Uma dúvida recorrente entre pedreiros, mestres de obras e compradores é se a cola bloco, quando aplicada em juntas muito finas na divisória da alvenaria, não sofreria esmagamento físico, desmoronamento ou cisalhamento estrutural ao receber a pesada carga de uma laje de concreto usinado ou telhado rústico pesado.',
      solutionTitle: 'Distribuição Térmica-Física e o Conceito de Alvenaria de Vedação',
      solutionDescription: 'Em estruturas de concreto armado tradicionais (com vigas e pilares), as paredes atuam puramente como alvenaria de VEDAÇÃO (fechamento de vãos). Quem suporta o peso estrutural da laje e das coberturas são as vigas estruturais, distribuindo-as aos pilares e fundações. A cola bloco Hiperliga suporta perfeitamente todas as forças remanescentes e compressões normais dessas paredes, oferecendo fixação e rigidez excepcionais. Para evitar a transferência mecânica inadequada de flexões da laje para a parede (que ocorre tanto em juntas de cimento quanto poliméricas), deve-se executar a junta de encunhamento e cintamento adequado recomendados pelas normas NBR.',
      whenToUse: [
        'Assentamento de paredes decorativas e divisórias internas de vedação',
        'Fechamento de vãos externos entre pórticos de concreto armado',
        'Paredes sob cintas de amarração secundárias que suportam telhas leves'
      ],
      whenNotToUse: [
        'Não usar como substituto do concreto das vigas baldrame ou vergas estruturais',
        'Não utilizar em alvenaria estrutural portante (sem pilares) sem cálculo e homologação prévia do projetista',
        'Não assentar telhas ou madeiramento de telhado pesado diretamente sobre o bloco colante sem a viga ou canaleta de concreto superior (cinta)'
      ],
      benefits: [
        { title: 'Resistência Superior à Tração na Flexão', desc: 'Resiste até 4 vezes mais a puxões laterais e esforços de ventos do que a argamassa de cal tradicional.' },
        { title: 'Alinhamento Perfeito dos Blocos', desc: 'O assentamento uniforme minimiza a excentricidade de forças e cargas acidentais na alvenaria.' },
        { title: 'Zera os Espaços Vazios', desc: 'Cordões bem aplicados preenchem a extensão do bloco, garantindo apoio contínuo superior.' },
        { title: 'Absorve Tremor Construtivo', desc: 'A microflexibilidade impede o esmagamento seco e desagregamento que as argamassas comuns rígidas sofrem.' }
      ],
      steps: [
        { step: '1', title: 'Prepare o Cintamento de Amarração', desc: 'Construa a cinta superior em canaletas de concreto preenchidas com concreto armado para servir de encosto firme das lajes.' },
        { step: '2', title: 'Calcule as Cargas Permanentes', desc: 'Siga rigorosamente a distribuição de vigas e pilares do projeto arquitetônico contratado.' },
        { step: '3', title: 'Aplicações dos Filetes', desc: 'Utilize a bisnaga de 3kg da Hiperliga nas fiadas superiores com a mesma precisão do início da parede.' },
        { step: '4', title: 'Execução do Encunhamento', desc: 'Na junção final abaixo da viga de concreto, aplique adesivo elástico apropriado ou junta de vedação expansiva resistente.' }
      ],
      calculatorTitle: 'Calcule a Quantidade de Cola Bloco por Área',
      calculatorType: 'block' as const,
      faq: [
        { question: 'A cola bloco aguenta se a laje for de isopor (Laje Treliçada)?', answer: 'Sim. A laje de isopor é muito mais leve que a maciça tradicional. O apoio e vedação da alvenaria construída com Hiperliga comporta essa carga residual sem nenhuma dificuldade operacional.' },
        { question: 'Posso usar na primeira fileira abaixo do cintamento superior?', answer: 'Com certeza. Todas as fiadas horizontais de vedação, do piso ao penúltimo bloco de fechamento, devem e podem ser assentadas usando a cola bloco Hiperliga.' },
        { question: 'A parede pode desabar se receber uma carga imprevista?', answer: 'Não. Os ensaios normatizados de prensa hidráulica demonstram que a coesão promovida pela Hiperliga exige níveis de carga destrutivos muito além das exigências operacionais civis de residências.' }
      ],
      relatedLinks: [
        { label: 'Riscos de usar argamassa polimérica na estrutura', href: '/riscos-de-usar-argamassa-polimerica-na-estrutura' },
        { label: 'Como Fazer Alvenaria Mais Rápido', href: '/como-fazer-alvenaria-mais-rapido' },
        { label: 'Argamassa para Bloco de Concreto', href: '/argamassa-para-bloco-de-concreto' }
      ]
    },
    {
      slug: 'massa-pronta-racha-a-parede',
      title: 'Massa Pronta Racha a Parede? Evite Fissuras sob Dilatação',
      metaDescription: 'Veja se o uso de massa pronta causa rachaduras ou fissuras na parede. Descubra os segredos da flexibilidade polimérica da Hiperliga diante de movimentos térmicos.',
      h1: 'Massa Pronta Racha a Parede? Entendendo Trincas e Fissuras',
      tagline: 'Zere o medo de fissuras estéticas no acabamento de reboco entendendo o comportamento de deformabilidade sob variações térmicas.',
      problemTitle: 'As Fissuras Repetitivas Causadas por Variações de Temperatura',
      problemDescription: 'Toda edificação está exposta ao sol direto durante o dia e ao resfriamento rápido à noite. Essa oscilação faz com que os blocos de cerâmica ou concreto passem por movimentos mínimos de dilatação e contração. Masseiras e argamassas convencionais rígidas formam uma placa cimentícia sem nenhuma elasticidade. Quando o bloco se move, ocorrem quebras nas juntas e trincas que se propagam até o acabamento do gesso ou reboco da sala, causando prejuízo visual e infiltração.',
      solutionTitle: 'Resiliência Estabilizada da Argamassa Acrílica Hiperliga',
      solutionDescription: 'A formulação inovadora da Argamassa Polimérica Hiperliga resolve esse problema de engenharia pela raiz. Por ser baseada em dispersões termoplásticas elastoméricas de alta qualidade, ela mantém uma capacidade excelente de absorver e atenuar as microdilatações térmicas horizontais e verticais dos tijolos sem transmitir essas tensões diretamente ao revestimento externo de pintura. A junta fina atua como uma fita flexível amortecedora, que reduz drasticamente o cesto de trincas na alvenaria se comparado aos métodos grossos de argamassa comum baseados em areia e cimento tracionado.',
      whenToUse: [
        'Assentamento de blocos cerâmicos calibrados e blocos de concreto de boa geometria',
        'Fechamento externo de galpões industriais expostos constantemente a ventos e calor solar',
        'Obras residenciais térreas e sobrados com foco em acabamento liso e pinturas de alto padrão sem trincas'
      ],
      whenNotToUse: [
        'Não utilizar para preenchimento ou tamponamento direto de tubos elétricos ou hidráulicos no reboco',
        'Não aplicar o produto em espessuras excessivamente volumosas (acima de 5mm) tentando fazer reboco regularizador de paredes tortas',
        'Não ignorar as vergas de portas e contravergas de janelas de janelas (essas aberturas demandam reforço metálico contra trincas de canto nos cantos)'
      ],
      benefits: [
        { title: 'Flexibilidade Microscópica', desc: 'As cadeias químicas acrílicas toleram dilatação por calor sem romper o elo de aderência profunda.' },
        { title: 'Acabamento Sem Ondulações', desc: 'Sem juntas grosseiras, a espessura final de reboco necessária é menor e seca de modo uniforme.' },
        { title: 'Zera as Juntas Secas', desc: 'Filetes contínuos evitam frestas ocultas por onde a água costuma passar para causar infiltrações.' },
        { title: 'Redução Total de Patologias', desc: 'Minimiza o surgimento do indesejado "desenho do tijolo" na parede externa pintada.' }
      ],
      steps: [
        { step: '1', title: 'Nivele a Primeira Fiada Direitinho', desc: 'Certifique-se de que a base inicial está 100% nivelada usando massa grossa tradicional para evitar propagação de desalinhamentos.' },
        { step: '2', title: 'Umedeça de Leve em Climas Quentes', desc: 'Se os blocos estiverem muito quentes sob sol de 35°C, borrife água levemente para impedir a secagem rápida externa antes da fusão.' },
        { step: '3', title: 'Filetagem Precisa com a Bisnaga', desc: 'Faça os filetes contínuos paralelos, garantindo que não existam descontinuidades em toda a extensão do bloco.' },
        { step: '4', title: 'Assente os Blocos Sob Pressão', desc: 'Incorpore o bloco superior com pequenos batidinhos suaves de martelo de borracha para espalhar uniformemente os cordões de cola.' }
      ],
      calculatorTitle: 'Economize Até 40% na Alvenaria da Sua Construção',
      calculatorType: 'massa' as const,
      faq: [
        { question: 'A argamassa polimérica trinca mais fácil do que o cimento?', answer: 'Não. Pelo contrário, por ter comportamento elastomérico acrílico moderno, a Hiperliga se deforma de modo resiliente diante de tensões de dilatação, enquanto o cimento convencional rígido quebra e propaga a trinca por toda a parede.' },
        { question: 'O que devo fazer para evitar trindas de canto em janelas?', answer: 'Independentemente de usar cimento tradicional ou polímeros, você deve sempre instalar vergas e contravergas (pequenas vigas armadas de concreto) acima e abaixo dessas aberturas civis conforme as normas.' },
        { question: 'Uma parede edificada com Hiperliga aguenta vento de vendaval?', answer: 'Sim. Ensaios de vento realizados com paredes inteiras utilizando a nossa solução atendem com larga margem os índices ideais estipulados de ventabilidade por normas técnicas.' }
      ],
      relatedLinks: [
        { label: 'Patologias Comuns: Como Evitar Parede Torta', href: '/parede-torta' },
        { label: 'Como Curar Trinca na Alvenaria de Vez', href: '/trinca-na-alvenaria' },
        { label: 'Rachadura na Parede: Causas e Soluções Práticas', href: '/rachadura-na-parede' }
      ]
    },
    {
      slug: 'riscos-de-usar-argamassa-polimerica-na-estrutura',
      title: 'Riscos de Usar Argamassa Polimérica na Estrutura | Parecer Técnico',
      metaDescription: 'Entenda quais são os riscos reais se você usar argamassa polimérica em funções estruturais. Saiba as limitações técnicas e recomendações de segurança Hiperliga.',
      h1: 'Quais os Riscos de Usar Argamassa Polimérica em Elementos Estruturais?',
      tagline: 'Segurança em primeiro lugar. Saiba por que a cola bloco é extraordinária para vedação mas não pode ser usada de fôrma estrutural primária.',
      problemTitle: 'O Risco de Acidentes por Confusão Técnico-Operacional na Obra',
      problemDescription: 'Devido à magnífica resistência adesiva e velocidade no levantamento das paredes, alguns autoconstrutores ou mestres de obras inexperientes cometem o erro grave de tentar aplicar a argamassa polimérica para colar ferragens, estruturar pilares de sustentação de casas de três pavimentos, ou preencher colunas de concreto armado, o que gera sérios riscos de colapso estrutural por ignorar as forças de flexo-tração e compressão estruturais do aço.',
      solutionTitle: 'Definição Técnica: Exclusividade para Vedação Termoacústica',
      solutionDescription: 'A Argamassa Polimérica Hiperliga foi cientificamente projetada para funções de vedação, onde resiste com folga gigantesca a todas as exigências das normas brasileiras (como resistência lateral a ventos e cargas axiais do próprio fechamento). No entanto, ela não deve ser usada para fins estruturais primários como vigas de transição ou sapatas de fundação. Seguindo o projeto de engenharia padrão de concreto armado (usando concreto convencional com aço metálico para vigas-colunas e apoiando as paredes levantadas com Hiperliga para fechamento), o risco de acidentes é totalmente zero.',
      whenToUse: [
        'Vedação e fechamento de vãos de alvenaria em geral',
        'Paredes divisórias internas de apartamentos, escritórios e residências',
        'Edificação de alvenaria com o auxílio estrutural de pilaretes de concreto secundários'
      ],
      whenNotToUse: [
        'Não usar em pilares de sustentação isolados ou vigas estruturais aéreas',
        'Não utilizar para preenchimento de fôrmas ou colunas que exijam concretagem fluida',
        'Não assentar alvenaria estrutural portante de prédios altos sem parecer formal de engenheiro calculista'
      ],
      benefits: [
        { title: 'Zero Risco com Aplicação Correta', desc: 'Empregar a Hiperliga para fechar as paredes de vedação é 100% seguro e recomendado por consultores renomados.' },
        { title: 'Reduz o Peso Morto da Obra', desc: 'Como as juntas de cimento grossas pesam toneladas em prédios comerciais, usar junta fina polimérica alivia a carga do solo.' },
        { title: 'Excelente Resiliência Mecânica', desc: 'Paredes montadas com a nossa solução resistem melhor a pancadas externas do que as levantadas pela via tradicional rígida.' },
        { title: 'Segurança Normatizada em Laboratório', desc: 'Lote e rastreabilidade que seguem normas rigorosas de cisalhamento e arrancamento por tração.' }
      ],
      steps: [
        { step: '1', title: 'Fundação Estrutural com Concreto', desc: 'Siga a especificação do seu calculista estrutural para as brocas e vigas baldrames armadas tradicionais com cimento.' },
        { step: '2', title: 'Assente a Base com Argamassa Comum', desc: 'A primeira fileira de blocos deve ser nivelada obrigatória no cimento tradicional por conter maior espessura de junta.' },
        { step: '3', title: 'Levantamento Prático com Hiperliga', desc: 'Da segunda fiada em diante, use os cordões duplos de cola bloco Hiperliga nas juntas horizontais e verticais de vedação.' },
        { step: '4', title: 'Amarração com Pilares e Vigas', desc: 'Garanta a correta união física aos pilares instalando tela eletrosoldada ou pinos metálicos com fixação técnica.' }
      ],
      calculatorTitle: 'Simulador de Consumo Seguro de Cola Bloco',
      calculatorType: 'block' as const,
      faq: [
        { question: 'A casa pode cair ou rachar se eu usar a argamassa polimérica?', answer: 'Não, desde que a estrutura (pilares, vigas e fundação) seja feita de concreto armado de acordo com o projeto de um engenheiro. A Hiperliga é ideal para vedar os vãos das paredes com total estabilidade.' },
        { question: 'Por que ela não pode ser usada no lugar do concreto do pilar?', answer: 'O pilar estrutural sustenta o peso total do edifício e sofre compressão e flexão extremas onde a massa de vedação não tem dimensionamento mecânico e nem possui barras de aço embutidas.' },
        { question: 'Existe laudo técnico que comprove a segurança do produto?', answer: 'Sim. A Hiperliga possui uma biblioteca robusta de laudos de laboratórios credenciados de ruptura ao cisalhamento e arrancamento técnico, disponíveis para qualquer arquiteto ou engenheiro.' }
      ],
      relatedLinks: [
        { label: 'Cola Bloco Aguenta o Peso de Lajes?', href: '/cola-bloco-aguenta-peso-de-laje' },
        { label: 'Como Economizar Cimento de Forma Segura', href: '/como-economizar-cimento' },
        { label: 'Patologias: Como Evitar Falhas na Alvenaria', href: '/falhas-na-alvenaria' }
      ]
    },
    {
      slug: 'o-que-acontece-se-molhar-cola-bloco-antes-de-secar',
      title: 'O que Acontece se Molhar a Cola Bloco Antes de Secar? Cuidados',
      metaDescription: 'Veja o impacto da chuva ou de umidade se molhar a cola bloco antes do processo de cura total. Aprenda a proteger as paredes levantadas com a Hiperliga.',
      h1: 'O que Acontece se Molhar a Cola Bloco Antes de Secar?',
      tagline: 'Esclareça o impacto de chuvas e umidades inesperadas nas paredes de alvenaria em fase de levantamento.',
      problemTitle: 'O Risco de Lavagem Química da Cola com Chuva Fortes',
      problemDescription: 'No dia a dia do canteiro de obras exposto a intempéries, chuvas de verão e temporais repentinos podem surgir logo após a equipe erguer fiadas de alvenaria. Como a argamassa polimérica é um composto úmido pronto à base de água, caso ela receba água direta ou escorrente em abundância antes de completar seu processo de secagem física primário, formam-se riscos de enfraquecimento e perda de aderência.',
      solutionTitle: 'O Processo de Cura Mecânica e a Resistência Total Hidrofóbica',
      solutionDescription: 'A cola bloco Hiperliga cura por simples evaporação física da fase líquida presente no gel. O produto precisa de algumas horas sem exposição a chuvas volumosas para iniciar o seu processo de coesão irreversível. Se chover logo após a aplicação, os copolímeros dispersos podem se diluir novamente na água da chuva, lavando a junta ou amolecendo a colagem. No entanto, após o término da cura primária (geralmente entre 12h e 24h, a depender da temperatura local e vento), a junta polimérica torna-se inteiramente hidrofóbica e impermeável, resistindo a qualquer tempestade severa ou umidade extrema.',
      whenToUse: [
        'Assentamento em dias de tempo firme, parcialmente nublado ou solar constante',
        'Planejamento de turnos construtivos com base em boletim climatológico',
        'Paredes sob andares superiores já cobertos com lajes que protegem as juntas da chuva direta'
      ],
      whenNotToUse: [
        'Não assentar fiadas de alvenaria sob chuva severa ou com água abundante escorrendo na parede',
        'Não aplicar o produto nas faces dos blocos ou tijolos se estes estiverem excessivamente molhados ou encharcados por tempestades anteriores (zera o agarre inicial)'
      ],
      benefits: [
        { title: 'Secagem Rápida Padrão', desc: 'Em condições ambientes de média umidade e vento, a estabilização ocorre em poucas horas.' },
        { title: 'Aderência Que Não Solta Mais', desc: 'Uma vez seco o cordão polimérico acrílico, a água não consegue mais penetrar ou reverter a colagem.' },
        { title: 'Excelente Ação Hidrofóbica', desc: 'Impossibilita infiltrações de chuvas de vento através das juntas finas horizontais secas.' },
        { title: 'Zera a Composição de Solo Úmido', desc: 'Evita a propagação por capilaridade de sais agressivos provenientes das umidades dos solos.' }
      ],
      steps: [
        { step: '1', title: 'Veja a Previsão do Clima', desc: 'Evite iniciar o assentamento de paredes externas de grande extensão se houver aviso iminente de temporais ou chuvas constantes.' },
        { step: '2', title: 'Seque a Face de Assentamento', desc: 'Caso tenha chovido um dia antes, passe um pano seco ou aguarde o vento evaporar o excesso de umidade do tijolo.' },
        { step: '3', title: 'Feche o Turno com Proteção', desc: 'Se a chuva ameaçar cair, cubra a fiada de fechamento superior com uma lona plástica rápida para desviar as correntes de água.' },
        { step: '4', title: 'Aguarde a Cura de Estabilidade', desc: 'Deixe secar por até 24 horas antes de aplicar esforços mecânicos bruscos de canaletas ou furações e reformas na tubulação.' }
      ],
      calculatorTitle: 'Calculadora de Rendimento e Economia das Juntas Finas',
      calculatorType: 'block' as const,
      faq: [
        { question: 'Se garoar bem fraquinho logo após assentar, vai estragar a parede?', answer: 'Dificilmente. Pequenas garoas que não lavam as juntas não causam danos, já que o produto possui boa aderência inicial imediata.' },
        { question: 'O que fazer se a chuva forte de fato lavar a cola fresca?', answer: 'Caso ocorra lavagem técnica visível de parte da junta, o recomendado é desmontar a fiada afetada e reaplicar os filetes de Hiperliga para garantir 100% de solidez e resistência mecânica.' },
        { question: 'Quanto tempo preciso esperar para rebocar após as colagens?', answer: 'Boas práticas recomendam aguardar o ciclo total de 72 horas para estabilização térmica da parede de forma que todas as juntas atinjam sua cura profunda e seca.' }
      ],
      relatedLinks: [
        { label: 'Como Assentar Bloco Mais Rápido', href: '/como-assentar-bloco-mais-rapido' },
        { label: 'Problemas de Infiltração na Alvenaria', href: '/problemas-de-infiltracao' },
        { label: 'Argamassa Polimérica dá Infiltração?', href: '/argamassa-polimerica-da-infiltracao' }
      ]
    },
    {
      slug: 'argamassa-polimerica-da-infiltracao',
      title: 'Argamassa Polimérica dá Infiltração? Estudo sobre Umidade',
      metaDescription: 'Saiba se a argamassa polimérica gera infiltração ou se previne mofo e umidade ascendente nas paredes. Entenda o papel impermeabilizante da Hiperliga.',
      h1: 'Argamassa Polimérica dá Infiltração ou Ajuda na Impermeabilização?',
      tagline: 'Entenda como os compostos derivados do acrílico atuam bloqueando a subida capilar de água da umidade.',
      problemTitle: 'A Acolhida de Bolores Invisíveis por Capilaridade de Juntas Porosas',
      problemDescription: 'A argamassa tradicional de cimento e areia é tecnicamente porosa e atua como uma rede microscópica de tubos capilares que suga a umidade da viga baldrame e espalha pelas paredes, gerando bolores de rodapés, estragando pinturas requintadas de gesso e gerando mau cheiro e problemas respiratórios nos moradores.',
      solutionTitle: 'Barreira Selante de Alta Coesão Impermeável da Hiperliga',
      solutionDescription: 'A Argamassa Polimérica Hiperliga é formulada à base de cargas elastoméricas de resinas acrílicas hidrofóbicas totalmente fechadas. Quando o produto cura entre os blocos, ele cria uma verdadeira barreira física que bloqueia a ascensão ou passagem de água pelas juntas longitudinais horizontais. Desse modo, ela não dá infiltração e sim auxilia a mitigar mofos e eflorescências de capilaridade nas fiadas baixas, embora lembrando que é obrigatório o uso correto de tintas de baldrame e impermeabilização na fundação de concreto armado primárias.',
      whenToUse: [
        'Assentamento de blocos em banheiros, lavanderias e fachadas externas úmidas',
        'Construções em regiões litorâneas ou muito chuvosas do Cinturão Verde',
        'Paredes expostas com tijolo ecológico que necessitam de barreiras selantes adicionais'
      ],
      whenNotToUse: [
        'Não utilizar para substituir o reboco impermeabilizante aditivado por dentro de caixas d\'água ou piscinas',
        'Não dispensar a aplicação de emulsão asfáltica (piche) ou aditivos na viga baldrame sobre o solo de concreto'
      ],
      benefits: [
        { title: 'Excelente Estanqueidade', desc: 'As juntas finas e emborrachadas impedem a passagem de ventos úmidos e infiltrações de rajadas de chuva.' },
        { title: 'Zera a Eflorescência no Reboco', desc: 'Como o produto químico não contém cimento alcalino livre, não formam-se os cristais salinos brancos.' },
        { title: 'Resistência a Microrganismos', desc: 'Dificulta a fixação fúngica nas frestas de união mecânica dos blocos.' },
        { title: 'Protege a Pintura Interna', desc: 'Ajuda a resguardar massas corridas finas e gessos interiores contra a passagem de umidade.' }
      ],
      steps: [
        { step: '1', title: 'Zere a Umidade de Baldrame com Piche', desc: 'Aplique de duas a três demãos de impermeabilizante elastomérico em toda a viga baldrame que encosta na terra.' },
        { step: '2', title: 'Filetagem Sem Furo das Cola', desc: 'Assegure filetes volumosos e sem falhas para criar barreiras completas de contato na junta final.' },
        { step: '3', title: 'Nivelamento Uniforme dos Tijolos', desc: 'Aperte com martelo de borracha para espalhar os selantes sem romper o bloco estrutural.' },
        { step: '4', title: 'Aplicações Técnicas de Selantes', desc: 'Em juntas expostas ou fachadas lisas, faça a selagem externa antes de rebocar ou aplicar as camadas de acabamento.' }
      ],
      calculatorTitle: 'Descubra a Economia Total do Canteiro com a Calculadora',
      calculatorType: 'block' as const,
      faq: [
        { question: 'A argamassa polimérica elimina o uso de impermeabilizante de baldrame?', answer: 'Não. A junta polimérica ajuda a bloquear a umidade lateral, mas você ainda deve obrigatoriamente impermeabilizar a viga baldrame de concreto para barrar a água vinda do solo.' },
        { question: 'O produto resiste à água depois de assentar as fiadas duradouro?', answer: 'Sim. Após o ciclo de secagem primário, a Hiperliga torna-se insolúvel à água, suportando plenamente temporais diários sem nenhum desprendimento de tijolo.' },
        { question: 'Posso usar para assentar azulejos ou ladrilhos comerciais?', answer: 'Não. A Hiperliga é de uso exclusivo para o levantamento de paredes e alvenaria de tijolos e blocos. Para azulejos use argamassas colantes convencionais de cerâmica (AC1, AC2 ou AC3).' }
      ],
      relatedLinks: [
        { label: 'Como Resolver Problemas de Infiltração', href: '/problemas-de-infiltracao' },
        { label: 'Massa Pronta Racha a Parede? Entenda Trincas', href: '/massa-pronta-racha-a-parede' },
        { label: 'O que acontece se molhar a cola bloco antes de secar', href: '/o-que-acontece-se-molhar-cola-bloco-antes-de-secar' }
      ]
    },
    {
      slug: 'desvantagens-argamassa-polimerica-relacao-tradicional',
      title: 'Desvantagens da Argamassa Polimérica Frente à Tradicional',
      metaDescription: 'Compare de forma realista e técnica as desvantagens da argamassa polimérica com a massa cimentícia tradicional de junta grossa. Saiba onde não usar.',
      h1: 'Desvantagens da Argamassa Polimérica em Relação à Tradicional',
      tagline: 'Um guia sem rodeios sobre as desvantagens reais e onde as massas convencionais ainda se fazem necessárias na obra.',
      problemTitle: 'As Promessas Exageradas Versus a Rotina Cruel do Canteiro',
      problemDescription: 'Alguns folhetos ou influenciadores digitais vendem a argamassa polimérica como uma solução milagrosa que resolve 100% dos cenários de uma obra sem nenhuma restrição ou desafio operativo. Isso gera desapontamento ou erros bobos no canteiro quando os profissionais tentam usá-la em tijolos excessivamente tortos, ou desconhecem que ela exige cuidados específicos de aplicação e prumo mecânico.',
      solutionTitle: 'Limitações Reais Explicadas por Engenheiros para Evitar Retrabalhos',
      solutionDescription: 'As reais desvantagens operacionais da Argamassa Polimérica em relação à argamassa de cal e cimento são: 1) Exige que os blocos ou tijolos tenham boa uniformidade geométrica, uma vez que a junta é milimétrica e não corrige desalinhamentos ou ondulações de blocos quebrados (tijolos excessivamente tortos acumulam frestas); 2) Exige que a primeira fileira de blocos seja 100% nivelada obrigatoriamente com argamassa tradicional de junta grossa para compensar as diferenças da laje de concreto; 3) O preço individual de face por quilo de compra é superior ao dos agregados soltos secos, muito embora o consumo por metro quadrado de parede seja até 20 vezes menor, o que resulta em ganho real se calculados a rapidez, o frete menor de entrega e a ausência absoluta de desperdício.',
      whenToUse: [
        'Uso com blocos de cerâmica ou concreto regularizados e de bom acabamento',
        'Obras de cronograma acelerado que precisam de ganho financeiro por velocidade (até 3x mais produtivas)',
        'Residências urbanas, cômodos internos de fachadas e reformas limpas com zero entulho acumulado'
      ],
      whenNotToUse: [
        'Fechamentos ou assentamentos que envolvam tijolos rústicos excessivamente deformados, lascados ou fora de bitolas',
        'Primeira fiada de blocos de arrranque sobre a fundação de baldrame irregular (esta necessita do cimento seco tradicional para regularização de topo)',
        'Elementos estruturais isolados como pilares suspensos e vigas de sobrecarga estrutural'
      ],
      benefits: [
        { title: 'Informação Direta e Realista', desc: 'Entender os limites geométricos do tijolo impede a compra equivocada e garante o sucesso técnico da obra.' },
        { title: 'Velocidade de Levantamento de Paredes', desc: 'Enquanto com cimento o pedreiro perde tempo moldando colheres, com a nossa bisnaga o levantamento é 3x mais produtivo.' },
        { title: 'Zera o Desperdício no Piso', desc: 'Diga adeus às sobras duras de massadeiras e masseiras acumuladas no solo.' },
        { title: 'Logística de Canteiro Excepcional', desc: 'Zera a necessidade de transporte de carrinhos pesados de areia molhada pelos pavimentos elevatórios.' }
      ],
      steps: [
        { step: '1', title: 'Adquira Blocos de Qualidade Regular', desc: 'Compre tijolos de fornecedores certificados que respeitem tolerâncias dimensionais finas de largura e altura.' },
        { step: '2', title: 'Erga a Alvenaria de Nível Primário', desc: 'Trabalhe a primeira linha horizontal sobre a fundação de cimento tradicional com o prumo milimétrico de bolha.' },
        { step: '3', title: 'Use o Aplicador no Padrão Certo', desc: 'Aplique dois cordões de 1cm de largura em paralelo sem apertar excessivamente a ponta da bisnaga plástica.' },
        { step: '4', title: 'Execute Controles de Verticalidade', desc: 'Gaste alguns segundos verificando o prumo a cada três fiadas para garantir que a parede sobe perfeitamente reta.' }
      ],
      calculatorTitle: 'Estime com Precisão Matematica a Redução Total de Custos',
      calculatorType: 'block' as const,
      faq: [
        { question: 'A argamassa polimérica consome menos mão de obra do que de cimento?', answer: 'Sim. Um pedreiro com um ajudante consegue assentar até três vezes mais metros lineares de parede por dia útil com a Hiperliga se comparado com betoneiras pesadas.' },
        { question: 'Posso misturar areia ou cal se achar que ela tá rala?', answer: 'De forma alguma. Não misture nenhum componente mineral ou água. A reatibilidade química do produto é ajustada estritamente na fábrica da Hiperliga.' },
        { question: 'A parede de fechamento cai se a cola rachar no frio?', answer: 'Não. Os compostos elastoméricos poliméricos da Hiperliga resistem ao frio e calor sem perder o módulo de coesão que ancora os tijolos.' }
      ],
      relatedLinks: [
        { label: 'Riscos de usar argamassa polimérica na estrutura', href: '/riscos-de-usar-argamassa-polimerica-na-estrutura' },
        { label: 'Argamassa Polimérica dá Infiltração?', href: '/argamassa-polimerica-da-infiltracao' },
        { label: 'O que acontece se molhar a cola bloco antes de secar', href: '/o-que-acontece-se-molhar-cola-bloco-antes-de-secar' }
      ]
    }
  ];

  objectionsDefs.forEach((def) => {
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
