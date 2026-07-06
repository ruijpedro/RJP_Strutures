import { round } from '../../../core/math';
import type { ColumnInput, ColumnResult } from './ColumnTypes';

export function solveColumn(input: ColumnInput): ColumnResult {
  const areaCm2 = input.bxCm * input.byCm;
  const areaMm2 = areaCm2 * 100;
  const iCm = Math.min(input.bxCm, input.byCm) / Math.sqrt(12);
  const slenderness = input.heightM * 100 / Math.max(iCm, 0.01);
  const eccentricityCm = input.nedKn > 0 ? (input.medKnM / input.nedKn) * 100 : 0;
  const stressMpa = (input.nedKn * 1000) / Math.max(areaMm2, 1);
  const asMinMm2 = Math.max(0.002 * areaMm2, 4 * Math.PI * Math.pow(input.barDiameterMm, 2) / 4);
  const designCapacityKn = 0.45 * input.concreteFck * areaMm2 / 1000;
  const utilization = input.nedKn / Math.max(designCapacityKn, 1) + Math.abs(input.medKnM) / Math.max(input.nedKn * Math.min(input.bxCm, input.byCm) / 600, 1);
  const asRequiredMm2 = Math.max(asMinMm2, asMinMm2 * utilization * 0.85);
  const barArea = Math.PI * Math.pow(input.barDiameterMm, 2) / 4;
  const nBars = Math.max(4, Math.ceil(asRequiredMm2 / barArea));
  const notes: string[] = [];
  if (slenderness > 70) notes.push('Pilar esbelto: recomenda-se verificação de 2.ª ordem.');
  if (utilization > 1) notes.push('Utilização preliminar superior a 1. Aumentar secção, betão ou armadura.');
  if (eccentricityCm > Math.min(input.bxCm, input.byCm) / 6) notes.push('Excentricidade elevada. Verificar flexocompressão com maior rigor.');
  if (!notes.length) notes.push('Verificação preliminar sem alertas principais.');
  return {
    areaCm2: round(areaCm2, 1),
    slenderness: round(slenderness, 1),
    eccentricityCm: round(eccentricityCm, 1),
    stressMpa: round(stressMpa, 2),
    asMinMm2: round(asMinMm2, 0),
    asRequiredMm2: round(asRequiredMm2, 0),
    suggestedBars: `${nBars} Ø${input.barDiameterMm}`,
    utilization: round(utilization, 2),
    status: utilization <= 1 && slenderness <= 70 ? 'ok' : 'warning',
    notes
  };
}
