import React, { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../../globalContext/searchContext';
import search from '../../assets/search.svg';

import { Container, Label, SearchContainer, SearchInput } from './styles';

export default function SearchBar(): JSX.Element {
  const searchContext = useContext(SearchContext);
  const { handleChangeSearchTerm, query, setCurrentArticles } = searchContext;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const populateArticles = async () => {
      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_KEY}`,
        );

        const fetchedArticles = await response.json();
        setCurrentArticles(fetchedArticles);
      } catch (error) {
        console.log(error);
      }
    };

    populateArticles();
    setIsLoading(false);
  }, []);

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
