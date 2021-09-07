import styled from "styled-components";

export const SkillsContent = styled.section`
  padding: 80px 0px;
  @media screen and (min-width: 700px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const SkillsList = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  @media screen and (min-width: 996px) {
    width: 60%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Skill = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: var(--icons);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px) translate3d(0, 0, 0);
    color: var(--iconhover);
  }

  @media screen and (min-width: 700px) {
    font-size: 5rem;
  }
`;

export const SkillName = styled.p`
  font-size: 0.8rem;

  @media screen and (min-width: 700px) {
    font-size: 1rem;
    margin-top: 10px;
  }
`;
