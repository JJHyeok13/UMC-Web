import React from 'react';

import styles from './styles';

// 갤러리 메인 타이틀 컴포넌트
const GalleryTitle = () => {
  return (
    <styles.BoardTitleContainer>
      <styles.BoardTitleWrapper>
        <styles.BoardTitle>인하대 사진첩</styles.BoardTitle>
        <styles.BoardSubTitle>우리학교의 소중한 추억들</styles.BoardSubTitle>
      </styles.BoardTitleWrapper>
    </styles.BoardTitleContainer>
  );
};

export default GalleryTitle;
