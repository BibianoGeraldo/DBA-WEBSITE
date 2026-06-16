'use client';
import { ContactStrip } from '@/components/sections/ContactStrip';

export type LegalSection = { h: string; body: string[] };
export type LegalContent = {
  title: string;
  updatedLabel: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalDoc({ content }: { content: LegalContent }) {
  return (
    <main className="page-enter">
      <section style={{ padding: '120px 0 56px' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1, margin: 0 }}>
            {content.title}
          </h1>
          <p style={{ fontSize: 13, color: 'var(--c-mute)', marginTop: 12 }}>
            {content.updatedLabel}: {content.updated}
          </p>
          <p style={{ fontSize: 17, color: '#444', lineHeight: 1.7, marginTop: 24 }}>{content.intro}</p>

          {content.sections.map((s) => (
            <section key={s.h} style={{ marginTop: 36 }}>
              <h2 style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em', margin: '0 0 12px' }}>{s.h}</h2>
              {s.body.map((p, i) => (
                <p key={i} style={{ fontSize: 15.5, color: '#444', lineHeight: 1.75, margin: '0 0 12px' }}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </section>
      <ContactStrip />
    </main>
  );
}
