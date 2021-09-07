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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 700px) {
    width: 60%;
  }
`;

export const Skill = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin-right: 20px;
  margin-bottom: 30px;
  color: var(--icons);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px) translate3d(0, 0, 0);
    color: var(--iconhover);
  }

  /* &:hover SkillName {
    color: var(--iconhover);
  } */

  @media screen and (min-width: 700px) {
    font-size: 5rem;
    margin-right: 40px;
  }
`;

export const SkillName = styled.p`
  font-size: 0.8rem;

  @media screen and (min-width: 700px) {
    font-size: 1rem;
    margin-top: 10px;
  }
`;
