'use client';

import { enUS } from '@/dictionary/en-US';
import { Dictionary } from '@/dictionary/interface';
import { ptBR } from '@/dictionary/pt-BR';
import {
  ReactNode,
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect
} from 'react';

type Lang = 'en-US' | 'pt-BR';

interface AppTranslateContextProps {
  changeAppLanguage: (lang: string) => void;
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
  const [language, setLanguage] = useState('en-US');

  const changeAppLanguage = useCallback((lang: string) => {
    if (lang === 'en-US') setCurrentLanguage(enUS);
    if (lang === 'pt-BR') setCurrentLanguage(ptBR);

    setLanguage(lang);
    localStorage.setItem('@app:language', lang);
  }, []);

  const translate = useCallback(
    (value: string, key: string) => {
      if (!currentLanguage) return value;

      try {
        const dictionary = language === 'en-US' ? enUS : ptBR;
        const langData = dictionary[key];

        if (!langData) return value;

        return langData[value] ?? value;
      } catch (error) {
        throw new Error('Erro ao traduzir a página');
      }
    },
    [currentLanguage, language]
  );

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const lang = localStorage.getItem('@app:language') ?? 'en-US';
      setLanguage(lang as Lang);
    }
  }, []);

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
