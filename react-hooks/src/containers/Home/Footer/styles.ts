import styled from "styled-components";

export const FooterContainer = styled.footer`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 225px;
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 50px;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
`;

export const Label = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 30px;

`;

export const Icons = styled.div`
  display: flex;
  gap: 35px;
`;

export const Icon = styled.img`
  height: 50px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
