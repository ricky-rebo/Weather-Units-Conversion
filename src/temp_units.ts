import { round } from "./rounding";

// From Celsius
export const c2f = (val: number, precision?: number) => round(((val * 9 / 5) + 32), precision || 1);
export const celsiusToFahrenheit = c2f;

export const c2k = (val: number, precision?: number) => round(val + 273.15, precision || 1);
export const celsiusToKelvin = c2k;


// From Fahrenheit 
export const f2c = (val: number, precision?: number) => round(((val - 32) * 5 / 9), precision || 1);
export const fahrenheitToCelsius = f2c;

export const f2k = (val: number, precision?: number) => round(c2k(f2c(val)), precision || 1);
export const fahrenheitToKelvin = f2k;


// From Kelvin
export const k2c = (val: number, precision?: number) => round(val - 273.15, precision || 1);
export const kelvinToCelsius = k2c;

export const k2f = (val: number, precision?: number) => round(c2f(k2c(val)), precision || 1);
export const kelvinToFahrenheit = k2f;
