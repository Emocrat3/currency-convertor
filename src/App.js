import CurrencyConverter from './components/currency-converter/CurrencyConverter';
import { CurrencyExchangeProvider } from './context/CurrencyContext';
import './App.css';

function App() {
  return (
    <div className="general-app-container flex items-center bg-gradient-to-r from-indigo-500">
      <CurrencyExchangeProvider>
        <CurrencyConverter />
      </CurrencyExchangeProvider>
    </div>
  );
}

export default App;
