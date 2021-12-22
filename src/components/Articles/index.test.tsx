import { render } from '@testing-library/react';

import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import Articles from './index';
import { IArticle, SearchContext } from '../../globalContext/searchContext';

describe('Articles', () => {
  it('should be ok', () => {
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const value = {
      query: '',
      setQuery: jest.fn(),
      handleChangeSearchTerm: jest.fn(),
      currentArticles: [
        {
          web_url:
            'https://www.nytimes.com/slideshow/2021/12/21/realestate/the-color-purple-house-where-lachanze-lives.html',
          lead_paragraph:
            'The Westchester house where the Tony-winning actor lives is ideally sized for family reunions — and for spending time alone.',
          source: 'The New York Times',
          headline: {
            main: '‘The Color Purple’ House Where LaChanze Lives',
          },
          pub_date: '2021-12-21T10:00:24+0000',
          _id: 'nyt://slideshow/2dfcd403-dbc5-5a56-af9f-90b7b22b11b4',
          meta: { hits: 13558 },
        },
        {
          web_url:
            'https://www.nytimes.com/2021/12/21/nyregion/pizza-inflation.html',
          lead_paragraph:
            'To hear more audio stories from publications like The New York Times, download Audm for iPhone or Android.',
          headline: {
            main: 'The $1 Pizza Slice Becomes Inflation’s Latest Victim',
          },
          pub_date: '2021-12-21T10:00:23+0000',
          _id: 'nyt://article/f75fae14-a7c7-58bc-85bb-5c1a96a86086',
          meta: { hits: 13558 },
        },
      ],
      setCurrentArticles: jest.fn(),
      page: 1,
      setPage: jest.fn(),
      article: {} as IArticle,
      setArticle: jest.fn(),
    };

    const { getAllByRole } = render(
      <SearchContext.Provider value={value}>
        <MemoryRouter>
          <Articles />
        </MemoryRouter>
      </SearchContext.Provider>,
    );

    expect(getAllByRole('link').length).toBe(2);
  });
});
