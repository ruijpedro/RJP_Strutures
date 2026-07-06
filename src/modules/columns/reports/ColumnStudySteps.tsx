import type { ColumnResult } from '../engine/ColumnTypes';

export function ColumnStudySteps({ result }: { result: ColumnResult }) {
  return <ol className="steps">
    <li>Calcular área bruta da secção: Ac = b × h = {result.areaCm2} cm².</li>
    <li>Determinar tensão média σ = NEd / Ac = {result.stressMpa} MPa.</li>
    <li>Avaliar esbelteza λ = l0 / i = {result.slenderness}.</li>
    <li>Estimar excentricidade e = MEd / NEd = {result.eccentricityCm} cm.</li>
    <li>Definir armadura mínima e preliminar: As = {result.asRequiredMm2} mm².</li>
  </ol>;
}
