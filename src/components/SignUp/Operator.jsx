import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpFormStyle from 'components/SignUp/SignUpForm.style';
import PropTypes from 'prop-types';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

import CampusIcon from 'assets/SignUp/Operator/CampusIcon.svg';
import CenterIcon from 'assets/SignUp/Operator/CenterIcon.svg';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
`;

const TransparentButton = styled.div`
  display: inline-block;
  border: 1px solid white;
  color: ${(props) => (props.checked ? 'black' : 'white')};
  padding: 8px 16px;
  cursor: pointer;
  margin: 5px;
  border-radius: 25px;
  background: ${(props) => (props.checked ? 'white' : 'transparent')};
  font-size: 14px;
`;

const Description = styled.p`
  color: gray;
  font-size: 1vw;
`;

const Operator = ({
  campusPositions,
  setCampusPositions,
  centerPositions,
  setCenterPositions,
  isCenterStaff,
  handleNextStep,
  handlePrevStep,
}) => {
  const [campus, setCampus] = useState([
    '회장',
    '부회장',
    '운영국장',
    'PM 파트장',
    'Design 파트장',
    'Spring 파트장',
    'Node 파트장',
    'Web 파트장',
    'iOS 파트장',
    'Android 파트장',
  ]);

  const [center, setCenter] = useState([
    '회장',
    '부회장',
    '운영국장',
    'PM 파트장',
    'Design 파트장',
    'Spring 파트장',
    'Node 파트장',
    'Web 파트장',
    'iOS 파트장',
    'Android 파트장',
  ]);

  const addCampusPosition = () => {
    const newPosition = prompt('직책 이름을 입력하세요:');
    if (newPosition) {
      setCampus([...campus, newPosition]);
    }
  };

  const addCenterPosition = () => {
    const newPosition = prompt('직책 이름을 입력하세요:');
    if (newPosition) {
      setCenter([...center, newPosition]);
    }
  };

  const handleCampusButtonClick = (position) => {
    if (campusPositions.includes(position)) {
      setCampusPositions(campusPositions.filter((item) => item !== position));
    } else {
      setCampusPositions([...campusPositions, position]);
    }
  };

  const handleCenterButtonClick = (position) => {
    if (centerPositions.includes(position)) {
      setCenterPositions(centerPositions.filter((item) => item !== position));
    } else {
      setCenterPositions([...centerPositions, position]);
    }
  };

  return (
    <SignUpFormStyle.Wrapper>
      <SignUpFormStyle.SignUpFormWrapper>
        <h2> 직책을 선택해주세요 </h2>
        <Description>
          여러 기수에 참여한 경우, 모든 기수와 파트를 추가해주세요!
        </Description>

        <ButtonWrapper>
          <img src={CampusIcon} alt="학교" />
          <div>
            {campus.map((position, index) => (
              <TransparentButton
                key={index}
                checked={campusPositions.includes(position)}
                onClick={() => handleCampusButtonClick(position)}
              >
                {position}
              </TransparentButton>
            ))}
            <TransparentButton onClick={addCampusPosition}>
              직책 추가
            </TransparentButton>
          </div>
        </ButtonWrapper>

        {isCenterStaff && (
          <ButtonWrapper>
            <img src={CenterIcon} alt="중앙" />
            <div>
              {center.map((position, index) => (
                <TransparentButton
                  key={index}
                  checked={centerPositions.includes(position)}
                  onClick={() => handleCenterButtonClick(position)}
                >
                  {position}
                </TransparentButton>
              ))}
              <TransparentButton onClick={addCenterPosition}>
                직책 추가
              </TransparentButton>
            </div>
          </ButtonWrapper>
        )}
      </SignUpFormStyle.SignUpFormWrapper>

      <SignUpFormStyle.StepButtonWrapper>
        <PrevButton handlePrevStep={handlePrevStep} />
        {campusPositions.length > 0 && centerPositions.length > 0 && (
          <NextButton handleNextStep={handleNextStep} />
        )}
      </SignUpFormStyle.StepButtonWrapper>
    </SignUpFormStyle.Wrapper>
  );
};

Operator.propTypes = {
  campusPositions: PropTypes.array.isRequired,
  setCampusPositions: PropTypes.func.isRequired,
  centerPositions: PropTypes.array.isRequired,
  setCenterPositions: PropTypes.func.isRequired,
  isCenterStaff: PropTypes.bool.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
};

export default Operator;
