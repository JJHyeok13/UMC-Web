import React from 'react';
import PropTypes from 'prop-types';
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

const BoardTitle = ({ title, onChange }) => {
  return (
    <TitleInput
      className="title"
      placeholder="제목을 입력해주세요"
      aria-label="게시글 제목"
      onChange={onChange}
      defaultValue={title}
    />
  );
};

BoardTitle.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default BoardTitle;
