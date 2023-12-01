import { transformCurrencyValue } from '../utils/transform';

describe('transformCurrencyValue', () => {
  it('should transform currency value when order is "first"', () => {
    const result = transformCurrencyValue(0.9180, 18.83944, 20, 'first');
    expect(result).toBe('0.97');
  });

  it('should transform currency value when order isn´t first', () => {
    const result = transformCurrencyValue(0.9180901815, 18.8394426654, 10);
    expect(result).toBe('205.20');
  });
});