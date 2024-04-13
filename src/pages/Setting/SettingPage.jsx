import React from 'react';
import styled from 'styled-components';

import SettingTitle from 'components/Setting/SettingTitle';
import SettingMenu from 'components/Setting/SettingMenu';
import SettingContents from 'components/Setting/SettingContents';

// 설정 페이지 컨테이너
const SettingPageContainer = styled.div`
  width: 70%;
  // 가운데 정렬
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  padding-top: 100px;
  padding-bottom: 100px;

  min-height: 100vh;
`;

// 설정 메뉴 & 컨텐츠 감싸는 레이아웃
const SettingMenuContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 114px;
  width: 100%;
`;

const SettingPage = () => {
  return (
    <SettingPageContainer>
      <SettingTitle />
      <SettingMenuContentWrapper>
        <SettingMenu />
        <SettingContents />
      </SettingMenuContentWrapper>
    </SettingPageContainer>
  );
};

export default SettingPage;
