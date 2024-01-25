import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NextButtonImage from 'assets/signup/NextButton.svg';

const Button = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const NextButton = ({ nextStep }) => {
  const handleNextStep = () => {
    nextStep((prevStep) => prevStep + 1);
  };

  return <Button src={NextButtonImage} alt="다음" onClick={handleNextStep} />;
};

NextButton.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default NextButton;