interface IconProps { name: string; size?: number; }

export function Icon({ name, size = 24 }: IconProps) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none' as const, stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'tax':      return <svg {...common}><path d="M4 4h12l4 4v12H4z"/><path d="M16 4v4h4"/><path d="M8 12h8M8 16h5"/></svg>;
    case 'book':     return <svg {...common}><path d="M4 19V5a2 2 0 0 1 2-2h13v16"/><path d="M6 17h13"/><path d="M6 21h13"/><path d="M6 21a2 2 0 0 1-2-2"/></svg>;
    case 'chart':    return <svg {...common}><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>;
    case 'people':   return <svg {...common}><circle cx="9" cy="8" r="3"/><path d="M3 21v-1a6 6 0 0 1 12 0v1"/><circle cx="17" cy="9" r="2.5"/><path d="M16 21v-.5a4.5 4.5 0 0 1 5-4.4"/></svg>;
    case 'academy':  return <svg {...common}><path d="M3 9l9-5 9 5-9 5z"/><path d="M7 11v5a5 5 0 0 0 10 0v-5"/><path d="M21 9v6"/></svg>;
    case 'tech':     return <svg {...common}><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><circle cx="12" cy="10" r="2"/></svg>;
    case 'globe':    return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case 'shield':   return <svg {...common}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>;
    case 'spark':    return <svg {...common}><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/><path d="M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M18.4 5.6l-4.2 4.2M9.8 14.2l-4.2 4.2"/></svg>;
    case 'compass':  return <svg {...common}><circle cx="12" cy="12" r="9"/><polygon points="15 9 13 13 9 15 11 11"/></svg>;
    case 'building': return <svg {...common}><path d="M4 21V5l8-2v18"/><path d="M12 8h8v13"/><path d="M8 7h.01M8 11h.01M8 15h.01M16 12h.01M16 16h.01"/></svg>;
    case 'leaf':     return <svg {...common}><path d="M5 19c0-8 7-15 16-15 0 9-7 16-15 16-1 0-1 0-1-1z"/><path d="M5 19c4-4 7-7 12-10"/></svg>;
    case 'bolt':     return <svg {...common}><polygon points="13 2 4 14 11 14 10 22 20 10 13 10 13 2"/></svg>;
    case 'truck':    return <svg {...common}><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>;
    case 'heart':    return <svg {...common}><path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"/></svg>;
    case 'bag':      return <svg {...common}><path d="M5 8h14l-1 12H6z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/></svg>;
    case 'phone':    return <svg {...common}><path d="M5 4h4l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>;
    case 'mail':     return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>;
    case 'pin':      return <svg {...common}><path d="M12 22s7-7.5 7-13a7 7 0 0 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    case 'check':    return <svg {...common}><path d="M5 13l4 4L19 7"/></svg>;
    case 'menu':     return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
    case 'x':        return <svg {...common}><path d="M6 6l12 12M18 6l-12 12"/></svg>;
    case 'cal':      return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>;
    case 'send':     return <svg {...common}><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>;
    case 'sun':      return <svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
    default: return null;
  }
}
