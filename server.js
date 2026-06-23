import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Default to port 3000, but allow environment override for general node hosting providers
const PORT = process.env.PORT || 3000;

// Serve static assets from the Vite build output folder ('dist')
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// SEO Pages Database for Server-Side Meta Injection
const SEO_METADATA = {
  '/argamassa-polimerica': {
    title: 'Argamassa Polimérica Hiperliga | Cola Bloco Pronta para Alvenaria',
    description: 'Conheça a Argamassa Polimérica Hiperliga, a evolução para o assentamento de blocos e tijolos. Alta durabilidade, sem sujeira, pronta para uso e rendimento até 20x maior.',
    canonical: 'https://hiperliga.com.br/argamassa-polimerica',
    h1: 'Argamassa Polimérica Industrializada para Assentamento Eficiente',
    tagline: 'Esqueça a argamassa convencional. Reduza custos, zere o desperdício e acelere o cronograma da sua obra com a tecnologia Hiperliga.',
    problem: 'O assentamento de blocos convencional usando cimento, areia, cal e água exige logística pesada, misturadores barulhentos e resulta em até 25% de desperdício de material. Além do cansaço físico extremo da equipe na preparação da massa tradicional, a alvenaria avança lentamente, gerando pilhas de entulho e atrasando o andamento geral do projeto.',
    solution: 'Desenvolvida com resinas acrílicas e cargas minerais selecionadas, a Argamassa Polimérica Hiperliga já vem perfeitamente pronta para o uso. Vendida em práticas bisnagas e barricas, ela dispensa o uso de betoneiras, adição de água e energia elétrica. Basta aplicar dois cordões contínuos sobre os blocos e realizar o assentamento diretamente, colando tijolos e blocos de forma limpa, direta e descomplicada.',
    schemaType: 'Product'
  },
  '/massa-pronta': {
    title: 'Massa Pronta para Obra | Argamassa Pronta Hiperliga',
    description: 'Elimine a betoneira e a sujeira. A Massa Pronta Hiperliga vem pronta para aplicação sem necessidade de água ou aditivos. Altíssimo rendimento e rapidez.',
    canonical: 'https://hiperliga.com.br/massa-pronta',
    h1: 'Massa Pronta e Sem Cimento Tradicional: Alvenaria Instantânea',
    tagline: 'Sua obra limpa, eficiente e organizada de verdade. Conheça a massa pronta que não precisa bater e já vem na consistência perfeita para assentamento de alvenarias.',
    problem: 'Fazer massa de cimento e areia no canteiro esconde custos absurdos: quebra de sacos de cimento, desperdício de areia fina empilhada sob sol e chuva, variação no traço que enfraquece a parede, consumo elétrico contínuo de betoneiras e o tempo que o pedreiro gasta batendo massa em vez de levantar as paredes.',
    solution: 'A Massa Pronta Hiperliga elimina o traço manual. Desenvolvida sob rígido controle industrial, garante consistência idêntica em toda a obra, livre de torrões de areia e grânulos. Reduza o tempo de setup no canteiro a zero: basta abrir a embalagem e aplicar. Menos cansaço técnico, maior precisão de rendimento e padronização absoluta.',
    schemaType: 'FAQPage'
  },
  '/cola-bloco': {
    title: 'Cola Bloco Hiperliga | Cola para Assentamento de Tijolo',
    description: 'A melhor cola bloco do Brasil. Alto rendimento para colagem de blocos cerâmicos and de concreto. Veja testes técnicos de aderência e use na sua obra.',
    canonical: 'https://hiperliga.com.br/cola-bloco',
    h1: 'Cola Bloco de Alta Performance para Assentamento Eficiente',
    tagline: 'Economize tempo, espaço e dinheiro com o adesivo estrutural polimérico que revolucionou os canteiros de obras profissionais.',
    problem: 'Manter pilhas de areia e sacos de cimento ocupa espaço físico precioso na calçada e nas garagens da obra. Além de estarem sujeitos a furto, chuvas fortes levam a areia pelo bueiro, entupindo o sistema pluvial do loteamento e gerando multas pesadas. Sacos de cimento absorvem a umidade do ar e empedram antes mesmo de serem usados.',
    solution: 'A Cola Bloco Hiperliga concentra o poder de colagem em embalagens compactas de 3kg, 25kg e 40kg. Uma barrica de Hiperliga equivale a múltiplos sacos de argamassa de 20kg convencionais. Você descarrega em minutos, estoca em qualquer canto coberto de forma ultra organizada e limpa, e reduz drasticamente a desordem do canteiro. Obra organizada é sinônimo de lucro.',
    schemaType: 'Product'
  },
  '/como-assentar-bloco-mais-rapido': {
    title: 'Como Assentar Bloco Mais Rápido | Guia Passo a Passo Hiperliga',
    description: 'Descubra as principais técnicas e ferramentas para triplicar a velocidade de assentamento de blocos e tijolos na alvenaria de forma correta e segura.',
    canonical: 'https://hiperliga.com.br/como-assentar-bloco-mais-rapido',
    h1: 'Como Assentar Bloco e Tijolo com Produtividade Máxima',
    tagline: 'O segredo dos grandes construtores revelado. Conheça o passo a passo definitivo e a tecnologia que permite assentar até 1.500 blocos por dia por pedreiro.',
    problem: 'Nas construtoras e obras residenciais, o tempo de erguimento de paredes é o maior gargalo crítico do cronograma. O pedreiro tradicional despende 60% do seu tempo de trabalho misturando as matérias-primas na masseira, transportando baldes pesados, limpando pingos no chão e ajeitando espessuras grosseiras de massa na colher de pedreiro. Um processo repetitivo, cansativo e arcaico.',
    solution: 'Para acelerar o processo construtivo real, o segredo está na eliminação absoluta de gargalos logísticos mecânicos. Utilizando a Argamassa Polimérica em bisnaga, um único funcionário consegue aplicar os cordões de colagem em segundos e posicionar os tijolos direto com as duas mãos, sem necessidade de ferramentas pesadas. A agilidade operacional é instantaneamente multiplicada, permitindo rendimentos físicos impressionantes.',
    schemaType: 'Article'
  },
  '/como-reduzir-custo-da-obra': {
    title: 'Como Reduzir o Custo da Obra de Alvenaria | Hiperliga',
    description: 'Economize até 40% na alvenaria da sua construção. Reduza desperdício, cimento, areia e ganhe produtividade no canteiro de obras com a Hiperliga.',
    canonical: 'https://hiperliga.com.br/como-reduzir-custo-da-obra',
    h1: 'Como Reduzir o Custo Construtivo da Alvenaria com Tecnologia',
    tagline: 'O custo total de erguer uma parede não está só no preço dos sacos de cimento. Veja as métricas e o comparativo de economia de ponta a ponta.',
    problem: 'Ao calcular o custo do assentamento tradicional de alvenaria por metro quadrado, a maioria dos compradores comete o erro clássico de cotar apenas sacos de areia e cimento nas lojas. Eles esquecem das perdas: cimento estragado por umidade (10%), areia levada por chuvas (15%), entulho que exige caçamba para descarte (25%), cansaço de operários levando a afastamentos e o enorme consumo de água e energia elétrica da betoneira.',
    solution: 'A utilização da Argamassa Polimérica Hiperliga diminui drasticamente o custo financeiro total por metro quadrado concluído. Sua alta eficiência de rendimento operacional permite construir mais metros quadrados de vedação em menos tempo com menos funcionários. A alvenaria limpa e o canteiro organizado economizam custos de limpeza, caçambas, perdas mecânicas comuns de material e taxas desnecessárias.',
    schemaType: 'Article'
  },
  '/argamassa-polimerica-funciona': {
    title: 'Argamassa Polimérica Funciona? Veja Testes de Resistência | Hiperliga',
    description: 'Descubra a verdade sobre a resistência da argamassa polimérica. Testes mecânicos, ensaios de rompimento no tijolo e por que engenheiros confiam na Hiperliga.',
    canonical: 'https://hiperliga.com.br/argamassa-polimerica-funciona',
    h1: 'Argamassa Polimérica Funciona e é Resistente? Esclarecendo Tudo',
    tagline: 'Colocar a parede em risco é inaceitável. Descubra as evidências químicas e científicas que garantem o desempenho estrutural da argamassa acrílica Hiperliga.',
    problem: 'Pedreiros assentos e engenheiros de ponta estão acostumados a usar juntas grossas de cimento e areia há dezenas de anos. É natural duvidar que cordões de cola fina contendo resinas de polímeros acrílicos aplicados com bisnaga consigam de fato suportar cargas físicas e estabilizar paredes frente a abalos de portas batendo e incidência extrema de ventos mecânicos fortes.',
    solution: 'A estabilidade física da parede na união polimérica não ocorre pelo mero preenchimento volumétrico de massa de cimento, mas pela adesão química de microgarras moleculares dos polímeros e aditivos especiais às faces porosas dos blocos. Uma vez seca, a resina elastomérica de alta aderência da Hiperliga une as partículas adjacentes em um compósito que rompe no próprio substrato do tijolo cerâmico ou bloco de cimento, e não na interface da junta colada. Os testes laboratoriais mostram resistência imbatível.',
    schemaType: 'FAQPage'
  },
  '/comprar-argamassa-polimerica': {
    title: 'Comprar Argamassa Polimérica | Preço Direto de Fábrica Hiperliga',
    description: 'Adquira Argamassa Polimérica Hiperliga com os melhores preços. Venda para todo o Brasil. Barricas de 25kg, 40kg e bisnagas de 3kg em estoque imediato.',
    canonical: 'https://hiperliga.com.br/comprar-argamassa-polimerica',
    h1: 'Comprar Argamassa Polimérica Hiperliga: Desconto na Loja Oficial',
    tagline: 'Garanta suprimento contínuo para sua obra de forma ultra rápida com envio direto ou canais oficiais de distribuição nacional.',
    problem: 'Comprar insumos de construção sob demanda nas lojas físicas locais costuma implicar em taxas e comissões pesadas, além de atrasos de frete devido a transportadoras sem estoques adequados de materiais industriais técnicos avançados.',
    solution: 'Seja para reformas particulares pequenas usando a bisnaga prática de 3 Kg ou grandes obras residenciais e corporativas de loteamentos usando barricas estruturais de 25 Kg e 40 Kg, oferecemos faturamento flexível, canais de frete expresso e estoque permanente. Compre na Loja Oficial Online no conforto de alguns clicks e com total rastreabilidade até o destino final.',
    schemaType: 'Product'
  }
};

const NEW_THEME_DEFINITIONS = [
  {
    slug: 'argamassa-pronta',
    title: 'Argamassa Pronta de Alta Performance | Hiperliga',
    metaDesc: 'Descubra as vantagens de utilizar a Argamassa Pronta Hiperliga na sua obra. Redução de custos, desperdício zero e liberação rápida da mão de obra.',
    h1: 'Argamassa Pronta Industrializada para Praticidade Incrível na Obra',
    tagline: 'Esqueça a necessidade de coletar e carregar areia, cimento e água pelo canteiro de obras. Use argamassa pronta de fábrica.',
    problemDesc: 'Preparar argamassa tradicional no canteiro de obras gera desperdício de insumos, perda de tempo físico e inconsistência na proporção de mistura.',
    solDesc: 'Fornecida em barricas e bisnagas com bico aplicador, a argamassa pronta não requer energia e nem adição de água. Basta abrir e assentar diretamente.'
  },
  {
    slug: 'argamassa-para-assentamento',
    title: 'Argamassa para Assentamento Eficiente de Blocos | Hiperliga',
    metaDesc: 'A melhor argamassa para assentamento de tijolos e blocos cerâmicos. Tecnologia polimérica para alta aderência e rapidez na obra.',
    h1: 'Argamassa para Assentamento de Tijolos e Blocos Construtivos',
    tagline: 'Assegure rapidez construtiva e resistência incomparável na fase de alvenaria de vedação com nosso adesivo avançado.',
    problemDesc: 'O método convencional obriga o pedreiro a fazer movimentos repetitivos incessantes de abaixar e levantar para espalhar argamassa com colher, gerando cansaço muscular e produtividade baixa.',
    solDesc: 'Sua equipe passa a assentar com as duas mãos livres para o alinhamento dos blocos, aplicando dois canais finos e precisos de argamassa polimérica.'
  },
  {
    slug: 'cola-tijolo',
    title: 'Cola Tijolo e Argamassa Adesiva Pronta | Hiperliga',
    metaDesc: 'A verdadeira cola tijolo para colagem de alvenaria. Rendimento excelente de 1.5kg por metro quadrado, resistente e limpa.',
    h1: 'Cola Tijolo de Alto Rendimento para Alvenaria de Vedação',
    tagline: 'Substitua até 20 vezes o peso de ligas tradicionais de cimento por um adesivo acrílico de alta tenacidade química.',
    problemDesc: 'Estocar sacos de liga convencional e montes de areia consome área preciosa da construção, além do esforço hercúleo para içar materiais aos andares mais altos.',
    solDesc: 'Com caixas e barricas posicionadas diretamente no cômodo onde a parede está sendo levantada, o abastecimento e a movimentação local ficam ultra leves.'
  },
  {
    slug: 'assentamento-de-blocos',
    title: 'Assentamento de Blocos de Concreto e Cerâmica | Hiperliga',
    metaDesc: 'Como fazer o assentamento de blocos render até 3 vezes mais rápido no canteiro. Guia técnico de alta eficiência com argamassa polimérica.',
    h1: 'Assentamento de Blocos Limpo, Ágil e Sem Desperdício de Material',
    tagline: 'Padronize o processo construtivo da sua equipe e atinja a entrega física de alvenaria antes do prazo limite.',
    problemDesc: 'As juntas de argamassa convencionais sofrem fortes efeitos de contração de secagem, gerando tensões que propiciam microfissuras e vazamento de umidade.',
    solDesc: 'A cola Hiperliga gera uma junta final de apenas 2 a 3 milímetros, altamente resiliente à flexão de carga e variações de temperatura térmica.'
  },
  {
    slug: 'assentamento-de-tijolos',
    title: 'Assentamento de Tijolos Baianos | Cola de Tijolo Hiperliga',
    metaDesc: 'Otimize o assentamento de tijolos cerâmicos na sua construção. Conheça as bisnagas aplicadoras prontas da Hiperliga. Frete Express.',
    h1: 'Assentamento de Tijolos Rápido e Seguro Direto com Bisnagas',
    tagline: 'Melhore as margens de lucro de cada alvenaria de vedação reduzindo o uso excessivo de materiais agregados grosseiros.',
    problemDesc: 'Pedreiros gastam cerca de metade de seu tempo útil de trabalho diário batendo traços, limpando sujeiras e subindo baldes de argamassa pesada.',
    solDesc: 'Com canais de aplicação elásticos de Hiperliga, a colagem do tijolo se faz em segundos, reduzindo cansaço e acidentes na obra.'
  },
  {
    slug: 'argamassa-para-alvenaria',
    title: 'Argamassa para Alvenaria de Vedação de Alta Classe | Hiperliga',
    metaDesc: 'A argamassa para alvenaria de vedação mais bem avaliada. Normatizada, testada em laboratório e ideal para obras comerciais ou residenciais.',
    h1: 'Argamassa para Alvenaria Industrializada Pronta para Uso',
    tagline: 'Assegure durabilidade e conformidade técnica total para as alvenarias internas e externas do seu condomínio ou residência.',
    problemDesc: 'Bater argamassa na obra de forma empírica causa flutuações absurdas na rigidez de flexão, com juntas quebradiças e áreas fáceis de esfarelar.',
    solDesc: 'A Hiperliga garante que cada bisnaga se comporte exatamente com as mesmas propriedades físicas de adesão, trazendo padrão e confiabilidade.'
  },
  {
    slug: 'argamassa-industrializada',
    title: 'Argamassa Industrializada Pronta para Alvenaria | Hiperliga',
    metaDesc: 'Substitua o cimento de colher pela argamassa industrializada polimérica Hiperliga. Menos entulho, maior controle de rendimentos e custos.',
    h1: 'Argamassa Industrializada Pronta de Alta Resistência à Flexão',
    tagline: 'Chega de carregar areia úmida e misturar clinker. Utilize o composto que revoluciona a logística de materiais.',
    problemDesc: 'Perdas em sacos rompidos por umidade do ar, areia levada embora pelas águas pluviais gerando multas, e tempo ocioso batendo misturas.',
    solDesc: 'Com consumo fixo calculado, você compra exatamente o volume de barricas necessárias para o milheiro de blocos programado, reduzindo sobras.'
  },
  {
    slug: 'argamassa-para-construcao',
    title: 'Argamassa para Construção Civil Residencial | Hiperliga',
    metaDesc: 'Adquira argamassa para construção com preço promocional direto do fabricante. Descontos por atacado para incorporadoras e depósitos.',
    h1: 'Argamassa para Construção Sustentável, Ágil e de Qualidade',
    tagline: 'Eleve o padrão de sustentabilidade e organização do canteiro, assegurando o bem-estar físico e saúde dos seus profissionais.',
    problemDesc: 'Betoneiras e misturadores industriais ruidosos geram poeira nociva, dificultando reformas limpas em locais como shoppings ou clínicas.',
    solDesc: 'O produto já vem perfeitamente misturado de fábrica. Sua aplicação é feita em total silêncio e sem gerar resíduo volátil ressecado na atmosfera.'
  },
  {
    slug: 'argamassa-para-obras',
    title: 'Argamassa para Obras de Alto Padrão e Incorporações | Hiperliga',
    metaDesc: 'Atendimento corporativo de fornecimento de argamassa para obras residenciais de médio e grande porte. Paletes lacrados direto de fábrica.',
    h1: 'Argamassa para Obras Comerciais e Residenciais de Grande Escala',
    tagline: 'Otimize o fluxo físico de suprimentos do seu projeto incorporativo com faturamento flexível e frete expresso.',
    problemDesc: 'Descarregar caminhões caçamba de areia no canteiro causa lentidão, bloqueia vias públicas e demanda pessoal técnico para limpeza contínua.',
    solDesc: 'As barricas Hiperliga são impermeáveis, empilhadas de forma organizada e limpa, prontas para içamento mecânico sem desperdício de espaço.'
  },
  {
    slug: 'argamassa-para-bloco-ceramico',
    title: 'Argamassa para Bloco Cerâmico e Tijolo Baiano | Hiperliga',
    metaDesc: 'A argamassa ideal para bloco cerâmico (baianão/boca). Veja testes mecânicos de colagem polimérica de alta adesão com bico aplicador.',
    h1: 'Argamassa para Bloco Cerâmico de Elevada Ancoragem Mecânica',
    tagline: 'Fórmula enriquecida com polímeros ativos que se fixam profundamente nos poros do tijolo de argila cozida.',
    problemDesc: 'A argamassa tradicional de cimento é altamente hidrófila e puxa umidade por capilaridade do solo, manchando tintas de reboco.',
    solDesc: 'Uma vez seca, a cola Hiperliga forma um escudo elastomérico impermeável que impede a escalada de águas subterrâneas por capilaridade.'
  },
  {
    slug: 'argamassa-para-bloco-de-concreto',
    title: 'Argamassa para Bloco de Concreto Estrutural ou de Vedação | Hiperliga',
    metaDesc: 'Evite fissuras na junção de blocos de concreto. Cola bloco Hiperliga de alto rendimento com absorção de deformações térmicas.',
    h1: 'Argamassa para Bloco de Concreto de Rápido Encunhamento',
    tagline: 'Substitua de forma inteligente e ágil as juntas espessas por uma película elástica de alta aderência química de canteiro.',
    problemDesc: 'Os blocos de cimento dilatam e contraem de forma expressiva. Juntas rígidas de cimento não absorvem esses esforços mecânicos, quebrando.',
    solDesc: 'A formulação Hiperliga atua como um preenchimento resiliente que acomoda micromovimentações físicas sem descolar as fiadas de blocos.'
  },
  {
    slug: 'biomassa-para-construcao',
    title: 'Biomassa para Construção e Selagem Ecológica | Hiperliga',
    metaDesc: 'O que é biomassa para construção? Compare custo, resistência química e velocidade com a argamassa polimérica original Hiperliga.',
    h1: 'Biomassa para Construção Sustentável de Alvenaria de Vedação',
    tagline: 'Reduza drasticamente a pegada ecológica de CO2 da sua edificação substituindo cimento tradicional por polímero acrílico.',
    problemDesc: 'A indústria tradicional de cimento emite gigas de carbono na queima de fornos. Além do consumo hídrico gigantesco na dosagem física.',
    solDesc: 'Hiperliga é formulada sob processos ecologicamente limpos de reciclagem química mineral, necessitando de zero água na dosagem do canteiro.'
  },
  {
    slug: 'repara-tudo',
    title: 'Repara Tudo Massa Adesiva para Fissuras e Reparos | Hiperliga',
    metaDesc: 'Massa Repara Tudo Hiperliga para consertar buracos, colar cerâmicas soltas e tampar rachaduras. Prático e resistente. Compre Online.',
    h1: 'Massa Repara Tudo de Cura Extra Rápida para Pequenas Reformas',
    tagline: 'O segredo para correções imediatas de vãos livres, trincas de assentamento e fissuras residenciais de vedação.',
    problemDesc: 'Para arrumar uma trinca leve ou repor um bloco solto, perde-se tempo cotando sacas pesadas de cimento e areia que vão sobrar no quintal.',
    solDesc: 'Limpe o local, remova as rebarbas de poeiras frias e aplique a massa direta. Cura rápida e alta dureza final aceitando pintura acrílica.'
  },
  {
    slug: 'massa-para-construcao-civil',
    title: 'Massa para Construção Civil e Vedação Externa | Hiperliga',
    metaDesc: 'Massa para construção civil de alto teor polimérico. Ideal para juntas horizontais e ancoragem de vãos em grandes obras. Veja laudos.',
    h1: 'Massa para Construção Civil de Resistência Normatizada IPEM',
    tagline: 'Ofereça máxima garantia técnica às construtoras e investidores com laudos robustos de laboratório independente.',
    problemDesc: 'Casas populares ou prédios que apresentam esfarelamento de juntas de assentamento geram queixas pesadas na justiça e retrabalho.',
    solDesc: 'A liga acrílica possui resistência de arrancamento superior à norma técnica regulatória, mantendo as paredes fixas por muito mais tempo.'
  },
  {
    slug: 'produto-para-assentamento-de-blocos',
    title: 'Produto para Assentamento de Blocos de Alto Padrão | Hiperliga',
    metaDesc: 'Substitua a argamassa de colher de pedreiro pelo produto para assentamento de blocos Hiperliga. Rendimento excelente de 1.5kg/m².',
    h1: 'Produto para Assentamento de Blocos de Cura Rápida Comercial',
    tagline: 'A evolução definitiva dos compostos adesivos. O produto predileto dos pedreiros profissionais no Brasil.',
    problemDesc: 'Ao usar massa mole em baldes, o chão fica cheio de crostas de cimento duro que demandam horas de raspagem exaustiva de equipe.',
    solDesc: 'Como o produto é pastoso e no calibre exato na face superior do bloco, o desperdício é nulo e a limpeza do canteiro é imediata.'
  },
  {
    slug: 'construcao-sem-areia',
    title: 'Construção Sem Areia | O Futuro da Construção Civil Hiperliga',
    metaDesc: 'Como construir sua parede com consumo zero de areia. Evite extração predatória de rios e zere o passivo ambiental com Hiperliga.',
    h1: 'Construção Sem Areia: Praticidade e Preservação Ambiental Real',
    tagline: 'Substitua agregados grosseiros extraídos de leitos fluviais por minerais sintetizados sob rigorosos controles ind.',
    problemDesc: 'A areia de extração legal de rio está cada vez mais cara e distante das capitais, acumulando fretes altíssimos em rodovias.',
    solDesc: 'Um palete de 1.000 kg de Hiperliga substitui até 20.000 kg de misturas tradicionais feitas com areia de rio, cortando custos e CO2.'
  },
  {
    slug: 'construcao-sem-cimento',
    title: 'Construção Sem Cimento | Argamassa Polimérica Hiperliga',
    metaDesc: 'Construa alvenarias de vedação de forma rápida sem cimento tradicional. Conheça o poder das resinas de polímeros avançados Hiperliga.',
    h1: 'Construção Sem Cimento: A Próxima Geração de Alvenaria Limpa',
    tagline: 'Esqueça a quebra de sacas, a betoneira ativa barulhenta e a calcinha de calcário de alta emissão atmosférica.',
    problemDesc: 'Cimento reage rápido com a umidade do ar. Estocar sacas de cimento por poucas semanas resulta em perda total por solidificação dura.',
    solDesc: 'A embalagem plástica e as barricas lacradas da Hiperliga resistem ao tempo úmido e evitam qualquer hidratação prematura do composto.'
  },
  {
    slug: 'parede-torta',
    title: 'Como Corrigir e Evitar Parede Torta de Alvenaria | Hiperliga',
    metaDesc: 'Entenda os principais motivos de parede torta na alvenaria e como a tecnologia de cola bloco Hiperliga facilita o prumo perfeito.',
    h1: 'Como Evitar e Resolver Problemas de Parede Torta na Alvenaria',
    tagline: 'Paredes desalinhadas exigem rebocos de alta espessura grosseira, estourando os custos financeiros de acabamentos.',
    problemDesc: 'Pedreiros amadores tentam recuperar desníveis de teto ou pisos variando a junta de cimento vertical, resultando em paredes tortas.',
    solDesc: 'Assentando a primeira fiada perfeitamente balizada com nível a laser e usando a espessura milimétrica e fixa de Hiperliga nas demais.',
    isProblemType: true
  },
  {
    slug: 'trinca-na-alvenaria',
    title: 'O que causa Trinca na Alvenaria e Como Corrigir | Hiperliga',
    metaDesc: 'Aprenda a prevenir trincas na alvenaria de vedação. Juntas elásticas Hiperliga absorvem as tensões e evitam trincamento de reboco.',
    h1: 'Diagnóstico e Solução para Trinca na Alvenaria de Vedação',
    tagline: 'Não permita que vibrações e variações diárias destruam a estabilidade estética da parede revestida.',
    problemDesc: 'Juntas convencionais de cimento são duras e inelásticas. Ao sofrer o menor recalque ou dilatação física térmica, a parede racha.',
    solDesc: 'Por ser formulada com copolímeros acrílicos e cargas minerais elásticas, as juntas da Hiperliga toleram deformações sem trincas.',
    isProblemType: true
  },
  {
    slug: 'rachadura-na-parede',
    title: 'Rachadura na Parede Principal da Casa | Como Consertar Hiperliga',
    metaDesc: 'Veja os perigos de rachadura na parede e como selar trincas no tijolo de alvenaria com o composto elastomérico premium Hiperliga.',
    h1: 'Como Consertar e Diagnosticar de Forma Segura Rachadura na Parede',
    tagline: 'Identifique riscos mecânicos graves e previna infiltrações nocivas com técnicas modernas de costura estrutural.',
    problemDesc: 'Rachaduras na face externa da alvenaria atuam como canais de sucção de água pluvial, apodrecendo rebocos internos e ferragens.',
    solDesc: 'Remover o bloco solto e rejuntar com a superaderência e efeito hidro-repelente permanente de Hiperliga para estanqueidade total.',
    isProblemType: true
  },
  {
    slug: 'argamassa-soltando',
    title: 'Argamassa Soltando e Esfarelando na Alvenaria | Causas Hiperliga',
    metaDesc: 'Sua argamassa está soltando da parede ou chão? Descubra o enfraquecimento de traço e como a cola bloco Hiperliga elimina este risco.',
    h1: 'O que fazer ao Encontrar Argamassa Soltando ou Esfarelando',
    tagline: 'Argamassa fraca compromete a estabilidade de prumo e a segurança física dos usuários contra desabamentos.',
    problemDesc: 'Excesso de água ou cal estragada queima a hidratação do cimento, transformando a argamassa madura em um pó quebradiço e fraco.',
    solDesc: 'A argamassa Hiperliga é de base acrílica curada por evaporação do veículo, gerando uma junção polimérica insolúvel de alta aderência.',
    isProblemType: true
  },
  {
    slug: 'tijolo-soltando',
    title: 'Tijolo Soltando da Alvenaria | Como Resolver de Vez | Hiperliga',
    metaDesc: 'Tijolos soltos na parede são um sinal de falha física grave de aderência. Saiba como repor e travar blocos de forma ágil com Hiperliga.',
    h1: 'Como Fixar de Forma Permanente e Firme um Tijolo Soltando de Parede',
    tagline: 'Garanta a integridade física de vãos livres e evite acidentes graves na fase de levantamento de alvenaria.',
    problemDesc: 'Tijolos cerâmicos secos chupam instantaneamente a água da massa tradicional de cimento antes de curar, anulando a fixação mecânica.',
    solDesc: 'Hiperliga possui aditivos de prevenção técnica que se ancoram profundamente na argila do bloco, colando mesmo em condições climáticas secas.',
    isProblemType: true
  },
  {
    slug: 'parede-desalinhada',
    title: 'Como Prevenir Parede Desalinhada na Obra de Alvenaria | Hiperliga',
    metaDesc: 'Aprenda as principais técnicas para evitar parede desalinhada e reduzir o consumo de argamassa de revestimento/reboco.',
    h1: 'Como Prevenir de Forma Prática Parede Desalinhada na Construção',
    tagline: 'Paredes fora de alinhamento desperdiçam materiais na regularização de rebocos de alta milimetragem.',
    problemDesc: 'Espessuras inconstantes de juntas de cimento de 2 cm dificultam ao pedreiro manter o bloco rigorosamente no alinhamento retilíneo.',
    solDesc: 'Com cordões fixos de bico aplicador, a alvenaria avança de forma reta e uniforme, isenta de distorções visuais de ângulo.',
    isProblemType: true
  },
  {
    slug: 'excesso-de-desperdicio-na-obra',
    title: 'Como Eliminar o Excesso de Desperdício na Obra | Hiperliga',
    metaDesc: 'Até 25% do cimento e areia são jogados no lixo na alvenaria tradicional. Veja como zerar o entulho de forma profissional.',
    h1: 'Como Eliminar o Excesso de Desperdício de Insumos na Obra',
    tagline: 'Gastar dinheiro com locação de caçambas e lavagem de argamassa no chão drena os lucros líquidos da sua construtora.',
    problemDesc: 'Massa tradicional bate e seca rápido. No final do dia de trabalho, quilos de massa rígida que não foram aplicados vão direto ao lixo.',
    solDesc: 'As embalagens vedadas Hiperliga preservam o composto acrílico por semanas após abertas. Desperdício real equalizado a 0%.',
    isProblemType: true
  },
  {
    slug: 'obra-atrasada',
    title: 'Obra Atrasada na Alvenaria? Como Acelerar Cronogramas | Hiperliga',
    metaDesc: 'Sua alvenaria está atrasando o cronograma da construção? Descubra o método que triplica a velocidade física de erguimento de paredes.',
    h1: 'Como Acelerar Alvenarias e Recuperar Prazos de Obra Atrasada',
    tagline: 'Não sofra multas por atraso na entrega de chaves físicas. Aplique tecnologia moderna de colagem seca.',
    problemDesc: 'Gruas e elevadores de cremalheira ficam congestionados subindo insumos pesados úmidos, atrasando as frentes de trabalho.',
    solDesc: 'Suba o equivalente a 3 paletes de argamassa em m² com apenas algumas barricas fáceis de carregar em elevador de obra simples.',
    isProblemType: true
  },
  {
    slug: 'baixa-produtividade-na-construcao',
    title: 'Como Combater a Baixa Produtividade na Construção | Hiperliga',
    metaDesc: 'A produtividade da alvenaria tradicional é extremamente baixa. Veja como multiplicar por 3 o rendimento da sua equipe técnica.',
    h1: 'Soluções Reais para Sanar a Baixa Produtividade na Construção',
    tagline: 'Menos burocracia mecânica de traços e mais foco físico de levantamento reto de paredes por homem-hora.',
    problemDesc: 'Ajudantes gastam horas de trabalho preparando o material úmido em vez de suprir os pedreiros nas frentes de assentamento.',
    solDesc: 'Retire as bisnagas Hiperliga diretamente das caixas limpas e inicie a alvenaria horizontal em minutos após a varredura primária.',
    isProblemType: true
  },
  {
    slug: 'alto-custo-de-mao-de-obra',
    title: 'Alto Custo de Mão de Obra na Construção? Como Resolver | Hiperliga',
    metaDesc: 'Reduza em até 50% o custo de diárias de ajudantes de pedreiro na alvenaria bruta. Saiba mais sobre o rendimento de m².',
    h1: 'Como Mitigar o Alto Custo de Mão de Obra de Alvenaria de Vedação',
    tagline: 'Insumos dinâmicos ajudam a equipe técnica a produzir mais metros lineares com menos esforço físico diário.',
    problemDesc: 'Pedreiros competentes exigem diárias altas. Manter equipes numerosas batendo massas manuais onera demais as construtoras.',
    solDesc: 'Como a colagem polimérica flui de forma ultra rápida, você ergue a alvenaria inteira com menos profissionais ativos de apoio.',
    isProblemType: true
  },
  {
    slug: 'consumo-excessivo-cimento',
    title: 'Consumo Excessivo de Cimento na Obra? Veja Alternativas | Hiperliga',
    metaDesc: 'Zere o consumo de sacas de cimento no assentamento de blocos. Conheça a argamassa termoplástica Hiperliga e economize.',
    h1: 'Como Contornar o Consumo Excessivo de Cimento na Alvenaria',
    tagline: 'Preços de sacas subindo constantemente de forma inflacionária prejudicam o planejamento de caixas financeiros.',
    problemDesc: 'Cimento que rasga no caminhão, sobras que endurecem em masseiras ao sol e quebras comuns de traço por excesso volumétrico.',
    solDesc: 'Formulações prontas baseadas em polímeros flexíveis que dispensam clinker ou cal, com rendimentos precisos e limpos por m².',
    isProblemType: true
  },
  {
    slug: 'falta-de-qualidade-no-assentamento',
    title: 'Falta de Qualidade no Assentamento de Blocos | Como Corrigir',
    metaDesc: 'A junta de assentamento tradicional varia de espessura e enfraquece a parede. Saiba como manter o padrão com Hiperliga.',
    h1: 'Como Evitar a Falta de Qualidade no Assentamento de Blocos',
    tagline: 'Padrão estético de engenharia e conformidade mecânica de aderência em toda a extensão construtiva.',
    problemDesc: 'Sem controle rígido de pesagem de areia e água na obra, cada masseira possui uma densidade, fragilizando juntas horizontais.',
    solDesc: 'Hiperliga sai da usina perfeitamente homogênea e dosada por sensores, garantindo a mesma força e comportamento em cada barrica.',
    isProblemType: true
  },
  {
    slug: 'problemas-de-infiltracao',
    title: 'Problemas de Infiltração em Parede de Alvenaria? Como Sanar | Hiperliga',
    metaDesc: 'A alvenaria de cimento suga água do solo. A argamassa polimérica impermeável Hiperliga corta infiltrações e protege acabamentos.',
    h1: 'Como Eliminar em Definitivo Problemas de Infiltração em Paredes',
    tagline: 'Previna o apodrecimento precoce de gesso, tintas residenciais e manchas de umidade nos rodapés.',
    problemDesc: 'A argamassa tradicional age como uma esponja, absorvendo umidade freática do solo e conduzindo-a para a parede interna.',
    solDesc: 'Os copolímeros acrílicos Hiperliga vedam as microcavidades dos blocos, impedindo a passagem física indesejada da água.',
    isProblemType: true
  },
  {
    slug: 'falhas-na-alvenaria',
    title: 'Como Prevenir Falhas na Alvenaria de Vedação | Hiperliga',
    metaDesc: 'Conheça as principais patologias e falhas na alvenaria, desde trincas térmicas a cisalhamento de blocos. Compre com segurança.',
    h1: 'Estudo de Diretrizes para Evitar Falhas na Alvenaria Bruta',
    tagline: 'Ensaios técnicos de controle de qualidade previnem patologias graves de recalques nas edificações.',
    problemDesc: 'Locais onde a parede encontra estruturas de concreto costumam trincar por falta de fixações elásticas de alta ancoragem.',
    solDesc: 'Sua excepcional flexibilidade de deformação física absorve o cisalhamento das estruturas de concreto armado de forma segura.',
    isProblemType: true
  },
  {
    slug: 'construcao-lenta',
    title: 'Construção Lenta? Como Agilizar em até 3x Sua Obra | Hiperliga',
    metaDesc: 'Cansado de construção lenta que esvazia seu orçamento? Triplique o progresso físico da alvenaria bruta usando Hiperliga.',
    h1: 'Dicas de Engenharia Civil para Combater a Construção Lenta de Casas',
    tagline: 'Acelere as fases brutas de assentamento e avance ágil para os acabamentos mais valorizados do empreendimento.',
    problemDesc: 'Aguardar secagens pesadas de 14 dias antes do reboco e passar horas montando instalações úmidas emperra o cronograma inteiro.',
    solDesc: 'Hiperliga atinge a fixação de aderência em poucas horas, permitindo que a alvenaria seja rebocada e cunhada sem esperas gigantescas.',
    isProblemType: true
  }
];

// Handle client-side routing by returning index.html (or pre-rendered index.html) for any unhandled routes
app.get('*', (req, res, next) => {
  const normalizedPath = req.path.toLowerCase();
  
  if (normalizedPath === '/loja' || normalizedPath.startsWith('/loja/')) {
    return next(); // Let it fall through, allowing parent web servers to intercept WordPress
  }

  const indexPath = path.join(distPath, 'index.html');
  
  // Verify if built index.html exists
  if (!fs.existsSync(indexPath)) {
    return res.status(404).send('Application build in progress. Please refresh in a few seconds.');
  }

  // Pre-render logic for specific search keywords
  let meta = SEO_METADATA[normalizedPath];
  if (!meta) {
    const slug = normalizedPath.replace(/^\//, '');
    const def = NEW_THEME_DEFINITIONS.find(t => t.slug === slug);
    if (def) {
      meta = {
        title: def.title,
        description: def.metaDesc,
        canonical: `https://hiperliga.com.br/${def.slug}`,
        h1: def.h1,
        tagline: def.tagline,
        problem: def.problemDesc,
        solution: def.solDesc,
        schemaType: def.isProblemType ? 'Article' : 'Product'
      };
    }
  }

  if (meta) {
    try {
      let html = fs.readFileSync(indexPath, 'utf-8');
      
      // 1. Replace title
      html = html.replace(/<title>.*?<\/title>/gi, `<title>${meta.title}</title>`);
      
      // 2. Build structured SEO heads and schema markup
      const schemaMarkup = {
        '@context': 'https://schema.org',
        '@type': meta.schemaType === 'FAQPage' ? 'FAQPage' : (meta.schemaType === 'Product' ? 'Product' : 'NewsArticle'),
        'name': meta.h1,
        'description': meta.description,
        'url': meta.canonical,
        'headline': meta.h1
      };

      const injectHeads = `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${meta.canonical}" />
    <script type="application/ld+json">${JSON.stringify(schemaMarkup)}</script>
      `;

      // Insert extra tags into head
      html = html.replace('</head>', `${injectHeads}</head>`);

      // 3. Insert raw crawlable HTML blocks to guarantee robot indexability without relying on JS execution
      const semanticPreRenderBody = `
    <div id="seo-crawlable-prerender-layer" style="position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0.01;">
      <nav><a href="/">Home</a> &gt; <a href="${normalizedPath}">${meta.h1}</a></nav>
      <h1>${meta.h1}</h1>
      <p><strong>Descrição:</strong> ${meta.description}</p>
      <h2>Problema Encontrado na Alvenaria Tradicional</h2>
      <p>${meta.problem}</p>
      <h2>A Solução Eficiente da Hiperliga</h2>
      <p>${meta.solution}</p>
      <p>Compre produtos Hiperliga e economize até 40% na alvenaria: <a href="https://loja.hiperliga.com.br/">loja.hiperliga.com.br</a></p>
    </div>
      `;
      
      html = html.replace('<body>', `<body>${semanticPreRenderBody}`);

      return res.send(html);
    } catch (err) {
      console.error('Failed to pre-render dynamic SEO tags:', err);
      // Fallback to sending raw index.html on failure
    }
  }

  res.sendFile(indexPath);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Node.js Production Server running on port ${PORT}`);
});

