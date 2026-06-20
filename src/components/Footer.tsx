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

          {/* Institutional validation Column */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-primary">
              Compromisso Técnico
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Investimos de forma robusta em pesquisa e qualificação química do nosso polímero de ancoragem de forma a fornecer aos nossos clientes e parceiros segurança técnica total, reduzindo o desperdício de insumos ao mesmo tempo que asseguramos lucros saudáveis às construtoras.
            </p>
            
            <a
              href="https://loja.hiperliga.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary font-mono font-bold hover:underline"
            >
              <span>Acessar Loja Online</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Lower row: copyrights and institutional names */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
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
