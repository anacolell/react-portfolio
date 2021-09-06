import styled from "styled-components";

export const FooterContent = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.p`
  color: var(--blue);
  font-size: 0.9rem;
`;

export const HeartIcon = styled.i`
  color: var(--green);
  margin-left: 6px;
  font-size: 1rem;
`;

export const SocialIconsList = styled.ul`
  display: flex;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SocialIcon = styled.a`
  color: var(--blue);
  padding: 0 14px;
  font-weight: 300;
  font-size: 22px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    color: var(--green);
  }
`;
