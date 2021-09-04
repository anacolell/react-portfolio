import React from "react";
import { NumberSpan, SectionTitle, Container } from "../../globalStyles";
import { ContactContent } from "./Contact.elements";

export default function Contact() {
  return (
    <>
      <Container>
        <ContactContent>
          <SectionTitle>
            <NumberSpan>03.</NumberSpan>Contact
          </SectionTitle>
        </ContactContent>
      </Container>
    </>
  );
}
