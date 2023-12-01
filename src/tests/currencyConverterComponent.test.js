import * as React from 'react';
import CurrencyConverter from '../components/currency-converter/CurrencyConverter';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('../services/currency', () => ({
  getCurrencies: jest.fn(() => Promise.resolve({ data: {} })),
  getLatestExchangeValue: jest.fn(() => Promise.resolve({ data: {} })),
  getStatus: jest.fn(() => Promise.resolve({ quotas: { month: {} } })),
}));

describe('Currency converter component test', () => {
  it('Should show loader', () => {
    render(<CurrencyConverter />);
    const loader = screen.getByRole('status');
    expect(loader).toBeInTheDocument();
  });
});


