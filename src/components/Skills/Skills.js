import React from "react";
import { skillsData } from "./SkillsData";
import { NumberSpan, SectionTitle, Container } from "../../globalStyles";
import { SkillsContent, SkillsList, Skill, SkillName } from "./Skills.elements";

export default function Skills() {
  return (
    <>
      <Container>
        <SkillsContent id="skills" data-testid="skills">
          <SectionTitle>
            <NumberSpan>02. </NumberSpan>Skills
          </SectionTitle>
          <SkillsList>
            {skillsData.map((skill) => {
              return (
                <Skill key={skill.id}>
                  {skill.logo}
                  <SkillName>{skill.name}</SkillName>
                </Skill>
              );
            })}
          </SkillsList>
        </SkillsContent>
      </Container>
    </>
  );
}
