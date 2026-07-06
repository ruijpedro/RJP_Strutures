import type { FootingResult } from '../engine/FootingTypes';
export function FootingStudySteps({ result }: { result: FootingResult }) {
  return <ol className="steps"><li>Área da sapata: A = {result.areaM2} m².</li><li>Excentricidades: ex = {result.ex} m, ey = {result.ey} m.</li><li>Tensões de contacto: σmédia = {result.sigmaAvg} kPa, σmax = {result.sigmaMax} kPa, σmin = {result.sigmaMin} kPa.</li><li>Momentos de dimensionamento preliminares: Mx = {result.medX} kN.m/m, My = {result.medY} kN.m/m.</li><li>Armaduras preliminares: Asx = {result.asX} mm²/m, Asy = {result.asY} mm²/m.</li></ol>;
}
