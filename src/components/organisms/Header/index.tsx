'use client';

import { Button, LinkItem, Logo } from '../../atoms';
import { changeAppTheme } from '@/utils';
import { TranslateDropdown } from '../../molecules';

import { MobileMenu } from '@/components/molecules';
import { Divider } from '@/components/atoms';
import { Phone, SunDim } from '@phosphor-icons/react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 flex items-center justify-center bg-[rgba(0, 0, 0, 0.24)] backdrop-blur-md z-10">
      <div className="flex flex-row items-center max-w-[1200px] w-full justify-between px-8">
        <div className="flex flex-row items-center gap-6">
          <Logo />

          <nav className="md:flex hidden flex-row gap-6">
            <LinkItem href="/">Home</LinkItem>
            <LinkItem href="/projects">Projetos</LinkItem>
            <LinkItem href="/content">Conteúdos</LinkItem>
            <LinkItem href="/blog">Blog</LinkItem>
          </nav>
        </div>

        <div className="flex flex-row items-center md:gap-4 gap-2">
          <button
            className="bg-transparent py-2 dark:text-zinc-50 text-zinc-900"
            onClick={changeAppTheme}
          >
            <SunDim size={28} />
          </button>

          <TranslateDropdown />
          <div className="md:flex hidden">
            <Button icon={<Phone size={24} />}>Contatos</Button>
          </div>

          <MobileMenu>
            <LinkItem href="/">Home</LinkItem>
            <Divider />
            <LinkItem href="/projects">Projetos</LinkItem>
            <Divider />
            <LinkItem href="/content">Conteúdos</LinkItem>
            <Divider />
            <LinkItem href="/blog">Blog</LinkItem>
            <Divider />
            <Button icon={<Phone size={24} />}>Contatos</Button>
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
