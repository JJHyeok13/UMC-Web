import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import PinnedImage from 'assets/Management/Pinned.svg';

// 하나의 게시글을 감싸는 div
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  border-bottom: 1px solid #d8d8ff;

  /* 마지막 행 선택하는 CSS 선택자 - 마지막 행의 경계선 제거 */
  &:last-child {
    border: none;
  }
  /* 마지막 요소 선택하는 CSS 선택자 - 같은 유형의 마지막 요소의 상단 경계선 제거 */
  &:last-of-type {
    border-top: none;
  }
`;

// 게시글 정보
const BoardCell = styled.div`
  display: flex;
  justify-content: center;

  width: 10%;
  padding: 10px 40px;

  /* 텍스트가 너무 길면 ...으로 표시 */
  text-overflow: ellipsis;

  /* 셀의 내용이 셀의 너비나 높이를 초과할 경우, 초과하는 부분을 숨기도록 설정 */
  overflow: hidden;

  /* 셀의 내용을 한 줄로 표시 -> 텍스트가 너무 길면 줄바꿈 X */
  white-space: nowrap;

  &:first-child {
    width: 5%;
  }

  &:nth-child(2) {
    justify-content: flex-start;
    width: 65%;
    padding-left: 10px;
    cursor: pointer;
  }
`;

// 게시글 테이블의 행 컴포넌트
const Row = ({ boardData, host, pinnedData }) => {
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

  const handleTitleClick = (boardId) => {
    navigate(`/notice/${hostValue}/${boardId}`);
  };

  return (
    <>
      {pinnedData.map((data) => (
        <Container key={data.boardId}>
          <BoardCell>
            {data.fixed || <img src={PinnedImage} alt="고정됨" />}
          </BoardCell>
          <BoardCell onClick={() => handleTitleClick(data.boardId)}>
            {data.title}
          </BoardCell>
          <BoardCell>{data.writer}</BoardCell>
          <BoardCell>{changeDataFormat(data.createdAt)}</BoardCell>
          <BoardCell>{data.hitCount}</BoardCell>
        </Container>
      ))}

      {boardData.map((data) => (
        <Container key={data.boardId}>
          <BoardCell>
            {data.fixed || <img src={PinnedImage} alt="고정됨" />}
          </BoardCell>
          <BoardCell onClick={() => handleTitleClick(data.boardId)}>
            {data.title}
          </BoardCell>
          <BoardCell>{data.writer}</BoardCell>
          <BoardCell>{changeDataFormat(data.createdAt)}</BoardCell>
          <BoardCell>{data.hitCount}</BoardCell>
        </Container>
      ))}
    </>
  );
};

Row.propTypes = {
  boardData: PropTypes.array.isRequired,
  host: PropTypes.string.isRequired,
  pinnedData: PropTypes.array.isRequired,
};

export default Row;
