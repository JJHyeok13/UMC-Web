import styled from 'styled-components';

const styles = {
  // 갤러리 전체 페이지 컨테이너
  AlbumPageContainer: styled.div`
    width: 75%;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: 100px;
    padding-bottom: 100px;

    position: relative;

    /* 주로 겹치는 요소들 사이의 순서를 제어하기 위한 z-index -> 헤더 컴포넌트와 같이 조정할 것! */
    z-index: 1;
  `,

  // 갤러리 전체 페이지 제목 & 글쓰기 버튼을 감싸는 컴포넌트
  UpperWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 20px;
  `,
};

export default styles;
