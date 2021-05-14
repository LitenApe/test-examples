import { total_cost } from './math';

jest.mock('./add');

test('use default mock', () => {
  expect(total_cost(1, 2)).toBe(0);
  expect(total_cost(44, 26)).toBe(0);
});
