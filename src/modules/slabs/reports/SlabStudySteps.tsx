import type { SlabResult } from '../engine/SlabTypes';
export function SlabStudySteps({ result }: { result: SlabResult }) {
  return <ol className="steps"><li>Determinar relação de vãos Ly/Lx = {result.ratio}.</li><li>Calcular carga de dimensionamento qEd = 1.35Gk + 1.5Qk = {result.loadEd} kN/m².</li><li>Definir comportamento: {result.mainDirection}.</li><li>Estimar momentos Mx = {result.medX} kN.m/m e My = {result.medY} kN.m/m.</li><li>Calcular armaduras preliminares Asx = {result.asX} mm²/m e Asy = {result.asY} mm²/m.</li></ol>;
}
