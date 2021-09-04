import React from "react";
import { NumberSpan, Container } from "../../globalStyles";
import { projects } from "./WorkData";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import {
  WorkContent,
  WorkTitle,
  ProjectCards,
  Project,
  ProjectImg,
  ProjectImgWrapper,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectTechnologies,
  ProjectTechnology,
  LinkWrapper,
  ProjectLink,
} from "./Work.elements";

export default function Work() {
  return (
    <>
      <Container>
        <WorkContent>
          <WorkTitle>
            <NumberSpan>03.</NumberSpan>My projects
          </WorkTitle>
          <ProjectCards>
            {projects.map((project) => {
              return (
                <Project key={project.id}>
                  <ProjectImgWrapper
                    position={project.id === 2 || project.id === 4 ? "1" : "0"}
                    href={project.liveLink}
                    target="_blank"
                  >
                    <ProjectImg src={project.img} alt={project.alt} />
                  </ProjectImgWrapper>
                  <ProjectInfo>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                    <ProjectTechnologies>
                      {project.technologies.map((technology) => {
                        return (
                          <ProjectTechnology>
                            {technology.name}
                          </ProjectTechnology>
                        );
                      })}
                    </ProjectTechnologies>
                    <LinkWrapper>
                      <ProjectLink href={project.githubLink} target="_blank">
                        <FaGithub />
                      </ProjectLink>
                      <ProjectLink href={project.liveLink} target="_blank">
                        <FiExternalLink />
                      </ProjectLink>
                    </LinkWrapper>
                  </ProjectInfo>
                </Project>
              );
            })}
          </ProjectCards>
        </WorkContent>
      </Container>
    </>
  );
}
