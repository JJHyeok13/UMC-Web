import React, { useState } from 'react';
import styled from 'styled-components';

const ClassifyContainer = styled.div`
  display: flex;
  width: 120vh;
  flex-direction: column;
  border-radius: 12px;
  padding: 1vh;
  margin-top: 1.6vh;

  border: 1px solid #232a6d;
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

const Classify = () => {
  const [typeGroup1, setTypeGroup1] = useState(null);
  const [typeGroup2, setTypeGroup2] = useState(null);

  const handleTypeClick = (type, group) => {
    if (group === 1) {
      setTypeGroup1(typeGroup1 === type ? null : type);
    } else if (group === 2) {
      setTypeGroup2(typeGroup2 === type ? null : type);
    }
  };

  return (
    <ClassifyContainer>
      <ClassifyTitle>분류</ClassifyTitle>

      <CheckContainer>
        <CheckType
          onClick={() => handleTypeClick('전체', 1)}
          isActive={typeGroup1 === '전체'}
        >
          전체 <Circle isActive={typeGroup1 === '전체'} />
        </CheckType>
        <CheckType
          onClick={() => handleTypeClick('이전기수', 1)}
          isActive={typeGroup1 === '이전기수'}
        >
          이전기수 <Circle isActive={typeGroup1 === '이전기수'} />
        </CheckType>
        <CheckType
          onClick={() => handleTypeClick('현재기수', 1)}
          isActive={typeGroup1 === '현재기수'}
        >
          현재기수 <Circle isActive={typeGroup1 === '현재기수'} />
        </CheckType>
      </CheckContainer>

      <Line />

      <CheckContainer>
        <CheckType
          onClick={() => handleTypeClick('학교', 2)}
          isActive={typeGroup2 === '학교'}
        >
          학교 <Circle isActive={typeGroup2 === '학교'} />
        </CheckType>
        <CheckType
          onClick={() => handleTypeClick('지부', 2)}
          isActive={typeGroup2 === '지부'}
        >
          지부 <Circle isActive={typeGroup2 === '지부'} />
        </CheckType>
        <CheckType
          onClick={() => handleTypeClick('연합', 2)}
          isActive={typeGroup2 === '연합'}
        >
          연합 <Circle isActive={typeGroup2 === '연합'} />
        </CheckType>
      </CheckContainer>
    </ClassifyContainer>
  );
};

export default Classify;
