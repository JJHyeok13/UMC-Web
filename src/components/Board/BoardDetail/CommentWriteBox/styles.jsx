import styled from 'styled-components';

const styles = {
  BoxContainer: styled.div`
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
    padding: 1.5vw;
    word-wrap: break-word;

    border: 3px solid black;
    border-radius: 15px;
  `,

  ProfileImgTextWrapper: styled.div`
    display: flex;

    // 프로필 사진과 (닉네임/이름, 기수/파트)그룹 사이의 간격을 조절하기 위해 사용
    gap: 0.3vw;
  `,

  // 닉네임/이름에 스타일링하기 위해 사용
  NameNickname: styled.p`
    // 글씨 스타일링
    color: #000000;
    font-family: 'Pretendard';
    font-size: 1em;
    font-weight: bold;
    letter-spacing: -1.4px;
  `,

  // 닉네임/이름, 기수/파트를 그룹화 하기 위해 사용
  ProfileWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  // 기수/파트에 스타일링하기 위해 사용
  CohortPart: styled.p`
    // 글씨 스타일링
    color: #9d9d9d;
    font-family: 'Pretendard';
    font-size: 0.9em;
    font-weight: 600;
    letter-spacing: -1.4px;
  `,

  // 댓글입력창 스타일링
  CommentInput: styled.input`
    // 부모요소(CommentWriteContainer(작성자 정보, 댓글입력창, 등록버튼))의 남은 공간을 모두 채우기 위해 사용
    flex: 1;

    //댓글입력창에 padding을 지정
    padding: 1%;

    background-color: #f0f4ff;

    //border 스타일링
    border: none;
    border-radius: 10px;

    // 텍스트 줄 높이를 현재 폰트 크기의 30%로 설정
    line-height: 30%;

    // 글씨가 아무것도 입력되지 않았을 때 나오는 글씨 색 스타일링
    &::placeholder {
      color: #4b4b4b;
    }
  `,

  // CommentInput과 등록버튼을 스타일링
  CommentInputNBtnWrapper: styled.div`
    // row로 배열
    display: flex;
    flex-direction: row;

    // CommentWriteContainer의 너비의 100%를 사용
    width: 100%;

    // 댓글입력창과 등록버튼 사이의 간격을 지정
    gap: 1vw;

    // 작성자 정보와 (댓글입력창&등록버튼) 사이의 간격을 지정
    padding-top: 2vh;
  `,

  SubmitButton: styled.div`
    padding: 7px;
    border-radius: 5px;
    background-color: #919cff;
    color: white;
    cursor: pointer;
  `,
};

export default styles;
