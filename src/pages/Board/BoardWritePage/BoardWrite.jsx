import React, { useState, useEffect } from 'react';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

//import BoardFile from 'components/BoardWrite/BoardFile';
import BoardLabel from 'components/Board/BoardWrite/BoardLabel';
import BoardTitle from 'components/Board/BoardWrite/BoardTitle';
import BoardText from 'components/Board/BoardWrite/BoardText';
import BoardButton from 'components/Board/BoardWrite/BoardButton';
import { useLocation, useNavigate } from 'react-router-dom';

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

const BoardWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedHost, setSelectedHost] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  //const [boardFiles, setBoardFiles] = useState([]);

  const [imageList, setImageList] = useState([]);

  const [buttonStates, setButtonStates] = useState({
    campusButton: false,
    branchButton: false,
    centerButton: false,
    suggestionButton: false,
  });

  const navigate = useNavigate();
  const location = useLocation();

  // 현재 페이지의 호스트와 게시판 정보 가져오기
  useEffect(() => {
    const currentPageParts = location.pathname.split('/');
    const currentHost = currentPageParts[2].toUpperCase();
    const currentBoard = currentPageParts[3].toUpperCase();

    setSelectedHost(currentHost);
    setSelectedBoard(currentBoard);

    // 각 버튼의 상태 설정
    setButtonStates((prev) => ({
      ...prev,
      campusButton: currentHost === 'CAMPUS',
      branchButton: currentHost === 'BRANCH',
      centerButton: currentHost === 'CENTER',
      suggestionButton: currentHost === 'SUGGESTION',
    }));
  }, [location.pathname]);

  const onChangeImageInput = (e) => {
    setImageList([...imageList, ...e.target.files]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    imageList.forEach((image) => {
      formData.append('file', image);
    });

    formData.append(
      'request',
      JSON.stringify({
        host: selectedHost,
        board: selectedBoard,
        title: title,
        content: content,
      }),
    );

    try {
      await axiosInstance.post('/boards', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          charset: 'utf-8',
        },
      });
      const url = `/board/${selectedHost}/${selectedBoard}`;
      navigate(url);
    } catch (error) {
      console.log('Error creating post: ', error);
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
            selectedHost={selectedHost}
            setSelectedHost={setSelectedHost}
            selectedBoard={selectedBoard}
            setSelectedBoard={setSelectedBoard}
            buttonStates={buttonStates}
            setButtonStates={setButtonStates}
          />
        </LeftContainer>

        <input
          type="file"
          accept="image/jpg,image/png,image/jpeg,image/gif"
          multiple
          onChange={onChangeImageInput}
        />

        <BoardTitle onChange={(e) => setTitle(e.target.value)} />
        <BoardText onChange={(e) => setContent(e.target.value)} />
        <RightContainer>
          <BoardButton handleSubmit={handleSubmit} />
        </RightContainer>
      </BoardWriteContainer>
    </div>
  );
};

export default BoardWrite;
