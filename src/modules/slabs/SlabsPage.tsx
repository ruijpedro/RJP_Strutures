import { useMemo, useState } from 'react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { defaultSlabInput } from './examples/SlabExamples';
import { solveSlab } from './engine/SlabSolver';
import { SlabForm } from './components/SlabForm';
import { SlabSvg } from './graphics/SlabSvg';
import { SlabStudySteps } from './reports/SlabStudySteps';
export function SlabsPage() {
  const [input, setInput] = useState(defaultSlabInput);
  const result = useMemo(() => solveSlab(input), [input]);
  return <main className="page"><div className="page-title"><h1>Lajes EC2</h1><span className={`status ${result.status}`}>{result.status === 'ok' ? 'Verifica preliminar' : 'Atenção'}</span></div><div className="workspace"><div className="workspace-main"><Card title="Dados"><SlabForm input={input} setInput={setInput}/></Card><Card title="Modelo gráfico"><SlabSvg input={input} result={result}/></Card><Card title="Modo estudo"><SlabStudySteps result={result}/></Card></div><aside className="result-panel"><h3>Resultados</h3><p><b>qEd:</b> {result.loadEd} kN/m²</p><p><b>Direção:</b> {result.mainDirection}</p><p><b>Mx:</b> {result.medX} kN.m/m</p><p><b>My:</b> {result.medY} kN.m/m</p><p><b>Asx:</b> {result.asX} mm²/m</p><p><b>Asy:</b> {result.asY} mm²/m</p><p><b>Flecha:</b> {result.estimatedDeflectionMm} / {result.deflectionLimitMm} mm</p>{result.notes.map(n => <p className="note" key={n}>{n}</p>)}<Button variant="secondary">Preparar relatório</Button></aside></div></main>;
}
