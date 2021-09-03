import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinkSpan,
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
            <NavLogo to="/">AC</NavLogo>
            <MobileIcon onClick={handleClick}>
              {clicked ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} clicked={clicked}>
              <NavItem>
                <NavLinks to="/about">
                  <NavLinkSpan>01.</NavLinkSpan>About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/work">
                  <NavLinkSpan>02.</NavLinkSpan>Work
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/skills">
                  <NavLinkSpan>03.</NavLinkSpan>Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact">
                  <NavLinkSpan>04.</NavLinkSpan> Contact
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/cv">
                    <Button>CV</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/cv">
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
