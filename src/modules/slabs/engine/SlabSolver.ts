import { round } from '../../../core/math';
import type { SlabInput, SlabResult } from './SlabTypes';

export function solveSlab(input: SlabInput): SlabResult {
  const short = Math.min(input.lxM, input.lyM);
  const long = Math.max(input.lxM, input.lyM);
  const ratio = long / Math.max(short, 0.1);
  const loadEd = 1.35 * input.permanentKnM2 + 1.5 * input.variableKnM2;
  const dM = Math.max(input.thicknessCm - input.coverCm - 0.6, 5) / 100;
  const oneWay = ratio > 2;
  const medMain = oneWay ? loadEd * short * short / 8 : loadEd * short * short / 12;
  const medSecondary = oneWay ? medMain * 0.2 : medMain * 0.65;
  const asMain = medMain * 1_000_000 / (0.87 * input.steelFyd * 0.9 * dM * 1000);
  const asSecondary = medSecondary * 1_000_000 / (0.87 * input.steelFyd * 0.9 * dM * 1000);
  const deflectionLimitMm = short * 1000 / 250;
  const estimatedDeflectionMm = loadEd * Math.pow(short, 4) / Math.max(18 * Math.pow(input.thicknessCm / 100, 3) * 10000, 1);
  const notes: string[] = [];
  if (oneWay) notes.push('Comportamento aproximado unidirecional. Armadura principal no menor vão.');
  else notes.push('Comportamento aproximado bidirecional. Verificar coeficientes conforme condições de bordo.');
  if (estimatedDeflectionMm > deflectionLimitMm) notes.push('Flecha estimada superior a L/250. Aumentar espessura ou reduzir vão.');
  return {
    ratio: round(ratio, 2),
    loadEd: round(loadEd, 2),
    mainDirection: oneWay ? (input.lxM <= input.lyM ? 'X' : 'Y') : 'Bidirecional',
    medX: round(input.lxM <= input.lyM ? medMain : medSecondary, 2),
    medY: round(input.lyM < input.lxM ? medMain : medSecondary, 2),
    asX: round(input.lxM <= input.lyM ? asMain : asSecondary, 0),
    asY: round(input.lyM < input.lxM ? asMain : asSecondary, 0),
    deflectionLimitMm: round(deflectionLimitMm, 1),
    estimatedDeflectionMm: round(estimatedDeflectionMm, 1),
    status: estimatedDeflectionMm <= deflectionLimitMm ? 'ok' : 'warning',
    notes
  };
}
