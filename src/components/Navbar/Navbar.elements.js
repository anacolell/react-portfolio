import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background-color: var(--darkblue);
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 70px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: var(--lightblue);
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    /* position: absolute;
    top: 0;
    right: 0; */
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    /* display: flex; */
    flex-direction: column;
    padding-top: 80px;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 70px;
    left: ${({ clicked }) => (clicked ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: var(--darkblue);
  }
`;

export const NavItem = styled.li`
  height: 70px;
  font-size: 0.97rem;

  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: 1.3rem;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: var(--green);
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;

export const NavLinkSpan = styled.span`
  color: var(--green);
  padding-right: 3px;
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
`;
