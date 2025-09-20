import styled from "styled-components";

export const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 50px auto;
`;

export const TimelineLine = styled.div`
  position: absolute;
  top: 30%;
  left: 80px;
  right: 80px;
  transform: translateY(-350%); /* centraliza exatamente na linha */
  height: 12px;
  background-color: white;
  z-index: 1;
`;

export const TimelineItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

export const TimelinePoint = styled.div`
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 50%;
  margin: 0px;
  z-index: 2;
`;

export const TimelineYear = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  color: white;
  font-size: 32px;
`;

export const TimelineEvent = styled.div`
  margin-top: 40px;
  text-align: center;
  height: 240px;
  position: relative;
  color: #ccc;
  max-width: 170px;
  font-size: 20px;
`;
