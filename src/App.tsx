import React from 'react';
import NewsArticles from './components/Articles';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

import { SearchProvider } from './globalContext/searchContext';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <NavBar />
        <SearchBar />
        <NewsArticles />
      </SearchProvider>
    </div>
  );
}

export default App;
