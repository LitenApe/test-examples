import fv from './future-value';

// results verified up agains Google Sheet's FV
describe('verify future value calculation', () => {
  test('no increase in value over time', () => {
    expect(fv(0, 12, 0, 1000)).toBe(-1000);
    expect(fv(0, 12, 200, 1000)).toBe(-3400);
    expect(fv(0, 12, 200, 0)).toBe(-2400);
  });

  test('increase in value over time', () => {
    expect(fv(0.2, 12, 0, 1000)).toBe(-8916.10);
    expect(fv(0.2, 12, 200, 1000)).toBe(-16832.20);
    expect(fv(0.2, 12, 200, 0)).toBe(-7916.10);
  });
})
