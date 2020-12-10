import { c2f, c2k, f2c, f2k, k2c, k2f } from "./temp_units";
import { ms2kts, ms2mph, ms2kmh, kmh2kts, kmh2ms, kmh2mph, mph2ms, mph2kmh, mph2kts, kts2ms, kts2kmh, kts2mph } from "./speed_units";
import { hpa2inhg, hpa2kpa, kpa2hpa, kpa2inhg, inhg2hpa, inhg2kpa } from "./press_units"; 
import { mm2in, m2ft, km2miles, km2nmiles, in2mm, ft2m, miles2nmiles, nmiles2miles, miles2km, nmiles2km } from "./lenght_units";


export {
  c2f, c2k,
  f2c, f2k,
  k2c, k2f,

  ms2kmh, ms2mph, ms2kts, 
  kmh2ms, kmh2mph, kmh2kts, 
  mph2ms, mph2kmh, mph2kts,
  kts2ms, kts2kmh, kts2mph,

  hpa2kpa, hpa2inhg,
  kpa2hpa, kpa2inhg,
  inhg2hpa, inhg2kpa,

  mm2in, in2mm,
  m2ft, ft2m,
  km2miles, miles2km,
  km2nmiles, nmiles2km,
  miles2nmiles, nmiles2miles
}