import styled from "styled-components";

export const ProjectCards = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  /* margin-bottom: 80px; */
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Project = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--lightblue);
  background-color: var(--mediumblue);
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProjectInfo = styled.div``;

export const ProjectTitle = styled.h3`
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
`;

export const ProjectDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  color: var(--blue);
`;

export const ProjectTechnologies = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0px 10px;
  padding: 0px;
`;

export const ProjectTechnology = styled.li`
  margin-right: 10px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ProjectLink = styled.a`
  color: var(--green);
  font-size: 1.2rem;
  margin-left: 20px;
`;
