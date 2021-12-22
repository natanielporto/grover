import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './index';

describe('Pagination', () => {
  it('should render pagination component as expected', () => {
    const { getByText } = render(<Pagination />);

    expect(getByText('< Prev page')).toBeDefined();
    expect(getByText('Next page >')).toBeDefined();
  });

  it('should be enabled: prev page button', () => {
    const { getByRole } = render(<Pagination />);

    expect(getByRole('button', { name: /< prev page/i })).toBeEnabled();
  });

  it('should be enabled: next page button', () => {
    const { getByRole } = render(<Pagination />);

    expect(getByRole('button', { name: /next page >/i })).toBeEnabled();
  });
});
