import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

// 검색창 컴포넌트
// onSearch: 검색 버튼 클릭 시 실행되는 함수
const BoardSearchBar = ({ handleKeyword, searchBoard, keyword, page }) => {
  // 검색어를 담는 state
  const handleSearchClick = () => {
    searchBoard(keyword, page);
  };

  return (
    <styles.SearchWrapper>
      <styles.SearchInput
        type="text"
        placeholder="글 제목, 내용을 입력해주세요"
        value={keyword}
        onChange={handleKeyword}
      />
      <styles.SearchButton onClick={handleSearchClick}>
        검색
      </styles.SearchButton>
    </styles.SearchWrapper>
  );
};

// 검색창 컴포넌트 props 검사
BoardSearchBar.propTypes = {
  searchBoard: PropTypes.func.isRequired,
  handleKeyword: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  page: PropTypes.number,
};

export default BoardSearchBar;
