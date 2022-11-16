import React from "react";
import { Container } from "../../globalStyles";
import { VscHeart } from "react-icons/vsc";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";

import {
  FooterText,
  FooterContent,
  HeartIcon,
  SocialIconsList,
  SocialIcon,
  FooterLink,
} from "./Footer.elements";

export default function Footer() {
  return (
    <Container>
      <FooterContent data-testid="footer">
        <SocialIconsList>
          <SocialIcon href="https://github.com/anacolell" target="_blank">
            <FiGithub />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin/in/anacolell" target="_blank">
            <FiLinkedin />
          </SocialIcon>
          <SocialIcon href={`mailto:anacolell8@gmail.com`}>
            <BiEnvelope />
          </SocialIcon>
        </SocialIconsList>
        <FooterText>
          Coded by Ana with
          <HeartIcon>
            <VscHeart />
          </HeartIcon>
        </FooterText>
        <FooterText>
          Inspired by
          <span>&nbsp;</span>
          <FooterLink href="https://.brittanychiang.com">
            Brittany Chiang
          </FooterLink>
          's design
        </FooterText>
      </FooterContent>
    </Container>
  );
}
