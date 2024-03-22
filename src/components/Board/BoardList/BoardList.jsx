import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import SearchBar from 'components/Board/BoardSearch/BoardSearch';
import BoardWriteButton from 'components/Board/BoardWriteButton/BoardWriteButton';
import Row from 'components/Board/BoardList/Row/Row';

const BoardList = ({
  host,
  board,
  boardData,
  page,
  pageNumbers,
  handlePageChange,
  keyword,
  handleKeyword,
  searchBoard,
}) => {
  return (
    <styles.TotalWrapper>
      <styles.Container>
        <styles.Attribute>제목</styles.Attribute>
        <styles.Attribute>작성자</styles.Attribute>
        <styles.Attribute>작성일</styles.Attribute>
        <styles.Attribute>조회수</styles.Attribute>
      </styles.Container>

      <Row boardData={boardData} host={host} board={board} />

      <styles.BoardWriteButtonLayout>
        <BoardWriteButton host={host} board={board} />
      </styles.BoardWriteButtonLayout>

      <styles.PageButtonWrapper>
        {pageNumbers.map((pageNumber) => (
          <styles.PageButton
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            selected={pageNumber === page + 1}
            disabled={pageNumber === page}
          >
            {pageNumber}
          </styles.PageButton>
        ))}
      </styles.PageButtonWrapper>

      <styles.BoardSearchLayout>
        <SearchBar
          handleKeyword={handleKeyword}
          searchBoard={searchBoard}
          keyword={keyword}
          page={page}
        />
      </styles.BoardSearchLayout>
    </styles.TotalWrapper>
  );
};

BoardList.propTypes = {
  host: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
  boardData: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  pageNumbers: PropTypes.array.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  handleKeyword: PropTypes.func.isRequired,
  searchBoard: PropTypes.func.isRequired,
};

export default BoardList;
