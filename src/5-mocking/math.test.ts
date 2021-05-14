import { total_cost } from './math';
import { add } from './add';

jest.mock('./add', () => ({ add: jest.fn() }));
const mockAdd = add as jest.MockedFunction<typeof add>;

test('add is mocked', () => {
  mockAdd.mockReturnValue(1);
  expect(total_cost(1, 2)).toBe(1);

  mockAdd.mockReturnValue(4);
  expect(total_cost(1, 2)).toBe(4);
});

test('use real implementation', () => {
  const { add } = jest.requireActual('./add');
  mockAdd.mockImplementation(add);
  expect(total_cost(1, 2)).toBe(3);
  expect(total_cost(3, 3)).toBe(6);
});
