import React from 'react';
import styled from 'styled-components';

const DateContainer = styled.div`
  display: flex;
  width: 120vh;
  flex-direction: column;
  border-radius: 12px;
  padding: 1vh;
  margin-top: 1.6vh;

  border: 1px solid #232a6d;
`;

const Start = styled.div`
  border-bottom: 1px solid #d9d9d9;
  color: #000000;
  padding-bottom: 0.5vh;
  // font-weight: bold;
`;

const End = styled.div`
  color: #000000;
  padding-top: 0.5vh;

  // font-weight: bold;
`;

const StartendDate = () => {
  return (
    <DateContainer>
      <Start>시작일</Start>
      <End>종료일</End>
    </DateContainer>
  );
};

export default StartendDate;
