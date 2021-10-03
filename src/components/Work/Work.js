import React from "react";
import { NumberSpan, Container, SectionTitle } from "../../globalStyles";
import { projects } from "./ProjectList/ProjectListData";
import { otherProjects } from "./OtherProjectsList/OtherProjectsData";
import ProjectList from "./ProjectList/ProjectList";
import OtherProjectsList from "./OtherProjectsList/OtherProjectsList";
import { WorkContent, OtherProjectsTitle } from "./Work.elements";

export default function Work() {
  return (
    <>
      <Container>
        <WorkContent id="projects">
          <SectionTitle>
            <NumberSpan>01.</NumberSpan>My projects
          </SectionTitle>
          <ProjectList projects={projects} />
          <OtherProjectsTitle>Other projects I've built</OtherProjectsTitle>
          <OtherProjectsList otherProjects={otherProjects} />
        </WorkContent>
      </Container>
    </>
  );
}
