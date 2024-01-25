import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import School from '../../assets/boardCard/school.svg';

const BoardBoxSchoolContainer = styled.div`
  height: 100%;
  padding-bottom: 30px;
  border-color: white;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;

const BoardBoxSchoolImage = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding-bottom: 8px;
  gap: 8px;
`;

const BoardBoxSchoolTitle = styled.h3`
  padding-bottom: 10px;
  text-align: left;
  color: #000c76;
  background: white;
  font-size: 14px;
  font-weight: 600;
  gap: 10px;
  word-wrap: break-word;
`;

const BoardBoxSchoolContentWrapper = styled.div`
  gap: 40px;
`;

const BoardBoxSchoolContent = styled.p`
  text-align: left;
  color: black;
  background: white;
  font-size: 12px;
  font-weight: 400;
  padding-bottom: 8px;
  word-wrap: break-word;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  a {
    background: white;
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: #8784ff;
  }
  &:active {
    color: #000c76;
  }
`;

const BoardBoxSchool = () => {
  return (
    <BoardBoxSchoolContainer>
      <BoardBoxSchoolImage>
        <img src={School} alt="school" />
      </BoardBoxSchoolImage>
      <BoardBoxSchoolTitle>학교</BoardBoxSchoolTitle>
      <BoardBoxSchoolContentWrapper>
        <BoardBoxSchoolContent>
          <NavLink
            to='/board/school/notice'
            activestyle={{ color: '#8784ff' }}
          >
            공지사항
          </NavLink>
        </BoardBoxSchoolContent>
        <BoardBoxSchoolContent>
          <NavLink
            to='/board/school/free'
            activestyle={{ color: '#8784ff' }}
          >
            자유 게시판
          </NavLink>
        </BoardBoxSchoolContent>
        <BoardBoxSchoolContent>
          <NavLink
            to='/board/school/question'
            activestyle={{ color: '#8784ff' }}
          >
            질문 게시판
          </NavLink>
        </BoardBoxSchoolContent>
        <BoardBoxSchoolContent>
          <NavLink
            to='/board/school/workbook'
            activestyle={{ color: '#8784ff' }}
          >
            워크북 게시판
          </NavLink>
        </BoardBoxSchoolContent>
        <BoardBoxSchoolContent>
          <NavLink
            to='/board/school/prev'
            activestyle={{ color: '#8784ff' }}
          >
            이전 기수 게시판
          </NavLink>
        </BoardBoxSchoolContent>
      </BoardBoxSchoolContentWrapper>
    </BoardBoxSchoolContainer>
  );
};

export default BoardBoxSchool;