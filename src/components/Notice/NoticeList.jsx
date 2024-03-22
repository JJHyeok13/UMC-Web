import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import SearchBar from './NoticeSearch';
import NoticeWriteButton from './NoticeWriteButton';
import Row from './Row';

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`;

// 하나의 게시글을 감싸는 div
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

// 게시글 정보
const Attribute = styled.div`
  display: flex;
  justify-content: center;

  font-weight: bold;

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
    width: 65%;
  }
`;

// 게시글 작성 버튼 레이아웃 스타일링
const BoardWriteButtonLayout = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 24px;
`;

// 검색창 레이아웃 스타일링
const BoardSearchLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  padding-top: 30px;
`;

const PageButton = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? 'white' : 'transparent')};
  border-radius: 10px;
  color: ${({ selected }) => (selected ? '#000C76' : 'black')};
  font-weight: ${({ selected }) => (selected ? 'bold' : '')};
`;

const NoticeList = ({
  host,
  board,
  boardData,
  page,
  pageNumbers,
  handlePageChange,
  keyword,
  handleKeyword,
  searchBoard,
  pinnedData,
}) => {
  return (
    <TotalWrapper>
      <Container>
        <Attribute />
        <Attribute>제목</Attribute>
        <Attribute>작성자</Attribute>
        <Attribute>작성일</Attribute>
        <Attribute>조회수</Attribute>
      </Container>

      <Row
        boardData={boardData}
        host={host}
        //board={board}
        pinnedData={pinnedData}
      />

      <BoardWriteButtonLayout>
        <NoticeWriteButton host={host} board={board} />
      </BoardWriteButtonLayout>

      <PageButtonWrapper>
        {pageNumbers.map((pageNumber) => (
          <PageButton
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            selected={pageNumber === page + 1}
            disabled={pageNumber === page}
          >
            {pageNumber}
          </PageButton>
        ))}
      </PageButtonWrapper>

      <BoardSearchLayout>
        <SearchBar
          handleKeyword={handleKeyword}
          searchBoard={searchBoard}
          keyword={keyword}
          page={page}
        />
      </BoardSearchLayout>
    </TotalWrapper>
  );
};

NoticeList.propTypes = {
  host: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
  boardData: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  pageNumbers: PropTypes.array.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  handleKeyword: PropTypes.func.isRequired,
  searchBoard: PropTypes.func.isRequired,
  pinnedData: PropTypes.array.isRequired,
};

export default NoticeList;
