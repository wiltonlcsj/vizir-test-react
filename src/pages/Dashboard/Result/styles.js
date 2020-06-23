import styled from 'styled-components';

export const ResultDiv = styled.div`
  max-width: 700px;
  margin: 50px auto;
  padding: ${(props) => (props.clear ? '0' : '30px')};
  border-radius: 10px;
  background-color: antiquewhite;

  .no-result {
    display: none;
  }

  .has-result {
    display: flex;
    font-size: 18px;
    justify-content: space-between;

    span.has-plan {
      color: blue;
      align-content: left;
    }

    span.without-plan {
      color: red;
      align-content: right;
    }
  }
`;
