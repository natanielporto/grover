import React from 'react';
import { render, screen } from '@testing-library/react';
import { Link } from 'react-router-dom';
import ArticlePage from '.';
import { ArticleCopy, Container, CurrentDate, Title } from './styles';
import Navbar from '../../components/Navbar';

describe('Article page', () => {
  it('should render the article page', () => {
    render(<ArticlePage />);

    expect(
      screen.getByText('"The New York Times" article search application'),
    ).toBeTruthy();
  });

  it('should render the article into the page', () => {
    const date = '2021-12-21T10:00:24+0000';
    const dateRearrange = jest.fn();
    const handleOutboundLink = jest.fn();

    render(
      <ArticlePage>
        <Navbar />
        <Container key="test">
          <Link to="/">&lt; Go to results page</Link>
          <Title>"Test</Title>
          <CurrentDate>{dateRearrange(date)}</CurrentDate>
          <ArticleCopy>"Text test"</ArticleCopy>
          <a href="Ref test" onClick={handleOutboundLink}>
            Read the full article
          </a>
        </Container>
      </ArticlePage>,
    );

    expect(
      screen.getByText('"The New York Times" article search application'),
    ).toBeTruthy();
    expect(screen.getByText('Text test')).toBeTruthy();
    expect(screen.getByText('21.12.2021')).toBeTruthy();
  });
});
