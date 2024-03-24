import React from 'react';
import PropTypes from 'prop-types';

import ManagementButton from 'components/Management/NoticePin/Button.jsx';
import Classify from 'components/Management/AddSchedule/Classify.jsx';

import SearchChallenger from './ChangeChallenger/SearchChallenger.jsx';
import ChallengerType from './ChangeChallenger/ChallengerType.jsx';
import ChallengerPosition from './ChangeChallenger/ChallengerPosition.jsx';
import styled from 'styled-components';

import NoticeList from './NoticePin/NoticeList.jsx';
import Input from './AddSchedule/Input.jsx';

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

const ChallengerContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const TypeComponent = ({
  noticeData,
  page,
  pageNumbers,
  handlePageChange,
  keyword,
  handleKeyword,
  buttonStates,
  SetPinned,
  searchChallenger,
}) => {
  return (
    <>
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
          <Input />
          <Classify />
          <ButtonContainer>
            <ManagementButton />
          </ButtonContainer>
        </>
      )}
      {buttonStates.challengerButton && (
        <ChallengerContainer>
          <SearchChallenger
            keyword={keyword}
            handleKeyword={handleKeyword}
            searchChallenger={searchChallenger}
          />
          <ChallengerPosition />
          <ChallengerType />
          <ButtonContainerChallenger>
            <ManagementButton />
          </ButtonContainerChallenger>
        </ChallengerContainer>
      )}
    </>
  );
};

TypeComponent.propTypes = {
  noticeData: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  pageNumbers: PropTypes.array.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  handleKeyword: PropTypes.func.isRequired,
  searchChallenger: PropTypes.func.isRequired,

  buttonStates: PropTypes.shape({
    setnoticeButton: PropTypes.bool,
    calenderButton: PropTypes.bool,
    challengerButton: PropTypes.bool,
  }).isRequired,
  SetPinned: PropTypes.func.isRequired,
};

export default TypeComponent;
