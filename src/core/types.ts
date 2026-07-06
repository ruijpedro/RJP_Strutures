export type ModuleKey = 'dashboard' | 'beams' | 'columns' | 'slabs' | 'footings' | 'pressures' | 'retainingWalls' | 'spt' | 'cpt' | 'slopes' | 'library';
export type BeamSupportType = 'simplySupported' | 'cantilever' | 'fixedFixed' | 'proppedCantilever' | 'continuous2';

export interface ProjectInfo {
  name: string;
  author: string;
  purpose: string;
}
