import type { ColumnInput, ColumnResult } from '../engine/ColumnTypes';

interface Props { input: ColumnInput; result: ColumnResult; }
export function ColumnSvg({ input, result }: Props) {
  return <svg className="beam-svg" viewBox="0 0 720 260" role="img" aria-label="Pilar EC2">
    <rect x="310" y="30" width="100" height="180" rx="4" />
    <line x1="430" y1="30" x2="430" y2="210" stroke="#0d2538" strokeDasharray="5 5" />
    <text x="300" y="24">h = {input.heightM} m</text>
    <text x="285" y="235">{input.bxCm} × {input.byCm} cm</text>
    <line x1="360" y1="5" x2="360" y2="28" stroke="#d92d20" strokeWidth="3" markerEnd="url(#arrCol)" />
    <text x="375" y="20">NEd {input.nedKn} kN</text>
    <path d="M420 75 C475 80 475 140 420 145" fill="none" stroke="#007a5a" strokeWidth="4" />
    <text x="475" y="115">MEd {input.medKnM} kN.m</text>
    <text x="32" y="55">λ = {result.slenderness}</text>
    <text x="32" y="82">As = {result.asRequiredMm2} mm²</text>
    <text x="32" y="109">Sug.: {result.suggestedBars}</text>
    <defs><marker id="arrCol" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#d92d20" /></marker></defs>
  </svg>;
}
