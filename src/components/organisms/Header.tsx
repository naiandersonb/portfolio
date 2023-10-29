'use client';

import { SunDim } from '@phosphor-icons/react';
import { LinkItem } from '../atoms/LinkItem';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 flex items-center justify-center">
      <div className="flex flex-row items-center max-w-[1200px] w-full justify-between px-8">
        <LinkItem href="/">Logo</LinkItem>
        <nav className="flex flex-row gap-4">
          <LinkItem href="projects">Projetos</LinkItem>
          <LinkItem href="content">Conteúdos</LinkItem>
          <LinkItem href="blog">Blog</LinkItem>

          <button className="dark:text-zinc-50 text-zinc-900">
            <SunDim size={32} />
          </button>
        </nav>
      </div>
    </header>
  );
}
