import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './styles';

import CampusIcon from 'assets/titleIcon/schoolIcon.svg';
import BranchIcon from 'assets/titleIcon/branchIcon.svg';
import CenterIcon from 'assets/titleIcon/unionIcon.svg';

// 게시판 제목 컴포넌트
const BoardTitle = () => {
  // 카테고리와 게시판 이름을 가져옴
  const { category, boardPath } = useParams();

  const CATEGORY_LISTS = [
    {
      path: 'campus',
      title: '학교',
      image: CampusIcon,
    },
    {
      path: 'branch',
      title: '지부',
      image: BranchIcon,
    },
    {
      path: 'center',
      title: '연합',
      image: CenterIcon,
    },
  ];

  const TITLE_LISTS = [
    {
      path: 'free',
      title: '자유 게시판',
      subtitle: '챌린저들과 자유롭게 의견을 나눠보세요!',
    },
    {
      path: 'question',
      title: '질문 게시판',
      subtitle: '궁금한 점을 질문하고 답해보세요!',
    },
    {
      path: 'workbook',
      title: '워크북 게시판',
      subtitle: '워크북으로 공부 의지를 활활 불태워 봐요!',
    },
    {
      path: 'ob',
      title: '이전기수 게시판',
      subtitle: '이전 챌린저들과 함께 소통해봐요!',
    },
  ];

  // 카테고리와 게시판 이름에 해당하는 정보를 가져옴
  const categoryInfo = CATEGORY_LISTS.find(
    (categoryInfo) => categoryInfo.path === category,
  );

  // 게시판 이름에 해당하는 정보를 가져옴
  const board = TITLE_LISTS.find((link) => link.path === boardPath);

  // 카테고리와 게시판 이름이 없으면 null 반환
  if (!categoryInfo || !board) {
    return null;
  }

  return (
    <styles.BoardTitleContainer>
      <div className="board-title-icon">
        <img src={categoryInfo.image} alt={`${category}-icon`} />
      </div>
      <styles.BoardTitleWrapper>
        <styles.BoardTitle>{board.title}</styles.BoardTitle>
        <styles.BoardSubTitle>{board.subtitle}</styles.BoardSubTitle>
      </styles.BoardTitleWrapper>
    </styles.BoardTitleContainer>
  );
};

export default BoardTitle;
