'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Arrow } from '@/components/ui/Arrow';
import { SOCIAL_LINKS } from '@/lib/data';

function SocialCircle({ children, ariaLabel, href = '#' }: { children: React.ReactNode; ariaLabel: string; href?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} data-network={ariaLabel.toLowerCase()}
      style={{ width: 38, height: 38, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,.5)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </a>
  );
}

function ContactInfoBlock({ title, value }: { title: string; value: React.ReactNode }) {
  return (
    <div>
      <h4 style={{ color: '#fff', fontSize: 22, fontWeight: 500, marginBottom: 10, letterSpacing: '-0.01em' }}>{title}</h4>
      <div style={{ fontSize: 15, color: 'rgba(255,255,255,.9)', lineHeight: 1.5 }}>{value}</div>
    </div>
  );
}

function UnderlineField({ label, required, value, onChange, multiline }: { label: string; required?: boolean; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; multiline?: boolean }) {
  const [focused, setFocused] = useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <div>
      <label className={`underline-field-label${focused ? ' underline-field-label--focused' : ''}`} style={{ display: 'block', fontSize: 14.5, color: 'var(--c-mute)', marginBottom: 8 }}>
        {label}{required && <span style={{ color: focused ? 'var(--c-blue)' : 'var(--c-mute)' }}>*</span>}
      </label>
      <Tag required={required} value={value} onChange={onChange} rows={multiline ? 2 : undefined}
        className="underline-field-input"
        style={{ width: '100%', background: 'transparent', border: 0, borderBottom: '1px solid rgba(0,0,0,.25)', padding: '6px 0 10px', font: 'inherit', fontSize: 15, color: 'var(--c-ink)', outline: 'none', resize: multiline ? 'vertical' : 'none' }}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
    </div>
  );
}

function ContactForm() {
  const [state, setState] = useState({ name: '', company: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const change = (k: keyof typeof state) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState(s => ({ ...s, [k]: e.target.value }));
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <button className="btn btn--ghost" style={{ marginTop: 24 }} onClick={() => { setSent(false); setState({ name: '', company: '', phone: '', message: '' }); }}>
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: 'grid', gap: 28 }}>
      <UnderlineField label="Nome Completo" required value={state.name} onChange={change('name')} />
      <UnderlineField label="Empresa"       required value={state.company} onChange={change('company')} />
      <UnderlineField label="Telefone (opcional)"    value={state.phone} onChange={change('phone')} />
      <UnderlineField label="Mensagem"      required value={state.message} onChange={change('message')} multiline />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginTop: 12 }}>
        <button type="submit" disabled={loading} className="send-btn">
          <span>{loading ? 'A enviar…' : 'Enviar'}</span>
          <span className="send-btn__circle">
            {loading
              ? <svg className="spin" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="9" strokeOpacity=".2"/><path d="M12 3a9 9 0 0 1 9 9"/></svg>
              : <Arrow size={14} />}
          </span>
        </button>
        <em style={{ color: 'var(--c-mute)', fontSize: 13.5 }}>Respondemos em 24 horas úteis (Seg-Sex)</em>
      </div>
    </form>
  );
}

export function ContactBlock() {
  return (
    <section className="contact-block">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)', gap: 56, alignItems: 'flex-start', padding: '72px 0' }}>
          <div style={{ color: '#fff' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 30 }}>
              Fale connosco.<br/>Estamos aqui para ajudar.
            </h2>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.85)', lineHeight: 1.55, marginBottom: 20 }}>
              <span style={{ color: '#fff' }}>*</span>Alguns serviços são prestados por empresas especializadas do Grupo. A DBA actua como ponto único de contacto.
            </p>
            <div style={{ height: 1, background: 'rgba(255,255,255,.25)', margin: '20px 0 28px' }} />
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.92)', lineHeight: 1.55, marginBottom: 44, maxWidth: 520 }}>
              Quer pretenda marcar uma reunião, esclarecer dúvidas ou saber mais sobre os nossos serviços, estamos à distância de um clique.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, rowGap: 36 }}>
              <ContactInfoBlock title="Contactos"   value="+258 85 222 2016" />
              <ContactInfoBlock title="Localização" value={<span>Rua dos Desportistas, n.º 833,<br/>JAT 5-1, 9.º Andar<br/>Maputo, Moçambique</span>} />
              <ContactInfoBlock title="Email"       value="info@dba.co.mz" />
              <div>
                <h4 style={{ color: '#fff', fontSize: 22, fontWeight: 500, marginBottom: 16 }}>Social Network</h4>
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
          <div style={{ background: 'var(--c-bg-2)', borderRadius: 28, padding: '44px 44px 36px' }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
