import React, { useEffect, useState } from 'react'
import { getCurrencies, getLatestExchangeValue, getStatus } from '../../services/currency';
import { useCurrencyContext } from '../../context/CurrencyContext';
import DeveloperInfo from '../team/DeveloperInfo';
import Loading from '../loading/Loading';
import Converter from '../show-converter/Converter';

const CurrencyConverter = () => {
  const {currencies, setCurrencies, setCurrenciesValues, setStatusData} = useCurrencyContext();
  const [loadingCurrencies, setLoadingCurrencies] = useState(false);
  const [loadingExchangeValue, setLoadingExchangeValue] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    fetchCurrencies();
    fetchLatestExchangeValues();
    fetchStatusApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies]);

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
      setStatusData(response['quotas']['month']);
      setLoadingStatus(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='grid grid-cols-1 h-full flex-col justify-center items-center pt-6'>
      { !loadingCurrencies && !loadingExchangeValue && !loadingStatus ?
        <Converter 
          options={currencies} 
          defaultSelectedTo={currencies[currencies.length -1]} 
          defaultSelectedFrom={currencies[0]}
        /> 
        : 
        <Loading />
      }
      <DeveloperInfo/>
    </div>
  )
}

export default CurrencyConverter;
