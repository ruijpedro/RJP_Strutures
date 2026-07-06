export interface ManningInput { width: number; depth: number; slope: number; n: number; }
export interface ManningResult { area: number; perimeter: number; radius: number; flow: number; velocity: number; }
export function solveRectangularManning(input: ManningInput): ManningResult {
  const area = input.width * input.depth;
  const perimeter = input.width + 2 * input.depth;
  const radius = perimeter > 0 ? area / perimeter : 0;
  const flow = (1 / input.n) * area * Math.pow(radius, 2 / 3) * Math.sqrt(input.slope);
  const velocity = area > 0 ? flow / area : 0;
  return { area, perimeter, radius, flow, velocity };
}
export function classifyFlowVelocity(v: number): 'Baixa' | 'Normal' | 'Elevada' {
  if (v < 0.6) return 'Baixa';
  if (v <= 3.0) return 'Normal';
  return 'Elevada';
}
export const roughnessTable = [
  { material: 'Betão liso', n: 0.013 },
  { material: 'Alvenaria regular', n: 0.017 },
  { material: 'Terra regularizada', n: 0.025 },
  { material: 'Canal com vegetação', n: 0.035 }
];
