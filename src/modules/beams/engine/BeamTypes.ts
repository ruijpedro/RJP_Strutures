import type { BeamSupportType as CoreBeamSupportType } from '../../../core/types';
export type BeamSupportType = CoreBeamSupportType;

export interface BeamInput {
  supportType: BeamSupportType;
  span: number;
  widthCm: number;
  heightCm: number;
  coverCm: number;
  g: number;
  q: number;
  pointLoad: number;
  pointPosition: number;
}

export interface BeamResult {
  loadEd: number;
  reactionA: number;
  reactionB: number;
  shearMax: number;
  momentMax: number;
  deflectionMm: number;
  asRequired: number;
  status: 'ok' | 'warning';
  notes: string[];
}
