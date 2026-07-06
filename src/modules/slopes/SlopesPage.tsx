import { useMemo, useState } from 'react';
import { Card } from '../../ui/Card';
import { Field } from '../../ui/Field';
import { round } from '../../core/math';

interface SlopeInput { height: number; angle: number; phi: number; cohesion: number; gamma: number; waterRatio: number; surcharge: number; }
const initial: SlopeInput = { height: 8, angle: 35, phi: 30, cohesion: 8, gamma: 18, waterRatio: 0.25, surcharge: 10 };
function solveSlope(input: SlopeInput) {
  const beta = input.angle * Math.PI / 180;
  const phi = input.phi * Math.PI / 180;
  const resistingFriction = Math.tan(phi) / Math.max(0.1, Math.tan(beta));
  const cohesionTerm = input.cohesion / Math.max(1, input.gamma * input.height * Math.sin(beta) * Math.cos(beta));
  const waterPenalty = 1 - Math.min(0.45, input.waterRatio * 0.35);
  const surchargePenalty = 1 - Math.min(0.2, input.surcharge / 250);
  const fsFellenius = round((resistingFriction + cohesionTerm) * waterPenalty * surchargePenalty, 2);
  const fsBishop = round(fsFellenius * 1.08, 2);
  const status = fsBishop >= 1.5 ? 'ok' : 'warning';
  const recommendation = fsBishop < 1.3 ? 'Rever geometria, drenagem ou reforço' : fsBishop < 1.5 ? 'Verificar com método rigoroso' : 'Estabilidade preliminar aceitável';
  return { fsFellenius, fsBishop, status, recommendation, notes: ['Modelo simplificado para apoio académico.', 'Não substitui análise geotécnica com estratigrafia e superfície crítica real.'] };
}
function SlopeSketch({ input, fs }: { input: SlopeInput; fs: number }) {
  const topX = 330 - input.height * 8;
  const crestY = 60;
  const toeX = 100;
  const toeY = 195;
  const surfaceY = crestY + input.waterRatio * 110;
  return <svg className="beam-svg" viewBox="0 0 540 250" role="img" aria-label="Talude"><polygon points={`${toeX},${toeY} ${topX},${crestY} 450,${crestY} 450,${toeY}`} fill="#dfe7dc" stroke="#0d2538" strokeWidth="2"/><line x1="95" y1="195" x2="460" y2="195" stroke="#0d2538"/><line x1={topX} y1={surfaceY} x2="450" y2={surfaceY} stroke="#0ea5e9" strokeWidth="3" strokeDasharray="8 5"/><path d={`M ${toeX+12} ${toeY-8} C ${toeX+70} ${crestY+105}, ${topX+40} ${crestY+45}, ${topX+120} ${crestY+5}`} fill="none" stroke="#b42318" strokeWidth="3" strokeDasharray="7 5"/><text x="65" y="55">H={input.height} m</text><text x="65" y="82">β={input.angle}°</text><text x="65" y="109">FS≈{fs}</text><text x="305" y="220">superfície crítica indicativa</text></svg>;
}
export function SlopesPage() {
  const [input, setInput] = useState(initial);
  const result = useMemo(() => solveSlope(input), [input]);
  const set = (patch: Partial<SlopeInput>) => setInput({ ...input, ...patch });
  return <main className="page"><div className="page-title"><h1>Taludes</h1><span className={`status ${result.status}`}>{result.status === 'ok' ? 'Verifica preliminar' : 'Atenção'}</span></div><div className="workspace"><div className="workspace-main"><Card title="Dados"><div className="form-grid"><Field label="Altura" unit="m" value={input.height} onChange={(v) => set({ height: v })}/><Field label="Inclinação β" unit="graus" value={input.angle} onChange={(v) => set({ angle: v })}/><Field label="φ" unit="graus" value={input.phi} onChange={(v) => set({ phi: v })}/><Field label="Coesão c" unit="kPa" value={input.cohesion} onChange={(v) => set({ cohesion: v })}/><Field label="γ" unit="kN/m³" value={input.gamma} onChange={(v) => set({ gamma: v })}/><Field label="Água" unit="0-1" value={input.waterRatio} step={0.05} onChange={(v) => set({ waterRatio: v })}/><Field label="Sobrecarga" unit="kPa" value={input.surcharge} onChange={(v) => set({ surcharge: v })}/></div></Card><Card title="Modelo"><SlopeSketch input={input} fs={result.fsBishop}/></Card><Card title="Modo estudo"><ol className="steps"><li>Define-se a geometria do talude e parâmetros resistentes.</li><li>Estima-se um FS simplificado tipo Fellenius.</li><li>Aplica-se aproximação Bishop simplificada para comparação.</li><li>Interpreta-se o valor e define-se necessidade de estudo rigoroso.</li></ol></Card></div><aside className="result-panel"><h3>Resultados</h3><p><b>FS Fellenius:</b> {result.fsFellenius}</p><p><b>FS Bishop:</b> {result.fsBishop}</p><p><b>Recomendação:</b> {result.recommendation}</p>{result.notes.map(n => <p className="note" key={n}>{n}</p>)}</aside></div></main>;
}
