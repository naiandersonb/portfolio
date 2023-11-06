'use client';

import { enUS } from '@/dictionary/en-US';
import { Dictionary } from '@/dictionary/interface';
import { ptBR } from '@/dictionary/pt-BR';
import {
  ReactNode,
  createContext,
  useCallback,
  useState,
  useContext
} from 'react';

type Lang = 'en-US' | 'pt-BR';

interface AppTranslateContextProps {
  changeAppLanguage: (lang: Lang) => void;
  translate: (value: string, key: string) => string;
}

interface AppTranslateProviderProps {
  children: ReactNode;
}

export const AppTranslateContext = createContext(
  {} as AppTranslateContextProps
);

export function AppTranslateProvider({ children }: AppTranslateProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState({} as Dictionary);

  const changeAppLanguage = useCallback((lang: Lang) => {
    if (lang === 'en-US') setCurrentLanguage(enUS);
    if (lang === 'pt-BR') setCurrentLanguage(ptBR);

    localStorage.setItem('@app:language', lang);
  }, []);

  const translate = useCallback(
    (value: string, key: string) => {
      if (!currentLanguage) return value;

      const lang = localStorage.getItem('@app:language') ?? 'en-US';

      const dictionary = lang === 'en-US' ? enUS : ptBR;
      const langData = dictionary[key];

      if (!langData) return value;

      return langData[value] ?? value;
    },
    [currentLanguage]
  );

  return (
    <AppTranslateContext.Provider value={{ changeAppLanguage, translate }}>
      {children}
    </AppTranslateContext.Provider>
  );
}

export const useTranslate = (page?: string) => {
  const translateContext = useContext(AppTranslateContext);

  const handleTranslate = useCallback(
    (value: string) => {
      if (page) return translateContext.translate(value, page);
      return '';
    },
    [page, translateContext]
  );

  return { ...translateContext, t: handleTranslate };
};
