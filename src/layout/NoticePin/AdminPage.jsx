import React from 'react';
import styled from 'styled-components';

import AdminTitle from 'components/Management/ManagementTitle';

import AdminTable from 'components/Management/NoticePin/NewAdminTable';

// 고정된 글 목록을 감싸는 컴포넌트
const AdminPageContainer = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 72px;
  padding-top: 100px;
  padding-bottom: 100px;
`;

// 고정된 글 목록의 제목 컬럼 스타일링
const AdminTitleLayout = styled(AdminTitle)`
  display: flex;
  padding: 0 0 0 40px;
`;

// 고정된 글 목록을 감싸는 컴포넌트
const AdminTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// 고정된 글 목록을 감싸는 컴포넌트
const AdminTableLayout = styled(AdminTable)`
  max-width: 720px;
`;

// 고정된 글 목록을 감싸는 컴포넌트
const AdminPage = () => {
  return (
    <div
      className="admin-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AdminPageContainer>
        <AdminTitleLayout />
        <AdminTableWrapper>
          <AdminTableLayout />
        </AdminTableWrapper>
      </AdminPageContainer>
    </div>
  );
};

export default AdminPage;
