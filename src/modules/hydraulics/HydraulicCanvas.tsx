import type { ManningResult } from './common';
interface Props { title: string; result?: ManningResult; mode?: 'channel' | 'culvert' | 'drain'; }
export function HydraulicCanvas({ title, result, mode = 'channel' }: Props) {
  const water = result ? Math.max(90, 180 - Math.min(80, result.area * 35)) : 125;
  return <svg className="beam-svg" viewBox="0 0 520 240" role="img" aria-label={title}>
    <text x="24" y="30">{title}</text>
    {mode === 'culvert' ? <>
      <rect x="120" y="70" width="280" height="110" rx="10" fill="#e6eef2" stroke="#0d2538" strokeWidth="3"/>
      <rect x="140" y="120" width="240" height="42" fill="#b8e0ff" stroke="#007a5a"/>
    </> : mode === 'drain' ? <>
      <path d="M70 170 L230 70 L450 170" fill="none" stroke="#0d2538" strokeWidth="4"/>
      <path d="M140 160 L360 160" stroke="#007a5a" strokeWidth="8" strokeDasharray="10 8"/>
      <circle cx="260" cy="160" r="18" fill="#b8e0ff" stroke="#0d2538"/>
    </> : <>
      <path d="M80 70 L150 180 L380 180 L450 70" fill="none" stroke="#0d2538" strokeWidth="4"/>
      <path d={`M145 ${water} L375 ${water} L380 180 L150 180 Z`} fill="#b8e0ff" stroke="#007a5a"/>
    </>}
    <text x="24" y="215">Q ≈ {result ? result.flow.toFixed(3) : '—'} m³/s · v ≈ {result ? result.velocity.toFixed(2) : '—'} m/s</text>
  </svg>;
}
