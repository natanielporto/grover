import React, { createContext, useCallback, useState, useMemo } from 'react';

interface SearchContextData {
  query: string;
  setQuery: (query: string) => void;
  handleChangeSearchTerm(event: React.ChangeEvent<HTMLInputElement>): void;
  currentArticles: string[];
  setCurrentArticles: (articles: string[]) => void;
}

interface SearchProviderProps {
  children: React.ReactNode;
}

export const SearchContext = createContext<SearchContextData>(
  {} as SearchContextData,
);

export function SearchProvider(props: SearchProviderProps) {
  const { children } = props;
  const [query, setQuery] = useState<string>('');
  const [currentArticles, setCurrentArticles] = useState<string[]>([]);

  const handleChangeSearchTerm = useCallback(input => {
    const { value } = input.target;
    setQuery(value as string);
  }, []);

  const value = useMemo(
    () => ({
      query,
      setQuery,
      handleChangeSearchTerm,
      setCurrentArticles,
      currentArticles,
    }),
    [
      query,
      setQuery,
      handleChangeSearchTerm,
      currentArticles,
      setCurrentArticles,
    ],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
