'use client';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useInView } from '@/hooks/useInView';
import { MeshGraphic } from './MeshGraphic';

interface Props { mesh: string; color: string; big: string; label: string; body: string; }

export function WhyCard({ mesh, color, big, label, body }: Props) {
  const [ref, inView] = useInView();
  const numMatch = /^(\d+)\+?$/.exec(big);
  const isNumeric = !!numMatch;
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div className="why-stat-box" style={{ background: 'var(--c-bg-2)', borderRadius: 18, aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, padding: 28 }}>
        <MeshGraphic kind={mesh} color={color} />
      </div>
      <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--c-ink)', lineHeight: 1.05 }}>
        {isNumeric
          ? <><AnimatedCounter end={parseInt(numMatch![1], 10)} startWhen={inView} />{big.endsWith('+') ? '+' : ''}</>
          : big}
      </div>
      <div style={{ fontSize: 16, color: 'var(--c-ink)', fontWeight: 500, marginTop: 6 }}>{label}</div>
      <p style={{ fontSize: 14, color: 'var(--c-mute)', lineHeight: 1.55, marginTop: 12, maxWidth: 240, marginInline: 'auto' }}>{body}</p>
    </div>
  );
}
