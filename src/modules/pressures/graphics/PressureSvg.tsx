import type { PressureInput, PressureResult } from '../engine/PressureTypes';
interface Props { input: PressureInput; result: PressureResult; }
export function PressureSvg({ input, result }: Props) {
  const waterY = 180 - Math.max(0, Math.min(input.waterHeight / input.height, 1)) * 130;
  return <svg className="beam-svg" viewBox="0 0 520 240" role="img" aria-label="Diagrama de impulsos">
    <rect x="110" y="40" width="24" height="150" rx="2" />
    <line x1="134" y1="40" x2="360" y2="40" stroke="#9aa7b0" strokeWidth="2" />
    <line x1="134" y1="190" x2="360" y2="190" stroke="#9aa7b0" strokeWidth="2" />
    <path d="M134 40 L330 190 L134 190 Z" fill="rgba(0,122,90,.20)" stroke="#007a5a" strokeWidth="2" />
    {input.waterHeight > 0 && <path d={`M134 ${waterY} L300 190 L134 190 Z`} fill="rgba(14,116,144,.18)" stroke="#0e7490" strokeWidth="2" />}
    <line x1="330" y1="190" x2="420" y2="190" stroke="#007a5a" strokeWidth="3" markerEnd="url(#arrow)" />
    <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#007a5a" /></marker></defs>
    <text x="95" y="35">H={input.height} m</text><text x="350" y="130">Ea={result.totalForce} kN/m</text><text x="148" y="210">σbase={result.sigmaBase} kPa</text>
  </svg>;
}
