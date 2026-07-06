import { useMemo, useState } from 'react';
import { pressureExample } from './examples/PressureExamples';
import { solvePressures } from './engine/PressureSolver';
import { PressureForm } from './components/PressureForm';
import { PressureSvg } from './graphics/PressureSvg';
import { PressureStudySteps } from './reports/PressureStudySteps';
export function PressuresPage() {
  const [input, setInput] = useState(pressureExample);
  const result = useMemo(() => solvePressures(input), [input]);
  return <main className="page"><div className="page-title"><h1>Impulsos</h1><span className="status ok">EC7 preliminar</span></div><div className="workspace"><div className="workspace-main"><PressureForm value={input} onChange={setInput}/><div className="card"><h3>Diagrama</h3><PressureSvg input={input} result={result}/></div><PressureStudySteps input={input} result={result}/></div><aside className="result-panel"><h3>Resultados</h3><p>Ka: <strong>{result.ka}</strong></p><p>K0: <strong>{result.k0}</strong></p><p>Eatot: <strong>{result.totalForce} kN/m</strong></p><p>Mbase: <strong>{result.momentBase} kNm/m</strong></p><p>Resultante: <strong>{result.resultantHeight} m</strong></p><p className="note">Ferramenta académica para apoio preliminar.</p></aside></div></main>;
}
