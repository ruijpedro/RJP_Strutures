import type { PressureInput, PressureResult } from '../engine/PressureTypes';
export function PressureStudySteps({ input, result }: { input: PressureInput; result: PressureResult }) {
  return <div className="card"><h3>Modo estudo</h3><ol className="steps"><li>Determina-se o coeficiente: Ka={result.ka}, K0={result.k0}.</li><li>Impulso do solo: 0,5 × K × γ × H² = {result.activeForce} kN/m.</li><li>Sobrecarga: K × q × H = {result.surchargeForce} kN/m.</li><li>Água: {input.waterHeight > 0 ? `${result.waterForce} kN/m` : 'sem pressão hidrostática'}.</li><li>Momento na base: {result.momentBase} kNm/m.</li></ol></div>;
}
