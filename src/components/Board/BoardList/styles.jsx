import styled from 'styled-components';

const styles = {
  TotalWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
  `,

  // 하나의 게시글을 감싸는 div
  Container: styled.div`
    display: flex;
    flex-direction: row;
  `,

  // 게시글 정보
  Attribute: styled.div`
    display: flex;
    justify-content: center;

    font-weight: bold;

    width: 15%;

    padding: 10px 40px;

    /* 텍스트가 너무 길면 ...으로 표시 */
    text-overflow: ellipsis;

    /* 셀의 내용이 셀의 너비나 높이를 초과할 경우, 초과하는 부분을 숨기도록 설정 */
    overflow: hidden;

    /* 셀의 내용을 한 줄로 표시 -> 텍스트가 너무 길면 줄바꿈 X */
    white-space: nowrap;

    &:first-child {
      width: 55%;
    }
  `,

  // 게시글 작성 버튼 레이아웃 스타일링
  BoardWriteButtonLayout: styled.div`
    display: flex;
    justify-content: end;
    padding-top: 24px;
  `,

  // 검색창 레이아웃 스타일링
  BoardSearchLayout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  PageButtonWrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;

    padding-top: 30px;
  `,

  PageButton: styled.div`
    padding: 5px 10px;
    cursor: pointer;
    background-color: ${({ selected }) => (selected ? 'white' : 'transparent')};
    border-radius: 10px;
    color: ${({ selected }) => (selected ? '#000C76' : 'black')};
    font-weight: ${({ selected }) => (selected ? 'bold' : '')};
  `,
};

export default styles;
