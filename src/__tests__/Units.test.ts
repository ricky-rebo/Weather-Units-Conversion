import { c2f, c2k, f2c, f2k, k2c, k2f } from "../temp_units"

test("Temp Units", () => {
  const C = 15.9, F = 60.6, K = 289.0;

  expect(c2f(C)).toBe(F);
  expect(c2k(C)).toBe(K);

  expect(f2c(F)).toBe(C);
  expect(f2k(F)).toBe(K);

  expect(k2c(K)).toBe(C);
  expect(k2f(K)).toBe(F);
})