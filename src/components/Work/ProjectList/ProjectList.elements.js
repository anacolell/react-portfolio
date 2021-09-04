import styled from "styled-components";

export const ProjectCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Project = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  color: var(--lightblue);
  transition: all 0.3s ease;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    /* width: 85%; */
    justify-content: space-between;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectImgWrapper = styled.a`
  @media screen and (min-width: 768px) {
    width: 55%;
    order: ${({ position }) => position};
  }
`;

export const ProjectInfo = styled.div`
  background-color: var(--mediumblue);
  padding: 20px;
  max-height: 250px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 40%;
    margin-top: 40px;
  }
`;

export const ProjectTitle = styled.h3`
  margin-bottom: 30px;
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
  font-size: 1.5rem;
  margin-left: 20px;
`;
