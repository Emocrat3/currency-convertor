import CurrencyConverter from './components/currency-converter/CurrencyConverter';
import { CurrencyExchangeProvider } from './context/CurrencyContext';
import './App.css';

function App() {
  return (
    <div className="general-app-container" >
      <CurrencyExchangeProvider>
        <CurrencyConverter />
      </CurrencyExchangeProvider>
    </div>
  );
}

export default App;
