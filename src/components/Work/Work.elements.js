import styled from "styled-components";

export const WorkContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 80px 0px;

  @media screen and (min-width: 700px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const OtherProjectsTitle = styled.h4`
  color: var(--title);
  font-size: 1.2rem;
  margin: 20px 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;

  @media screen and (min-width: 700px) {
    font-size: 1.3rem;
    font-weight: 300;
  }
`;
