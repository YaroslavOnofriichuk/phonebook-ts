import styled from 'styled-components';

export const Form = styled.form`
  max-width: 300px;
  margin: 0 auto;

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
  }

  input {
    border: 1px solid #7CE1CF;
    border-radius: 10px;
    height: 40px;
    padding-left: 10px;
  }

  button {
    background: #7CE1CF;
    border-radius: 10px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    width: 100%;
    height: 40px;
  }

  p {
    color: tomato;
  }
`;