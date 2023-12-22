'use client';

import { useToggle } from '@/hooks/useToggle';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../../atoms';
import { languages } from './languages';

interface ListItemProps {
  title: string;
  flag: string;
  onClick: () => void;
}

const ListItem = ({ onClick, title, flag }: ListItemProps) => {
  return (
    <li
      className="
        font-manrope
        text-sm
        flex flex-row gap-2 
        cursor-pointer
        rounded-md
        dark:hover:bg-zinc-800 
        hover:bg-zinc-300 
        w-full p-2
      "
      onClick={onClick}
    >
      <div className="w-[20px] h-[20px]">
        <Image
          width={17}
          height={17}
          alt={flag}
          src={`/images/flags/${flag}`}
        />
      </div>
      {title}
    </li>
  );
};

interface Language {
  flag: string;
  value: string;
  label: string;
}

export function TranslateDropdown() {
  const { onToggle, onClose, isOpen } = useToggle();
  const [currentLang, setCurrentLang] = useState(languages[0]);

  const handleChangeLanguage = (lang: Language) => {
    setCurrentLang(lang);
    onClose();
  };

  return (
    <div className="relative">
      <Button icon={`/images/flags/${currentLang.flag}`} onClick={onToggle}>
        <p>{currentLang.value}</p>
      </Button>
      <ul
        className={`
          absolute 
          right-0 mt-2 
          dark:text-zinc-200 dark:bg-zinc-900 
          bg-zinc-200 
          rounded-md ${isOpen ? 'block' : 'hidden'} 
          overflow-hidden
          p-1
          w-[140px]
        `}
      >
        {languages.map((lang) => (
          <ListItem
            key={lang.value}
            onClick={() => handleChangeLanguage(lang)}
            title={lang.label}
            flag={lang.flag}
          />
        ))}
      </ul>
    </div>
  );
}
