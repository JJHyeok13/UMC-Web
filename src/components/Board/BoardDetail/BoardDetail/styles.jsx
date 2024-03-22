import styled from 'styled-components';

const styles = {
  // TextDetail을 스타일링하기 위한 박스
  BoxContainer: styled.div`
    box-sizing: border-box;
    width: 100%;
    background-color: white;
    padding: 1.5vw;
    word-wrap: break-word;
    border-radius: 15px;
  `,

  // 전체를 스타일링 하는 컴포넌트(가장 상위 요소)
  AllWrapper: styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 100%;
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

  // 글의 제목을 나타내는 컴포넌트
  TextTitle: styled.h2`
    padding: 1% 0;
    font-weight: bold;
  `,

  ImageWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,

  ImageFile: styled.img`
    max-width: 50%;
    max-height: 50%;
    width: auto;
    height: auto;
    padding: 1% 0;
  `,

  // 글의 내용을 나타내는 컴포넌트
  TextContent: styled.p`
    padding: 1% 0;
  `,

  // 기수/파트에 스타일링하기 위해 사용
  CohortPart: styled.p`
    // 글씨 스타일링
    color: #9d9d9d;
    font-size: 0.9em;
    font-weight: 600;
    letter-spacing: -1.4px;
  `,

  // 좋아요수, 댓글수, 조회수를 묶어서 정렬하기 위해 사용
  LikeCommentViewCountWrapper: styled.div`
    display: inline-flex;
    width: 50%;
    flex-direction: row;
    gap: 1vw;
    justify-content: flex-start;
    padding: 1% 0;
  `,

  // 좋아요수, 댓글수, 조회수를 각각 정렬하기 위해 사용
  Wrapper: styled.div`
    display: inline-flex;
    flex-direction: row;
    gap: 0.1vw;
  `,

  BottomWrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
  `,

  // 날짜글씨 스타일링
  Date: styled.p`
    color: #bcbcbc;
    display: flex;
    margin-left: auto;
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
