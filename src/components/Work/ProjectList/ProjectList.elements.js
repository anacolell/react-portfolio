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
  margin-bottom: 80px;
  margin-top: 40px;
  color: var(--title);

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectImgWrapper = styled.a`
  @media screen and (min-width: 992px) {
    width: 55%;
    order: ${({ position }) => position};
  }
`;

export const ProjectInfo = styled.div`
  padding: 20px;
  max-height: 250px;
  width: 100%;
  @media screen and (min-width: 992px) {
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
  background-color: var(--projectbackground);
  padding: 20px;
  font-size: 0.9rem;
  line-height: 1.4;
  color: var(--icons);
`;

export const ProjectTechnologies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0px 10px;
  padding: 0px;
`;

export const ProjectTechnology = styled.li`
  margin-right: 16px;
  margin-bottom: 10px;
  color: var(--icons);
  font-size: 0.95rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ProjectLink = styled.a`
  color: var(--projectlink);
  font-size: 1.5rem;
  margin-left: 20px;
  &:hover {
    color: var(--projectlinkhover);
  }
`;
