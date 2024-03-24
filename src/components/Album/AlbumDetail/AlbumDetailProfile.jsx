import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BasicProfileImage from 'assets/Profile/ProfileImage.svg';

// 갤러리 상세 정보 프로필 컨테이너 스타일링
const GalleryDetailProfileContainer = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 11px;
  padding-bottom: 24px;
`;

// 갤러리 상세 정보 프로필 이미지 스타일링
const GalleryDetailProfileImg = styled.img`
  /* 외형 스타일링 */
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

// 갤러리 상세 정보 프로필 작성자 정보 컨테이너 스타일링
const GalleryDetailProfileAuthorWrapper = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: column;

  /* 폰트 스타일링 */
  font-family: 'Pretendard';
  word-wrap: break-word;
`;

// 갤러리 상세 정보 프로필 작성자 이름 스타일링
const GalleryDetailProfileAuthorName = styled.div`
  /* 레이아웃 정렬 */
  display: flex;

  /* 폰트 스타일링 */
  color: black;
  font-size: 16px;
  font-weight: 600;
`;

// 갤러리 상세 정보 프로필 작성자 직책 스타일링
const GalleryDetailProfileAuthorPosition = styled.div`
  /* 레이아웃 정렬 */
  display: flex;

  /* 폰트 스타일링 */
  color: #9d9d9d;
  font-size: 14px;
  font-weight: 400;
`;

// 갤러리 상세 정보 프로필
const GalleryDetailProfile = ({ writerData }) => {
  return (
    <GalleryDetailProfileContainer>
      <GalleryDetailProfileImg
        src={
          writerData.profileImage ? writerData.profileImage : BasicProfileImage
        }
        alt="프로필 사진"
      />

      <GalleryDetailProfileAuthorWrapper>
        <GalleryDetailProfileAuthorName>
          {writerData.writer}
        </GalleryDetailProfileAuthorName>
        <GalleryDetailProfileAuthorPosition>
          {writerData.position}
        </GalleryDetailProfileAuthorPosition>
      </GalleryDetailProfileAuthorWrapper>
    </GalleryDetailProfileContainer>
  );
};

// 갤러리 상세 정보 프로필 컴포넌트 props 검사
GalleryDetailProfile.propTypes = {
  writerData: PropTypes.array.isRequired,
};

export default GalleryDetailProfile;
