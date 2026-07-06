import type { WallResult } from '../engine/WallTypes';
export function WallStudySteps({ result }: { result: WallResult }) {
  return <div className="card"><h3>Modo estudo</h3><ol className="steps"><li>Calcula-se Ka e o impulso ativo total: {result.activeForce} kN/m.</li><li>Calcula-se o momento derrubante na base: {result.overturningMoment} kNm/m.</li><li>Calculam-se pesos estabilizantes: muro {result.wallWeight} kN/m e solo {result.soilWeight} kN/m.</li><li>Verificações: FS derrubamento {result.fsOverturning}; FS deslizamento {result.fsSliding}.</li><li>Tensões no solo: σmax {result.sigmaMax} kPa; σmin {result.sigmaMin} kPa.</li></ol></div>;
}
