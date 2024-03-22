import React from 'react';
import styled from 'styled-components';

const LocalContainer = styled.div`
  display: flex;
  width: 120vh;
  padding: 1vh;
  border-radius: 12px;
  margin-top: 1.6vh;
  border: 1px solid #232a6d;
`;

const LocalInput = styled.input`
  display: flex;
  width: 100%;
  padding: 1vh;
  border: none;
  border-radius: 12px;
  outline: none;
  &::placeholder {
    color: #bcbcbc;
  }
`;

const Local = () => {
  return (
    <LocalContainer>
      <LocalInput placeholder="장소설정" />
    </LocalContainer>
  );
};

export default Local;
