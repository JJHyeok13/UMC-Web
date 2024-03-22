import React, { useEffect, useState } from 'react';
import axiosInstance from 'apis/setting';

import styles from './styles';

import BasicProfileImage from 'assets/Profile/ProfileImage.svg';

const CommentWriteBox = () => {
  const currentURL = window.location.href;

  // /로 구분하여 배열로 저장하고 host 값과 board 값 변수에 저장하기
  const urlParts = currentURL.split('/');
  const boardId = urlParts[6];

  const [userData, setUserData] = useState([]);

  const [comment, setComment] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axiosInstance.get(`/members`);

        setUserData(res.data.result);
        console.log(res);
      } catch {
        console.error();
      }
    };
    getUserData();
  }, []);

  const submitComment = async () => {
    try {
      await axiosInstance.post(`/boards/comments`, {
        boardId: boardId,
        content: comment,
      });

      setComment('');
    } catch (error) {
      console.error();
    }
  };

  // 입력된 댓글 내용이 변경될 때 호출되는 함수
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <styles.BoxContainer>
      <styles.ProfileImgTextWrapper>
        <img
          src={
            userData.profileImage ? userData.profileImage : BasicProfileImage
          }
          style={{ width: '50px', height: '50px' }}
        />
        <styles.ProfileWrapper>
          <styles.NameNickname>
            {userData.nickname}/{userData.name}
          </styles.NameNickname>

          <styles.CohortPart>
            {/* {userData.universityName} &#124; {userData.semesterParts[0].part} */}
          </styles.CohortPart>
        </styles.ProfileWrapper>
      </styles.ProfileImgTextWrapper>

      <styles.CommentInputNBtnWrapper>
        <styles.CommentInput
          type="text"
          placeholder="댓글을 입력해주세요"
          value={comment}
          onChange={handleCommentChange}
        />
        <styles.SubmitButton onClick={submitComment}>등록</styles.SubmitButton>
      </styles.CommentInputNBtnWrapper>
    </styles.BoxContainer>
  );
};

export default CommentWriteBox;
