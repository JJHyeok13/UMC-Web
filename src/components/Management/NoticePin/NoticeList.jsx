// BoardTable: 게시판 테이블 컴포넌트
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

//import SearchBar from './BoardSearch';
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
const BoardCell = styled.div`
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

  &:nth-child(2) {
    width: 60%;
  }
`;

// 게시글 작성 버튼 레이아웃 스타일링
const BoardWriteButtonLayout = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 24px;
`;

// 공지사항 핀설정 완료 버튼 레이아웃 스타일링
const NoticePinButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10%;

  padding: 5px;
  border: 1px solid white;
  border-radius: 5px;
`;

// // 검색창 레이아웃 스타일링
// const BoardSearchLayout = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

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
  noticeData,
  page,
  pageNumbers,
  handlePageChange,
  //handleKeyword,
  SetPinned,
}) => {
  return (
    <TotalWrapper>
      <Container>
        <BoardCell></BoardCell>
        <BoardCell>제목</BoardCell>
        <BoardCell>작성자</BoardCell>
        <BoardCell>작성일</BoardCell>
        <BoardCell>조회수</BoardCell>
      </Container>

      <Row noticeData={noticeData} SetPinned={SetPinned} />

      {/* <BoardWriteButtonLayout>
        <BoardWriteButton />
      </BoardWriteButtonLayout> */}

      <BoardWriteButtonLayout>
        <NoticePinButton>등록</NoticePinButton>
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

      {/* <BoardSearchLayout>
        <SearchBar handleKeyword={handleKeyword} />
      </BoardSearchLayout> */}
    </TotalWrapper>
  );
};

NoticeList.propTypes = {
  noticeData: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  pageNumbers: PropTypes.array.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handleKeyword: PropTypes.func.isRequired,
  SetPinned: PropTypes.func.isRequired,
};

export default NoticeList;
