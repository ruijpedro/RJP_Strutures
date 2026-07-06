import { round } from '../../../core/math';
import type { FootingInput, FootingResult } from './FootingTypes';
export function solveFooting(input: FootingInput): FootingResult {
  const areaM2 = input.lengthM * input.widthM;
  const ex = input.nedKn > 0 ? input.myKnM / input.nedKn : 0;
  const ey = input.nedKn > 0 ? input.mxKnM / input.nedKn : 0;
  const sigmaAvg = input.nedKn / Math.max(areaM2, 0.01);
  const sigmaMax = sigmaAvg * (1 + 6 * Math.abs(ex) / input.lengthM + 6 * Math.abs(ey) / input.widthM);
  const sigmaMin = sigmaAvg * (1 - 6 * Math.abs(ex) / input.lengthM - 6 * Math.abs(ey) / input.widthM);
  const cantX = Math.max((input.lengthM - input.columnX) / 2, 0.1);
  const cantY = Math.max((input.widthM - input.columnY) / 2, 0.1);
  const medX = sigmaMax * cantX * cantX / 2;
  const medY = sigmaMax * cantY * cantY / 2;
  const dMm = Math.max(input.thicknessM * 1000 - 70, 100);
  const asX = medX * 1_000_000 / (0.87 * input.steelFyd * 0.9 * dMm);
  const asY = medY * 1_000_000 / (0.87 * input.steelFyd * 0.9 * dMm);
  const punchingDemand = input.nedKn / Math.max(2 * (input.columnX + input.columnY + 2 * input.thicknessM) * dMm / 1000, 1);
  const notes: string[] = [];
  if (sigmaMax > input.soilQadmKpa) notes.push('σmax excede qadm. Aumentar dimensões ou reduzir excentricidade.');
  if (sigmaMin < 0) notes.push('σmin negativo: há perda de contacto no solo.');
  if (punchingDemand > 700) notes.push('Punçoamento preliminar elevado. Verificar com EC2.');
  if (!notes.length) notes.push('Sapata verifica preliminarmente à tensão admissível e contacto.');
  return { areaM2: round(areaM2, 2), ex: round(ex, 3), ey: round(ey, 3), sigmaAvg: round(sigmaAvg, 1), sigmaMax: round(sigmaMax, 1), sigmaMin: round(sigmaMin, 1), medX: round(medX, 2), medY: round(medY, 2), asX: round(asX, 0), asY: round(asY, 0), punchingDemand: round(punchingDemand, 1), status: notes.some(n => n.includes('excede') || n.includes('negativo')) ? 'warning' : 'ok', notes };
}
