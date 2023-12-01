import React, { useEffect, useState } from 'react'
import { getCurrencies, getLatestExchangeValue } from '../../services/currency';
import CurrencySelector from '../currency-selector/CurrencySelector';
import { useCurrencyContext } from '../../context/CurrencyContext';
import './CurrencyConverter.css';
import CurrencySwitch from '../currency-switch/CurrencySwitch';
import DeveloperInfo from '../team/DeveloperInfo';

const CurrencyConverter = () => {
  const {currencies, setCurrencies, currenciesValues, setCurrenciesValues} = useCurrencyContext();
  const [loadingCurrencies, setLoadingCurrencies] = useState(false);
  const [loadingExchangeValue, setLoadingExchangeValue] = useState(false);

  useEffect(() => {
    fetchCurrencies();
    fetchLatestExchangeValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCurrencies = async () => {
    setLoadingCurrencies(true);
    try {
      const response = await getCurrencies();
      setCurrencies(Object.values(response?.data));
      setLoadingCurrencies(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchLatestExchangeValues = async () => {
    setLoadingExchangeValue(true);
    try {
      const response = await getLatestExchangeValue();
      setCurrenciesValues(response?.data);
      setLoadingExchangeValue(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='currency-converter-container h-full flex flex-col justify-center items-center pt-6'>
      { !loadingCurrencies && !loadingExchangeValue && Object.keys(currenciesValues).length > 0 &&
        <div className="py-4 mb-4 m-5 h-3/4 bg-white flex flex-col justify-center items-center sm:my-12 sm:flex-row sm:justify-evenly rounded-lg ring-1 ring-indigo-600">
          <div className="mx-4">
            <CurrencySelector 
              label={'From:'}
              options={currencies}
              defaultSelected={currencies[0]}
              type={'from'}
            />
          </div>

          <CurrencySwitch/>

          <div className="mx-4">
            <CurrencySelector 
              label={'To:'}
              options={currencies}
              defaultSelected={currencies[currencies.length -1]}
              type={'to'}
            />
          </div>
        </div>
      }
      <DeveloperInfo/>
    </div>
  )
}

export default CurrencyConverter;
