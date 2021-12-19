import React from 'react';
import { Router, Route, ReactLocation, Outlet } from 'react-location';

import { SearchProvider } from './globalContext/searchContext';
import LandingPage from './pages/LandingPage';

const location = new ReactLocation();
const routes: Route[] = [
  {
    path: '/',
    element: <LandingPage />,
  },
];
function App() {
  return (
    <Router location={location} routes={routes}>
      <SearchProvider>
        <Outlet />
      </SearchProvider>
    </Router>
  );
}

export default App;
