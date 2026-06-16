// Only 'pt' and 'en' are valid locales. Any other prefix 404s instead of
// silently rendering as PT (proxy.ts always redirects to one of these).
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }];
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
