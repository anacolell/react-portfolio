import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-scroll";

export const HeroContainer = styled(Container)`
  background-color: var(--darkblue);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Container}
`;

export const HeroContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 1200px;
  padding: 20px;
  padding-top: 100px;

  @media screen and (min-width: 768px) {
    padding: 50px;
    padding-top: 120px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  color: var(--green);
  margin-bottom: 26px;

  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 2rem;
  color: var(--lightblue);
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const HeroSubtitle2 = styled.h2`
  font-size: 2rem;
  color: var(--blue);
  font-family: "Montserrat", sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const HeroText = styled.p`
  font-size: 1rem;
  color: var(--blue);
  margin-top: 26px;
  max-width: 80%;
  @media screen and (min-width: 768px) {
    max-width: 60%;
  }
`;

export const HeroBtnLink = styled(Link)`
  margin-top: 50px;
`;

export const SocialIconsList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 70%;
  }
`;

export const SocialIcon = styled.a`
  color: var(--blue);
  margin-bottom: 16px;
  margin-left: -2px;
  font-weight: 300;
  font-size: 22px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    color: var(--green);
  }
`;
