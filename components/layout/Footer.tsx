import { LogoWordmark } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: '4px solid #0165dd', padding: '56px 0 48px', textAlign: 'center' }}>
      <div className="container">
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
          <LogoWordmark height={64} />
          <div style={{ fontSize: 14, color: 'var(--c-mute)' }}>
            DB Associados, 2025. Todos direitos reservados.
          </div>
          <div style={{ display: 'flex', gap: 20, fontSize: 13, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#" className="footer-link">Política de Privacidade</a>
            <a href="#" className="footer-link">Termos &amp; Condições</a>
            <a href="#" className="footer-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
