import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './globalContext/searchContext';
import ArticlePage from './pages/ArticlePage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
