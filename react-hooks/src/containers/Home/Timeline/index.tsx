import { Title } from "../../../styles/styles";
import {
  TimelineContainer,
  TimelineItem,
  TimelineLine,
  TimelineYear,
  TimelinePoint,
  TimelineEvent,
} from "./style";

function Timeline() {
  return (
    <>
    <Title>Sobre mim</Title>
     <TimelineContainer>
  <TimelineLine /> 

  <TimelineItem>
    <TimelineYear>2015</TimelineYear>
    <TimelinePoint />
    <TimelineEvent>
      Através de um jogo chamado Stardoll, conheci a estrutura HTML e CSS ainda criança.
    </TimelineEvent>
  </TimelineItem>
  
  <TimelineItem>
    <TimelineYear>2023</TimelineYear>
    <TimelinePoint />
    <TimelineEvent>
      Ingressei na faculdade de bacharelado em Engenharia de Software.
    </TimelineEvent>
  </TimelineItem>

  <TimelineItem>
    <TimelineYear>2024</TimelineYear>
    <TimelinePoint />
    <TimelineEvent>
      Comecei a investir ainda mais tempo e recurso para me aprimorar com cursos paralelos na área.
    </TimelineEvent>
  </TimelineItem>

    <TimelineItem>
    <TimelineYear>2026</TimelineYear>
    <TimelinePoint />
    <TimelineEvent>
      Vou me formar e descobrir o que a Carol do futuro vai conquistar!
    </TimelineEvent>
  </TimelineItem>
</TimelineContainer>

    </>
  );
}

export default Timeline;
