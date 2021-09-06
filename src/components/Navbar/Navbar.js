import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button, NumberSpan } from "../../globalStyles";
import cv from "../../Documents/cv.pdf";

import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);

  function handleClick() {
    setClicked(!clicked);
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "var(--green)" }}>
        <Nav>
          <NavbarContainer>
            <MobileIcon onClick={handleClick}>
              {clicked ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} clicked={clicked}>
              <NavItem>
                <NavLinks
                  to="projects"
                  smooth={true}
                  duration={600}
                  spy={true}
                  exact="true"
                  // offset={-60}
                >
                  <NumberSpan>01.</NumberSpan>Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="skills"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  // offset={-60}
                >
                  <NumberSpan>02.</NumberSpan>Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={800}
                  spy={true}
                  exact="true"
                  // offset={-60}
                >
                  <NumberSpan>03.</NumberSpan> Contact
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink href={cv} target="_blank">
                    <Button>CV</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink href={cv} target="_blank">
                    <Button big fontBig>
                      CV
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
