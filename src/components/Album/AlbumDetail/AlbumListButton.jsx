import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// 갤러리 목록 버튼 컨테이너 스타일링
const GalleryListButtonContainer = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* 외형 스타일링 */
  background-color: #919cff;
  padding: 8px 16px 8px 16px;
  border-radius: 12px;
  cursor: pointer;

  /* 애니메이션 */
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  /* 호버 시, 배경색 변화 */
  &:hover {
    background-color: #7f7cff;
  }

  /* 활성화(클릭) 시, 크기 변화 */
  &:active {
    transform: scale(0.95);
  }
`;

// 갤러리 목록 버튼 폰트 스타일링
const GalleryListButtonText = styled.div`
  /* 레이아웃 정렬 */
  display: flex;

  /* 폰트 스타일링 */
  color: white;
  text-align: center;
  font-size: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
  line-height: 22.4px;
  word-wrap: break-word;
`;

// 갤러리 목록 버튼
// onClick: 버튼 클릭 시 실행할 함수
const GalleryListButton = ({ onClick }) => {
  return (
    <GalleryListButtonContainer onClick={onClick}>
      <GalleryListButtonText>목록</GalleryListButtonText>
    </GalleryListButtonContainer>
  );
};

// 갤러리 목록 버튼 props 검사
GalleryListButton.propTypes = {
  onClick: PropTypes.func,
};

export default GalleryListButton;
