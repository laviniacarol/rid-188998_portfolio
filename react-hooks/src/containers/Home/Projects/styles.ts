// styles.ts
import styled from "styled-components";

export const Container = styled.div`
  padding: 0.2rem;
  margin: 80px;
  color: #fff;
  text-align: center;

  .grid {
  display: grid;
  grid-template-columns: repeat(2, 500px);
  gap: 10rem; 
  justify-content: center;
  margin: 0 auto;         

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    gap: 1rem;
  }
}
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  max-width: 500px;
  margin-top: 30px;
  margin-bottom: 80px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(245, 244, 244, 1.5);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  margin-top: auto; 
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  text-align: start;
`;

export const Button = styled.button`
  color: white;
  font-size: 15px;
  align-items: flex-end;
  font-weight: 600;
  margin-top: 70px;
  background: linear-gradient(90deg, #13ADC7, #6978D1, #945DD6);
  border-radius: 83px;
  padding: 20px 40px;
  width: 220px;
  height: 60px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: scale(0.9);
  }

`;


export const Img = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

