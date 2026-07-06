import type { PressureInput, PressureResult } from './PressureTypes';
const round = (n: number) => Math.round(n * 100) / 100;
export function solvePressures(i: PressureInput): PressureResult {
  const phiRad = i.phi * Math.PI / 180;
  const kaRankine = Math.pow(Math.tan(Math.PI / 4 - phiRad / 2), 2);
  const k0 = 1 - Math.sin(phiRad);
  const k = i.method === 'atRest' ? k0 : kaRankine;
  const activeForce = 0.5 * k * i.gamma * i.height * i.height;
  const surchargeForce = k * i.surcharge * i.height;
  const waterForce = 0.5 * 9.81 * i.waterHeight * i.waterHeight;
  const momentBase = activeForce * i.height / 3 + surchargeForce * i.height / 2 + waterForce * i.waterHeight / 3;
  const totalForce = activeForce + surchargeForce + waterForce;
  const resultantHeight = totalForce > 0 ? momentBase / totalForce : 0;
  return { ka: round(kaRankine), k0: round(k0), activeForce: round(activeForce), surchargeForce: round(surchargeForce), waterForce: round(waterForce), totalForce: round(totalForce), momentBase: round(momentBase), resultantHeight: round(resultantHeight), sigmaBase: round(k * i.gamma * i.height) };
}
