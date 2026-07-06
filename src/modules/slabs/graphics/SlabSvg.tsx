import type { SlabInput, SlabResult } from '../engine/SlabTypes';
interface Props { input: SlabInput; result: SlabResult; }
export function SlabSvg({ input, result }: Props) {
  return <svg className="beam-svg" viewBox="0 0 720 260" role="img" aria-label="Laje EC2">
    <rect x="135" y="45" width="450" height="150" rx="4" />
    <line x1="135" y1="220" x2="585" y2="220" stroke="#0d2538" /><text x="325" y="240">Lx = {input.lxM} m</text>
    <line x1="105" y1="45" x2="105" y2="195" stroke="#0d2538" /><text x="25" y="125">Ly = {input.lyM} m</text>
    <g stroke="#007a5a" strokeWidth="2">{[180,240,300,360,420,480,540].map(x => <line key={x} x1={x} y1="60" x2={x} y2="180" />)}</g>
    <g stroke="#d92d20" strokeWidth="2">{[75,105,135,165].map(y => <line key={y} x1="155" y1={y} x2="565" y2={y} />)}</g>
    <text x="150" y="35">Direção principal: {result.mainDirection}</text>
    <text x="430" y="35">h = {input.thicknessCm} cm</text>
  </svg>;
}
