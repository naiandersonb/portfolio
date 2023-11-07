'use client';

import { Loading } from '@/components/molecules';
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
  const [language, setLanguage] = useState<Lang>('en-US');

  const changeAppLanguage = useCallback((lang: Lang) => {
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

  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const lang = localStorage.getItem('@app:language') ?? 'en-US';
      setLanguage(lang as Lang);

      setTimeout(() => {
        setLoad(false);
      }, 1000);
    }
  }, []);

  return (
    <AppTranslateContext.Provider value={{ changeAppLanguage, translate }}>
      {load ? <Loading /> : children}
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
