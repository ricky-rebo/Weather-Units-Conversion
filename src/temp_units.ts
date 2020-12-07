import { round } from "./rounding";

// Celsius to Fahrenheit
export const c2f = (val: number, decimalPositions?: number) => round(((val * 9 / 5) + 32), decimalPositions || 1);
export const celsiusToFahrenheit = c2f;


// Fahrenheit to Celsius
export const f2c = (val: number, decimalPositions?: number) => round(((val - 32) * 5 / 9), decimalPositions || 1);
export const fahrenheitToCelsius = f2c;