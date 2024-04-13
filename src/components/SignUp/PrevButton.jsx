import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PrevButtonImage from 'assets/SignUp/PrevButton.svg';

const Button = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const PrevButton = ({ handlePrevStep }) => {
  return <Button src={PrevButtonImage} alt="이전" onClick={handlePrevStep} />;
};

PrevButton.propTypes = {
  handlePrevStep: PropTypes.func.isRequired,
};

export default PrevButton;
