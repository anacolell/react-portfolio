import React, { useState, useEffect } from "react";
import { Button } from "../../globalStyles";
import { animateScroll as scroll } from "react-scroll";
import { FiGithub, FiLinkedin, FiMoon, FiSun } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";
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
  ScrollUp,
} from "./Hero.elements";

export default function Hero() {
  const [theme, setTheme] = useState(getTheme());
  const [arrow, setArrow] = useState(false);

  function getTheme() {
    return JSON.parse(localStorage.getItem("theme")) || "dark-theme";
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.className = theme;
  }, [theme]);

  function themeToggler() {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }

  function showArrow() {
    if (window.scrollY > 1000) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  }

  function scrollUp() {
    scroll.scrollToTop();
  }

  useEffect(() => {
    window.addEventListener("scroll", showArrow);
    return () => {
      window.removeEventListener("scroll", showArrow);
    };
  }, []);

  return (
    <>
      <HeroContainer id="home">
        <HeroContent>
          <HeroTitle>Hi, my name is</HeroTitle>
          <HeroSubtitle>Ana Colell.</HeroSubtitle>
          <HeroSubtitle2>I make web applications.</HeroSubtitle2>
          <HeroText>
            I'm a full-stack web developer with a languages background currently
            living in Greece. I love combining the worlds of logic and creative
            design to make clean and user-friendly websites and applications.
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
          <Ball checked={theme === "light-theme" ? "translateX(30px)" : ""} />
        </LightDarkMode>
        {arrow && (
          <ScrollUp to="/" onClick={scrollUp}>
            <MdKeyboardArrowUp />
          </ScrollUp>
        )}
      </HeroContainer>
    </>
  );
}
