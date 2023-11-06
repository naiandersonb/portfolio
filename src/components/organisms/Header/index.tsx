'use client';

import { SunDim, Translate } from '@phosphor-icons/react';
import { Twirl as Hamburger } from 'hamburger-react';
import { LinkItem } from '../../atoms';
import { changeAppTheme } from '@/utils';
import { TranslateDropdown } from '../../molecules';
import { Logo } from '../../atoms';
import { useTranslate } from '@/contexts/AppTranslateContext';

export function Header() {
  const { t } = useTranslate('header');

  return (
    <header className="fixed top-0 left-0 right-0 h-20 flex items-center justify-center bg-[rgba(0, 0, 0, 0.24)] backdrop-blur-md">
      <div className="flex flex-row items-center max-w-[1200px] w-full justify-between px-8">
        <Logo />

        <nav className="md:flex hidden flex-row gap-2">
          <LinkItem href="projects">{t('projects')}</LinkItem>
          <p className="dark:text-zinc-400 text-zinc-500">/</p>
          <LinkItem href="content">{t('content')}</LinkItem>
          <p className="dark:text-zinc-400 text-zinc-500">/</p>
          <LinkItem href="blog">Blog</LinkItem>
        </nav>

        <div className="flex flex-row gap-4">
          <button
            className="bg-transparent py-2 dark:text-zinc-50 text-zinc-900"
            onClick={changeAppTheme}
          >
            <SunDim size={28} />
          </button>

          <TranslateDropdown>
            <Translate size={24} />
          </TranslateDropdown>

          <button>
            <Hamburger size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
