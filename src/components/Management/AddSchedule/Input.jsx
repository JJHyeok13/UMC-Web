import React from 'react';
import styled from 'styled-components';

// 글자가 적인 후 -> 전
const TitleInput = styled.input`
  color: black;
  border: none;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  padding: 1.5vh;
  border-radius: 12px;
  margin-top: 1.6vh;

  border: 1px solid #232a6d;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: #bcbcbc;
    font-weight: bold;
  }
`;

const Textarea = styled.textarea`
  color: black;
  border: none;
  display: flex;
  width: 100%;
  height: 300px;
  padding: 1.5vh;
  font-size: 16px;
  align-items: flex-start;
  resize: none;
  border-radius: 12px;
  background: var(--white, #fff);
  flex-direction: column;
  margin-top: 1.6vh;

  border: 1px solid #232a6d;

  &::placeholder {
    color: #bcbcbc;
  }
`;

const DateContainer = styled.div`
  display: flex;
  width: 120vh;
  flex-direction: column;
  border-radius: 12px;
  padding: 1vh;
  margin-top: 1.6vh;

  border: 1px solid #232a6d;
`;

const Start = styled.div`
  border-bottom: 1px solid #d9d9d9;
  color: #000000;
  padding-bottom: 0.5vh;
  // font-weight: bold;
`;

const End = styled.div`
  color: #000000;
  padding-top: 0.5vh;

  // font-weight: bold;
`;

const LocalContainer = styled.div`
  display: flex;
  width: 120vh;
  padding: 1vh;
  border-radius: 12px;
  margin-top: 1.6vh;
  border: 1px solid #232a6d;
`;

const LocalInput = styled.input`
  display: flex;
  width: 100%;
  padding: 1vh;
  border: none;
  border-radius: 12px;
  outline: none;
  &::placeholder {
    color: #bcbcbc;
  }
`;

const Input = () => {
  return (
    <>
      <TitleInput placeholder="제목을 입력해주세요" aria-label="게시글 제목" />
      <Textarea placeholder="내용을 입력해주세요" aria-label="게시글 내용" />
      <DateContainer>
        <Start>시작일</Start>
        <End>종료일</End>
      </DateContainer>
      <LocalContainer>
        <LocalInput placeholder="장소설정" />
      </LocalContainer>
    </>
  );
};

export default Input;
