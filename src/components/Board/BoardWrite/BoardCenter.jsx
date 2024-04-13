import React, { useState } from 'react';
import styled from 'styled-components';

const ContainerBoard = styled.div`
  display: flex;
  margin-bottom: 5vh;
`;

const Board = styled.div`
  border-radius: 12px;
  background-color: #fff;
  color: ${({ selected }) => (selected ? '#000C76' : '#868686')};
  border: 1px solid ${({ selected }) => (selected ? '#000C76' : '#D1D1D1')};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0.3vh 1vh;
  margin-right: 1em;
  margin-top: 0.7em;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;

  &.selected {
    background-color: #fff;
    color: #000c76;
    border-color: #000c76;
  }
`;

const CenterBoard = () => {
  const [selectedBoard, setSelectedBoard] = useState(0);

  const handleBoardClick = (index) => {
    setSelectedBoard(index);
  };

  return (
    <ContainerBoard>
      {[0, 1, 2, 3].map((index) => (
        <Board
          key={index}
          selected={selectedBoard === index}
          onClick={() => handleBoardClick(index)}
        >
          {index === 0 && '공지 게시판'}
          {index === 1 && '자유 게시판'}
          {index === 2 && '질문 게시판'}
          {index === 3 && '이전 기수 게시판'}
        </Board>
      ))}
    </ContainerBoard>
  );
};

export default CenterBoard;
