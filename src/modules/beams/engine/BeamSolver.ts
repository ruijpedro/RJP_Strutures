import { round } from '../../../core/math';
import type { BeamInput, BeamResult } from './BeamTypes';

export function solveBeam(input: BeamInput): BeamResult {
  const L = Math.max(input.span, 0.1);
  const w = 1.35 * input.g + 1.5 * input.q;
  const p = 1.5 * input.pointLoad;
  const a = Math.min(Math.max(input.pointPosition, 0), L);
  let reactionA = 0;
  let reactionB = 0;
  let momentMax = 0;

  if (input.supportType === 'cantilever') {
    reactionA = w * L + p;
    reactionB = 0;
    momentMax = w * L * L / 2 + p * a;
  } else if (input.supportType === 'fixedFixed') {
    reactionA = (w * L + p) / 2;
    reactionB = reactionA;
    momentMax = w * L * L / 12 + p * L / 8;
  } else if (input.supportType === 'proppedCantilever') {
    reactionA = 0.625 * w * L + 0.7 * p;
    reactionB = w * L + p - reactionA;
    momentMax = w * L * L / 8 + p * Math.min(a, L - a) / 2;
  } else if (input.supportType === 'continuous2') {
    reactionA = 0.375 * w * L + 0.5 * p;
    reactionB = 0.625 * w * L + 0.5 * p;
    momentMax = w * L * L / 10 + p * L / 6;
  } else {
    reactionA = w * L / 2 + p * (L - a) / L;
    reactionB = w * L / 2 + p * a / L;
    momentMax = w * L * L / 8 + p * a * (L - a) / L;
  }

  const d = Math.max(input.heightCm - input.coverCm - 1.6, 1) / 100;
  const z = 0.9 * d;
  const fyd = 500 / 1.15;
  const asRequired = (momentMax * 1e6) / (z * 1000 * fyd);
  const deflectionMm = (5 * (input.g + input.q) * Math.pow(L, 4)) / 384;
  const limit = (L * 1000) / 250;
  const notes = deflectionMm > limit ? ['Flecha preliminar acima de L/250.'] : ['Verificações preliminares sem alerta.'];

  return {
    loadEd: round(w), reactionA: round(reactionA), reactionB: round(reactionB),
    shearMax: round(Math.max(Math.abs(reactionA), Math.abs(reactionB))),
    momentMax: round(momentMax), deflectionMm: round(deflectionMm),
    asRequired: round(asRequired), status: deflectionMm > limit ? 'warning' : 'ok', notes
  };
}
