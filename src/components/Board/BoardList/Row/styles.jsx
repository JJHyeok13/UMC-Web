import styled from 'styled-components';

const styles = {
  // 하나의 게시글을 감싸는 div
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    border-bottom: 1px solid #d8d8ff;

    /* 마지막 행 선택하는 CSS 선택자 - 마지막 행의 경계선 제거 */
    &:last-child {
      border: none;
    }
    /* 마지막 요소 선택하는 CSS 선택자 - 같은 유형의 마지막 요소의 상단 경계선 제거 */
    &:last-of-type {
      border-top: none;
    }
  `,

  // 게시글 정보
  BoardCell: styled.div`
    display: flex;
    justify-content: center;

    width: 15%;
    padding: 10px 40px;

    /* 텍스트가 너무 길면 ...으로 표시 */
    text-overflow: ellipsis;

    /* 셀의 내용이 셀의 너비나 높이를 초과할 경우, 초과하는 부분을 숨기도록 설정 */
    overflow: hidden;

    /* 셀의 내용을 한 줄로 표시 -> 텍스트가 너무 길면 줄바꿈 X */
    white-space: nowrap;

    &:first-child {
      justify-content: flex-start;
      width: 55%;
      padding-left: 10px;
      cursor: pointer;
    }
  `,
};

export default styles;
