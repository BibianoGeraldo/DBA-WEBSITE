'use client';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactBlock } from '@/components/sections/ContactBlock';
import { Arrow } from '@/components/ui/Arrow';
import { CONTACT_DIRECTS } from '@/lib/data';

const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Rua%20dos%20Desportistas%20833%20JAT%205-1%209%20Andar%20Maputo%20Mocambique';

export default function ContactPage() {
  useRevealObserver();

  return (
    <main className="page-enter contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 data-reveal className="contact-hero__title">
            Fale-nos da sua situação<br />em Moçambique.
          </h1>
          <p data-reveal data-delay="120" className="contact-hero__lede">
            Seja para entrar no mercado, resolver um problema de compliance ou estruturar uma
            transacção um Partner sénior responde em 24 horas úteis.
          </p>
          <p data-reveal data-delay="220" className="contact-hero__note">
            Prefere uma conversa directa? Marque uma chamada de 30 minutos no horário que lhe der jeito.
            Respondemos a cada pedido pessoalmente. Sem respostas automáticas.
          </p>
        </div>
      </section>

      <section className="contact-directs">
        <div className="container">
          <h2 data-reveal className="contact-directs__title">Contactos directos por área</h2>
          <div data-stagger className="contact-directs__row">
            {CONTACT_DIRECTS.map(d => (
              <div key={d.area} className="contact-direct">
                <div className="contact-direct__area">{d.area}</div>
                <a href={`mailto:${d.email}`} className="contact-direct__pill">
                  <span>{d.email}</span>
                  <span className="contact-direct__arrow">
                    <Arrow size={12} />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-location">
        <div className="container">
          <div className="contact-location__grid">
            <div data-reveal="left" className="contact-location__left">
              <h2 className="contact-location__title">Localização do<br />Escritório</h2>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="contact-location__addr contact-info-link">
                Rua dos Desportistas, n.º 833, JAT 5-1, 9.º Andar<br />
                Maputo, Moçambique
              </a>
            </div>
            <div data-reveal="right" className="contact-location__map">
              <iframe
                title="Mapa do escritório dBA Maputo"
                src="https://maps.google.com/maps?q=Rua+dos+Desportistas+833+Maputo&t=&z=16&ie=UTF8&iwloc=&output=embed"
                style={{ border: 0, width: '100%', height: '100%', display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactBlock />
    </main>
  );
}
