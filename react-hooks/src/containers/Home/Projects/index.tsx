import { useState } from "react";
import { Container, Card, CardTitle, Description, Img, Button, DescriptionContainer } from "./styles";

// images portfolio
import Projeto1 from "../../../assets/007-Portfolio.png";
import Projeto2 from "../../../assets/Loja-Portfolio.png";
import Projeto3 from "../../../assets/Dash-Portfolio.png";
import Projeto4 from "../../../assets/Spider-Portfolio.png";
import { Title } from "../../../styles/styles";

function Projects() {
  const [visible, setVisible] = useState(true);

  const projects = [
    {
      id: 1,
      title: "007 FrontEnd",
      description: "Front-end para um eccomerce de produtos temáticos com html, css e js",
      image: Projeto1,
      link: "#",
    },
    {
      id: 2,
      title: "LABELLAMAFIA",
      description: "Front-end de um eccomerce da marca de roupas LA BELLA MAFIA somente html e css",
      image: Projeto2,
      link: "#",
    },
    {
      id: 3,
      title: "Dashboard com login DNC",
      description: "Dashboard DNC com react hooks, typescript, uso de API, rota de login e testes",
      image: Projeto3,
      link: "#",
    },
    {
      id: 4,
      title: "Carrossel spiderverse",
      description: "Projeto carrossel do multiverso spiderman com SCSS, Typescript, react e framer motion",
      image: Projeto4,
      link: "#",
    },
  ];

  return (
   <>
   <Title>Projetos</Title>
    <Container>
      <Button onClick={() => setVisible(!visible)}>
        {visible ? "Esconder projetos" : "Mostrar projetos"}
      </Button>

      {visible && (
        <div className="grid">
          {projects.map((proj) => (
          <Card key={proj.id}>
  <Img src={proj.image} alt={proj.title} />
  <CardTitle>{proj.title}</CardTitle>

  <DescriptionContainer>
    <Description>{proj.description}</Description>
    <a href={proj.link} target="_blank" rel="noopener noreferrer">
      <Button>Clique aqui</Button>
    </a>
  </DescriptionContainer>
</Card>


          ))}
        </div>
      )}
    </Container>
    </>
  );
}

export default Projects;
