export interface SlabInput {
  lxM: number;
  lyM: number;
  thicknessCm: number;
  permanentKnM2: number;
  variableKnM2: number;
  concreteFck: number;
  steelFyd: number;
  coverCm: number;
}
export interface SlabResult {
  ratio: number;
  loadEd: number;
  mainDirection: 'X' | 'Y' | 'Bidirecional';
  medX: number;
  medY: number;
  asX: number;
  asY: number;
  deflectionLimitMm: number;
  estimatedDeflectionMm: number;
  status: 'ok' | 'warning';
  notes: string[];
}
