import React, { useState, useEffect } from "react";
import { Button } from "../../globalStyles";
import { FiGithub, FiLinkedin, FiMoon, FiSun } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { BsDash } from "react-icons/bs";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroSubtitle2,
  HeroText,
  HeroBtnLink,
  SocialIconsList,
  SocialIcon,
  LightDarkMode,
  MoonIcon,
  SunIcon,
  Ball,
} from "./Hero.elements";

export default function Hero() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  function themeToggler() {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
      console.log(checked);
    } else {
      setTheme("light-theme");
      setChecked(true);
      console.log(checked);
    }
  }

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
        >
          <Button big fontBig>
            See my work
          </Button>
        </HeroBtnLink>
        <SocialIconsList>
          <SocialIcon href="https://github.com/anacolell" target="_blank">
            <BsDash />
            <FiGithub />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/anacolell" target="_blank">
            <BsDash />
            <FiLinkedin />
          </SocialIcon>
          <SocialIcon href={`mailto:anacolell8@gmail.com`}>
            <BsDash />
            <BiEnvelope />
          </SocialIcon>
        </SocialIconsList>
        <LightDarkMode onClick={themeToggler}>
          <MoonIcon>
            <FiMoon />
          </MoonIcon>
          <SunIcon>
            <FiSun />
          </SunIcon>
          <Ball checked={checked === true ? "translateX(30px)" : ""} />
        </LightDarkMode>
      </HeroContainer>
    </>
  );
}
