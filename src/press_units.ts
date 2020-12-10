import round from './rounding';

// hPa -> inHg (@0°C)
export const hpa2inhg = (val: number, decimals?: number) => round(val * 0.029528744, decimals || 3);

// hPa -> kPa
export const hpa2kpa = (val: number, decimals?: number) => round(val / 10, decimals || 2);

// inHg -> hPa (@0°C)
export const inhg2hpa = (val: number, decimals?: number) => round(val / 0.029528744, decimals || 1);

// inHg -> kpa
export const inhg2kpa = (val: number, decimals?: number) => hpa2kpa(inhg2hpa(val, decimals), decimals);

// kPa -> hPa
export const kpa2hpa = (val: number, decimals?: number) => round(val * 10, decimals || 1);

// kpa -> inHg
export const kpa2inhg = (val: number, decimals?: number) => hpa2inhg(kpa2hpa(val, decimals), decimals);
