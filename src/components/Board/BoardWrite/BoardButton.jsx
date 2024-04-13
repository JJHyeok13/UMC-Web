import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: white;
  border: none;

  display: flex;
  padding: 10px 18px;
  justify-content: flex-end;
  align-items: center;
  border-radius: 12px;
  background: #232a6d;
  cursor: pointer;
  margin-top: 3.2vh;
`;

const BoardButton = ({ handleSubmit }) => {
  return <Button onClick={handleSubmit}>작성</Button>;
};

BoardButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default BoardButton;
