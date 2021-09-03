import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --darkblue: #09172b;
    --green: #64fcd6;
    --lightblue: #eaf2fc;
    --blue: #a4acc4;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: 'Inconsolata', monospace;
}
`;

export const Container = styled.div`
  /* z-index: 1; */
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: transparent;
  border: 1px solid var(--green);
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: var(--green);
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  cursor: pointer;
  transition: all 0.3 ease-out;

  &:hover {
    background: #133040;
  }
`;

export default GlobalStyle;
