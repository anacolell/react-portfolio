import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --darkblue: #09172b;
    --green: #64fcd6;
    --lightgreen: #d1fce9;
    --lightblue: #cfd9f7;
    --mediumblue: #122544;
    --blue: #a4acc4;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: 'Inconsolata', monospace;
}

body {
  background-color: var(--darkblue)
}
`;

export const Container = styled.div`
  background-color: var(--darkblue);
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 991px) {
    width: 80%;
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

export const NumberSpan = styled.span`
  color: var(--green);
  padding-right: 3px;
`;

export const SectionTitle = styled.h3`
  color: var(--lightblue);
  font-size: 1.3rem;
  margin-bottom: 60px;
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  display: flex;
  white-space: nowrap;

  &:before,
  &:after {
    border-top: 1px solid var(--green);
    opacity: 0.3;
    content: "";
    position: relative;
    top: 0.5em;
    width: 45%;
  }
  &:before {
    right: 1.5%;
  }
  &:after {
    left: 1.5%;
  }

  @media screen and (min-width: 700px) {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

export default GlobalStyle;
