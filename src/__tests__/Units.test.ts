import { c2f, c2k, f2c, f2k, k2c, k2f } from '../temp_units';
import {
  ms2kts,
  ms2mph,
  ms2kmh,
  kmh2kts,
  kmh2ms,
  kmh2mph,
  mph2ms,
  mph2kmh,
  mph2kts,
  kts2ms,
  kts2kmh,
  kts2mph,
} from '../speed_units';
import { hpa2inhg, hpa2kpa, kpa2hpa, kpa2inhg, inhg2hpa, inhg2kpa } from '../press_units';
import {
  mm2in,
  m2ft,
  km2miles,
  km2nmiles,
  in2mm,
  ft2m,
  miles2nmiles,
  nmiles2miles,
  miles2km,
  nmiles2km,
} from '../lenght_units';

test('Temp Units', () => {
  const C = 19.92,
    F = 67.86,
    K = 293.07;

  expect(c2f(C)).toBe(F);
  expect(c2k(C)).toBe(K);

  expect(f2c(F)).toBe(C);
  expect(f2k(F)).toBe(K);

  expect(k2c(K)).toBe(C);
  expect(k2f(K)).toBe(F);
});

test('Speed Units', () => {
  const MS = 7.96,
    KMH = 28.66,
    MPH = 17.81,
    KTS = 15.47;

  expect(ms2kmh(MS)).toBe(KMH);
  expect(ms2kts(MS)).toBe(KTS);
  expect(ms2mph(MS)).toBe(MPH);

  expect(kmh2ms(KMH)).toBe(MS);
  expect(kmh2mph(KMH)).toBe(MPH);
  expect(kmh2kts(KMH)).toBe(KTS);

  expect(kts2ms(KTS)).toBe(MS);
  expect(kts2kmh(KTS)).toBe(KMH);
  expect(kts2mph(KTS)).toBe(MPH);

  expect(mph2ms(MPH)).toBe(MS);
  expect(mph2kmh(MPH)).toBe(KMH);
  expect(mph2kts(MPH)).toBe(KTS);
});

test('Press Units', () => {
  const HPA = 21.8,
    KPA = 2.18,
    INHG = 0.644;

  expect(hpa2kpa(HPA)).toBe(KPA);
  expect(hpa2inhg(HPA)).toBe(INHG);

  expect(kpa2hpa(KPA)).toBe(HPA);
  expect(kpa2inhg(KPA)).toBe(INHG);

  expect(inhg2hpa(INHG)).toBe(HPA);
  expect(inhg2kpa(INHG)).toBe(KPA);
});

test('Lenght Units', () => {
  const MM = 24.89,
    IN = 0.98,
    M = 55.61,
    FT = 182.45,
    KM = 11.63,
    MI = 7.23,
    NMI = 6.28;

  const KM_P = 87.05069,
    MI_P = 54.09079;

  expect(mm2in(MM)).toBe(IN);
  expect(in2mm(IN)).toBe(MM);

  expect(m2ft(M)).toBe(FT);
  expect(ft2m(FT)).toBe(M);

  expect(km2miles(KM)).toBe(MI);
  expect(km2nmiles(KM)).toBe(NMI);

  expect(miles2km(MI)).toBe(KM);
  expect(miles2nmiles(MI)).toBe(NMI);

  expect(nmiles2km(NMI)).toBe(KM);
  expect(nmiles2miles(NMI)).toBe(MI);

  //MORE PRECISION
  expect(km2miles(KM_P, 5)).toBe(MI_P);
  expect(miles2km(MI_P, 5)).toBe(KM_P);
});
