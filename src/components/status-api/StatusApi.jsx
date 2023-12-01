import React from 'react'
import { useCurrencyContext } from "../../context/CurrencyContext";

const statusLabels = {
  "used": "API calls",
  "total": "Available currencies",
  "remaining": "Remaining API calls"
};

const StatusComponent = () => {
  const {statusData} = useCurrencyContext();

  const getValueToRender = (key, value) => {
    if(key === 'total') return '+33';

    return value
  }

  return (
    <dl className="grid grid-cols-1 text-center mt-5 sm:mt-0 gap-x-8 gap-y-4 lg:gap-y-16 lg:grid-cols-3">
      {statusData && Object.entries(statusData).map(([key, value]) => (
        <div key={key} className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-md font-medium leading-6 text-indigo-600">{statusLabels[key]}</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
            {getValueToRender(key, value)}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default StatusComponent;