import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
   
    display: flex;
    flex-direction: column;
    border-top: 1px solid #7CE1CF;
    padding: 5px;

    &:last-child {
      border-bottom: 1px solid #7CE1CF;
    };

    div {
      display: flex;
      justify-content: space-between;
      align-items: center; 
    };

    p {
      margin: 0;
      display: flex;
      flex-direction: column;
    };

    svg {
      cursor: pointer;
    };
  };
`;