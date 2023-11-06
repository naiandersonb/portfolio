'use client';

import { List, SunDim, Translate } from '@phosphor-icons/react';
import { Button, LinkItem } from '../../atoms';
import { changeAppTheme } from '@/utils';
import { TranslateDropdown } from '../../molecules';
import { Logo } from '../../atoms';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 flex items-center justify-center bg-[rgba(0, 0, 0, 0.24)] backdrop-blur-md">
      <div className="flex flex-row items-center max-w-[1200px] w-full justify-between px-8">
        <Logo />

        <nav className="md:flex hidden flex-row gap-2">
          <LinkItem href="projects">Projetos</LinkItem>
          <p className="dark:text-zinc-400 text-zinc-500">/</p>
          <LinkItem href="content">Conteúdos</LinkItem>
          <p className="dark:text-zinc-400 text-zinc-500">/</p>
          <LinkItem href="blog">Blog</LinkItem>
        </nav>

        <div className="flex flex-row gap-4">
          <TranslateDropdown>
            <Translate size={24} />
          </TranslateDropdown>

          <Button onClick={changeAppTheme}>
            <SunDim size={24} />
          </Button>

          <Button className="dark:text-zinc-50 md:hidden block text-zinc-900">
            <List size={32} />
          </Button>
        </div>
      </div>
    </header>
  );
}
