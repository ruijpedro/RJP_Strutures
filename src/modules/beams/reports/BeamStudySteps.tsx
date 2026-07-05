import type { BeamResult } from '../engine/BeamTypes';

export function BeamStudySteps({ result }: { result: BeamResult }) {
  return <ol className="steps"><li>Definir apoios e ações características.</li><li>Aplicar combinação ELU simplificada: 1.35G + 1.50Q.</li><li>Calcular reações: RA = {result.reactionA} kN, RB = {result.reactionB} kN.</li><li>Obter VEd,max = {result.shearMax} kN e MEd,max = {result.momentMax} kN.m.</li><li>Pré-dimensionar armadura: As,req = {result.asRequired} mm².</li></ol>;
}
