export type ModuleKey = 'dashboard' | 'beams' | 'library';
export type BeamSupportType = 'simplySupported' | 'cantilever' | 'fixedFixed' | 'proppedCantilever' | 'continuous2';

export interface ProjectInfo {
  name: string;
  author: string;
  purpose: string;
}
