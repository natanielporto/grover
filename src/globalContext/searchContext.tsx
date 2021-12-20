import React, { createContext, useCallback, useState, useMemo } from 'react';

export interface IArticle {
  _id: string;
  headline: { main: string };
  lead_paragraph: string;
  web_url: string;
  pub_date: string;
  meta: { hits: number };
}

interface SearchContextData {
  query: string;
  setQuery: (query: string) => void;
  handleChangeSearchTerm(event: React.ChangeEvent<HTMLInputElement>): void;
  currentArticles: IArticle[];
  setCurrentArticles: (articles: IArticle[]) => void;
  page: number;
  setPage: (page: number) => void;
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
  const [page, setPage] = useState<number>(1);

  console.log('page:', page);
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
      page,
      setPage,
    }),
    [
      query,
      setQuery,
      handleChangeSearchTerm,
      currentArticles,
      setCurrentArticles,
      page,
      setPage,
    ],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
