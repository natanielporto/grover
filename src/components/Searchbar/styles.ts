import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1024px;
  margin: 24px auto;
`;

export const Label = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
  color: #4d4d4d;
`;

export const SearchContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    width: 32px;
    top: 14px;
    right: 14px;
  }
`;

export const SearchInput = styled.input`
  width: 98%;
  height: 40px;
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  outline: none;
  background-color: #fffdf4;

  &:focus {
    border: 2px solid #4d4d4d;
    font-size: 24px;
    color: #4d4d4d;
  }
`;
