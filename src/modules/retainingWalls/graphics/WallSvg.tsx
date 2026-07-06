import type { WallInput, WallResult } from '../engine/WallTypes';
export function WallSvg({ input, result }: { input: WallInput; result: WallResult }) {
  const baseX = 120, baseY = 190, scale = 38;
  const B = input.baseWidth * scale, H = input.height * scale, toe = input.toe * scale, stem = Math.max(12, input.stemThickness * scale);
  return <svg className="beam-svg" viewBox="0 0 560 260" role="img" aria-label="Muro de suporte">
    <rect x={baseX} y={baseY} width={B} height="18" rx="2" />
    <rect x={baseX + toe} y={baseY - H} width={stem} height={H} rx="2" />
    <path d={`M${baseX + toe + stem} ${baseY - H} L${baseX + B + 70} ${baseY - H} L${baseX + B + 70} ${baseY} L${baseX + toe + stem} ${baseY} Z`} fill="rgba(148,163,184,.22)" stroke="#94a3b8" />
    <path d={`M${baseX + toe + stem} ${baseY - H} L${baseX + B + 55} ${baseY} L${baseX + toe + stem} ${baseY} Z`} fill="rgba(0,122,90,.16)" stroke="#007a5a" />
    <line x1={baseX + B + 55} y1={baseY} x2={baseX + B + 110} y2={baseY} stroke="#007a5a" strokeWidth="3" markerEnd="url(#arr)" />
    <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#007a5a" /></marker></defs>
    <text x={baseX} y={baseY + 42}>B={input.baseWidth} m</text><text x={baseX + B + 115} y={baseY + 3}>Ea={result.activeForce} kN/m</text><text x={baseX + 5} y={baseY - H - 8}>H={input.height} m</text>
  </svg>;
}
