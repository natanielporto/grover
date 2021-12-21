import React from 'react';
import NewsArticles from '../../components/Articles';
import Navbar from '../../components/Navbar';
import Searchbar from '../../components/Searchbar';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <NewsArticles />
    </>
  );
}

export default LandingPage;
