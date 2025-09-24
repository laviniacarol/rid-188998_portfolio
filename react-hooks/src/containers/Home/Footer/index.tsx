import {
  FooterContainer,
  ContactInfo,
  InfoBlock,
  Label,
  Icons,
  Icon,
} from "../Footer/styles";

function Footer() {
  return (
    <FooterContainer>
      <ContactInfo>
        <InfoBlock>
          <Label>Meu contato:</Label>
          <span>48 996056653</span>
        </InfoBlock>

        <InfoBlock>
          <Label>Email:</Label>
          <span>carolxlavinia@gmail.com</span>
        </InfoBlock>
      </ContactInfo>

      <Icons>
        <a
          href="https://github.com/laviniacarol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src="/GitHub.svg" alt="Github Logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/carol-lavinia-166410287/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src="/LinkedIn.svg" alt="Linkedin Logo" />
        </a>
        <a
          href="https://www.figma.com/@88dd3e9d_29ec_4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src="/Figma.svg" alt="Figma Logo" />
        </a>
      </Icons>
    </FooterContainer>
  );
}

export default Footer;
