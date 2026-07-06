import { useMemo, useState } from 'react';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { defaultColumnInput } from './examples/ColumnExamples';
import { solveColumn } from './engine/ColumnSolver';
import { ColumnForm } from './components/ColumnForm';
import { ColumnSvg } from './graphics/ColumnSvg';
import { ColumnStudySteps } from './reports/ColumnStudySteps';

export function ColumnsPage() {
  const [input, setInput] = useState(defaultColumnInput);
  const result = useMemo(() => solveColumn(input), [input]);
  return <main className="page"><div className="page-title"><h1>Pilares EC2</h1><span className={`status ${result.status}`}>{result.status === 'ok' ? 'Verifica preliminar' : 'Atenção'}</span></div>
    <div className="workspace"><div className="workspace-main"><Card title="Dados"><ColumnForm input={input} setInput={setInput}/></Card><Card title="Modelo gráfico"><ColumnSvg input={input} result={result}/></Card><Card title="Modo estudo"><ColumnStudySteps result={result}/></Card></div>
    <aside className="result-panel"><h3>Resultados</h3><p><b>Ac:</b> {result.areaCm2} cm²</p><p><b>λ:</b> {result.slenderness}</p><p><b>e:</b> {result.eccentricityCm} cm</p><p><b>σ:</b> {result.stressMpa} MPa</p><p><b>As mín.:</b> {result.asMinMm2} mm²</p><p><b>As req.:</b> {result.asRequiredMm2} mm²</p><p><b>Sugestão:</b> {result.suggestedBars}</p>{result.notes.map(n => <p className="note" key={n}>{n}</p>)}<Button variant="secondary">Preparar relatório</Button></aside></div></main>;
}
