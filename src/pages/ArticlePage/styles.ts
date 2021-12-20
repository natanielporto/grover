import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1024px;
  margin: 40px auto;
`;

export const ArticleContainer = styled.div`
  a {
    text-decoration: none;
    color: #4f4f4f;
  }
`;

export const Label = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
  color: #4d4d4d;
`;

export const Article = styled.div`
  width: 100%;
  height: 40px;
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  outline: none;
  background-color: #fffdf4;
  white-space: nowrap;
  margin: auto;
  display: flex;
  align-items: center;

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
