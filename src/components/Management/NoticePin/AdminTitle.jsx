// 사용자 관리 페이지의 제목 컴포넌트
import React from 'react';
import styled from 'styled-components';

import AdminTitleIcon from 'assets/management/AdminTitle.svg';

// 게시판 제목 컴포넌트 스타일링
const BoardTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 8px;
  padding-bottom: 72px;
`;

// 게시판 제목 아이콘 스타일링
const BoardTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// 게시판 제목 스타일링
const BoardTitleMainStyle = styled.h1`
  color: #7682f6;
  font-size: 34px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
`;

// 게시판 제목 하이라이트 스타일링
const BoardTitleSub = styled.p`
  color: #9d9d9d;
  font-size: 18px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

// 운영자 관리 이름 컴포넌트
const AdminTitle = () => {
  return (
    <BoardTitleContainer>
      <div className="admin-title-icon">
        <img src={AdminTitleIcon} alt="admin-icon" />
      </div>
      <BoardTitleWrapper>
        <BoardTitleMainStyle>운영진 관리 페이지</BoardTitleMainStyle>
        <BoardTitleSub>반가워요 운영진님!</BoardTitleSub>
      </BoardTitleWrapper>
    </BoardTitleContainer>
  );
};

export default AdminTitle;
