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
  article: IArticle;
  setArticle: (article: IArticle) => void;
}

interface SearchProviderProps {
  children: React.ReactNode;
}

export const SearchContext = createContext<SearchContextData>(
  {} as SearchContextData,
);

export function SearchProvider(props: SearchProviderProps) {
  const { children } = props;
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [currentArticles, setCurrentArticles] = useState<IArticle[]>([]);
  const [article, setArticle] = useState<IArticle>({} as IArticle);

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
      article,
      setArticle,
    }),
    [
      query,
      setQuery,
      handleChangeSearchTerm,
      currentArticles,
      setCurrentArticles,
      page,
      setPage,
      article,
      setArticle,
    ],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
