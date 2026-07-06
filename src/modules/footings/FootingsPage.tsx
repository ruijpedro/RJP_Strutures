import { useMemo, useState } from 'react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { defaultFootingInput } from './examples/FootingExamples';
import { solveFooting } from './engine/FootingSolver';
import { FootingForm } from './components/FootingForm';
import { FootingSvg } from './graphics/FootingSvg';
import { FootingStudySteps } from './reports/FootingStudySteps';
export function FootingsPage() {
  const [input, setInput] = useState(defaultFootingInput);
  const result = useMemo(() => solveFooting(input), [input]);
  return <main className="page"><div className="page-title"><h1>Sapatas EC7/EC2</h1><span className={`status ${result.status}`}>{result.status === 'ok' ? 'Verifica preliminar' : 'Atenção'}</span></div><div className="workspace"><div className="workspace-main"><Card title="Dados"><FootingForm input={input} setInput={setInput}/></Card><Card title="Modelo gráfico"><FootingSvg input={input} result={result}/></Card><Card title="Modo estudo"><FootingStudySteps result={result}/></Card></div><aside className="result-panel"><h3>Resultados</h3><p><b>A:</b> {result.areaM2} m²</p><p><b>ex/ey:</b> {result.ex} / {result.ey} m</p><p><b>σmax:</b> {result.sigmaMax} kPa</p><p><b>σmin:</b> {result.sigmaMin} kPa</p><p><b>Mx/My:</b> {result.medX} / {result.medY} kN.m/m</p><p><b>Asx/Asy:</b> {result.asX} / {result.asY} mm²/m</p><p><b>Punç. prelim.:</b> {result.punchingDemand}</p>{result.notes.map(n => <p className="note" key={n}>{n}</p>)}<Button variant="secondary">Preparar relatório</Button></aside></div></main>;
}
