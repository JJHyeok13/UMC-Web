import React from 'react';
import PropTypes from 'prop-types';

import BoardTitle from 'components/Board/BoardWrite/BoardTitle.jsx';
import BoardText from 'components/Board/BoardWrite/BoardText.jsx';

import ManagementButton from 'components/Management/NoticePin/Button.jsx';
import StartendDate from 'components/Management/AddSchedule/StartendDate.jsx';
import Local from 'components/Management/AddSchedule/SelectLocal.jsx';
import Classify from 'components/Management/AddSchedule/Classify.jsx';

import SearchChallenger from './ChangeChallenger/SearchChallenger.jsx';
import ChallengerType from './ChangeChallenger/ChallengerType.jsx';
import ChallengerPosition from './ChangeChallenger/ChallengerPosition.jsx';
import styled from 'styled-components';

import NoticeList from './NoticePin/NoticeList.jsx';

const Container = styled.div`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 120vh;
  justify-content: flex-end;
  align-items: center;
  margin-left: 16px;
`;

const ButtonContainerChallenger = styled.div`
  display: flex;
  width: 120vh;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
`;

const TypeComponent = ({
  noticeData,
  page,
  pageNumbers,
  handlePageChange,
  handleKeyword,
  buttonStates,
  SetPinned,
}) => {
  return (
    <Container>
      {buttonStates.setnoticeButton && (
        <>
          <NoticeList
            noticeData={noticeData}
            page={page}
            pageNumbers={pageNumbers}
            handlePageChange={handlePageChange}
            handleKeyword={handleKeyword}
            SetPinned={SetPinned}
          />
        </>
      )}

      {buttonStates.calenderButton && (
        <>
          <BoardTitle />
          <BoardText />
          <StartendDate />
          <Local />
          <Classify />
          <ButtonContainer>
            <ManagementButton />
          </ButtonContainer>
        </>
      )}
      {buttonStates.challengerButton && (
        <>
          <SearchChallenger handleKeyword={handleKeyword} />
          <ChallengerPosition />
          <ChallengerType />
          <ButtonContainerChallenger>
            <ManagementButton />
          </ButtonContainerChallenger>
        </>
      )}
    </Container>
  );
};

TypeComponent.propTypes = {
  noticeData: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  pageNumbers: PropTypes.array.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handleKeyword: PropTypes.func.isRequired,

  buttonStates: PropTypes.shape({
    setnoticeButton: PropTypes.bool,
    calenderButton: PropTypes.bool,
    challengerButton: PropTypes.bool,
  }).isRequired,
  SetPinned: PropTypes.func.isRequired,
};

export default TypeComponent;
