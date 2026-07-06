import { useMemo, useState } from 'react';
import { wallExample } from './examples/WallExamples';
import { solveWall } from './engine/WallSolver';
import { WallForm } from './components/WallForm';
import { WallSvg } from './graphics/WallSvg';
import { WallStudySteps } from './reports/WallStudySteps';
export function RetainingWallsPage() {
  const [input, setInput] = useState(wallExample);
  const result = useMemo(() => solveWall(input), [input]);
  return <main className="page"><div className="page-title"><h1>Muros</h1><span className={`status ${result.status === 'ok' ? 'ok' : 'warning'}`}>{result.status === 'ok' ? 'Verifica preliminar' : 'Rever'}</span></div><div className="workspace"><div className="workspace-main"><WallForm value={input} onChange={setInput}/><div className="card"><h3>Desenho técnico</h3><WallSvg input={input} result={result}/></div><WallStudySteps result={result}/></div><aside className="result-panel"><h3>Resultados</h3><p>Ka: <strong>{result.ka}</strong></p><p>FS derr.: <strong>{result.fsOverturning}</strong></p><p>FS desl.: <strong>{result.fsSliding}</strong></p><p>σmax: <strong>{result.sigmaMax} kPa</strong></p><p>σmin: <strong>{result.sigmaMin} kPa</strong></p><p>e: <strong>{result.eccentricity} m</strong></p><p className="note">Pré-dimensionamento académico. Validar sempre antes de uso técnico.</p></aside></div></main>;
}
