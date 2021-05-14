import { total_cost } from './math';

jest.mock('./add', () => ({ add: () => 1 }));

test('total_cost always returns 1', () => {
  expect(total_cost(1, 3)).toBe(1);
  expect(total_cost(343, 131)).toBe(1);
});
