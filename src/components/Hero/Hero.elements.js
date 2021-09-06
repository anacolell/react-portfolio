import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-scroll";

export const HeroContainer = styled(Container)`
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
  color: var(--title);
  margin-bottom: 26px;

  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 2rem;
  color: var(--title);
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const HeroSubtitle2 = styled.h2`
  font-size: 2rem;
  color: var(--icons);
  font-family: "Montserrat", sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const HeroText = styled.p`
  font-size: 1rem;
  color: var(--icons);
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
  color: var(--icons);
  margin-bottom: 16px;
  margin-left: -2px;
  font-weight: 300;
  font-size: 22px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    color: var(--iconhover);
  }
`;

export const LightDarkMode = styled.div`
  position: fixed;
  top: 20px;
  right: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--switch);
  border-radius: 50px;
  cursor: pointer;
  width: 60px;
  height: 28px;
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    right: 20px;
    top: 30%;
    transform: rotate(90deg);
  }
`;

export const MoonIcon = styled.div`
  color: var(--themeicons);
  margin-left: 5px;

  @media screen and (min-width: 768px) {
    transform: rotate(-70deg);
  }
`;

export const SunIcon = styled.div`
  color: var(--themeicons);
  margin-right: 6px;
  margin-top: 2px;
`;

export const Ball = styled.div`
  background-color: var(--ball);
  transform: ${({ checked }) => checked};
  position: absolute;
  border-radius: 50%;
  height: 22px;
  width: 22px;
  left: 5px;
  transition: transform 0.2s linear;
  z-index: 999;
`;
