import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import BasicProfileImage from 'assets/Profile/ProfileImage.svg';
import OptionButtonImage from 'assets/OptionButton.svg';

const CommentBox = ({ commentData, getBoardComment }) => {
  // 우측 삭제/수정 옵션 모달 상태 (댓글 각각에 대해서 정의)
  const [openOptionIndex, setOpenOptionIndex] = useState(null);

  const handleButtonClick = (index) => {
    if (openOptionIndex === index) {
      setOpenOptionIndex(null);
    } else {
      setOpenOptionIndex(index);
    }
  };

  useEffect(() => {
    getBoardComment();
  }, [commentData]);

  return (
    <div>
      {commentData.map((data, index) => (
        <styles.Container key={index}>
          <styles.ProfileImgTextWrapper>
            <img
              src={data.profileImage ? data.profileImage : BasicProfileImage}
              style={{ width: '50px', height: '50px' }}
            />

            <styles.ProfileWrapper>
              <styles.NameNickname>{data.writer}</styles.NameNickname>
              <styles.CohortPart>
                {data.semester} &#124; {data.part}
              </styles.CohortPart>
            </styles.ProfileWrapper>

            <img
              src={OptionButtonImage}
              alt="더보기"
              style={{ marginLeft: 'auto', cursor: 'pointer' }}
              onClick={() => handleButtonClick(index)}
            />
            {openOptionIndex === index && (
              <styles.OptionWrapper>
                <div onClick={() => handleButtonClick(index)}>
                  <div style={{ cursor: 'pointer' }}>수정하기</div>
                  <hr />
                  <div style={{ cursor: 'pointer', color: 'red' }}>
                    삭제하기
                  </div>
                </div>
              </styles.OptionWrapper>
            )}
          </styles.ProfileImgTextWrapper>

          <styles.TextContent>{data.content}</styles.TextContent>

          <styles.Date> {data.createdAt} </styles.Date>
        </styles.Container>
      ))}
    </div>
  );
};

CommentBox.propTypes = {
  commentData: PropTypes.array.isRequired,
  getBoardComment: PropTypes.func.isRequired,
};

export default CommentBox;
