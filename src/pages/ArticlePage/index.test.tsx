import React from 'react';
import { render, screen } from '@testing-library/react';
import { Link, MemoryRouter } from 'react-router-dom';
import ArticlePage from '.';
import { ArticleCopy, Container, CurrentDate, Title } from './styles';
import Navbar from '../../components/Navbar';
import { IArticle, SearchContext } from '../../globalContext/searchContext';

describe('Article page', () => {
  it('should render the article page', () => {
    render(<ArticlePage />);

    expect(
      screen.getByText('"The New York Times" article search application'),
    ).toBeTruthy();
  });

  it('should render the article into the page', () => {
    // eslint-disable-next-line react/jsx-no-constructed-context-values
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
      ],
      setCurrentArticles: jest.fn(),
      page: 1,
      setPage: jest.fn(),
      article: {} as IArticle,
      setArticle: jest.fn(),
    };

    const { currentArticles } = value;
    const {
      web_url,
      lead_paragraph,
      headline: { main },
      pub_date,
      _id,
    } = currentArticles[0];

    const dateRearrange = jest.fn();
    const handleOutboundLink = jest.fn();

    render(
      <SearchContext.Provider value={value}>
        <MemoryRouter>
          <Navbar />
          <Container key={_id}>
            <Link to="/">&lt; Go to results page</Link>
            <Title>{main}</Title>
            <CurrentDate>{dateRearrange(pub_date)}</CurrentDate>
            <ArticleCopy>{lead_paragraph}</ArticleCopy>
            <a href={web_url} onClick={handleOutboundLink}>
              Read the full article
            </a>
          </Container>
        </MemoryRouter>
      </SearchContext.Provider>,
    );

    expect(
      screen.getByText('"The New York Times" article search application'),
    ).toBeTruthy();
    expect(
      screen.getByText('‘The Color Purple’ House Where LaChanze Lives'),
    ).toBeTruthy();
    expect(dateRearrange).toHaveBeenCalledTimes(1);
  });
});
