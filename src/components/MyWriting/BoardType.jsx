import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';

import SchoolUnchecked from 'assets/mywrite/mywriteSchoolUnchecked.svg';
import SchoolChecked from 'assets/mywrite/mywriteSchoolChecked.svg';
import CampUnchecked from 'assets/mywrite/mywriteCampUnchecked.svg';
import CampChecked from 'assets/mywrite/mywriteCampChecked.svg';
import UnionUnchecked from 'assets/mywrite/mywriteUnionUnchecked.svg';
import UnionChecked from 'assets/mywrite/mywriteUnionChecked.svg';
import SuggestionUnchecked from 'assets/mywrite/mywriteSuggestionUnchecked.svg';
import SuggestionChecked from 'assets/mywrite/mywriteSuggestionChecked.svg';

import SchoolBoard from 'components/BoardWrite/BoardSchool';
import CampBoard from 'components/BoardWrite/BoardCamp';

import ResetImg from 'assets/mywrite/reset.svg';

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-top: 10vh;
  
  border: 1px solid #232A6D;
  padding: 8vh;
  width: 85%;
  border-radius: 12px;
  background-color: white;
`;


const ContainerType = styled.div`
  display: flex;  
`;

const TypeName = styled.div`
display: flex;  
flex-direction: row;
align-items: center;

margin-right: 7vh;
font-weight: bold;
`;

const BoardName = styled.div`
display: flex;  
flex-direction: row;
align-items: center;
flex-wrap: nowrap;
width: 8vh;
margin-bottom: 4vh;
margin-right: 3vh;
font-weight: bold;
`;

const TypeLink = styled(Link)`
  margin-right: 10px;
  cursor: pointer;
`;

const ResetContainer = styled.div`
  display: flex; /* Add this line */
  justify-content: flex-end;
  width: 100%;
`;

const Reset = styled.img`
  cursor: pointer;
  height: 14px;
`;


const BoardType = () => {
  const initialButtonStates = {
    schoolButton: true,
    campButton: false,
    unionButton: false,
    suggestionButton: false,
  };

  const [buttonStates, setButtonStates] = useState(initialButtonStates);
  const resetButtonStates = () => {
    setButtonStates(initialButtonStates);
  };

  const handleClick = (buttonName) => {
    setButtonStates((prevStates) => ({
      schoolButton: buttonName === 'schoolButton' ? !prevStates.schoolButton : false,
      campButton: buttonName === 'campButton' ? !prevStates.campButton : false,
      unionButton: buttonName === 'unionButton' ? !prevStates.unionButton : false,
      suggestionButton: buttonName === 'suggestionButton' ? !prevStates.suggestionButton : false,
    }));
  };

 
  

  return (
    <AllContainer>
      <ResetContainer>
      <Reset src={ResetImg} alt="reset" onClick={resetButtonStates} />
      </ResetContainer>

      <ContainerType>
      <TypeName>종류</TypeName>

        <div>
         
          <TypeLink to="/mywrite/school" onClick={() => handleClick('schoolButton')}>
            {buttonStates.schoolButton ? (
              <img src={SchoolChecked} alt="Inactive Image" />
            ) : (
              <img src={SchoolUnchecked} alt="학교" />
            )}
          </TypeLink>

          <TypeLink to="/mywrite/camp" onClick={() => handleClick('campButton')}>
            {buttonStates.campButton ? (
              <img src={CampChecked} alt="Inactive Image" />
            ) : (
              <img src={CampUnchecked} alt="지부" />
            )}
          </TypeLink>

          <TypeLink to="/mywrite/union" onClick={() => handleClick('unionButton')}>
            {buttonStates.unionButton ? (
              <img src={UnionChecked} alt="Inactive Image" />
            ) : (
              <img src={UnionUnchecked} alt="연합" />
            )}
          </TypeLink>

          <TypeLink to="/mywrite/suggestion" onClick={() => handleClick('suggestionButton')}>
            {buttonStates.suggestionButton ? (
              <img src={SuggestionChecked} alt="Inactive Image" />
            ) : (
              <img src={SuggestionUnchecked} alt="연합" />
            )}
          </TypeLink>
        </div>

      </ContainerType>
      <ContainerType>
        {!buttonStates.suggestionButton && <BoardName>게시판</BoardName>}
        {buttonStates.schoolButton && <SchoolBoard />}{' '}
        {buttonStates.campButton && <CampBoard />}{' '}
        {buttonStates.unionButton && <CampBoard />}{' '}
        {buttonStates.suggestionButton && <div></div>}

      </ContainerType>


    </AllContainer>
  );
};

export default BoardType;
