import styled from "styled-components";

export const ContactContent = styled.section`
  display: flex;
  flex-direction: column;
  padding: 80px 0px;

  @media screen and (min-width: 700px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 700px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const ContactTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--blue);
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  @media screen and (min-width: 700px) {
    font-size: 1.3rem;
  }
`;

export const ContactBtnLink = styled.a`
  margin-top: 50px;
`;
