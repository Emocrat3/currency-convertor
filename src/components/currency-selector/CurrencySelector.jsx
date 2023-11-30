import { useEffect } from "react";
import { useCurrencyContext } from "../../context/CurrencyContext";
import { transformCurrencyValue } from "../../utils/transform";

const CurrencySelector = ({label, options, defaultSelected, type}) => {
  const filteredOptions = options?.filter(option => option?.code !== defaultSelected?.code);
  const {
    selectedToExchange, setSelectedToExchange, 
    selectedFromExchange, setSelectedFromExchange, 
    currenciesValues, currencies,
    valueFrom, setValueFrom,
    valueTo, setValueTo
  } = useCurrencyContext();

  useEffect(() => {
    setContextByType();
  }, []);

  const setContextByType = () => {
    dynamicSetContext(defaultSelected);
    const fromCurrencyValue = currenciesValues[currencies[0]?.code];
    const toCurrencyValue =  currenciesValues[currencies[currencies.length -1]?.code]; 

    setValueTo(transformCurrencyValue(fromCurrencyValue, toCurrencyValue, valueFrom));
  }

  const onCurrencyChange = (option, type) => {
    if((option.code === selectedFromExchange?.code) || (option.code === selectedToExchange?.code)){
      this.selectedEqualOption();
    } else {
      dynamicSetContext(option);

      if(type === 'to'){
        const fromCurrencyValue = currenciesValues[selectedFromExchange?.code];
        const toCurrencyValue = currenciesValues[option?.code];
        setValueFrom(transformCurrencyValue(fromCurrencyValue, toCurrencyValue, valueTo, 'first'));
      } else {
        const fromCurrencyValue = currenciesValues[option?.code];
        const toCurrencyValue = currenciesValues[selectedToExchange?.code];
        setValueTo(transformCurrencyValue(fromCurrencyValue, toCurrencyValue, valueFrom));
      }
    }
  }

  const selectedEqualOption = () => {
    setSelectedToExchange(selectedFromExchange);
    setSelectedFromExchange(selectedToExchange);
    setValueTo(valueFrom);
    setValueFrom(valueTo);
  };

  const dynamicSetContext = (value) => {
    if(type === 'to') {
      setSelectedToExchange(value);
    } else {
      setSelectedFromExchange(value);
    }
  }

  const dynamicValue = () => {
    return (type === 'to' ? selectedToExchange : selectedFromExchange) ?? defaultSelected;
  }

  const onChangeValue = (event) => {
    const value = event.target.value;
    if(isNaN(value)) return;

    const fromCurrencyValue = currenciesValues[selectedFromExchange?.code];
    const toCurrencyValue = currenciesValues[selectedToExchange?.code];
  
    if (type === 'to') {
      setValueFrom(transformCurrencyValue(fromCurrencyValue, toCurrencyValue, value, 'first'));
      setValueTo(value);
    } else {
      setValueTo(transformCurrencyValue(fromCurrencyValue, toCurrencyValue, value));
      setValueFrom(value);
    }
  };

  return (
    <div>
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
        {label} {dynamicValue()?.name}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">{dynamicValue()?.symbol}</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
          onChange={onChangeValue}
          value={type === 'to' ? valueTo : valueFrom}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            onChange={e => onCurrencyChange(options.find(option => option.code === e.target.value), type)}
          >
            <option value={dynamicValue()?.code}>{dynamicValue()?.code}</option>
            { filteredOptions.map((option, index) => 
              <option key={index} value={option?.code}>{option.code}</option>
            )}
          </select>
        </div>
      </div>
    </div>
  )
}

export default CurrencySelector;