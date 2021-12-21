import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './index';

describe('Pagination', () => {
  it('should render pagination component as expected', () => {
    const { getByText } = render(<Pagination />);

    expect(getByText('< Prev page')).toBeDefined();
    expect(getByText('Next page >')).toBeDefined();
  });
});
