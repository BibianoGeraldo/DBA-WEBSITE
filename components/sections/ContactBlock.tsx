'use client';
import { useState, useRef, useEffect } from 'react';
import { Icon } from '@/components/ui/Icon';
import { Arrow } from '@/components/ui/Arrow';
import { SOCIAL_LINKS } from '@/lib/data';

const PHONE_DISPLAY = '+258 85 222 2016';
const PHONE_HREF = 'tel:+258852222016';
const EMAIL = 'info@dba.co.mz';
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Rua%20dos%20Desportistas%20833%20JAT%205-1%209%20Andar%20Maputo%20Mocambique';

const AREAS_DE_INTERESSE = [
  'Fiscalidade',
  'Contabilidade & Outsourcing',
  'Auditoria & Assurance',
  'Advisory Financeiro',
  'Recursos Humanos',
  'Tecnologia & Automação',
  'ESG & Climate',
  'Investment Support',
  'PME-HUB',
  'Recrutamento',
  'Outro',
];

function SocialCircle({ children, ariaLabel, href = '#' }: { children: React.ReactNode; ariaLabel: string; href?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} data-network={ariaLabel.toLowerCase()}
      style={{ width: 38, height: 38, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,.5)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </a>
  );
}

function ContactInfoBlock({ title, value, href, external }: { title: string; value: React.ReactNode; href: string; external?: boolean }) {
  return (
    <div>
      <h4 style={{ color: '#fff', fontSize: 22, fontWeight: 500, marginBottom: 10, letterSpacing: '-0.01em' }}>{title}</h4>
      <a href={href} className="contact-info-link" target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
        style={{ fontSize: 15, color: 'rgba(255,255,255,.9)', lineHeight: 1.5 }}>
        {value}
      </a>
    </div>
  );
}

function UnderlineField({ label, required, value, onChange, multiline, flex, type = 'text' }: {
  label: string; required?: boolean; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean; flex?: boolean; type?: string;
}) {
  const [focused, setFocused] = useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <div style={{ position: 'relative', display: flex ? 'flex' : undefined, flexDirection: flex ? 'column' : undefined, flex: flex ? 1 : undefined }}>
      <label style={{
        display: 'block', fontSize: 12, fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase',
        color: focused ? 'var(--c-blue)' : 'var(--c-mute)', marginBottom: 10, transition: 'color .18s',
      }}>
        {label}{required && <span style={{ marginLeft: 1 }}>*</span>}
      </label>
      <Tag
        type={multiline ? undefined : type} required={required} value={value} onChange={onChange}
        rows={multiline && !flex ? 2 : undefined}
        style={{
          width: '100%', background: 'transparent', border: 0,
          borderBottom: `1.5px solid ${focused ? 'var(--c-blue)' : 'rgba(0,0,0,.15)'}`,
          padding: '6px 0 12px', font: 'inherit', fontSize: 15, color: 'var(--c-ink)',
          outline: 'none', resize: 'none',
          transition: 'border-color .18s',
          flex: flex ? 1 : undefined, minHeight: flex ? 60 : undefined,
        }}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      />
    </div>
  );
}

function DropdownField({ label, required, value, onChange }: {
  label: string; required?: boolean; value: string; onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = focused || open || value.length > 0;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setFocused(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const select = (v: string) => { onChange(v); setOpen(false); setFocused(false); };

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <label style={{
        display: 'block', fontSize: 12, fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase',
        color: open ? 'var(--c-blue)' : 'var(--c-mute)', marginBottom: 10, transition: 'color .18s',
      }}>
        {label}{required && <span style={{ marginLeft: 1 }}>*</span>}
      </label>

      <button type="button" onClick={() => { setOpen(o => !o); setFocused(true); }}
        style={{
          width: '100%', background: 'transparent', border: 0,
          borderBottom: `1.5px solid ${open ? 'var(--c-blue)' : 'rgba(0,0,0,.15)'}`,
          padding: '6px 24px 12px 0', font: 'inherit', fontSize: 15,
          color: value ? 'var(--c-ink)' : 'var(--c-mute)',
          textAlign: 'left', cursor: 'pointer', outline: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'border-color .18s',
        }}>
        <span>{value || 'Seleccionar área'}</span>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ position: 'absolute', right: 2, top: '50%', transform: `translateY(-50%) rotate(${open ? 180 : 0}deg)`, transition: 'transform .2s', color: open ? 'var(--c-blue)' : 'var(--c-mute)', flexShrink: 0 }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 50,
          background: '#fff', borderRadius: 12,
          boxShadow: '0 8px 32px -8px rgba(0,0,0,.18), 0 2px 8px -2px rgba(0,0,0,.08)',
          border: '1px solid rgba(0,0,0,.07)', overflow: 'hidden',
          maxHeight: 280, overflowY: 'auto',
        }}>
          {AREAS_DE_INTERESSE.map((area, i) => (
            <button key={area} type="button" onClick={() => select(area)}
              style={{
                width: '100%', background: area === value ? 'rgba(1,101,221,.06)' : 'transparent',
                border: 0, borderBottom: i < AREAS_DE_INTERESSE.length - 1 ? '1px solid rgba(0,0,0,.05)' : 'none',
                padding: '11px 16px', font: 'inherit', fontSize: 14.5,
                color: area === value ? 'var(--c-blue)' : 'var(--c-ink)',
                textAlign: 'left', cursor: 'pointer',
                fontWeight: area === value ? 500 : 400,
                transition: 'background .12s',
              }}
              onMouseEnter={e => { if (area !== value) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,.03)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = area === value ? 'rgba(1,101,221,.06)' : 'transparent'; }}>
              {area}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const [state, setState] = useState({ name: '', email: '', phone: '', area: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const change = (k: keyof typeof state) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState(s => ({ ...s, [k]: e.target.value }));
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.area) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  };

  if (sent) {
    return (
      <div style={{ padding: '40px 8px', textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(17,191,116,.18)', color: '#11bf74', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
          <Icon name="check" size={26} />
        </div>
        <h3 style={{ marginBottom: 10, fontWeight: 500 }}>Mensagem enviada.</h3>
        <p style={{ color: 'var(--c-mute)', fontSize: 15.5, lineHeight: 1.55, maxWidth: 360, marginInline: 'auto' }}>
          Obrigado, {state.name || 'colega'}. Um Partner responde-lhe pessoalmente em 24 horas úteis (Seg-Sex).
        </p>
        <button className="btn btn--ghost" style={{ marginTop: 24 }} onClick={() => { setSent(false); setState({ name: '', email: '', phone: '', area: '', message: '' }); }}>
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 30, flex: 1 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <UnderlineField label="Nome Completo"       required value={state.name}  onChange={change('name')} />
        <UnderlineField label="Email"               required type="email" value={state.email} onChange={change('email')} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <UnderlineField label="Telefone / WhatsApp" required type="tel" value={state.phone} onChange={change('phone')} />
        <DropdownField  label="Área de interesse"   required value={state.area}  onChange={v => setState(s => ({ ...s, area: v }))} />
      </div>
      <UnderlineField label="Mensagem" required value={state.message} onChange={change('message')} multiline flex />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginTop: 4 }}>
        <button type="submit" disabled={loading} className="send-btn">
          <span>{loading ? 'A enviar…' : 'Enviar'}</span>
          <span className="send-btn__circle">
            {loading
              ? <svg className="spin" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="9" strokeOpacity=".2"/><path d="M12 3a9 9 0 0 1 9 9"/></svg>
              : <Arrow size={14} />}
          </span>
        </button>
        <em style={{ color: 'var(--c-mute)', fontSize: 13 }}>Respondemos em 24h úteis (Seg–Sex)</em>
      </div>
    </form>
  );
}

export function ContactBlock() {
  return (
    <section className="contact-block">
      <div className="container">
        <div className="contact-block__inner">
          <div style={{ color: '#fff' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 30 }}>
              Fale connosco.<br/>Estamos aqui para ajudar.
            </h2>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.85)', lineHeight: 1.55, marginBottom: 20 }}>
              <span style={{ color: '#fff' }}>*</span>Alguns serviços são prestados por empresas especializadas do Grupo. A dBA actua como ponto único de contacto.
            </p>
            <div style={{ height: 1, background: 'rgba(255,255,255,.25)', margin: '20px 0 28px' }} />
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.92)', lineHeight: 1.55, marginBottom: 44, maxWidth: 520 }}>
              Quer pretenda marcar uma reunião, esclarecer uma dúvida ou discutir uma necessidade específica, a nossa equipa está disponível para o apoiar com proximidade, rigor e resposta rápida.
            </p>
            <div className="contact-info-grid">
              <ContactInfoBlock title="Contactos"   value={PHONE_DISPLAY} href={PHONE_HREF} />
              <ContactInfoBlock title="Localização" value={<span>Rua dos Desportistas, n.º 833,<br/>JAT 5-1, 9.º Andar<br/>Maputo, Moçambique</span>} href={MAP_URL} external />
              <ContactInfoBlock title="Email"       value={EMAIL} href={`mailto:${EMAIL}`} />
              <div>
                <h4 style={{ color: '#fff', fontSize: 22, fontWeight: 500, marginBottom: 16 }}>Redes Sociais</h4>
                <div style={{ display: 'flex', gap: 10 }}>
                  {SOCIAL_LINKS.map(s => (
                    <SocialCircle key={s.label} ariaLabel={s.label} href={s.href}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d={s.path}/></svg>
                    </SocialCircle>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-box">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
