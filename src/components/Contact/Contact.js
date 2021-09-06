import React from "react";
import {
  NumberSpan,
  SectionTitle,
  Container,
  Button,
} from "../../globalStyles";
import {
  ContactContent,
  ContactWrapper,
  ContactTitle,
  ContactBtnLink,
} from "./Contact.elements";

export default function Contact() {
  return (
    <>
      <Container>
        <ContactContent id="contact">
          <SectionTitle>
            <NumberSpan>03.</NumberSpan>Contact
          </SectionTitle>
          <ContactWrapper>
            <ContactTitle>
              Want to work together or have any questions?
            </ContactTitle>
            <ContactBtnLink href={`mailto:anacolell8@gmail.com`}>
              <Button>Say hello</Button>
            </ContactBtnLink>
          </ContactWrapper>
        </ContactContent>
      </Container>
    </>
  );
}
