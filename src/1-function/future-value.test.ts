import fv from './future-value';

// results verified up agains Google Sheet's FV
describe('verify future value calculation', () => {
  test('no increase in value over time', () => {
    expect(fv(0, 12, 0, 1000)).toBe(-1000);
    expect(fv(0, 12, 200, 1000)).toBe(-3400);
    expect(fv(0, 12, 200, 0)).toBe(-2400);
  });

  test('increase in value over time', () => {
    expect(fv(0.2, 12, 0, 1000)).toBe(-8916.1);
    expect(fv(0.2, 12, 200, 1000)).toBe(-16832.2);
    expect(fv(0.2, 12, 200, 0)).toBe(-7916.1);
  });

  test.each([
    [0, 12, 0, 1000, -1000],
    [0, 12, 200, 1000, -3400],
    [0, 12, 200, 0, -2400],
    [0.2, 12, 0, 1000, -8916.1],
    [0.2, 12, 200, 1000, -16832.2],
    [0.2, 12, 200, 0, -7916.1],
  ])(
    'fv(rate: %d, nper: %d, pmt: %d, pv: %d) = %d',
    (rate: number, nper: number, pmt: number, pv: number, expected: number) => {
      expect(fv(rate, nper, pmt, pv)).toBe(expected);
    }
  );
});
