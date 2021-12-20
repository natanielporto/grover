import React, { useContext } from 'react';
import { SearchContext } from '../../globalContext/searchContext';
import { Container } from './styles';

export default function Pagination(): JSX.Element {
  const searchContext = useContext(SearchContext);
  const { page, setPage } = searchContext;

  const handleChangePage = (event: React.MouseEvent<HTMLElement>) => {
    const { id } = event.target as HTMLElement;

    if (id === 'add') {
      setPage(page + 1);
    }

    if (id === 'subtract' && page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <Container>
      <button
        type="button"
        id="subtract"
        onClick={event => handleChangePage(event)}
      >
        &lt; Prev page
      </button>

      <button type="button" id="add" onClick={event => handleChangePage(event)}>
        Next page &gt;
      </button>
    </Container>
  );
}
