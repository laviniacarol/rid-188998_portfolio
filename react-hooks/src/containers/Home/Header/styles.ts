import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 0 540px;
  width: 100%;
  gap: 20px;
  color: white;
  font-size: 30px;
`;

export const Nav = styled.nav`
  gap: 80px;
  padding-top: 46px;
  display: flex;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    opacity: 0.7;
  }
`;


export const Github = styled.img`
  height: 30px;
  padding-top: 46px;
  cursor: pointer;
  margin-left: 280px;
`;

export const Linkedin = styled.img`
  padding-top: 46px;
  height: 30px;
  cursor: pointer;
`;


