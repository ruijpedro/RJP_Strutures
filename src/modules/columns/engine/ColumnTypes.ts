export interface ColumnInput {
  heightM: number;
  bxCm: number;
  byCm: number;
  nedKn: number;
  medKnM: number;
  concreteFck: number;
  steelFyd: number;
  coverCm: number;
  barDiameterMm: number;
}

export interface ColumnResult {
  areaCm2: number;
  slenderness: number;
  eccentricityCm: number;
  stressMpa: number;
  asMinMm2: number;
  asRequiredMm2: number;
  suggestedBars: string;
  utilization: number;
  status: 'ok' | 'warning';
  notes: string[];
}
