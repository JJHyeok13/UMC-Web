import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Like from 'assets/Like.svg';
import Comment from 'assets/Comment.svg';
import ViewCount from 'assets/ViewCount.svg';
import CommentBtnImg from 'assets/CommentBtnImg.svg';
import LikeBtnImgNotLiked from 'assets/LikeBtnImgNotLiked.svg';
import LikeBtnImgLiked from 'assets/LikeBtnImgLiked.svg';

import BasicProfileImage from 'assets/Profile/ProfileImage.svg';

import OptionButtonImage from 'assets/OptionButton.svg';
import { useNavigate } from 'react-router-dom';

const BoardDetail = ({ boardLike, boardDetailData, getBoardDetail }) => {
  const navigate = useNavigate();
  // 우측 삭제/수정 옵션 모달 상태
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  const currentURL = window.location.href;
  const urlParts = currentURL.split('/');

  const host = urlParts[4];
  const board = urlParts[5];
  const boardId = urlParts[6];

  // const host = boardDetailData.host;
  // const board = boardDetailData.board;
  // const boardId = boardDetailData.boardId;

  const handleModifyButton = () => {
    navigate(`/board/modify/${host}/${board}/${boardId}`);
  };

  // 스크롤을 페이지 바닥으로 이동시키는 함수
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    getBoardDetail();
  }, []);

  return (
    <styles.BoxContainer>
      <styles.AllWrapper>
        <styles.ProfileImgTextWrapper>
          <img
            src={
              boardDetailData.profileImage
                ? boardDetailData.profileImage
                : BasicProfileImage
            }
            style={{ width: '50px', height: '50px' }}
          />

          <styles.ProfileWrapper>
            <styles.NameNickname>{boardDetailData.writer}</styles.NameNickname>
            <styles.CohortPart>
              {boardDetailData.semester} &#124; {boardDetailData.part}
            </styles.CohortPart>
          </styles.ProfileWrapper>

          <img
            src={OptionButtonImage}
            alt="더보기"
            style={{ marginLeft: 'auto', cursor: 'pointer' }}
            onClick={handleButtonClick}
          />
          {isOptionOpen && (
            <styles.OptionWrapper>
              <div onClick={handleButtonClick}>
                <div style={{ cursor: 'pointer' }} onClick={handleModifyButton}>
                  수정하기
                </div>
                <hr />
                <div style={{ cursor: 'pointer', color: 'red' }}>삭제하기</div>
              </div>
            </styles.OptionWrapper>
          )}
        </styles.ProfileImgTextWrapper>

        <styles.TextTitle> {boardDetailData.title} </styles.TextTitle>

        <styles.TextContent> {boardDetailData.content} </styles.TextContent>

        <styles.ImageWrapper>
          {boardDetailData.boardFiles &&
            boardDetailData.boardFiles.map((image, index) => (
              <styles.ImageFile
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
              />
            ))}
        </styles.ImageWrapper>

        <styles.LikeCommentViewCountWrapper>
          <styles.Wrapper>
            <img src={Like} alt="좋아요" />
            <span style={{ color: '#000C76' }}>
              {boardDetailData.heartCount}
            </span>
          </styles.Wrapper>
          <styles.Wrapper>
            <img src={Comment} alt="댓글" />
            <span style={{ color: '#FFC700' }}>
              {boardDetailData.commentCount}
            </span>
          </styles.Wrapper>
          <styles.Wrapper>
            <img src={ViewCount} alt="조회수" />
            <span style={{ color: '#4B4B4B' }}>{boardDetailData.hitCount}</span>
          </styles.Wrapper>
        </styles.LikeCommentViewCountWrapper>

        <styles.BottomWrapper>
          <styles.LikeCommentViewCountWrapper>
            <img
              src={boardDetailData.liked ? LikeBtnImgLiked : LikeBtnImgNotLiked}
              alt="좋아요버튼"
              style={{ cursor: 'pointer', height: '30px' }}
              onClick={boardLike}
            />
            <img
              src={CommentBtnImg}
              alt="댓글 버튼"
              onClick={scrollToBottom}
              style={{ cursor: 'pointer', height: '30px' }}
            />
          </styles.LikeCommentViewCountWrapper>

          <styles.Date>{boardDetailData.createdAt}</styles.Date>
        </styles.BottomWrapper>
      </styles.AllWrapper>
    </styles.BoxContainer>
  );
};

BoardDetail.propTypes = {
  boardLike: PropTypes.func.isRequired,
  getBoardDetail: PropTypes.func.isRequired,
  boardDetailData: PropTypes.object.isRequired,
};

export default BoardDetail;
