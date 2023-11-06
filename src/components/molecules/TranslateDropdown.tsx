'use client';

import { useTranslate } from '@/contexts/AppTranslateContext';
import { useToggle } from '@/hooks/useToggle';
import { ReactNode } from 'react';

type Lang = 'en-US' | 'pt-BR';

interface DropdownProps {
  children: ReactNode;
}

interface ListItemProps {
  title: string;
  onClick: () => void;
}

const ListItem = ({ onClick, title }: ListItemProps) => {
  return (
    <li
      className="font-inter cursor-pointer dark:hover:bg-zinc-800 hover:bg-zinc-300 w-full px-3 py-2"
      onClick={onClick}
    >
      {title}
    </li>
  );
};

export function TranslateDropdown({ children }: DropdownProps) {
  const { onToggle, onClose, isOpen } = useToggle();
  const { changeAppLanguage } = useTranslate();

  const handleChangeAppLanguage = (lang: Lang) => {
    changeAppLanguage(lang);
    onClose();
  };

  return (
    <div className="relative">
      <button
        className="bg-transparent py-2 dark:text-zinc-50 text-zinc-900"
        onClick={onToggle}
      >
        {children}
      </button>
      <ul
        className={`absolute right-0 mt-2 dark:text-zinc-200 dark:bg-zinc-900 bg-zinc-200 rounded-md ${
          isOpen ? 'block' : 'hidden'
        } overflow-hidden`}
      >
        <ListItem
          onClick={() => handleChangeAppLanguage('pt-BR')}
          title="Português"
        />

        <ListItem
          onClick={() => handleChangeAppLanguage('en-US')}
          title="Inglês"
        />
      </ul>
    </div>
  );
}
