import React from 'react'
import CurrencySwitch from '../currency-switch/CurrencySwitch'
import CurrencySelector from '../currency-selector/CurrencySelector'
import StatusComponent from '../status-api/StatusApi'

const Converter = ({options, defaultSelectedFrom, defaultSelectedTo}) => {
  return (
    <div className="py-4 mb-4 m-5 h-full bg-white flex flex-col justify-center items-center sm:my-12 sm:flex-row sm:justify-evenly rounded-lg ring-1 ring-indigo-600">
      <div>
        <dd className="order-first mb-6 text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
          Currency Converter
        </dd>
        <div className="mx-4">
          <CurrencySelector 
            label={'From:'}
            options={options}
            defaultSelected={defaultSelectedFrom}
            type={'from'}
          />
        </div>

        <CurrencySwitch/>

        <div className="mx-4">
          <CurrencySelector 
            label={'To:'}
            options={options}
            defaultSelected={defaultSelectedTo}
            type={'to'}
          />
        </div>
      </div>
      <StatusComponent />
    </div>
  )
}

export default Converter
