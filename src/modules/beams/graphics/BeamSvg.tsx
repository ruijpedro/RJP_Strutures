import type { BeamInput, BeamResult } from '../engine/BeamTypes';

interface Props { input: BeamInput; result: BeamResult; }
export function BeamSvg({ input, result }: Props) {
  const isCantilever = input.supportType === 'cantilever';
  return <svg viewBox="0 0 720 260" className="beam-svg" role="img">
    <rect x="80" y="105" width="560" height="20" rx="2" />
    {isCantilever ? <rect x="65" y="70" width="20" height="90" className="support"/> : <><polygon points="90,130 70,170 110,170" className="support"/><polygon points="630,130 610,170 650,170" className="support"/></>}
    {Array.from({length: 12}).map((_, i) => <g key={i}><line x1={110+i*45} y1="55" x2={110+i*45} y2="95" className="load"/><polygon points={`${105+i*45},90 ${115+i*45},90 ${110+i*45},102`} className="loadFill"/></g>)}
    {input.pointLoad > 0 && <g><line x1={80 + 560*(input.pointPosition/input.span)} y1="35" x2={80 + 560*(input.pointPosition/input.span)} y2="95" className="point"/><text x={80 + 560*(input.pointPosition/input.span)+8} y="52">P</text></g>}
    <text x="80" y="210">RA = {result.reactionA} kN</text><text x="540" y="210">RB = {result.reactionB} kN</text><text x="300" y="235">L = {input.span} m</text>
  </svg>;
}
