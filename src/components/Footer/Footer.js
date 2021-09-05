import React from "react";
import { Container } from "../../globalStyles";
import { VscHeart } from "react-icons/vsc";

import { FooterText, FooterContent, HeartIcon } from "./Footer.elements";

export default function Footer() {
  return (
    <Container>
      <FooterContent>
        <FooterText>
          Coded by Ana with
          <HeartIcon>
            <VscHeart />
          </HeartIcon>
        </FooterText>
      </FooterContent>
    </Container>
  );
}
