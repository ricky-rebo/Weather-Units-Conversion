import round from './rounding';

const DEF_PRECISION = 2;

/* ***  FROM M/S  *** */
// ms -> kts
export const ms2kts = (val: number, decimals?: number) => round(val * 1.9438, decimals || DEF_PRECISION);

// ms -> mph
export const ms2mph = (val: number, decimals?: number) => round(val * 2.2369, decimals || DEF_PRECISION);

// ms -> kmh
export const ms2kmh = (val: number, decimals?: number) => round(val * 3.6, decimals || DEF_PRECISION);

/* ***  FROM MPH  *** */
// mph -> ms
export const mph2ms = (val: number, decimals?: number) => round(val * 0.447, decimals || DEF_PRECISION);

// mph -> knots
export const mph2kts = (val: number, decimals?: number) => ms2kts(mph2ms(val, decimals), decimals);

// mph -> kmh
export const mph2kmh = (val: number, decimals?: number) => ms2kmh(mph2ms(val, decimals), decimals);

/* ***  FROM KNOTS  *** */
// knots -> ms
export const kts2ms = (val: number, decimals?: number) => round(val * 0.5143, decimals || DEF_PRECISION);

// knots -> kmh
export const kts2kmh = (val: number, decimals?: number) => ms2kmh(kts2ms(val, decimals), decimals);

// knots -> mph
export const kts2mph = (val: number, decimals?: number) => ms2mph(kts2ms(val, decimals), decimals);

/* ***  FROM KM/H  *** */
// kmh -> ms
export const kmh2ms = (val: number, decimals?: number) => round(val * 0.2778, decimals || DEF_PRECISION);

// kmh -> mph
export const kmh2mph = (val: number, decimals?: number) => ms2mph(kmh2ms(val, decimals), decimals);

// kmh -> knots
export const kmh2kts = (val: number, decimals?: number) => ms2kts(kmh2ms(val, decimals), decimals);
