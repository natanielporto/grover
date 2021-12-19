import React from 'react';
import NewsArticles from '../../components/Articles';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';

function LandingPage() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <NewsArticles />
    </>
  );
}

export default LandingPage;
