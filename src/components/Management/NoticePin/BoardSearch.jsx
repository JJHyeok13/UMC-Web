import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchIcon from 'assets/Board/Search.svg';

// 검색창 감싸는 컴포넌트
const SearchWrapper = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  justify-content: row;
  align-items: center;
  gap: 0 16px;
  padding-top: 24px;
  /* 폰트 스타일링 */
  font-size: 14px;
  font-family: 'Pretendard';
  line-height: 22.4px;
  word-wrap: break-word;
`;

// 검색창
const SearchInput = styled.input`
  /* 레이아웃 정렬 */
  width: 32rem;
  padding: 8px;
  padding-left: 34px;
  border-radius: 12px;
  border: none;

  /* 폰트 스타일링 */
  color: #4b4b4b;
  font-weight: 400;
  /* 좌측 돋보기 아이콘 표시 */
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 8px center;
  /* 애니메이션 효과 */
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  /* 검색창 호버 시 효과 */
  &:hover {
    background-color: #f2f2f2;
  }
  /* 검색창 활성화(클릭) 시 효과 */
  &:active {
    transform: scale(0.95);
  }
`;

// 검색 버튼
const SearchButton = styled.div`
  /* 레이아웃 정렬 */
  padding: 8px 16px;
  border-radius: 12px;
  border: none;
  background-color: #919cff;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  /* 폰트 스타일링 */
  color: white;
  font-size: 14;
  font-weight: 500;

  /* 애니메이션 효과 */
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  /* 검색창 버튼 호버 시 효과 */
  &:hover {
    background-color: #7f7cff;
  }
  /* 검색창 버튼 활성화(클릭) 시 효과 */
  &:active {
    transform: scale(0.95);
  }
`;

// 검색창 컴포넌트
// onSearch: 검색 버튼 클릭 시 실행되는 함수
const BoardSearchBar = ({ handleKeyword, searchBoard, keyword, page }) => {
  // 검색어를 담는 state
  const handleSearchClick = () => {
    searchBoard(keyword, page);
  };

  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        placeholder="글 제목, 내용을 입력해주세요"
        value={keyword}
        onChange={handleKeyword}
      />
      <SearchButton onClick={handleSearchClick}>검색</SearchButton>
    </SearchWrapper>
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
