import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { IArticle, SearchContext } from '../../globalContext/searchContext';
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

  it('should change pages when clicking next page button', () => {
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const value = {
      query: '',
      setQuery: jest.fn(),
      handleChangeSearchTerm: jest.fn(),
      currentArticles: [],
      setCurrentArticles: jest.fn(),
      page: 1,
      setPage: jest.fn(),
      article: {} as IArticle,
      setArticle: jest.fn(),
    };

    const { getByRole, rerender } = render(
      <SearchContext.Provider value={value}>
        <Pagination />
        <SearchContext.Consumer>
          {({ page }) => <span>page {page}</span>}
        </SearchContext.Consumer>
      </SearchContext.Provider>,
    );

    expect(screen.getByText(/^page/)).toHaveTextContent('page 1');

    const nextButton = getByRole('button', { name: /next page >/i });
    const prevButton = getByRole('button', { name: /< prev page/i });
    fireEvent.click(nextButton);
    Object.assign(value, { ...value, page: 2 });

    rerender(
      <SearchContext.Provider value={value}>
        <Pagination />
        <SearchContext.Consumer>
          {({ page }) => <span>page {page}</span>}
        </SearchContext.Consumer>
      </SearchContext.Provider>,
    );
    expect(screen.getByText(/^page/)).toHaveTextContent('page 2');

    fireEvent.click(prevButton);
    Object.assign(value, { ...value, page: 1 });

    rerender(
      <SearchContext.Provider value={value}>
        <Pagination />
        <SearchContext.Consumer>
          {({ page }) => <span>page {page}</span>}
        </SearchContext.Consumer>
      </SearchContext.Provider>,
    );
    expect(screen.getByText(/^page/)).toHaveTextContent('page 1');
  });
});
