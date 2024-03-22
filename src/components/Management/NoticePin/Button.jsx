import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: white;
  border: none;

  padding: 10px 18px;

  border-radius: 12px;
  background: #8784ff;
  cursor: pointer;
  margin-top: 3.2vh;
  width: 65px;
`;

const ManagementButton = () => {
  return <Button>완료</Button>;
};

export default ManagementButton;
