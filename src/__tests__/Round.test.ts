import round from '../rounding';

test('Decimals Rounding', () => {
  const VAL = 1.56723675219877536541;

  expect(round(VAL, 1)).toBe(1.6);
  expect(round(VAL, 3)).toBe(1.567);
  expect(round(VAL, 5)).toBe(1.56724);
  expect(round(VAL, 11)).toBe(1.5672367522);
});
