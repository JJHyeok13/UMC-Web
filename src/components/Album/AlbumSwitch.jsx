import React, { useState } from 'react';
import styled from 'styled-components';

// 갤러리 스위치 전체 컨테이너 스타일링
const GallerySwitchWrapper = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0 45px;
  padding-bottom: 70px;
`;

// 갤러리 스위치 폰트 스타일링
const GallerySwitchFont = styled.div`
  /* 레이아웃 정렬 */
  position: relative;
  overflow: hidden;

  /* 폰트 스타일링 */
  text-align: center;
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;

  /* 활성화(클릭) 시, 폰트 색상 변경 */
  color: ${(props) => (props.active ? '#000c76' : '#999999')};

  padding-bottom: 16px;
  cursor: pointer;

  /* 애니메이션 */
  &::before {
    /* 가상 요소 */
    content: '';

    /* 레이아웃 정렬 */
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;

    /* 외형 스타일링 */
    background-color: #000c76;

    /* active가 true일 경우 가상 요소 ON / false일 경우 가상 요소 숨김 */
    visibility: ${(props) => (props.active ? 'visible' : 'hidden')};

    /* 애니메이션: 가상 요소의 가로 스케일 설정 */
    transform: scaleX(${(props) => (props.active ? 1 : 0)});

    /* 애니메이션: 전체 애니메이션 */
    transition: all 0.3s ease-in-out 0s;
  }

  /* 호버 시, 가상 요소의 가로 스케일 설정 */
  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }

  /* 폰트 색상 변화 */
  transition: color 0.3s ease;
`;

// 갤러리 스위치 컴포넌트
const GallerySwitch = () => {
  // 갤러리 스위치 활성화 인덱스 상태 관리
  const [activeIndex, setActiveIndex] = useState(0);

  // 갤러리 스위치 타이틀 배열
  const titles = ['학교 사진첩', '지부 사진첩', '연합 사진첩'];

  return (
    <GallerySwitchWrapper>
      {
        // 갤러리 스위치 타이틀 배열을 순회하며, 갤러리 스위치 폰트 컴포넌트를 렌더링
        titles.map((title, index) => (
          <GallerySwitchFont
            key={index}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {title}
          </GallerySwitchFont>
        ))
      }
    </GallerySwitchWrapper>
  );
};

export default GallerySwitch;
