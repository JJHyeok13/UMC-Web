import React from 'react';
import styled from 'styled-components';
import pencil from 'assets/Album/Pencil.svg';

// 글쓰기 버튼 전체 컨테이너 스타일링
const GalleryButtonWrapper = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* 외형 스타일링 */
  background: white;
  border: none;
  border-radius: 12px;
  padding: 6px 10px;
  cursor: pointer;

  /* 애니메이션 */
  transition: all 0.1s ease-in-out;

  /* 호버 시, 스타일링 변화 */
  &:hover {
    background-color: #f5f5f5;
  }

  /* 활성화(클릭) 시, 스타일링 변화 */
  &:active {
    background-color: #ebebeb;
  }
`;

// 글쓰기 버튼 내용 컨테이너 스타일링
const GalleryButtonContent = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0 4px;
`;

// 글쓰기 버튼 폰트 스타일링
const GalleryWriteFont = styled.div`
  /* 폰트 스타일링 */
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  color: #000c76;
  line-height: 22.4px;
  word-wrap: break-word;
`;

// BoardWriteButton: 글쓰기 버튼
const GalleryWriteButton = () => {
  return (
    <GalleryButtonWrapper>
      <GalleryButtonContent>
        <img src={pencil} alt="pencil" />
        <GalleryWriteFont>글쓰기</GalleryWriteFont>
      </GalleryButtonContent>
    </GalleryButtonWrapper>
  );
};

export default GalleryWriteButton;
