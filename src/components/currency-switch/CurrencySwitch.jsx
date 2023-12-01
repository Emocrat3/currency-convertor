import React from 'react';
import { useCurrencyContext } from '../../context/CurrencyContext';
import { ArrowsUpDownIcon } from '../icons/Icons';

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
    <button onClick={handleSwitch}>
      <div className='m-4 rounded-full border p-3 hover:border-indigo-600 hover:text-indigo-600'>
        <ArrowsUpDownIcon className="h-6 w-6"/>
      </div>
    </button>
  );
};

export default CurrencySwitch;
