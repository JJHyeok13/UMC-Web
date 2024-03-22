// 사용자 관리 페이지의 제목 컴포넌트
import React from 'react';
import styled from 'styled-components';

import AdminTitleIcon from 'assets/Management/AdminTitle.svg';

// 사용자 관리 페이지 제목 컴포넌트 스타일링
const AdminTitleContainer = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 8px;
  padding-bottom: 72px;
`;

// 사용자 관리 페이지 제목 아이콘 스타일링
const AdminTitleWrapper = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// 사용자 관리 페이지 제목 스타일링
const AdminTitleMainStyle = styled.div`
  /* 폰트 스타일링 */
  color: #7682f6;
  font-size: 34px;
  font-weight: 600;
  word-wrap: break-word;
`;

// 사용자 관리 페이지 부제목 스타일링
const AdminTitleSub = styled.div`
  /* 폰트 스타일링 */
  color: #9d9d9d;
  font-size: 18px;
  font-weight: 500;
  word-wrap: break-word;
`;

// 사용자 관리 페이지 제목 컴포넌트
const AdminTitle = () => {
  return (
    <AdminTitleContainer>
      <img src={AdminTitleIcon} alt="admin-icon" />
      <AdminTitleWrapper>
        <AdminTitleMainStyle>운영진 관리 페이지</AdminTitleMainStyle>
        <AdminTitleSub>반가워요 운영진님!</AdminTitleSub>
      </AdminTitleWrapper>
    </AdminTitleContainer>
  );
};

export default AdminTitle;
