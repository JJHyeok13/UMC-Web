import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const BoardSearchBar = ({ handleKeyword, searchBoard, keyword, page }) => {
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

BoardSearchBar.propTypes = {
  searchBoard: PropTypes.func.isRequired,
  handleKeyword: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  page: PropTypes.number,
};

export default BoardSearchBar;
