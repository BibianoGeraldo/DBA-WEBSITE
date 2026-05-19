import { SOCIAL_LINKS } from '@/lib/data';

export function ContactStrip() {
  return (
    <section className="ind-contact">
      <div className="container">
        <div className="ind-contact__row">
          <div className="ind-contact__col">
            <h4>Contactos</h4>
            <div>+258 85 222 2016</div>
          </div>
          <div className="ind-contact__col">
            <h4>Email</h4>
            <div>info@dba.co.mz</div>
          </div>
          <div className="ind-contact__col">
            <h4>Localização</h4>
            <div>
              Rua dos Desportistas, n.º 833,<br />
              JAT 5-1, 9.º Andar<br />
              Maputo, Moçambique
            </div>
          </div>
          <div className="ind-contact__col">
            <h4>Social Network</h4>
            <div className="ind-contact__socials">
              {SOCIAL_LINKS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} data-network={s.label.toLowerCase()}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d={s.path}/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
