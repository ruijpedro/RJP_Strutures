import type { WallInput, WallResult } from './WallTypes';
const r = (n: number) => Math.round(n * 100) / 100;
export function solveWall(i: WallInput): WallResult {
  const phiRad = i.phi * Math.PI / 180;
  const ka = Math.pow(Math.tan(Math.PI / 4 - phiRad / 2), 2);
  const activeForce = 0.5 * ka * i.gammaSoil * i.height * i.height + ka * i.surcharge * i.height;
  const overturningMoment = (0.5 * ka * i.gammaSoil * i.height * i.height) * i.height / 3 + (ka * i.surcharge * i.height) * i.height / 2;
  const baseThickness = Math.max(0.35, i.height * 0.1);
  const wallWeight = i.concreteUnitWeight * (i.stemThickness * i.height + i.baseWidth * baseThickness);
  const soilWeight = i.gammaSoil * i.heel * i.height;
  const verticalLoad = wallWeight + soilWeight;
  const resistingMoment = wallWeight * (i.baseWidth / 2) + soilWeight * (i.toe + i.stemThickness + i.heel / 2);
  const fsOverturning = resistingMoment / Math.max(overturningMoment, 0.01);
  const fsSliding = verticalLoad * i.frictionCoeff / Math.max(activeForce, 0.01);
  const x = (resistingMoment - overturningMoment) / Math.max(verticalLoad, 0.01);
  const eccentricity = i.baseWidth / 2 - x;
  const sigmaAvg = verticalLoad / i.baseWidth;
  const sigmaMax = sigmaAvg * (1 + 6 * eccentricity / i.baseWidth);
  const sigmaMin = sigmaAvg * (1 - 6 * eccentricity / i.baseWidth);
  const status = fsSliding >= 1.5 && fsOverturning >= 1.5 && sigmaMax <= i.bearingCapacity && sigmaMin >= 0 ? 'ok' : 'warning';
  return { ka: r(ka), activeForce: r(activeForce), overturningMoment: r(overturningMoment), wallWeight: r(wallWeight), soilWeight: r(soilWeight), resistingMoment: r(resistingMoment), verticalLoad: r(verticalLoad), eccentricity: r(eccentricity), sigmaMax: r(sigmaMax), sigmaMin: r(sigmaMin), fsSliding: r(fsSliding), fsOverturning: r(fsOverturning), status };
}
