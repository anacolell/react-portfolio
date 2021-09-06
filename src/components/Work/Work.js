import React from "react";
import { NumberSpan, Container, SectionTitle } from "../../globalStyles";

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
          <ProjectList />
          <OtherProjectsTitle>Other projects I've built</OtherProjectsTitle>
          <OtherProjectsList />
        </WorkContent>
      </Container>
    </>
  );
}
