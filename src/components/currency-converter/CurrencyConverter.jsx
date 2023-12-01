import React, { useEffect, useState } from 'react'
import { getCurrencies, getLatestExchangeValue, getStatus } from '../../services/currency';
import CurrencySelector from '../currency-selector/CurrencySelector';
import { useCurrencyContext } from '../../context/CurrencyContext';
import CurrencySwitch from '../currency-switch/CurrencySwitch';
import DeveloperInfo from '../team/DeveloperInfo';
import StatusComponent from '../status-api/StatusApi';

const CurrencyConverter = () => {
  const {currencies, setCurrencies, currenciesValues, setCurrenciesValues, setStatusData} = useCurrencyContext();
  const [loadingCurrencies, setLoadingCurrencies] = useState(false);
  const [loadingExchangeValue, setLoadingExchangeValue] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    fetchCurrencies();
    fetchLatestExchangeValues();
    fetchStatusApi();
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

  const fetchStatusApi = async () => {
    setLoadingStatus(true);
    try {
      const response = await getStatus();
      setLoadingStatus(false);
      setStatusData(response['quotas']['month']);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='bg-gradient-to-r from-indigo-500 grid grid-cols-1 h-full flex-col justify-center items-center pt-6'>
      { !loadingCurrencies && !loadingExchangeValue && Object.keys(currenciesValues).length > 0 &&
        <div className="py-4 mb-4 m-5 h-full bg-white flex flex-col justify-center items-center sm:my-12 sm:flex-row sm:justify-evenly rounded-lg ring-1 ring-indigo-600">
          <div>
            <dd className="order-first mb-6 text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Currency Converter
            </dd>
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
          { !loadingStatus && 
            <StatusComponent />
          }
        </div>
      }
      
      <DeveloperInfo/>
    </div>
  )
}

export default CurrencyConverter;
