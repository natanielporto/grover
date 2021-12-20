import React from 'react';

import { SearchProvider } from './globalContext/searchContext';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <SearchProvider>
      <LandingPage />
    </SearchProvider>
  );
}

export default App;
