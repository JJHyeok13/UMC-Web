import React, { useState, useEffect } from 'react';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import BoardFile from 'components/Board/BoardWrite/BoardFile';
import BoardLabel from 'components/Board/BoardWrite/BoardLabel';
import BoardTitle from 'components/Board/BoardWrite/BoardTitle';
import BoardText from 'components/Board/BoardWrite/BoardText';
import BoardButton from 'components/Board/BoardWrite/BoardButton';
import { useNavigate } from 'react-router-dom';

const BoardWriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10vh auto;
  width: 70%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 2vh;
`;

const Title = styled.div`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  margin-top: 50px;
  margin-bottom: 32px;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 126vh;
  width: 100%;
  margin-left: auto;
`;

const ModifyBoard = () => {
  const navigate = useNavigate();

  const [boardData, setBoardData] = useState({});

  const currentURL = window.location.href;
  const urlParts = currentURL.split('/');

  const boardId = urlParts[7];

  useEffect(() => {
    const getBoardData = async () => {
      try {
        const res = await axiosInstance.get(`/boards/${boardId}`);

        setBoardData(res.data.result);

        console.log(res);
      } catch (error) {
        console.error();
      }
    };
    getBoardData();
  }, []);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const host = urlParts[5].toUpperCase();
  const board = urlParts[6].toUpperCase();
  const [file, setFile] = useState([]);

  const [buttonStates, setButtonStates] = useState({
    campusButton: false,
    branchButton: false,
    centerButton: false,
    suggestionButton: false,
  });

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleContentInput = (e) => {
    setContent(e.target.value);
  };

  const modifyBoard = async () => {
    const formData = new FormData();

    if (file) {
      formData.append('file', file[0]);
    }

    formData.append(
      'request',
      JSON.stringify({
        title: title,
        content: content,
        host: host,
        board: board,
      }),
    );

    try {
      const res = await axiosInstance.patch('/boards', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Server response:', res.data);

      const url = `/board/${host}/${board}`;
      navigate(url);
    } catch (error) {
      console.error('Error creating post: ', error);
    }
  };

  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <BoardWriteContainer>
        <LeftContainer>
          <Title>게시글 작성</Title>
          <BoardLabel
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
        </LeftContainer>

        <BoardFile file={file} setFile={setFile} />
        <BoardTitle
          title={boardData.title}
          onChange={(e) => handleTitleInput(e)}
        />
        <BoardText
          content={boardData.content}
          onChange={(e) => handleContentInput(e)}
        />

        <RightContainer>
          <BoardButton handleSubmit={modifyBoard} />
        </RightContainer>
      </BoardWriteContainer>
    </div>
  );
};

export default ModifyBoard;
