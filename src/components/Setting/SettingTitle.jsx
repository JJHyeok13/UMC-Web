// 설정 페이지의 제목 컴포넌트
import React from 'react';
import styled from 'styled-components';

import SettingTitleIcon from 'assets/Management/AdminTitle.svg';

// 설정 제목 컴포넌트 스타일링
const SettingTitleContainer = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: row;
  gap: 0 8px;
  width: 100%;
`;

// 설정 제목 아이콘 스타일링
const SettingTitleWrapper = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// 설정 제목 스타일링
const SettingTitleMainStyle = styled.h1`
  /* 폰트 스타일링 */
  color: #000c76;
  font-size: 34px;
  font-weight: 600;
`;

// 설정 부제목 스타일링
const SettingTitleSub = styled.p`
  /* 폰트 스타일링 */
  color: #9d9d9d;
  font-size: 18px;
  font-weight: 500;
`;

// 설정 제목 컴포넌트
const SettingTitle = () => {
  return (
    <SettingTitleContainer>
      <div className="setting-title-icon">
        <img src={SettingTitleIcon} alt="setting-icon" />
      </div>
      <SettingTitleWrapper>
        <SettingTitleMainStyle>설정</SettingTitleMainStyle>
        <SettingTitleSub>UMC 정보 및 기타</SettingTitleSub>
      </SettingTitleWrapper>
    </SettingTitleContainer>
  );
};

export default SettingTitle;
