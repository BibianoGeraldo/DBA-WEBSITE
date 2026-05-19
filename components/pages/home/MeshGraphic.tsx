interface Props { kind: string; color: string; }

export function MeshGraphic({ kind, color }: Props) {
  const stroke = color;
  const sw = 0.7;

  if (kind === 'triangle') {
    const lines = [];
    for (let i = 0; i < 40; i++) {
      const t = i / 40;
      lines.push(
        <polygon key={i} points={`${100 - 80*t},${30 + 100*t} ${100 + 80*t},${30 + 100*t} ${100},${170 - 60*t}`}
          fill="none" stroke={stroke} strokeWidth={sw} opacity={0.4 + 0.6 * (1 - t)} />
      );
    }
    return <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>{lines}</svg>;
  }
  if (kind === 'sphere') {
    const lines = [];
    for (let i = 0; i < 36; i++) {
      const a = (i / 36) * Math.PI;
      lines.push(
        <ellipse key={i} cx="100" cy="100" rx={80} ry={parseFloat((Math.abs(80 * Math.cos(a)) + 2).toFixed(4))}
          fill="none" stroke={stroke} strokeWidth={sw} transform={`rotate(${i * 5} 100 100)`} opacity="0.65" />
      );
    }
    return <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>{lines}</svg>;
  }
  if (kind === 'diamond') {
    const lines = [];
    for (let i = 0; i < 30; i++) {
      const t = i / 30;
      const s = 80 - 60 * t;
      lines.push(
        <rect key={i} x={100 - s} y={100 - s} width={s * 2} height={s * 2}
          fill="none" stroke={stroke} strokeWidth={sw} opacity={0.4 + 0.6 * (1 - t)}
          transform={`rotate(${i * 9} 100 100)`} />
      );
    }
    return <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>{lines}</svg>;
  }
  if (kind === 'mobius') {
    const lines = [];
    for (let i = 0; i < 40; i++) {
      const a = (i / 40) * Math.PI * 2;
      const ry = parseFloat((30 + 40 * Math.abs(Math.sin(a))).toFixed(4));
      lines.push(
        <ellipse key={i} cx="100" cy="100" rx={60} ry={ry}
          fill="none" stroke={stroke} strokeWidth={sw}
          transform={`rotate(${i * 9} 100 100)`} opacity="0.55" />
      );
    }
    return <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>{lines}</svg>;
  }
  return null;
}
