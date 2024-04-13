import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchIcon from 'assets/board/search.svg';

// 갤러리 검색 바 전체 컨테이너 스타일링
const GallerySearchWrapper = styled.form`
  /* 레이아웃 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 16px;
  padding-top: 24px;

  /* 폰트 스타일링 */
  font-size: 14px;
  font-family: 'Pretendard';
  line-height: 22.4px;
  word-wrap: break-word;
`;

// 갤러리 검색 바 입력창 스타일링
const GallerySearchInput = styled.input`
  /* 외형 & 폰트 스타일링 */
  width: 32rem;
  padding: 8px;
  padding-left: 34px;
  border-radius: 12px;
  border: none;
  color: #4b4b4b;
  font-weight: 400;

  /* 배경 이미지 */
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 8px center;

  /* 애니메이션 */
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  /* 호버 시, 스타일링 변화 */
  &:hover {
    background-color: #f2f2f2;
  }

  /* 활성화(클릭) 시, 스타일링 변화 */
  &:active {
    transform: scale(0.95);
  }
`;

// 갤러리 검색 바 검색 버튼 스타일링
const GallerySearchButton = styled.button`
  /* 레이아웃 정렬 */
  display: inline-flex;
  justify-content: center;
  align-items: center;

  /* 외형 스타일링 */
  padding: 8px 16px;
  border-radius: 12px;
  border: none;
  background-color: #919cff;

  /* 폰트 스타일링 */
  color: white;
  font-size: 14;
  font-weight: 500;

  /* 애니메이션 */
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  /* 호버 시, 스타일링 변화 */
  &:hover {
    background-color: #7f7cff;
  }

  /* 활성화(클릭) 시, 스타일링 변화 */
  &:active {
    transform: scale(0.95);
  }
`;

// 갤러리 검색 바 컴포넌트
const GallerySearchBar = ({ onSearch }) => {
  // 검색어 상태 관리
  const [searchTerm, setSearchTerm] = useState('');

  // 검색어 입력 시, 검색어 상태 업데이트
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <GallerySearchWrapper onSubmit={handleSearch}>
      <GallerySearchInput
        type="text"
        placeholder="앨범 제목 등 관련 검색어"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <GallerySearchButton type="submit">검색</GallerySearchButton>
    </GallerySearchWrapper>
  );
};

// 갤러리 검색 바 컴포넌트 props 검사
GallerySearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default GallerySearchBar;
