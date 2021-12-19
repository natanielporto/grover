import React, { useContext } from 'react';
import { Link } from 'react-location';
import { IArticle, SearchContext } from '../../globalContext/searchContext';

import { Container, ArticleContainer, Label, Article } from './styles';

export default function NewsArticles(): JSX.Element {
  const searchContext = useContext(SearchContext);
  const { currentArticles } = searchContext;

  const renderArticles = (element: IArticle): JSX.Element => {
    return (
      <ArticleContainer>
        <Link to={element.web_url}>
          <Article key={element._id}>
            <h3>{element.headline.main}</h3>
            {/* <p>{element.pub_date}</p>
        <p>{element.lead_pagraph}</p>
      <a href={element.web_url}>Read the full article</a> */}
          </Article>
        </Link>
      </ArticleContainer>
    );
  };

  return (
    <Container>
      <Label>Results:</Label>
      {currentArticles && currentArticles.length > 0 ? (
        <div>{currentArticles.map(el => renderArticles(el))}</div>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
}