export const transformCurrencyValue = (currencyValue, secondCurrencyValue, value, order) => {
  if(order === 'first') return ((currencyValue / secondCurrencyValue) * value).toFixed(2);
  
  return ((secondCurrencyValue / currencyValue) * value).toFixed(2);
}