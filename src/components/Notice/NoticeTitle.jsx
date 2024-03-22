import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import SchoolIcon from 'assets/titleIcon/schoolIcon.svg';
import BranchIcon from 'assets/titleIcon/branchIcon.svg';
import UnionIcon from 'assets/titleIcon/unionIcon.svg';

const BoardTitleLayout = styled.div`
  display: flex;
  padding: 0 0 0 40px;
  width: 100%;
`;

// 게시판 제목 컴포넌트 스타일링
const NoticeTitleContainer = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 8px;

  margin-bottom: 72px;
`;

// 게시판 제목 아이콘 스타일링
const NoticeTitleWrapper = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.div`
  color: #00095c;
  font-size: 34px;
  font-weight: 600;
  word-wrap: break-word;
`;

const Subtitle = styled.div`
  color: #9d9d9d;
  font-size: 18px;
  font-weight: 500;
  word-wrap: break-word;
`;

// 게시판 제목 컴포넌트
const NoticeTitle = () => {
  const { category } = useParams();

  console.log(category);

  let icon = null;

  // URL 경로에 따라 아이콘 설정
  switch (category) {
    case 'campus':
      icon = <img src={SchoolIcon} alt="School Icon" />;
      break;
    case 'branch':
      icon = <img src={BranchIcon} alt="Branch Icon" />;
      break;
    case 'center':
      icon = <img src={UnionIcon} alt="Union Icon" />;
      break;
    default:
      break;
  }

  return (
    <BoardTitleLayout>
      <NoticeTitleContainer>
        {icon}
        <NoticeTitleWrapper>
          <Title> 공지사항 </Title>
          <Subtitle> 중요한 공지들을 알려드려요!</Subtitle>
        </NoticeTitleWrapper>
      </NoticeTitleContainer>
    </BoardTitleLayout>
  );
};

export default NoticeTitle;
