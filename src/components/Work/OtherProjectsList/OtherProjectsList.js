import React from "react";
import { otherProjects } from "./OtherProjectsData";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import {
  ProjectCards,
  Project,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectTechnologies,
  ProjectTechnology,
  LinkWrapper,
  ProjectLink,
} from "./OtherProjectsList.elements";

export default function OtherProjectsList() {
  return (
    <>
      <ProjectCards>
        {otherProjects.map((project) => {
          return (
            <Project key={project.id} href={project.liveLink} target="_blank">
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTechnologies>
                  {project.technologies.map((technology) => {
                    return (
                      <ProjectTechnology>{technology.name}</ProjectTechnology>
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
      ;
    </>
  );
}
