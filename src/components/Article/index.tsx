import React from 'react';
import { Container, Label, Article } from './styles';

export default function NewsArticle(articles: string[]): JSX.Element {
  return (
    <Container>
      <Label>Article</Label>
      <Article>oi</Article>
      <Article>oi</Article>
      <Article>oi</Article>
      <Article>oi</Article>
      <Article>oi</Article>
    </Container>
  );
}
