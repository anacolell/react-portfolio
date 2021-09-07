import React from "react";
import { projects } from "./ProjectListData";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import {
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
} from "./ProjectList.elements";

export default function ProjectList() {
  return (
    <>
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
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTechnologies>
                  {project.technologies.map((technology) => {
                    return (
                      <ProjectTechnology key={technology.id}>
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
    </>
  );
}
