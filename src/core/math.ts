export const round = (value: number, digits = 2): number => Number(value.toFixed(digits));
export const clamp = (value: number, min: number, max: number): number => Math.max(min, Math.min(max, value));
