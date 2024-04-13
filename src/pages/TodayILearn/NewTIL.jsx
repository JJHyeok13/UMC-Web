import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTodayILearned } from 'apis/TodayILearned/todayilearned';
import styled from 'styled-components';

import BoardFile from 'components/Board/BoardWrite/BoardFile';
//import NotionLink from 'components/TodayILearn/Notion';

import OptionTIL from 'components/TodayILearn/OptionTIL';
import TILCalender from 'components/TodayILearn/Calender';

const NewTILContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0vh 50vh;
`;

const Title = styled.div`
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  margin-top: 15vh;
  margin-bottom: 5vh;
  color: #00095c;
`;

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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: white;
  border: none;
  display: flex;
  padding: 10px 18px;
  align-items: center;
  border-radius: 12px;
  background: #232a6d;
  cursor: pointer;
  margin-top: 3.2vh;
  margin-right: 1vh;
`;

const NewTIL = () => {
  const navigate = useNavigate();

  const [part, setPart] = useState('');
  const [file, setFile] = useState([]);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleSubTitleInput = (e) => {
    setSubTitle(e.target.value);
  };

  const handleContentInput = (e) => {
    setContent(e.target.value);
  };

  const handleCancel = () => {
    navigate(`/todayilearned`);
  };

  const handleAddTodayILearned = () => {
    addTodayILearned(part, title, subTitle, content, file);
    navigate(`/todayilearned`);
  };

  // const addTIL = async () => {
  //   const formData = new FormData();

  //   if (file) {
  //     formData.append('file', file[0]);
  //   }

  //   formData.append(
  //     'request',
  //     JSON.stringify({
  //       part: part,
  //       title: title,
  //       subTitle: subTitle,
  //       content: content,
  //     }),
  //   );

  //   try {
  //     const res = await axios.post(
  //       `${process.env.REACT_APP_TEST_SERVER_URL}/today-i-learned`,
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //           Authorization: localStorage.getItem('server Token'),
  //         },
  //       },
  //     );
  //     console.log(res);

  //     navigate(`/todayilearned`);
  //   } catch (error) {
  //     console.error();
  //   }
  // };

  return (
    <NewTILContainer>
      <Title>Today I Learned</Title>
      <TILCalender />
      <OptionTIL part={part} setPart={setPart} />
      <BoardFile file={file} setFile={setFile} />
      {/* <NotionLink /> */}

      <TitleInput
        placeholder="제목을 입력해주세요"
        aria-label="게시글 제목"
        value={title}
        onChange={(e) => handleTitleInput(e)}
      />

      <TitleInput
        placeholder="소제목을 입력해주세요"
        onChange={(e) => handleSubTitleInput(e)}
      />

      <Textarea
        placeholder="내용을 입력해주세요"
        aria-label="게시글 내용"
        onChange={(e) => handleContentInput(e)}
      />

      <ButtonWrapper>
        <Button onClick={handleAddTodayILearned}>작성</Button>
        <Button onClick={handleCancel}>취소</Button>
      </ButtonWrapper>
    </NewTILContainer>
  );
};

export default NewTIL;
