'use client';

import { List, SunDim, Translate } from '@phosphor-icons/react';
import { LinkItem } from '../atoms';
import { changeAppTheme } from '@/utils';
import { TranslateDropdown } from '../molecules';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 flex items-center justify-center">
      <div className="flex flex-row items-center max-w-[1200px] w-full justify-between px-8">
        <LinkItem href="/">Logo</LinkItem>

        <nav className="md:flex hidden flex-row gap-8">
          <LinkItem href="projects">Projetos</LinkItem>
          <LinkItem href="content">Conteúdos</LinkItem>
          <LinkItem href="blog">Blog</LinkItem>
        </nav>

        <div className="flex flex-row gap-4">
          <TranslateDropdown>
            <Translate size={28} />
          </TranslateDropdown>
          <button
            className="dark:text-zinc-50 text-zinc-900"
            onClick={changeAppTheme}
          >
            <SunDim size={32} />
          </button>

          <button className="dark:text-zinc-50 md:hidden block text-zinc-900">
            <List size={32} />
          </button>
        </div>
      </div>
    </header>
  );
}
