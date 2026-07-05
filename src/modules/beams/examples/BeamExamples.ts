import type { BeamInput } from '../engine/BeamTypes';

export const defaultBeamInput: BeamInput = {
  supportType: 'simplySupported', span: 5, widthCm: 25, heightCm: 50, coverCm: 3,
  g: 12, q: 6, pointLoad: 0, pointPosition: 2.5
};
