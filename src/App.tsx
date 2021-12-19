import React from 'react';
import NewsArticle from './components/Article';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { SearchProvider } from './globalContext/searchContext';

const articles: string[] = ['1', '2', '3', '4', '5'];
function App() {
  return (
    <div className="App">
      <SearchProvider>
        <NavBar />
        <SearchBar />
        {/* <NewsArticle articles={articles} /> */}
      </SearchProvider>
    </div>
  );
}

export default App;
