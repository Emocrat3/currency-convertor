import * as React from 'react';
import CurrencySwitch from '../components/currency-switch/CurrencySwitch';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Currency switch component test', () => {
  it('Should show switch button', () => {
    render(<CurrencySwitch />);
    const switchButton = screen.getByTestId('switch-currency-btn');
    expect(switchButton).toBeInTheDocument();
  });
});
