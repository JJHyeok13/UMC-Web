import styled from 'styled-components';

const styles = {
  // 댓글의 전체(작성자 정보, 댓글 내용, 날짜)를 감싸는 박스
  Container: styled.div`
    width: 100%;

    // 박스 요소를 column으로 배열
    display: flex;
    flex-direction: column;

    padding: 2vw;

    border-bottom: 1px solid #d8d8ff;
  `,

  ProfileImgTextWrapper: styled.div`
    display: flex;

    position: relative;
    // 프로필 사진과 (닉네임/이름, 기수/파트)그룹 사이의 간격을 조절하기 위해 사용
    gap: 0.3vw;
  `,

  // 닉네임/이름, 기수/파트를 그룹화 하기 위해 사용
  ProfileWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  // 닉네임/이름에 스타일링하기 위해 사용
  NameNickname: styled.p`
    // 글씨 스타일링
    color: #000000;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: -1.4px;
  `,

  // 글의 내용을 나타내는 컴포넌트
  TextContent: styled.p`
    padding: 1% 0;
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

  // 날짜글씨 스타일링
  Date: styled.p`
    color: #bcbcbc;
    display: flex;
  `,

  OptionWrapper: styled.div`
    background-color: white;
    border: 1px solid white;
    border-radius: 10px;

    position: absolute;
    right: -80px;
    top: -5px;

    padding: 7px;
  `,
};

export default styles;
