import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render the app', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('Type search query term in here:');
    expect(linkElement).toBeInTheDocument();
  });
});
