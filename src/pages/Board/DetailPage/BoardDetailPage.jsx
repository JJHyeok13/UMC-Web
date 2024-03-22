import React, { useState } from 'react';
import axiosInstance from 'apis/setting';

import styles from './styles';

import BoardBox from 'components/Board/BoardBox/BoardBox';
import BoardDetail from 'components/Board/BoardDetail/BoardDetail/BoardDetail';
import CommentBox from 'components/Board/BoardDetail/CommentBox/CommentBox';
import CommentWriteBox from 'components/Board/BoardDetail/CommentWriteBox/CommentWriteBox';
import { useNavigate } from 'react-router-dom';

const BoardDetailPage = () => {
  const navigate = useNavigate();

  const currentURL = window.location.href;

  // /로 구분하여 배열로 저장하고 host 값과 board 값 변수에 저장하기
  const urlParts = currentURL.split('/');
  const boardId = urlParts[6];

  const [boardDetailData, setBoardDetailData] = useState({});

  const [commentData, setCommentData] = useState([]);

  const getBoardDetail = async () => {
    try {
      const res = await axiosInstance.get(`/boards/${boardId}`);
      setBoardDetailData(res.data.result);

      console.log(res);
    } catch (error) {
      console.error();
    }
  };

  const getBoardComment = async () => {
    try {
      const res = await axiosInstance.get(`/boards/comments/${boardId}`, {
        params: {
          page: 0,
        },
      });
      setCommentData(res.data.result.boardCommentPageElements);
    } catch (error) {
      console.log(error);
    }
  };

  const boardLike = async () => {
    try {
      await axiosInstance.post(`/boards/${boardId}/heart`, {
        boardId: boardId,
      });
      setBoardDetailData((prevData) => ({
        ...prevData,
        liked: !prevData.liked,
        heartCount: prevData.liked
          ? prevData.heartCount - 1
          : prevData.heartCount + 1,
      }));
    } catch (error) {
      console.error();
    }
  };

  const backToBoardListPage = () => {
    // 주어진 URL에서 boardId를 제외한 주소로 이동
    let baseAddress = window.location.pathname.split('/');
    baseAddress.pop();
    navigate(baseAddress.join('/'));
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
      <styles.Container>
        <styles.BoardTitleLayout />
        <styles.LowerWrapper>
          <BoardBox />
          <styles.RightWrapper>
            <styles.BackButton onClick={backToBoardListPage}>
              목록
            </styles.BackButton>
            <BoardDetail
              boardDetailData={boardDetailData}
              boardLike={boardLike}
              getBoardDetail={getBoardDetail}
            />
            {commentData && (
              <CommentBox
                commentData={commentData}
                getBoardComment={getBoardComment}
              />
            )}
            <CommentWriteBox boardDetailData={boardDetailData} />
          </styles.RightWrapper>
        </styles.LowerWrapper>
      </styles.Container>
    </div>
  );
};

export default BoardDetailPage;
