import { useMemo, useState } from 'react';
import { Card } from '../../ui/Card';
import { Field } from '../../ui/Field';
import { round } from '../../core/math';

interface CptInput { qc: number; fs: number; gamma: number; depth: number; }
const initial: CptInput = { qc: 8, fs: 80, gamma: 18, depth: 8 };
function solveCpt(input: CptInput) {
  const qcKpa = input.qc * 1000;
  const rf = round((input.fs / qcKpa) * 100, 2);
  const soil = rf < 1 ? 'areia limpa a arenosa' : rf < 3 ? 'areia siltosa / silte arenoso' : 'solo fino coesivo';
  const phi = round(Math.min(44, 24 + 4.5 * Math.log(Math.max(input.qc, 1))), 1);
  const eModulus = round(3.5 * input.qc, 1);
  const qaPrelim = round(qcKpa / 35, 0);
  return { rf, soil, phi, eModulus, qaPrelim, notes: ['Classificação CPT simplificada por Rf.', 'Correlações indicativas para apoio académico.'] };
}
function CptSketch({ input, rf }: { input: CptInput; rf: number }) {
  const qcWidth = Math.min(260, 30 + input.qc * 18);
  const fsWidth = Math.min(180, 30 + input.fs / 2);
  return <svg className="beam-svg" viewBox="0 0 540 240" role="img" aria-label="Gráfico CPT"><line x1="70" y1="30" x2="70" y2="205" stroke="#0d2538"/><line x1="70" y1="205" x2="430" y2="205" stroke="#0d2538"/><rect x="90" y="70" width={qcWidth} height="38" fill="#007a5a" opacity="0.75"/><rect x="90" y="130" width={fsWidth} height="38" fill="#0ea5e9" opacity="0.75"/><text x="90" y="62">qc = {input.qc} MPa</text><text x="90" y="124">fs = {input.fs} kPa</text><text x="90" y="190">Rf = {rf}%</text></svg>;
}
export function CptPage() {
  const [input, setInput] = useState(initial);
  const result = useMemo(() => solveCpt(input), [input]);
  const set = (patch: Partial<CptInput>) => setInput({ ...input, ...patch });
  return <main className="page"><div className="page-title"><h1>CPT</h1><span className="status ok">Interpretação preliminar</span></div><div className="workspace"><div className="workspace-main"><Card title="Dados"><div className="form-grid"><Field label="qc" unit="MPa" value={input.qc} onChange={(v) => set({ qc: v })}/><Field label="fs" unit="kPa" value={input.fs} onChange={(v) => set({ fs: v })}/><Field label="Profundidade" unit="m" value={input.depth} onChange={(v) => set({ depth: v })}/><Field label="Peso volúmico" unit="kN/m³" value={input.gamma} onChange={(v) => set({ gamma: v })}/></div></Card><Card title="Gráfico"><CptSketch input={input} rf={result.rf}/></Card><Card title="Modo estudo"><ol className="steps"><li>Calcula-se Rf = fs/qc.</li><li>Classifica-se o solo de forma simplificada.</li><li>Estimam-se φ, E e qa preliminar por correlações.</li></ol></Card></div><aside className="result-panel"><h3>Resultados</h3><p><b>Rf:</b> {result.rf}%</p><p><b>Tipo:</b> {result.soil}</p><p><b>φ:</b> {result.phi}°</p><p><b>E:</b> {result.eModulus} MPa</p><p><b>qa prelim.:</b> {result.qaPrelim} kPa</p>{result.notes.map(n => <p className="note" key={n}>{n}</p>)}</aside></div></main>;
}
