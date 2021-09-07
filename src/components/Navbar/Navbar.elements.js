import styled from "styled-components";
import { Link } from "react-scroll";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  height: 70px;
  width: 100%;
  ${Container}
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--mobileicon);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding-top: 80px;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 70px;
    left: ${({ clicked }) => (clicked ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: var(--background);
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
  color: var(--navtext);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: var(--navtexthover);
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
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

export const NavBtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
`;
