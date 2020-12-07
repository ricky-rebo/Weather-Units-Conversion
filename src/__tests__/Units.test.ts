import { c2f, f2c } from "../temp_units"

test("Temp Units", () => {
  expect(c2f(15.9)).toBe(60.6);

  expect(f2c(75.8)).toBe(24.3);
})