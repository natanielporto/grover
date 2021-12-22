import { render } from '@testing-library/react';
import React from 'react';
import SearchBar from './index';

describe('Search bar', () => {
  it('should render the search bar accordingly', () => {
    const { getByText, getAllByAltText } = render(<SearchBar />);

    expect(getByText('Type search query term in here:')).toBeDefined();
    expect(getAllByAltText('Search icon')).toBeDefined();
  });
});
