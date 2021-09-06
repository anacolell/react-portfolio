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
} from "./Footer.elements";

export default function Footer() {
  return (
    <Container>
      <FooterContent>
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
      </FooterContent>
    </Container>
  );
}
