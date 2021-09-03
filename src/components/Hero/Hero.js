import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroSubtitle2,
  HeroText,
} from "./Hero.elements";

export default function Hero() {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>Hi, my name is</HeroTitle>
          <HeroSubtitle>Ana Colell.</HeroSubtitle>
          <HeroSubtitle2>Lorem ipsum dolor sit amet.</HeroSubtitle2>
          <HeroText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo
            perferendis ullam deleniti. Deleniti, voluptate. Vel laudantium
            maxime autem repellat modi corporis optio temporibus rem ipsam!
            Officiis perspiciatis aliquam provident.
          </HeroText>
        </HeroContent>
      </HeroContainer>
    </>
  );
}
