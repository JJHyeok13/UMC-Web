import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ClassifyContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 12px;
  padding: 1vh;
  margin-top: 1.6vh;

  background-color: white;

  box-sizing: border-box;
`;

//분류 글
const ClassifyTitle = styled.div`
  color: #000;
`;

const CheckContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.3vh;
`;

//체크로 나타나야하는 타입 폰트
const CheckType = styled.div`
  color: ${(props) => (props.isActive ? '#8784FF' : '#BCBCBC')};
  cursor: pointer;
  margin: 0.3vh;
  display: flex;
  flex-direction: row;
  align-items: center; /* 수직 가운데 정렬 */
`;

const Line = styled.div`
  border-bottom: 1px solid #d9d9d9;
  margin: 0.3vh 0;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 0.5vh;
  margin-right: 1vh;
  display: flex;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    border: 1px solid ${(props) => (props.isActive ? '#8784FF' : '#BCBCBC')};
    filter: drop-shadow(0px 2px 4px rgba(177, 177, 177, 0.4));
  }

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background-color: ${(props) =>
      props.isActive ? '#8784FF' : 'transparent'};
    border-radius: 50%;
    position: absolute;
  }
`;

const Classify = ({
  //semesterPermission,
  setSemesterPermission,
  //hostType,
  setHostType,
}) => {
  const [selectedTypeGroup1, setSelectedTypeGroup1] = useState(null);
  const [selectedTypeGroup2, setSelectedTypeGroup2] = useState(null);

  const handleTypeClick = (value, group) => {
    if (group === 1) {
      setSelectedTypeGroup1(value);
      if (value === '전체') {
        setSemesterPermission(['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH']);
      } else {
        setSemesterPermission([value.toUpperCase()]);
      }
    } else if (group === 2) {
      setSelectedTypeGroup2(value);
      if (value === '학교') {
        setHostType('CAMPUS');
      } else if (value === '지부') {
        setHostType('BRANCH');
      } else if (value === '연합') {
        setHostType('CENTER');
      }
    }
  };

  return (
    <ClassifyContainer>
      <ClassifyTitle>분류</ClassifyTitle>

      <CheckContainer>
        <CheckType
          onClick={() => handleTypeClick('전체', 1)}
          isActive={selectedTypeGroup1 === '전체'}
        >
          전체 <Circle isActive={selectedTypeGroup1 === '전체'} />
        </CheckType>

        <CheckType
          onClick={() => handleTypeClick('1기', 1)}
          isActive={selectedTypeGroup1 === '1기'}
        >
          1기 <Circle isActive={selectedTypeGroup1 === '1기'} />
        </CheckType>

        <CheckType
          onClick={() => handleTypeClick('2기', 1)}
          isActive={selectedTypeGroup1 === '2기'}
        >
          2기 <Circle isActive={selectedTypeGroup1 === '2기'} />
        </CheckType>

        <CheckType
          onClick={() => handleTypeClick('3기', 1)}
          isActive={selectedTypeGroup1 === '3기'}
        >
          3기 <Circle isActive={selectedTypeGroup1 === '3기'} />
        </CheckType>

        <CheckType
          onClick={() => handleTypeClick('4기', 1)}
          isActive={selectedTypeGroup1 === '4기'}
        >
          4기 <Circle isActive={selectedTypeGroup1 === '4기'} />
        </CheckType>

        <CheckType
          onClick={() => handleTypeClick('5기', 1)}
          isActive={selectedTypeGroup1 === '5기'}
        >
          5기 <Circle isActive={selectedTypeGroup1 === '5기'} />
        </CheckType>
      </CheckContainer>

      <Line />

      <CheckContainer>
        <CheckType
          onClick={() => handleTypeClick('학교', 2)}
          isActive={selectedTypeGroup2 === '학교'}
        >
          학교 <Circle isActive={selectedTypeGroup2 === '학교'} />
        </CheckType>
        <CheckType
          onClick={() => handleTypeClick('지부', 2)}
          isActive={selectedTypeGroup2 === '지부'}
        >
          지부 <Circle isActive={selectedTypeGroup2 === '지부'} />
        </CheckType>
        <CheckType
          onClick={() => handleTypeClick('연합', 2)}
          isActive={selectedTypeGroup2 === '연합'}
        >
          연합 <Circle isActive={selectedTypeGroup2 === '연합'} />
        </CheckType>
      </CheckContainer>
    </ClassifyContainer>
  );
};

Classify.propTypes = {
  //semesterPermission: PropTypes.array.isRequired,
  setSemesterPermission: PropTypes.func.isRequired,
  //hostType: PropTypes.string.isRequired,
  setHostType: PropTypes.func.isRequired,
};

export default Classify;
