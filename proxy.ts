import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCALES = ['pt', 'en'] as const;
const DEFAULT_LOCALE = 'pt';

// Reads the browser's Accept-Language header (e.g. "en-US,en;q=0.9,pt;q=0.8")
// and returns the first supported locale by descending quality, or the default.
function localeFromAcceptLanguage(header: string | null) {
  if (!header) return DEFAULT_LOCALE;

  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=');
      return { lang: tag.slice(0, 2).toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  const match = ranked.find((r) =>
    LOCALES.includes(r.lang as (typeof LOCALES)[number])
  );
  return match ? match.lang : DEFAULT_LOCALE;
}

// Next.js 16: this file used to be called `middleware.ts`.
// It redirects any route without a locale prefix (e.g. "/", "/about")
// to the visitor's preferred locale, remembered in the `lang` cookie.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // 1st choice: the cookie set when the visitor picked a language before.
  // 2nd choice (first visit, no cookie): the browser's Accept-Language header.
  // Fallback: the default locale (PT).
  const cookieLang = request.cookies.get('lang')?.value;
  const locale = LOCALES.includes(cookieLang as (typeof LOCALES)[number])
    ? cookieLang
    : localeFromAcceptLanguage(request.headers.get('accept-language'));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on every path except API routes, Next internals and files with an extension.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
