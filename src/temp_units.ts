import round from './rounding';

const DEF_PRECISION = 2;

/* ***  FROM CELSIUS  *** */
// C -> F
export const c2f = (val: number, decimals?: number) => round((val * 9) / 5 + 32, decimals || DEF_PRECISION);

// C -> K
export const c2k = (val: number, decimals?: number) => round(val + 273.15, decimals || DEF_PRECISION);

/* ***  FROM FAHRENHEIT  *** */
// F -> C
export const f2c = (val: number, decimals?: number) => round(((val - 32) * 5) / 9, decimals || DEF_PRECISION);

// F -> K
export const f2k = (val: number, decimals?: number) => c2k(f2c(val, decimals), decimals);

/* ***  FROM KELVIN  *** */
// K -> C
export const k2c = (val: number, decimals?: number) => round(val - 273.15, decimals || DEF_PRECISION);

// K -> F
export const k2f = (val: number, decimals?: number) => c2f(k2c(val, decimals), decimals);
