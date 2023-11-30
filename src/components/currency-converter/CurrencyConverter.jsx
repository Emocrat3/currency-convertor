import React, { useEffect, useState } from 'react'
import { getCurrencies, getLatestExchangeValue } from '../../services/currency';
import CurrencySelector from '../currency-selector/CurrencySelector';
import { useCurrencyContext } from '../../context/CurrencyContext';
import './CurrencyConverter.css';
import CurrencySwitch from '../currency-switch/CurrencySwitch';

const CurrencyConverter = () => {
  const {currencies, setCurrencies, currenciesValues, setCurrenciesValues} = useCurrencyContext();
  const [loadingCurrencies, setLoadingCurrencies] = useState(false);
  const [loadingExchangeValue, setLoadingExchangeValue] = useState(false);

  useEffect(() => {
    fetchCurrencies();
    fetchLatestExchangeValues();
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
    <div className='currency-converter-container'>
      { !loadingCurrencies && !loadingExchangeValue && Object.keys(currenciesValues).length > 0 ?
        <div className="converter">
          <div className="selector">
            <CurrencySelector 
              label={'From:'}
              options={currencies}
              defaultSelected={currencies[0]}
              type={'from'}
            />
          </div>

          <CurrencySwitch/>

          <div className="selector">
            <CurrencySelector 
              label={'To:'}
              options={currencies}
              defaultSelected={currencies[currencies.length -1]}
              type={'to'}
            />
          </div>
        </div>

        : 

        <div className="loading"> Loading... </div>
      }
    </div>
  )
}

export default CurrencyConverter;
