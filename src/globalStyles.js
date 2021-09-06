import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.dark-theme {
  --background: #09172b;
  --themeicons: #fff;
  --switch: #3a557f;
  --ball: #fff;
  --title: #cfd9f7;  
  --icons: #a4acc4;
  --iconhover: #64fcd6;
  --btn: #64fcd6;
  --btntexthover: #d1fce9;
  --navtext: #fff;
  --navtexthover:#64fcd6; 
  --numberspan: #64fcd6;
  --sectionline: #64fcd6;
  --projectlink: #64fcd6;
  --projectlinkhover: #d1fce9;
  --projectbackground: #122544;
  --mobileicon: #cfd9f7;
}

.light-theme { 
  --background: #EEE7E1; 
  --themeicons: #fff;
  --switch: #808080;
  --ball: #fff;
  --title: #1A1919;
  --icons: #1A1919;
  --btn: #1A1919;
  --navtext: #808080;
  --navtexthover: #1A1919;
  --numberspan: #1A1919;
  --btntexthover: #eee7e1;
  --sectionline: #000;
  --iconhover: #1A1919;  
  --projectlink: #1A1919;
  --projectlinkhover: #808080;
  --projectbackground: #f4f0ed;
  --mobileicon: #1A1919;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: 'Inconsolata', monospace;
    list-style: none;
}

body {
  background-color: var(--background)
}
`;

export const Container = styled.div`
  background-color: var(--background);
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 991px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: transparent;
  border: 1px solid var(--btn);
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: var(--btn);
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  cursor: pointer;
  transition: all 0.3 ease-out;

  &:hover {
    color: var(--btntexthover);
    background: #133040;
  }
`;

export const NumberSpan = styled.span`
  color: var(--numberspan);
  padding-right: 3px;
`;

export const SectionTitle = styled.h3`
  color: var(--title);
  font-size: 1.3rem;
  margin-bottom: 60px;
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  display: flex;
  white-space: nowrap;

  &:before,
  &:after {
    border-top: 1px solid var(--sectionline);
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
