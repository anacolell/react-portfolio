import styled from "styled-components";

export const ProjectCards = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 60%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Project = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  color: var(--lightblue);
  background-color: var(--mediumblue);
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProjectInfo = styled.div`
  margin-top: 20px;
`;

export const ProjectTitle = styled.h3`
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
`;

export const ProjectDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  color: var(--blue);
  line-height: 1.4;
`;

export const ProjectTechnologies = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0px 10px;
  padding: 0px;
  position: absolute;
  bottom: 46px;
`;

export const ProjectTechnology = styled.li`
  color: var(--blue);
  font-size: 0.95rem;
  margin-right: 20px;
`;

export const LinkWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  right: 20px;
`;

export const ProjectLink = styled.a`
  color: var(--green);
  font-size: 1.3rem;
  margin-left: 20px;

  &:hover {
    color: var(--lightgreen);
  }
`;
