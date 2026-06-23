import React from 'react';
import { MessageSquare, Phone, Mail, MapPin, Building2, ExternalLink } from 'lucide-react';
import { EXPERT_CONTACT_WHATSAPP } from '../data';

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer 
      id="institutional-footer" 
      className="bg-brand-dark text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/5 pb-12 text-left">
          
          {/* Logo & Slogan Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="https://loja.hiperliga.com.br/wp-content/uploads/2026/06/ChatGPT-Image-16-de-jun.-de-2026-14_05_11.png"
                alt="Hiperliga Logo"
                className="h-32 sm:h-[160px] w-auto object-contain filter drop-shadow-[0_0_4px_rgba(255,255,255,0.98)] drop-shadow-[0_0_10px_rgba(255,255,255,0.92)]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              A verdadeira revolução na construção civil brasileira. Argamassa polimérica de alto rendimento que entrega rapidez de assentamento, economia de logística e desperdício zero na sua obra.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-gray-400 text-xs font-mono uppercase tracking-wider">Atendimento Nacional</span>
            </div>
          </div>

          {/* Quick links to internal sections */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-primary">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2.5 text-slate-400 text-sm">
              <a 
                href="#diferenciais" 
                onClick={(e) => handleSmoothScroll(e, '#diferenciais')}
                className="hover:text-white transition-colors"
              >
                Diferenciais Técnicos
              </a>
              <a 
                href="#comparativo" 
                onClick={(e) => handleSmoothScroll(e, '#comparativo')}
                className="hover:text-white transition-colors"
              >
                Tabela Comparativa
              </a>
              <a 
                href="#calculadora" 
                onClick={(e) => handleSmoothScroll(e, '#calculadora')}
                className="hover:text-white transition-colors"
              >
                Simulador de Alvenaria
              </a>
              <a 
                href="#produtos" 
                onClick={(e) => handleSmoothScroll(e, '#produtos')}
                className="hover:text-white transition-colors"
              >
                Nossos Produtos
              </a>
              <a 
                href="#como-aplicar" 
                onClick={(e) => handleSmoothScroll(e, '#como-aplicar')}
                className="hover:text-white transition-colors"
              >
                Passo a Passo de Aplicação
              </a>
            </nav>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-primary">
              Contatos Rápidos
            </h4>
            <div className="flex flex-col gap-3 text-slate-400 text-sm font-sans">
              <a 
                href={EXPERT_CONTACT_WHATSAPP} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-mono">WhatsApp Suporte</span>
                  <strong>+55 41 8888-3365</strong>
                </div>
              </a>
              <a 
                href="mailto:contato@hiperliga.com.br" 
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-mono">E-mail Comercial</span>
                  <strong>contato@hiperliga.com.br</strong>
                </div>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-mono">Fábrica Matriz</span>
                  <strong>R. Antônio Camargo, 122 - Areias, Alm. Tamandaré - PR, 83514-140</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional validation Column - SEO Directory */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-primary">
              Soluções Construtivas
            </h4>
            <nav className="flex flex-col gap-2 text-slate-400 text-xs sm:text-sm">
              <a href="/argamassa-polimerica" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <span>Argamassa Polimérica Cola Bloco</span>
              </a>
              <a href="/massa-pronta" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <span>Massa Pronta e Sem Cimento</span>
              </a>
              <a href="/cola-bloco" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <span>Cola Bloco e Tijolo Premium</span>
              </a>
              <a href="/como-assentar-bloco-mais-rapido" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <span>Técnicas: Como Assentar Rápido</span>
              </a>
              <a href="/como-reduzir-custo-da-obra" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <span>Como Reduzir Custos da Obra</span>
              </a>
              <a href="/argamassa-polimerica-funciona" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <span>Laudos: Cola Bloco Funciona?</span>
              </a>
              <a href="/comprar-argamassa-polimerica" className="hover:text-primary transition-colors flex items-center gap-1.5 font-semibold text-white">
                <span>Preços e Compras online →</span>
              </a>
            </nav>
          </div>

        </div>

        {/* Directory/SEO Guides section */}
        <div className="pt-10 mt-10 border-t border-white/5 text-left" id="footer-seo-directory-section">
          <h4 className="font-display font-extrabold text-[11px] uppercase tracking-widest text-primary mb-4">
            Guias Técnicos de Eficiência e Economia na Alvenaria
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-slate-400 text-xs text-left" id="footer-seo-directory-grid">
            <a href="/como-assentar-bloco-mais-rapido" className="hover:text-primary transition-colors">Como Assentar Bloco Mais Rápido</a>
            <a href="/como-reduzir-custo-da-obra" className="hover:text-primary transition-colors">Como Reduzir o Custo da Obra</a>
            <a href="/como-economizar-cimento" className="hover:text-primary transition-colors">Como Economizar Cimento</a>
            <a href="/como-economizar-areia" className="hover:text-primary transition-colors">Como Economizar Areia</a>
            <a href="/como-aumentar-produtividade-na-construcao" className="hover:text-primary transition-colors">Produtividade na Construção</a>
            <a href="/como-fazer-assentamento-de-blocos" className="hover:text-primary transition-colors">Como Fazer Assentamento</a>
            <a href="/como-fazer-alvenaria-mais-rapido" className="hover:text-primary transition-colors">Alvenaria Mais Rápida</a>
            <a href="/como-evitar-desperdicio-na-obra" className="hover:text-primary transition-colors">Evitar Desperdício na Obra</a>
            <a href="/como-reduzir-entulho-na-construcao" className="hover:text-primary transition-colors">Como Reduzir Entulho</a>
            <a href="/como-construir-com-mais-eficiencia" className="hover:text-primary transition-colors">Construir com Mais Eficiência</a>
            <a href="/como-melhorar-a-qualidade-da-alvenaria" className="hover:text-primary transition-colors">Qualidade da Alvenaria</a>
            <a href="/como-acelerar-o-cronograma-da-obra" className="hover:text-primary transition-colors">Acelerar Cronograma da Obra</a>
          </div>
        </div>

        {/* FAQ SEO Directory section */}
        <div className="pt-8 mt-8 border-t border-white/5 text-left" id="footer-seo-faq-section">
          <h4 className="font-display font-extrabold text-[11px] uppercase tracking-widest text-primary mb-4">
            Dúvidas Técnicas Respondidas (FAQ de Obra)
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-slate-400 text-xs text-left" id="footer-seo-faq-grid">
            <a href="/o-que-e-argamassa-polimerica" className="hover:text-primary transition-colors">O que é argamassa polimérica?</a>
            <a href="/argamassa-polimerica-funciona" className="hover:text-primary transition-colors">Argamassa polimérica funciona?</a>
            <a href="/argamassa-polimerica-e-resistente" className="hover:text-primary transition-colors">Argamassa é resistente?</a>
            <a href="/argamassa-polimerica-substitui-cimento" className="hover:text-primary transition-colors">Substitui o cimento?</a>
            <a href="/massa-pronta-substitui-areia" className="hover:text-primary transition-colors">Substitui a areia fina?</a>
            <a href="/como-usar-argamassa-polimerica" className="hover:text-primary transition-colors font-semibold text-slate-300">Como usar argamassa</a>
            <a href="/quantos-blocos-rende-um-saco" className="hover:text-primary transition-colors">Rendimento por saco/barrica</a>
            <a href="/pode-usar-em-area-externa" className="hover:text-primary transition-colors">Pode usar em área externa?</a>
            <a href="/pode-usar-em-muro" className="hover:text-primary transition-colors">Pode usar em muro?</a>
            <a href="/pode-usar-em-sobrado" className="hover:text-primary transition-colors">Pode usar em sobrado?</a>
            <a href="/qual-a-resistencia-da-argamassa-polimerica" className="hover:text-primary transition-colors">Qual a resistência real?</a>
            <a href="/qual-a-diferenca-entre-biomassa-e-argamassa-polimerica" className="hover:text-primary transition-colors">Biomassa vs Polimérica</a>
            <a href="/cola-bloco-e-melhor-que-argamassa-tradicional" className="hover:text-primary transition-colors">Cola Bloco é melhor?</a>
            <a href="/qual-a-economia-gerada-na-obra" className="hover:text-primary transition-colors font-semibold text-slate-300">Economia gerada na obra</a>
            <a href="/quanto-tempo-demora-a-cura" className="hover:text-primary transition-colors">Quanto tempo demora a cura?</a>
            <a href="/pode-usar-em-bloco-estrutural" className="hover:text-primary transition-colors font-semibold text-amber-400">Pode usar em bloco estrutural?</a>
          </div>
        </div>

        {/* Commercial & Factory Bottom-of-Funnel Directory section */}
        <div className="pt-8 mt-8 border-t border-white/5 text-left" id="footer-seo-commercial-section">
          <h4 className="font-display font-extrabold text-[11px] uppercase tracking-widest text-primary mb-4">
            Departamento Comercial e Vendas (Atacado e Varejo)
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-slate-400 text-xs text-left" id="footer-seo-commercial-grid">
            <a href="/comprar-argamassa-polimerica" className="hover:text-primary transition-colors font-semibold text-slate-300">Comprar Argamassa</a>
            <a href="/preco-argamassa-polimerica" className="hover:text-primary transition-colors">Preço Argamassa Polimérica</a>
            <a href="/distribuidor-de-argamassa-polimerica" className="hover:text-primary transition-colors">Distribuidor Autorizado</a>
            <a href="/revenda-argamassa-polimerica" className="hover:text-primary transition-colors">Seja uma Revenda</a>
            <a href="/argamassa-polimerica-25kg" className="hover:text-primary transition-colors">Embalagem Caixa 25kg</a>
            <a href="/argamassa-polimerica-40kg" className="hover:text-primary transition-colors">Barrica Industrial 40kg</a>
            <a href="/onde-comprar-massa-pronta" className="hover:text-primary transition-colors">Onde Comprar Massa Pronta</a>
            <a href="/cola-bloco-preco" className="hover:text-primary transition-colors">Preço de Cola Bloco</a>
            <a href="/argamassa-para-bloco-de-concreto-preco" className="hover:text-primary transition-colors">Bloco de Concreto Preço</a>
            <a href="/argamassa-para-bloco-ceramico-preco" className="hover:text-primary transition-colors">Bloco Cerâmico Preço</a>
            <a href="/orcamento-argamassa-polimerica" className="hover:text-primary transition-colors font-semibold text-emerald-400">Solicitar Orçamento Online</a>
            <a href="/fabrica-de-argamassa-polimerica" className="hover:text-primary transition-colors">Fábrica de Argamassa</a>
            <a href="/fabricante-de-massa-pronta" className="hover:text-primary transition-colors">Fabricante de Massa Pronta</a>
            <a href="/representante-comercial-argamassa" className="hover:text-primary transition-colors font-semibold text-slate-300">Seja um Representante</a>
          </div>
        </div>

        {/* Lower row: copyrights and institutional names */}
        <div className="pt-8 mt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {new Date().getFullYear()} Hiperliga Alvenaria Eficiente. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>CNPJ: 07.891.608/0001-00</span>
            <span>|</span>
            <span>Desenvolvido com Tecnologia Sustentável</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
