import { useMemo, useState } from 'react';
import { Card } from '../../../ui/Card';
import { Field } from '../../../ui/Field';

type Input = { height: number; length: number; spacing: number; factor: number };

function solve(input: Input) {
  const area = Math.max(input.height * input.length, 0);
  const count = Math.max(Math.ceil(area / Math.max(input.spacing * input.spacing, 0.25)), 1);
  const capacity = Math.round((input.length * input.factor * 18 + input.height * 8) * 10) / 10;
  const quantity = Math.round(area * input.factor * 100) / 100;
  const status = capacity > input.height * 20 ? 'Verifica preliminarmente' : 'Rever parâmetros';
  return { area, count, capacity, quantity, status };
}

function Sketch({ input }: { input: Input }) {
  const n = Math.min(6, Math.max(2, Math.round(input.height / Math.max(input.spacing, 1))));
  return <svg className="beam-svg" viewBox="0 0 520 260" role="img" aria-label="Desenho Barreiras dinâmicas">
    <polygon points="70,220 360,220 450,60 70,60" fill="#edf5f4" stroke="#0d2538" strokeWidth="2"/>
    <line x1="80" y1="220" x2="455" y2="220" stroke="#0d2538" strokeWidth="3"/>
    {Array.from({ length: n }).map((_,i)=>{ const y=80+i*(125/(n-1)); return <g key={i}><line x1="150" y1={y} x2="380" y2={y+22} stroke="#007a5a" strokeWidth="4"/><circle cx="148" cy={y} r="5" fill="#007a5a"/></g> })}
    <text x="82" y="42" fontWeight="700">🛡 Barreiras dinâmicas</text>
    <text x="82" y="244">H={input.height} m · L={input.length} m</text>
  </svg>;
}

export function BarriersPage() {
  const [input, setInput] = useState<Input>({ height: 8, length: 10, spacing: 1.5, factor: 1.2 });
  const result = useMemo(() => solve(input), [input]);
  const set = (key: keyof Input, value: number) => setInput(prev => ({ ...prev, [key]: value }));
  return <section className="page">
    <div className="page-title"><h1>🛡 Barreiras dinâmicas</h1><span className={result.status.startsWith('Verifica') ? 'status ok' : 'status warning'}>{result.status}</span></div>
    <div className="workspace">
      <div className="workspace-main">
        <Card title="Dados">
          <p className="muted">Seleção preliminar de barreiras dinâmicas por energia e comprimento.</p>
          <div className="form-grid">
            <Field label="Altura H (m)" value={input.height} onChange={v=>set('height', v)} />
            <Field label="Comprimento / frente (m)" value={input.length} onChange={v=>set('length', v)} />
            <Field label="Espaçamento / malha (m)" value={input.spacing} onChange={v=>set('spacing', v)} />
            <Field label="Coeficiente técnico" value={input.factor} onChange={v=>set('factor', v)} />
          </div>
        </Card>
        <Card title="Esquema técnico"><Sketch input={input} /></Card>
        <Card title="Modo estudo"><ol className="steps"><li>Definir geometria e condições locais.</li><li>Escolher espaçamento, comprimento e coeficientes de segurança.</li><li>Calcular quantidades e capacidade preliminar.</li><li>Confirmar em projeto/verificação técnica antes de aplicar em obra.</li></ol></Card>
      </div>
      <aside className="result-panel">
        <h3>Resultados</h3>
        <p>Área: <strong>{result.area.toFixed(2)} m²</strong></p>
        <p>N.º elementos: <strong>{result.count}</strong></p>
        <p>Capacidade preliminar: <strong>{result.capacity} kN</strong></p>
        <p>energia: <strong>{result.quantity.toFixed(2)} kJ</strong></p>
        <p className="note">Uso académico e apoio técnico. Não substitui projeto ou validação regulamentar.</p>
      </aside>
    </div>
  </section>;
}
