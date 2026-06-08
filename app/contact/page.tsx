'use client';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { ContactBlock } from '@/components/sections/ContactBlock';
import { Arrow } from '@/components/ui/Arrow';

const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Rua%20dos%20Desportistas%20833%20JAT%205-1%209%20Andar%20Maputo%20Mocambique';

export default function ContactPage() {
  useRevealObserver();

  return (
    <main className="page-enter contact-page">

      <section className="contact-hero">
        <div className="container">
          <h1 data-reveal className="contact-hero__title">Contactos</h1>
          <p data-reveal data-delay="120" className="contact-hero__lede">
            Fale connosco através do nosso contacto principal. A nossa equipa encaminhará o seu pedido para o Partner ou área responsável.
          </p>
        </div>
        <div className="contact-hero__divider" />
      </section>

      <section className="contact-directs">
        <div className="container">
          <div data-stagger className="contact-directs__row">
            <div className="contact-direct">
              <div className="contact-direct__label">Email</div>
              <a href="mailto:info@dba.co.mz" className="contact-direct__value">info@dba.co.mz</a>
            </div>
            <div className="contact-direct__sep" />
            <div className="contact-direct">
              <div className="contact-direct__label">Telefone / WhatsApp</div>
              <a href="tel:+258852222016" className="contact-direct__value">+258 85 222 2016</a>
            </div>
            <div className="contact-direct__sep" />
            <div className="contact-direct contact-direct--cta">
              <a href="#contact-form" className="contact-direct__btn">
                <span>Falar connosco</span>
                <span className="contact-direct__btn-arrow"><Arrow size={13} /></span>
              </a>
            </div>
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

      <div id="contact-form">
        <ContactBlock />
      </div>

    </main>
  );
}
