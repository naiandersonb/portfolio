'use client';

import { AddressBook, FileText, SunDim } from '@phosphor-icons/react';

import { changeAppTheme } from '@/utils';

import { Logo } from '../../atoms';
import { IconButton } from '@/components/atoms/IconButton';

export function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 
        h-20 flex items-center 
        justify-center 
        bg-[rgba(0, 0, 0, 0.24)] 
        backdrop-blur-md z-10 md:px-8 px-4
      "
    >
      <div
        className="
          flex 
          flex-row items-center 
          max-w-[1200px] 
          w-full 
          justify-between
        "
      >
        <Logo />

        <div className="flex flex-row items-center gap-2">
          <IconButton icon={FileText} title="Currículo" />
          <IconButton icon={AddressBook} title="Contatos" />
          <IconButton icon={SunDim} onClick={changeAppTheme} />

          {/* <TranslateDropdown>
            <Translate size={24} />
          </TranslateDropdown>

          <MobileMenu>
            <LinkItem href="projects">{t('projects')}</LinkItem>
            <Divider />
            <LinkItem href="content">{t('content')}</LinkItem>
            <Divider />
            <LinkItem href="blog">Blog</LinkItem>
          </MobileMenu>  */}
        </div>
      </div>
    </header>
  );
}
