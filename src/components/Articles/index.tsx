import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IArticle, SearchContext } from '../../globalContext/searchContext';
import Pagination from '../Pagination';

import { Container, ArticleContainer, Label, Article } from './styles';

export default function NewsArticles(): JSX.Element {
  const searchContext = useContext(SearchContext);
  const { currentArticles, setArticle } = searchContext;

  const renderArticles = (element: IArticle): JSX.Element => {
    const {
      _id,
      headline: { main },
      lead_paragraph,
      web_url,
      pub_date,
      meta,
    } = element;
    return (
      <ArticleContainer
        onClick={() =>
          setArticle({
            _id,
            headline: { main },
            lead_paragraph,
            web_url,
            pub_date,
            meta,
          })
        }
        key={_id}
      >
        <Link to="/article">
          <Article key={element._id}>
            <h3>{element.headline.main}</h3>
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
      <Pagination />
    </Container>
  );
}
