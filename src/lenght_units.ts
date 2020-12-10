import round from './rounding';

const DEF_PRECISION = 2;

/* ***  FROM METRIC UNITS  *** */
// mm -> inches
export const mm2in = (val: number, decimals?: number) => round(val / 25.4, decimals || DEF_PRECISION);

// m -> ft
export const m2ft = (val: number, decimals?: number) => round(val * 3.2808398950131, decimals || DEF_PRECISION);

// km -> miles
// export const km2miles = (val: number, decimals?: number) => round((val / 1.609344), decimals || DEF_PRECISION);
export const km2miles = (val: number, decimals?: number) => nmiles2miles(km2nmiles(val, decimals), decimals);

// km -> nautical miles
export const km2nmiles = (val: number, decimals?: number) => round(val / 1.852, decimals || DEF_PRECISION);

/* ***  FROM IMPERIAL UNITS  *** */
// inches -> mm
export const in2mm = (val: number, decimals?: number) => round(val * 25.4, decimals || DEF_PRECISION);

// feet -> meters
export const ft2m = (val: number, decimals?: number) => round(val / 3.2808398950131, decimals || DEF_PRECISION);

// nautical miles -> miles
export const nmiles2miles = (val: number, decimals?: number) => round(val * 1.1507794480235, decimals || DEF_PRECISION);

// miles -> nautical miles
export const miles2nmiles = (val: number, decimals?: number) => round(val / 1.1507794480235, decimals || DEF_PRECISION);

// miles -> km
// export const miles2km = (val: number, decimals?: number) => round((val * 1.609344), decimals || DEF_PRECISION);
export const miles2km = (val: number, decimals?: number) => nmiles2km(miles2nmiles(val, decimals), decimals);

// nautical miles -> km
export const nmiles2km = (val: number, decimals?: number) => round(val * 1.852, decimals || DEF_PRECISION);
