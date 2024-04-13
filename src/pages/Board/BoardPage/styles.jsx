import styled from 'styled-components';

const styles = {
  // 게시글 전체 페이지 컨테이너
  BoardPageContainer: styled.div`
    width: 65%;

    // 가운데 정렬
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: 100px;
    padding-bottom: 100px;
  `,

  // 게시글 좌측 메뉴바(BoardBox)와 게시글 목록(Table)을 감싸는 컴포넌트
  LowerContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
};

export default styles;
