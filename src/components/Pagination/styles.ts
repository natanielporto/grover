import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  button {
    border: 1px solid #eee;
    padding: 5px 10px;
    background: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #eee;
    }

    &:active {
      background: lightblue;
      color: white;
    }
  }
`;
