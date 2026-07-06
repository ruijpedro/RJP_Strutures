import { useMemo, useState } from 'react';
import { Card } from '../../../ui/Card';
import { Field } from '../../../ui/Field';
import { HydraulicCanvas } from '../HydraulicCanvas';
import { classifyFlowVelocity, roughnessTable, solveRectangularManning } from '../common';

export function ChannelsPage() {
  const [width, setWidth] = useState(1.2);
  const [depth, setDepth] = useState(0.45);
  const [slope, setSlope] = useState(0.01);
  const [n, setN] = useState(0.025);
  const result = useMemo(() => solveRectangularManning({ width, depth, slope, n }), [width, depth, slope, n]);
  const velocityClass = classifyFlowVelocity(result.velocity);
  return <main className="page"><div className="page-title"><h1>Valetas / canais</h1><span className={`status ${velocityClass === 'Elevada' ? 'warning' : 'ok'}`}>{velocityClass}</span></div>
    <div className="workspace"><div className="workspace-main">
      <Card title="Dados"><p>Cálculo preliminar de valetas e canais retangulares pela fórmula de Manning.</p><div className="form-grid">
        <Field label="Largura / diâmetro equivalente (m)" value={width} onChange={setWidth} />
        <Field label="Altura útil / lâmina (m)" value={depth} onChange={setDepth} />
        <Field label="Declive i (m/m)" value={slope} onChange={setSlope} step={0.001} />
        <Field label="Rugosidade n" value={n} onChange={setN} step={0.001} />
      </div></Card>
      <Card title="Desenho hidráulico"><HydraulicCanvas title="Valetas / canais" result={result} mode="channel" /></Card>
      <Card title="Modo estudo"><ol className="steps"><li>Calcula-se a área molhada A.</li><li>Calcula-se o perímetro molhado P.</li><li>Obtém-se o raio hidráulico R=A/P.</li><li>Aplica-se Manning: Q=(1/n)·A·R^(2/3)·i^(1/2).</li></ol></Card>
    </div><aside className="result-panel"><h3>Resultados</h3><p>A = {result.area.toFixed(3)} m²</p><p>P = {result.perimeter.toFixed(3)} m</p><p>R = {result.radius.toFixed(3)} m</p><p>Q = {result.flow.toFixed(3)} m³/s</p><p>v = {result.velocity.toFixed(2)} m/s</p><div className="note">Valores preliminares para apoio académico e técnico.</div></aside></div>
    <Card title="Rugosidades de referência"><div className="table-list">{roughnessTable.map(r => <div key={r.material}><strong>{r.material}</strong><span>n = {r.n}</span></div>)}</div></Card>
  </main>;
}
