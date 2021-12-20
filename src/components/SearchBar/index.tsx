import React, { useEffect, useContext } from 'react';
import { IArticle, SearchContext } from '../../globalContext/searchContext';
import search from '../../assets/search.svg';

import { Container, Label, SearchContainer, SearchInput } from './styles';

interface IResponseArticle {
  response: {
    docs: IArticle[];
  };
}

export default function SearchBar(): JSX.Element {
  const searchContext = useContext(SearchContext);
  const { handleChangeSearchTerm, query, setCurrentArticles, page } =
    searchContext;

  useEffect(() => {
    const populateArticles = async () => {
      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_KEY}&page=${page}`,
        );

        const fetchedArticles = (await response.json()) as IResponseArticle;
        setCurrentArticles(fetchedArticles.response.docs);
      } catch (error) {
        console.log(error);
      }
    };

    populateArticles();
  }, [query, setCurrentArticles, page]);
  return (
    <Container>
      <Label>Type search query term in here:</Label>
      <SearchContainer>
        <SearchInput
          type="text"
          onChange={input => handleChangeSearchTerm(input)}
        />
        <img src={search} alt="Search icon" />
      </SearchContainer>
    </Container>
  );
}
