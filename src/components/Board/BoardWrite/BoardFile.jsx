import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Add from 'assets/add.svg';

const FileContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5vh;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid #232a6d;
`;

const FileText = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const AddIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  cursor: pointer;
`;

const FileNameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FileName = styled.p`
  align-items: center;
  color: #000000;
  display: inline-block;
  padding: 8px 16px;
  margin-top: 0.5em;
  border-radius: 12px;
  background: #e3e3e3;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 35vh;
`;

const DeleteButton = styled.span`
  color: #9d9d9d;
  cursor: pointer;
  margin-left: 100px;
`;

const FileInput = styled.input`
  display: none;
`;

const BoardFile = ({ boardFiles, setBoardFiles }) => {
  const handleFileChange = (event) => {
    const newFiles = [...boardFiles];
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      newFiles.push(files[i]);
    }
    setBoardFiles(newFiles);
  };

  const handleDeleteFile = (index) => {
    const newFiles = [...boardFiles];
    newFiles.splice(index, 1);
    setBoardFiles(newFiles);
  };

  return (
    <FileContainer>
      <FileText>
        첨부파일
        <AddIcon
          src={Add}
          alt="Add"
          onClick={() => document.getElementById('fileInput').click()}
        />
      </FileText>
      <FileInput
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        multiple
        accept=".pdf, .png, .jpg, .jpeg"
      />
      <FileNameContainer>
        {boardFiles.map((file, index) => (
          <FileName key={index}>
            {file.name}
            <DeleteButton onClick={() => handleDeleteFile(index)}>
              X
            </DeleteButton>
          </FileName>
        ))}
      </FileNameContainer>
    </FileContainer>
  );
};

BoardFile.propTypes = {
  boardFiles: PropTypes.array,
  setBoardFiles: PropTypes.func.isRequired,
};

export default BoardFile;
