import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const styles = {
  BoxContainer: styled.div`
    width: 120px;

    box-sizing: border-box;
    padding: 40px 20px;

    border-radius: 12px;
    background-color: white;

    display: flex;
    flex-direction: column;
  `,

  // 게시판 박스의 내용을 감싸는 컴포넌트
  BoxWrapper: styled.div`
    height: 100%;
    padding-bottom: 30px;
    border-color: white;
    background: white;

    /* 레이아웃 정렬 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,

  // 게시판 박스의 이미지 스타일링 컴포넌트
  TypeImage: styled.img`
    padding-bottom: 8px;
  `,

  // 게시판 박스의 제목 스타일링 컴포넌트
  TypeTitle: styled.div`
    /* 제목 레이아웃 & 색상 스타일링 */
    padding-bottom: 10px;
    text-align: left;
    color: #000c76;

    /* 폰트 스타일링 */
    font-size: 14px;
    font-weight: bold;
  `,

  // 게시판 박스의 내용(학교/지부/연합)을 감싸는 컴포넌트
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,

  // 게시판 박스의 링크 스타일링 컴포넌트
  StyledLink: styled(NavLink)`
    cursor: pointer;

    color: black;

    text-decoration: none;
    font-size: 12px;

    /* 애니메이션 효과 */
    transition: all 0.2s ease-in-out;

    /* 링크 호버 시 효과 */
    &:hover {
      color: #8784ff;
    }

    /* 링크 활성화(클릭) 시 효과 */
    &.active {
      color: #000c76;
      font-weight: bold;
    }
  `,
};

export default styles;
