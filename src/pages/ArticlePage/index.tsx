import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { SearchContext } from '../../globalContext/searchContext';

import { Container, Title, CurrentDate, ArticleCopy } from './styles';

export default function ArticlePage(): JSX.Element {
  const searchContext = useContext(SearchContext);
  const { article } = searchContext;

  const dateRearrange = (date: string) =>
    date.split('T')[0].split('-').reverse().join('.');

  const handleOutboundLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(event.currentTarget.href, '_blank');
  };

  const articleToShow = (
    <>
      <Navbar />
      {article ? (
        <Container key={article._id}>
          <Link to="/">&lt; Go to results page</Link>
          <Title>{article.headline.main}</Title>
          <CurrentDate>{dateRearrange(article.pub_date)}</CurrentDate>
          <ArticleCopy>{article.lead_paragraph}</ArticleCopy>
          <a href={article.web_url} onClick={handleOutboundLink}>
            Read the full article
          </a>
        </Container>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );

  return articleToShow;
}
