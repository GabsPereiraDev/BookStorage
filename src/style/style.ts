import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  height: 100%;
  width: 100vw;
  nav {
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    ul {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 5rem;
      height: 39.6rem;
      background-color: #a0b4b7;
    }
  }
  >div{
      width: 80vw;
      display: flex;
      align-items: center;
      justify-content: center;
  }
`;
