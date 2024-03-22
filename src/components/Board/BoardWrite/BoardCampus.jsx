import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

const CampusBoard = ({ host, board }) => {
  const [selectedBoard, setSelectedBoard] = useState('');

  // Set the selected board based on the board prop
  const handleBoardClick = (boardName) => {
    setSelectedBoard(prevSelectedBoard => prevSelectedBoard === boardName ? '' : boardName);
  };

  return (
    <ContainerBoard>
      {[
        '공지 게시판',
        '자유 게시판',
        '질문 게시판',
        '워크북 게시판',
        '이전 기수 게시판',
      ].map((boardName, index) => (
        <Board
          key={index}
          selected={selectedBoard === boardName}
          onClick={() => handleBoardClick(boardName)}
        >
          {boardName}
        </Board>
      ))}
      <div> Host: {host}, Board: {board} </div>
    </ContainerBoard>
  );
};

CampusBoard.propTypes = {
  host: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
};

export default CampusBoard;
