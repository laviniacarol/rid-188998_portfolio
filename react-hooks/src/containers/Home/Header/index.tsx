import { Container, Nav, NavLink, Github, Linkedin } from "./styles";

function Header() {
  return (
    <Container>
      <Nav>
        <NavLink href="/">Projetos</NavLink>
        <NavLink href="/">Tecnologias</NavLink>
        <NavLink href="/">Sobre mim</NavLink>
      </Nav>
       <Github src="/GitHub.svg" alt="Github Logo" />
      <Linkedin src="/LinkedIn.svg" alt="LinkedIn Logo" />
    </Container>
  );
}

export default Header;
