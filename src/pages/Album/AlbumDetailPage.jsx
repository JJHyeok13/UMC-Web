import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { album_data } from 'components/Album/GalleryData';
import GalleryDetailProfile from 'components/Album/GalleryDetail/GalleryDetailProfile';
import GalleryListButton from 'components/Album/GalleryDetail/GalleryListButton';

// 갤러리 상세 페이지 컨테이너
const GalleryDetailPageContainer = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  padding-top: 100px;
  padding-bottom: 100px;

  /* 텍스트 스타일링 */
  word-wrap: break-word;
`;

// 갤러리 상세 페이지 프로필 전체 레이아웃
const GalleryDetailProfileLayout = styled(GalleryDetailProfile)`
  /* 레잉아웃 스타일링 */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 24px;
`;

// 갤러리 상세 페이지 제목 스타일링
const GalleryDetailTitle = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  justify-content: flex-start;
  padding-bottom: 12px;

  /* 텍스트 스타일링 */
  color: black;
  font-size: 20px;
  font-weight: 600;
`;

// 갤러리 상세 페이지 내용 & 작성일 & 조회수 감싸는 스타일링
const GalleryDetailContentTimeViewWrapper = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
`;

// 갤러리 상세 페이지 내용 스타일링
const GalleryDetailContent = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;

  /* 텍스트 스타일링 */
  color: black;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
`;

// 갤러리 상세 페이지 작성일 & 조회수 감싸는 스타일링
const GalleryDetailTimeViewWrapper = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: row;
  gap: 0 16px;

  /* 텍스트 스타일링 */
  color: #9d9d9d;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
`;

// 갤러리 상세 페이지 이미지 감싸는 스타일링
const GalleryDetailImageWrapper = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 12px;
`;

// 갤러리 상세 페이지 이미지 스타일링
const GalleryDetailImage = styled.img`
  /* 레이아웃 스타일링 */
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

// 갤러리 상세 페이지 목록 버튼 감싸는 스타일링
const GalleryDetailListButtonLayout = styled.div`
  /* 레이아웃 스타일링 */
  align-self: flex-end;
  padding-top: 16px;
  padding-bottom: 45px;
`;

// 갤러리 상세 페이지 컴포넌트
const AlbumDetailPage = () => {
  // useNavigate: 특정 경로로 이동하는 함수
  const navigate = useNavigate();

  // useParams: URL 파라미터를 조회하는 함수
  const { id } = useParams();

  // GALLERY_DATAS에서 id가 일치하는 데이터를 조회
  const item = album_data.find((item) => item.id === Number(id));

  //  목록 버튼 클릭 시 이벤트
  const handleListButtonClick = () => {
    navigate('/album');
  };

  // id가 일치하는 데이터가 없을 경우
  if (!item) {
    return <div>존재하지 않는 갤러리입니다.</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <GalleryDetailPageContainer>
        <GalleryDetailProfileLayout id={item.id} item={item} />
        <GalleryDetailTitle>{item.title}</GalleryDetailTitle>
        <GalleryDetailContentTimeViewWrapper>
          <GalleryDetailContent>{item.content}</GalleryDetailContent>
          <GalleryDetailTimeViewWrapper>
            <div>작성일 | {item.time}</div>
            <div>조회수 | {item.view}</div>
          </GalleryDetailTimeViewWrapper>
        </GalleryDetailContentTimeViewWrapper>
        <GalleryDetailImageWrapper>
          {
            // 이미지가 여러 개일 경우, map 함수를 사용하여 이미지를 렌더링
            item.src.map((src, index) => (
              <GalleryDetailImage key={index} src={src} alt="gallery" />
            ))
          }
        </GalleryDetailImageWrapper>
        <GalleryDetailListButtonLayout>
          <GalleryListButton onClick={handleListButtonClick} />
        </GalleryDetailListButtonLayout>
      </GalleryDetailPageContainer>
    </div>
  );
};

export default AlbumDetailPage;
