import React, { useState } from 'react';
import styled from 'styled-components';

import ChallengerAdd from 'assets/Management/ChallengerAdd.svg';
import ChallengerRemove from 'assets/Management/ChallengerRemove.svg';

const ChallengerTypeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

const TitleContainer = styled.div`
  width: 70%;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  padding: 16px;
  margin-top: 16px;
  background-color: #fff;

  border: 1px solid #232a6d;
`;

const DropdownBox = styled.select`
  padding: 6px 16px;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => (props.selected ? '#F0F4FF' : '#EAEAEA')};
  color: ${(props) => (props.selected ? '#8784FF' : '#999')};
  margin-top: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-right: 2vh;
`;

const DropBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AddButton = styled.div`
  margin-right: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8vh;
  cursor: pointer;
`;

const RemoveButton = styled.div`
  margin-right: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ChallengerType = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedPart, setSelectedPart] = useState('');
  const [additionalDropdowns, setAdditionalDropdowns] = useState([]);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDropdownChangePart = (event) => {
    setSelectedPart(event.target.value);
  };

  const handleAdditionalDropdownChange = (index, event) => {
    const newDropdowns = [...additionalDropdowns];
    newDropdowns[index].option = event.target.value;
    setAdditionalDropdowns(newDropdowns);
  };

  const handleAdditionalDropdownChangePart = (index, event) => {
    const newDropdowns = [...additionalDropdowns];
    newDropdowns[index].part = event.target.value;
    setAdditionalDropdowns(newDropdowns);
  };

  const handleAddButtonClick = () => {
    setAdditionalDropdowns([...additionalDropdowns, { option: '', part: '' }]);
  };

  const handleRemoveButtonClick = (index) => {
    const newDropdowns = [...additionalDropdowns];
    newDropdowns.splice(index, 1);
    setAdditionalDropdowns(newDropdowns);
  };

  const renderAdditionalDropdowns = () => {
    return additionalDropdowns.map((dropdown, index) => (
      <DropBoxContainer key={index}>
        {additionalDropdowns.length > 0 && (
          <RemoveButton onClick={() => handleRemoveButtonClick(index)}>
            <img src={ChallengerRemove} alt="챌린저 제거 버튼" />
          </RemoveButton>
        )}
        <DropdownBox
          value={dropdown.option}
          onChange={(event) => handleAdditionalDropdownChange(index, event)}
          selected={dropdown.option !== ''}
        >
          <option value="" hidden disabled>
            기수
          </option>
          <option value="1기">1기</option>
          <option value="2기">2기</option>
          <option value="3기">3기</option>
          <option value="4기">4기</option>
          <option value="5기">5기</option>
          <option value="6기">6기</option>
        </DropdownBox>

        <DropdownBox
          value={dropdown.part}
          onChange={(event) => handleAdditionalDropdownChangePart(index, event)}
          selected={dropdown.part !== ''}
        >
          <option value="" hidden disabled>
            파트
          </option>
          <option value="PM">PM</option>
          <option value="Design">Design</option>
          <option value="Spring">Spring</option>
          <option value="Node">Node</option>
          <option value="Web">Web</option>
          <option value="iOS">iOS</option>
          <option value="Android">Android</option>
        </DropdownBox>

        <AddButton onClick={handleAddButtonClick}>
          기수추가
          <img src={ChallengerAdd} alt="더하기 버튼" />
        </AddButton>
      </DropBoxContainer>
    ));
  };

  return (
    <ChallengerTypeContainer>
      <TitleContainer>
        기수 및 파트
        <DropBoxContainer>
          {additionalDropdowns.length > 0 && (
            <RemoveButton onClick={() => handleRemoveButtonClick(0)}>
              <img src={ChallengerRemove} alt="챌린저 제거 버튼" />
            </RemoveButton>
          )}
          <DropdownBox
            value={selectedOption}
            onChange={handleDropdownChange}
            selected={selectedOption !== ''}
          >
            <option value="" hidden disabled>
              기수
            </option>
            <option value="1기">1기</option>
            <option value="2기">2기</option>
            <option value="3기">3기</option>
            <option value="4기">4기</option>
            <option value="5기">5기</option>
            <option value="6기">6기</option>
          </DropdownBox>

          <DropdownBox
            value={selectedPart}
            onChange={handleDropdownChangePart}
            selected={selectedPart !== ''}
          >
            <option value="" hidden disabled>
              파트
            </option>
            <option value="PM">PM</option>
            <option value="Design">Design</option>
            <option value="Spring">Spring</option>
            <option value="Node">Node</option>
            <option value="Web">Web</option>
            <option value="iOS">iOS</option>
            <option value="Android">Android</option>
          </DropdownBox>

          <AddButton onClick={handleAddButtonClick}>
            기수추가
            <img src={ChallengerAdd} alt="더하기 버튼" />
          </AddButton>
        </DropBoxContainer>
        {renderAdditionalDropdowns()}
      </TitleContainer>
    </ChallengerTypeContainer>
  );
};

export default ChallengerType;
