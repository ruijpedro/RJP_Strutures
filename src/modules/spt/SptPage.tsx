import { useMemo, useState } from 'react';
import { Card } from '../../ui/Card';
import { Field } from '../../ui/Field';
import { round } from '../../core/math';

interface SptInput { n1: number; n2: number; n3: number; depth: number; gamma: number; groundwater: number; }
const initial: SptInput = { n1: 8, n2: 12, n3: 14, depth: 6, gamma: 18, groundwater: 3 };

function solveSpt(input: SptInput) {
  const nSpt = input.n2 + input.n3;
  const overburden = input.gamma * input.depth;
  const cn = Math.min(1.7, Math.max(0.6, Math.sqrt(100 / Math.max(overburden, 25))));
  const nCorr = round(nSpt * cn, 1);
  const phi = round(Math.min(42, 27 + 0.3 * nCorr), 1);
  const eModulus = round(2.5 * nCorr, 1);
  const density = nCorr < 10 ? 'solto' : nCorr < 30 ? 'medianamente compacto' : 'compacto';
  const notes = [
    'Correlação académica simplificada: N = N20 + N30.',
    'φ e E são valores indicativos para estudo e pré-análise.'
  ];
  return { nSpt, overburden: round(overburden), cn: round(cn, 2), nCorr, phi, eModulus, density, notes };
}

function SptSketch({ input, nCorr }: { input: SptInput; nCorr: number }) {
  const depthY = Math.min(180, 30 + input.depth * 18);
  const waterY = Math.min(190, 30 + input.groundwater * 18);
  return <svg className="beam-svg" viewBox="0 0 520 240" role="img" aria-label="Perfil SPT">
    <rect x="60" y="25" width="130" height="180" fill="#eef4f6" stroke="#0d2538"/>
    <line x1="60" y1={waterY} x2="190" y2={waterY} stroke="#0ea5e9" strokeWidth="3"/>
    <line x1="125" y1="25" x2="125" y2={depthY} stroke="#007a5a" strokeWidth="5"/>
    <circle cx="125" cy={depthY} r="10" fill="#007a5a"/>
    <text x="210" y="55">SPT a {input.depth} m</text>
    <text x="210" y="90">Ncorr = {nCorr}</text>
    <text x="210" y="125">Nível freático = {input.groundwater} m</text>
    <text x="210" y="160">γ = {input.gamma} kN/m³</text>
  </svg>;
}

export function SptPage() {
  const [input, setInput] = useState(initial);
  const result = useMemo(() => solveSpt(input), [input]);
  const set = (patch: Partial<SptInput>) => setInput({ ...input, ...patch });
  return <main className="page"><div className="page-title"><h1>SPT</h1><span className="status ok">Geotecnia preliminar</span></div><div className="workspace"><div className="workspace-main"><Card title="Dados"><div className="form-grid"><Field label="N10" value={input.n1} onChange={(v) => set({ n1: v })}/><Field label="N20" value={input.n2} onChange={(v) => set({ n2: v })}/><Field label="N30" value={input.n3} onChange={(v) => set({ n3: v })}/><Field label="Profundidade" unit="m" value={input.depth} onChange={(v) => set({ depth: v })}/><Field label="Peso volúmico" unit="kN/m³" value={input.gamma} onChange={(v) => set({ gamma: v })}/><Field label="Nível freático" unit="m" value={input.groundwater} onChange={(v) => set({ groundwater: v })}/></div></Card><Card title="Perfil"><SptSketch input={input} nCorr={result.nCorr}/></Card><Card title="Modo estudo"><ol className="steps"><li>Calcula-se N<sub>SPT</sub> = N20 + N30.</li><li>Estima-se a tensão vertical efetiva simplificada.</li><li>Aplica-se uma correção indicativa Cn.</li><li>Obtêm-se φ e E por correlação académica.</li></ol></Card></div><aside className="result-panel"><h3>Resultados</h3><p><b>NSPT:</b> {result.nSpt}</p><p><b>σv:</b> {result.overburden} kPa</p><p><b>Cn:</b> {result.cn}</p><p><b>Ncorr:</b> {result.nCorr}</p><p><b>φ:</b> {result.phi}°</p><p><b>E:</b> {result.eModulus} MPa</p><p><b>Estado:</b> {result.density}</p>{result.notes.map(n => <p className="note" key={n}>{n}</p>)}</aside></div></main>;
}
