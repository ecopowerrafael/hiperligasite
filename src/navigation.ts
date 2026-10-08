export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const MAIN_NAVIGATION: NavigationItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Produtos', href: 'https://loja.hiperliga.com.br/', external: true },
  { label: 'Soluções', href: '/solucoes/' },
  { label: 'Empresa', href: '/empresa/' },
  { label: 'Conteúdos', href: '/conteudos/' },
  { label: 'Contato', href: '/contato/' },
];

export function normalizePath(path: string): string {
  const normalized = path.toLowerCase().replace(/\/+$/, '');
  return normalized || '/';
}
