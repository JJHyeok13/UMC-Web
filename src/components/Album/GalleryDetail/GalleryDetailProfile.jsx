import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { album_data } from '../GalleryData';

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
// id: 갤러리 아이디
const GalleryDetailProfile = ({ id }) => {
  // 갤러리 데이터에서 id에 해당하는 데이터 찾아옴
  const item = album_data.find((item) => item.id === Number(id));

  // id에 해당하는 데이터가 없을 경우, 존재하지 않는 갤러리임을 알림
  if (!item) {
    return <div>존재하지 않는 갤러리입니다.</div>;
  }

  return (
    <GalleryDetailProfileContainer>
      <GalleryDetailProfileImg src={item.author.profile} alt="profile" />
      <GalleryDetailProfileAuthorWrapper>
        <GalleryDetailProfileAuthorName>
          {item.author.name}
        </GalleryDetailProfileAuthorName>
        <GalleryDetailProfileAuthorPosition>
          {item.author.position}
        </GalleryDetailProfileAuthorPosition>
      </GalleryDetailProfileAuthorWrapper>
    </GalleryDetailProfileContainer>
  );
};

// 갤러리 상세 정보 프로필 컴포넌트 props 검사
GalleryDetailProfile.propTypes = {
  id: PropTypes.string.isRequired,
};

export default GalleryDetailProfile;
