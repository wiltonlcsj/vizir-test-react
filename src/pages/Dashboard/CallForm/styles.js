import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 10px;
  background-color: antiquewhite;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }

  label {
    width: 50%;
    margin-bottom: 10px;

    input,
    select {
      padding: 10px;
      width: 100%;
      border: 1px solid grey;
      border-radius: 5px;
      margin: 0 auto;
    }

    span {
      color: red;
    }
  }

  button {
    margin-top: 20px;
    padding: 10px 50px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background-color: #666fff;
    color: white;

    &:hover {
      background-color: #9999ff;
    }
  }
`;
