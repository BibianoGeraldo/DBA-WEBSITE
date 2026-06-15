'use client';
import { createContext, useContext, useState } from 'react';

export type Lang = 'PT' | 'EN';

interface LangCtx { lang: Lang; setLang: (l: Lang) => void; }

const LanguageContext = createContext<LangCtx>({ lang: 'PT', setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('PT');
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LangCtx {
  return useContext(LanguageContext);
}
