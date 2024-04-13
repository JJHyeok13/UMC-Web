import styled from 'styled-components';

const styles = {
  // 게시판 제목 컴포넌트 스타일링
  BoardTitleContainer: styled.div`
    /* 레이아웃 정렬 */
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0 8px;
    padding-bottom: 72px;
  `,

  // 게시판 제목 아이콘 스타일링
  BoardTitleWrapper: styled.div`
    /* 레이아웃 정렬 */
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,

  // 게시판 제목 스타일링
  BoardTitle: styled.span`
    /* 제목 폰트 스타일링 */
    color: ${({ index }) => (index === 0 ? '#7682f6' : '#00095c')};
    font-size: 34px;
    font-weight: 600;
    word-wrap: break-word;
  `,

  // 게시판 제목 설명 스타일링
  BoardSubTitle: styled.p`
    /* 설명 폰트 스타일링 */
    color: #9d9d9d;
    font-size: 18px;
    font-weight: 500;
    word-wrap: break-word;
  `,
};

export default styles;
