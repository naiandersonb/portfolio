import { LinkItem } from '../atoms/LinkItem';

export function Header() {
  return (
    <header>
      <LinkItem href="/">Logo</LinkItem>
      <nav>
        <LinkItem href="projects">Projetos</LinkItem>
        <LinkItem href="content">Conteúdos</LinkItem>
        <LinkItem href="blog">Blog</LinkItem>
      </nav>
    </header>
  );
}
