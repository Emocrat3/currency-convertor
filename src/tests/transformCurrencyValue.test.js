import { transformCurrencyValue } from '../utils/transform';

describe('transformCurrencyValue', () => {
  it('should transform currency value when order is "first"', () => {
    const result = transformCurrencyValue(2, 3, 10, 'first');
    expect(result).toBe('6.67');
  });

  it('should transform currency value when order is "second"', () => {
    const result = transformCurrencyValue(2, 3, 10, 'second');
    expect(result).toBe('15.00');
  });
});
