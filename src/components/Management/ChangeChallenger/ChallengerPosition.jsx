// ChallengerPosition.js
import React, { useState } from 'react';
import styled from 'styled-components';
import PositionItem from './PositionItem'; // PositionItem 컴포넌트를 불러옵니다.

import AddImg from 'assets/Management/AddPosition.svg';

const Position = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1vh;
  margin-bottom: 2vh;
  cursor: pointer;

  img {
    margin-right: 4px;
  }

  /* 추가된 스타일 */
  color: ${(props) => (props.checked ? '#8784FF' : 'inherit')};
`;

const ChallengerPositionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

const TitleContainer = styled.div`
  width: 100%;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  padding: 16px;
  margin-top: 16px;
  background-color: #fff;
  box-sizing: border-box;
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #4b4b4b;
  padding: 16px;
`;

const PositionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ChallengerPosition = () => {
  const [schoolPositionChecked, setSchoolPositionChecked] = useState({
    회장: false,
    부회장: false,
    운영국장: false,
    PM파트장: false,
    Design파트장: false,
    Spring파트장: false,
    Node파트장: false,
    Web파트장: false,
    iOS파트장: false,
    Android파트장: false,
  });

  const [centerPositionChecked, setCenterPositionChecked] = useState({
    회장: false,
    부회장: false,
    운영국장: false,
    PM파트장: false,
    Design파트장: false,
    Spring파트장: false,
    Node파트장: false,
    Web파트장: false,
    iOS파트장: false,
    Android파트장: false,
  });

  const handleSchoolPositionClick = (position) => {
    setSchoolPositionChecked((prevState) => ({
      ...prevState,
      [position]: !prevState[position],
    }));
  };

  const handleCenterPositionClick = (position) => {
    setCenterPositionChecked((prevState) => ({
      ...prevState,
      [position]: !prevState[position],
    }));
  };

  const positions = [
    '회장',
    '부회장',
    '운영국장',
    'PM파트장',
    'Design파트장',
    'Spring파트장',
    'Node파트장',
    'Web파트장',
    'iOS파트장',
    'Android파트장',
  ];

  return (
    <ChallengerPositionContainer>
      <TitleContainer>
        <SubTitle>학교</SubTitle>
        <PositionContainer>
          {positions.map((position) => (
            <PositionItem
              key={position}
              position={position}
              checked={schoolPositionChecked[position]}
              onClick={() => handleSchoolPositionClick(position)}
            />
          ))}
          <Position>
            <img src={AddImg} alt="직책추가" /> 직책추가
          </Position>
        </PositionContainer>
        <SubTitle>중앙</SubTitle>
        <PositionContainer>
          {positions.map((position) => (
            <PositionItem
              key={position}
              position={position}
              checked={centerPositionChecked[position]}
              onClick={() => handleCenterPositionClick(position)}
            />
          ))}
          <Position>
            <img src={AddImg} alt="직책추가" /> 직책추가
          </Position>
        </PositionContainer>
      </TitleContainer>
    </ChallengerPositionContainer>
  );
};

export default ChallengerPosition;
