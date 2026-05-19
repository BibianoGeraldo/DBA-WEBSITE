import { SOCIAL_LINKS } from '@/lib/data';

const PHONE_DISPLAY = '+258 85 222 2016';
const PHONE_HREF = 'tel:+258852222016';
const EMAIL = 'info@dba.co.mz';
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Rua%20dos%20Desportistas%20833%20JAT%205-1%209%20Andar%20Maputo%20Mocambique';

export function ContactStrip() {
  return (
    <section className="ind-contact">
      <div className="container">
        <div className="ind-contact__row">
          <div className="ind-contact__col">
            <h4>Contactos</h4>
            <a href={PHONE_HREF} className="contact-info-link">{PHONE_DISPLAY}</a>
          </div>
          <div className="ind-contact__col">
            <h4>Email</h4>
            <a href={`mailto:${EMAIL}`} className="contact-info-link">{EMAIL}</a>
          </div>
          <div className="ind-contact__col">
            <h4>Localização</h4>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="contact-info-link">
              Rua dos Desportistas, n.º 833,<br />
              JAT 5-1, 9.º Andar<br />
              Maputo, Moçambique
            </a>
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
