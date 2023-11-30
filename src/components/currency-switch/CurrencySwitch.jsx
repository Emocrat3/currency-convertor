import React from 'react';
import { useCurrencyContext } from '../../context/CurrencyContext';

const CurrencySwitch = () => {
  const { 
    selectedToExchange, setSelectedToExchange, 
    selectedFromExchange, setSelectedFromExchange,
    valueTo, setValueTo,
    valueFrom, setValueFrom
  } = useCurrencyContext();

  const handleSwitch = () => {
    setSelectedToExchange(selectedFromExchange);
    setSelectedFromExchange(selectedToExchange);
    setValueTo(valueFrom);
    setValueFrom(valueTo);
  };

  return (
    <button onClick={handleSwitch}>Switch</button>
  );
};

export default CurrencySwitch;
