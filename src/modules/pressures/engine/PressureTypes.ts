export type PressureMethod = 'rankine' | 'atRest';
export interface PressureInput { height: number; gamma: number; phi: number; surcharge: number; waterHeight: number; method: PressureMethod; }
export interface PressureResult { ka: number; k0: number; activeForce: number; surchargeForce: number; waterForce: number; totalForce: number; momentBase: number; resultantHeight: number; sigmaBase: number; }
