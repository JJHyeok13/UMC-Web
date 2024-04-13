import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const BoardText = ({ content, onChange }) => {
  return (
    <Textarea
      placeholder="내용을 입력해주세요"
      aria-label="게시글 내용"
      onChange={onChange}
      defaultValue={content}
    />
  );
};

BoardText.propTypes = {
  onChange: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default BoardText;
