import { useMemo, useState } from 'react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { defaultBeamInput } from './examples/BeamExamples';
import { solveBeam } from './engine/BeamSolver';
import { BeamForm } from './components/BeamForm';
import { BeamSvg } from './graphics/BeamSvg';
import { BeamStudySteps } from './reports/BeamStudySteps';

export function BeamsPage() {
  const [input, setInput] = useState(defaultBeamInput);
  const result = useMemo(() => solveBeam(input), [input]);
  return <main className="page"><div className="page-title"><h1>Vigas EC2</h1><span className={`status ${result.status}`}>{result.status === 'ok' ? 'Verifica preliminar' : 'Atenção'}</span></div>
    <div className="workspace"><div className="workspace-main"><Card title="Dados"><BeamForm input={input} setInput={setInput}/></Card><Card title="Modelo gráfico"><BeamSvg input={input} result={result}/></Card><Card title="Modo estudo"><BeamStudySteps result={result}/></Card></div>
    <aside className="result-panel"><h3>Resultados</h3><p><b>qEd:</b> {result.loadEd} kN/m</p><p><b>RA:</b> {result.reactionA} kN</p><p><b>RB:</b> {result.reactionB} kN</p><p><b>VEd,max:</b> {result.shearMax} kN</p><p><b>MEd,max:</b> {result.momentMax} kN.m</p><p><b>Flecha:</b> {result.deflectionMm} mm</p><p><b>As req.:</b> {result.asRequired} mm²</p>{result.notes.map(n => <p className="note" key={n}>{n}</p>)}<Button variant="secondary">Preparar relatório</Button></aside></div></main>;
}
