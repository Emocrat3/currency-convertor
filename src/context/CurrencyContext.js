import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext({
  valueTo: null,
  setValueTo: () => {},
  valueFrom: null,
  setValueFrom: () => {},
  currencies: [],
  setCurrencies: () => [],
  currenciesValues: [],
  setCurrenciesValues: () => [],
  selectedToExchange: null,
  setSelectedToExchange: () => {},
  selectedFromExchange: null,
  setSelectedFromExchange: () => {},
  statusData: null,
  setStatusData: () => {}
});

export const CurrencyExchangeProvider = ({ children }) => {
  const [valueTo, setValueTo] = useState('');
  const [valueFrom, setValueFrom] = useState(1);
  const [currencies, setCurrencies] = useState([]);
  const [statusData, setStatusData] = useState(null);
  const [currenciesValues, setCurrenciesValues] = useState([]);
  const [selectedToExchange, setSelectedToExchange] = useState(null);
  const [selectedFromExchange, setSelectedFromExchange] = useState(null);

  return (
    <CurrencyContext.Provider value={{
      valueTo, setValueTo, 
      valueFrom, setValueFrom, 
      currencies, setCurrencies, 
      currenciesValues, setCurrenciesValues, 
      selectedToExchange, setSelectedToExchange, 
      selectedFromExchange, setSelectedFromExchange,
      statusData, setStatusData
    }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrencyContext = () => useContext(CurrencyContext);