import { stringify } from 'querystring';
import React, { useContext } from 'react';
import { SearchContext } from '../../globalContext/searchContext';

import { Container, Label, Article } from './styles';

interface Article {
  _id: string;
  headline: string;
  snippet: string;
}

export default function NewsArticles(): JSX.Element {
  const searchContext = useContext(SearchContext);
  const { currentArticles } = searchContext;

  const renderArticles = ({
    _id: id,
    headline,
    snippet,
  }: Article): JSX.Element => {
    return (
      <Article key={id}>
        <h3>{headline}</h3>
        <p>{snippet}</p>
      </Article>
    );
  };

  return (
    <Container>
      <Label>Results:</Label>
      {currentArticles.length > 0 ? (
        <div>Loading...</div>
      ) : (
        <div>{currentArticles.map<Article>(el => renderArticles(el))}</div>
      )}
    </Container>
  );
}
