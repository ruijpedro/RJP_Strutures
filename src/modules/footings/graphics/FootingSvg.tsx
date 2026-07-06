import type { FootingInput, FootingResult } from '../engine/FootingTypes';
interface Props { input: FootingInput; result: FootingResult; }
export function FootingSvg({ input, result }: Props) {
  const ratioX = Math.min(1, input.columnX / input.lengthM);
  const ratioY = Math.min(1, input.columnY / input.widthM);
  const colW = 420 * ratioX;
  const colH = 140 * ratioY;
  return <svg className="beam-svg" viewBox="0 0 720 260" role="img" aria-label="Sapata EC7">
    <rect x="150" y="55" width="420" height="140" rx="5" />
    <rect x={360 - colW/2} y={125 - colH/2} width={colW} height={colH} fill="#a7f3d0" stroke="#0d2538" strokeWidth="2" />
    <text x="285" y="35">Sapata {input.lengthM} × {input.widthM} × {input.thicknessM} m</text>
    <text x="300" y="128">Pilar</text>
    <line x1="150" y1="215" x2="570" y2="215" stroke="#007a5a" strokeWidth="4" />
    <polygon points="150,215 570,215 570,225 150,245" fill="rgba(0,122,90,.22)" stroke="#007a5a" />
    <text x="155" y="252">σmin {result.sigmaMin} kPa</text>
    <text x="455" y="252">σmax {result.sigmaMax} kPa</text>
  </svg>;
}
