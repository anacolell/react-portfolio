import styled from "styled-components";

export const WorkContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;

  @media screen and (min-width: 700px) {
    padding: 50px;
  }
`;

export const WorkTitle = styled.h3`
  color: var(--lightblue);
  font-size: 1.3rem;
  margin-bottom: 60px;
  font-family: "Montserrat", sans-serif;

  @media screen and (min-width: 700px) {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

export const OtherProjectsTitle = styled.h4`
  color: var(--lightblue);
  font-size: 1.2rem;
  margin: 20px 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;

  @media screen and (min-width: 700px) {
    font-size: 1.3rem;
    font-weight: 300;
  }
`;
