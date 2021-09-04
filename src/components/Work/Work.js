import React from "react";
import { NumberSpan, Container } from "../../globalStyles";

import ProjectList from "./ProjectList/ProjectList";
import OtherProjectsList from "./OtherProjectsList/OtherProjectsList";
import { WorkContent, WorkTitle, OtherProjectsTitle } from "./Work.elements";

export default function Work() {
  return (
    <>
      <Container>
        <WorkContent>
          <WorkTitle>
            <NumberSpan>03.</NumberSpan>My projects
          </WorkTitle>
          <ProjectList />
          <OtherProjectsTitle>Other projects I've built</OtherProjectsTitle>
          <OtherProjectsList />
        </WorkContent>
      </Container>
    </>
  );
}
