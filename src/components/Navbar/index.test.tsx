import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './index';

describe('Navbar', () => {
  it('should render the navbar', () => {
    render(<Navbar />);

    expect(
      screen.getByText('"The New York Times" article search application'),
    ).toBeTruthy();
  });
});
