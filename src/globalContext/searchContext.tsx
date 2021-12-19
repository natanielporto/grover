import React, { createContext, useCallback, useState, useMemo } from 'react';

export interface IArticle {
  _id: string;
  headline: { main: string };
  lead_paragraph: string;
  web_url: string;
  pub_date: string;
}

interface SearchContextData {
  query: string;
  setQuery: (query: string) => void;
  handleChangeSearchTerm(event: React.ChangeEvent<HTMLInputElement>): void;
  currentArticles: IArticle[];
  setCurrentArticles: (articles: IArticle[]) => void;
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
  const [currentArticles, setCurrentArticles] = useState<IArticle[]>([]);

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
