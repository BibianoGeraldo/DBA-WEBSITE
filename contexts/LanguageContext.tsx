'use client';
import { usePathname, useRouter } from 'next/navigation';

export type Lang = 'PT' | 'EN';

export function useLanguage() {
  const pathname = usePathname();
  const router = useRouter();

  const lang: Lang = pathname.startsWith('/en') ? 'EN' : 'PT';

  const setLang = (l: Lang) => {
    const slug = l.toLowerCase();
    // Remember the choice for ~1 year so it survives closing the browser.
    // Read back by proxy.ts to redirect the un-prefixed routes (e.g. "/").
    document.cookie = `lang=${slug}; path=/; max-age=31536000; samesite=lax; secure`;
    const withoutLang = pathname.replace(/^\/(pt|en)/, '') || '/';
    router.push(`/${slug}${withoutLang}`);
  };

  return { lang, setLang };
}

// No-op, kept so layout.tsx doesn't need to change yet
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
