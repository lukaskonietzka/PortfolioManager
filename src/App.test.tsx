import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioManager from './PortfolioManager';

test('renders learn react link', () => {
  render(<PortfolioManager />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
