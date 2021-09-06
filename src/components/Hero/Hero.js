import React from "react";
import { Button } from "../../globalStyles";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroSubtitle2,
  HeroText,
  HeroBtnLink,
} from "./Hero.elements";

export default function Hero() {
  return (
    <>
      <HeroContainer id="home">
        <HeroContent>
          <HeroTitle>Hi, my name is</HeroTitle>
          <HeroSubtitle>Ana Colell.</HeroSubtitle>
          <HeroSubtitle2>I'm a full-stack web developer.</HeroSubtitle2>
          <HeroText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo
            perferendis ullam deleniti. Deleniti, voluptate. Vel laudantium
            maxime autem repellat modi corporis optio temporibus rem ipsam!
            Officiis perspiciatis aliquam provident.
          </HeroText>
        </HeroContent>
        <HeroBtnLink
          to="projects"
          smooth={true}
          duration={600}
          spy={true}
          exact="true"
          // offset={-60}
        >
          >
          <Button big fontBig>
            See my work
          </Button>
        </HeroBtnLink>
      </HeroContainer>
    </>
  );
}
