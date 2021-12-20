import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar';
import { SearchContext } from '../../globalContext/searchContext';

import { Container, Title, Date, ArticleCopy } from './styles';

export default function ArticlePage(): JSX.Element {
  const searchContext = useContext(SearchContext);
  const { article } = searchContext;

  const {
    _id,
    headline: { main },
    lead_paragraph,
    web_url,
    pub_date,
  } = article;

  const dateRearrange = (date: string) =>
    date.split('T')[0].split('-').reverse().join('.');

  const handleOutboundLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(event.currentTarget.href, '_blank');
  };

  return (
    <>
      <Navbar />
      {article ? (
        <Container key={_id}>
          <Link to="/">&lt; Go to results page</Link>
          <Title>{main}</Title>
          <Date>{dateRearrange(pub_date)}</Date>
          <ArticleCopy>{lead_paragraph}</ArticleCopy>
          <a href={web_url} onClick={handleOutboundLink}>
            Read the full article
          </a>
        </Container>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
