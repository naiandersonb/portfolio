import { LinkItem, Logo } from '../atoms';

export function Header() {
  return (
    <header className="fixed w-full top-12">
      <div className="max-w-[1200px] mx-auto flex flex-row items-center justify-between bg-[rgba(10, 10, 12, 0.50)] backdrop-blur-[128px] pr-4">
        <Logo />

        <nav className="flex flex-row gap-6">
          <LinkItem href="/projects">Projetos</LinkItem>
          <LinkItem href="/content">Conteúdos</LinkItem>
          <LinkItem href="/contact">Contatos</LinkItem>
          <LinkItem href="/blog">Blog</LinkItem>
        </nav>
      </div>
    </header>
  );
}
