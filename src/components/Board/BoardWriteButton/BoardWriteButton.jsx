import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles';

import pencil from 'assets/Board/Pencil.svg';

// BoardWriteButton: 글쓰기 버튼
const BoardWriteButton = () => {
  const navigate = useNavigate();

  // 현재 페이지의 호스트와 게시판 정보 가져오기
  const currentPath = window.location.pathname;
  const currentPageParts = currentPath.split('/');
  const currentHost = currentPageParts[2];
  const currentBoard = currentPageParts[3];

  // 새로운 URL 구성
  const newURL = `/boardwrite/${currentHost}/${currentBoard}`;

  const handleClick = () => {
    // 새로운 URL로 페이지 이동
    navigate(newURL);
  };

  return (
    <styles.BoardButtonWrapper>
      <styles.BoardButtonContent onClick={handleClick}>
        <img src={pencil} alt="pencil" />
        <styles.BoardWriteFont>글쓰기</styles.BoardWriteFont>
      </styles.BoardButtonContent>
    </styles.BoardButtonWrapper>
  );
};

export default BoardWriteButton;
