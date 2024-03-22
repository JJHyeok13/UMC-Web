import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles';

// 게시글 테이블의 행 컴포넌트
const Row = ({ boardData, host, board }) => {
  const navigate = useNavigate();

  // createdAt이 "2024-02-14T00:21:55.884612" (ISO 8601 형식)으로 저장되어 있으므로 형태 변경시키기
  const changeDataFormat = (date) => {
    return new Date(date)
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/-/g, '.');
  };

  const hostValue = host.toLowerCase();
  const boardValue = board.toLowerCase();

  const handleTitleClick = (boardId) => {
    navigate(`/board/${hostValue}/${boardValue}/${boardId}`);
  };

  return (
    <>
      {boardData.map((data) => (
        <styles.Container key={data.boardId}>
          <styles.BoardCell onClick={() => handleTitleClick(data.boardId)}>
            {data.title}
          </styles.BoardCell>
          <styles.BoardCell>{data.writer}</styles.BoardCell>
          <styles.BoardCell>
            {changeDataFormat(data.createdAt)}
          </styles.BoardCell>
          <styles.BoardCell>{data.hitCount}</styles.BoardCell>
        </styles.Container>
      ))}
    </>
  );
};

Row.propTypes = {
  boardData: PropTypes.array.isRequired,
  host: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
};

export default Row;
