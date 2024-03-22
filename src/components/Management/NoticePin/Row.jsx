import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

  &:nth-child(2) {
    width: 60%;
    justify-content: flex-start;
  }
`;

// 게시글 테이블의 행 컴포넌트
const Row = ({ noticeData, SetPinned }) => {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    // noticeData의 각 항목에 대해 fixed가 true인 경우 checkedItems에 추가합니다.
    const initialCheckedItems = {};
    noticeData.forEach((data) => {
      if (data.fixed) {
        initialCheckedItems[data.boardId] = true;
      }
    });
    setCheckedItems(initialCheckedItems);
  }, [noticeData]);

  const handleChange = (boardId, isChecked) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [boardId]: isChecked,
    }));
  };

  const handleComplete = () => {
    // checkedItems를 순회하며 변경된 상태를 서버에 전송합니다.
    Object.entries(checkedItems).forEach(([boardId, isChecked]) => {
      if (
        isChecked !== noticeData.find((data) => data.boardId === boardId).fixed
      ) {
        // isPinned 값은 isChecked의 반대로 설정합니다.
        const isPinned = !isChecked;
        SetPinned(boardId, isPinned);
      }
    });
  };

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

  const changeHostType = (hostType) => {
    if (hostType === 'CENTER') {
      return '[중앙]';
    } else if (hostType === 'BRANCH') {
      return '[지부]';
    } else {
      return '[학교]';
    }
  };

  return (
    <>
      {noticeData.map((data) => (
        <Container key={data.boardId}>
          <BoardCell>
            <input
              type="checkbox"
              checked={checkedItems[data.boardId] || false} // 상태에 따라 체크 여부 설정
              onChange={(e) => handleChange(data.boardId, e.target.checked)} // 상태 업데이트
            />
          </BoardCell>
          <BoardCell>
            {changeHostType(data.hostType)} {data.title}
          </BoardCell>
          <BoardCell>{data.writer}</BoardCell>
          <BoardCell>{changeDataFormat(data.createdAt)}</BoardCell>
          <BoardCell>{data.hitCount}</BoardCell>
        </Container>
      ))}
      <button onClick={handleComplete}>완료</button> {/* 완료 버튼 */}
    </>
  );
};

Row.propTypes = {
  noticeData: PropTypes.array.isRequired,
  SetPinned: PropTypes.func.isRequired,
};

export default Row;
