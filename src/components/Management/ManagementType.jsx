import React from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import setnoticeUnchecked from 'assets/Management/SetNoticeUnchecked.svg';
import setnoticeChecked from 'assets/Management/SetNoticeChecked.svg';
import calenderUnchecked from 'assets/Management/CalenderUnchecked.svg';
import calenderChecked from 'assets/Management/CalenderChecked.svg';
import challengerUnchecked from 'assets/Management/ChallengerUnchecked.svg';
import challengerChecked from 'assets/Management/ChallengerChecked.svg';

const ManagmentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
`;

const ManagementLink = styled(Link)`
  margin-right: 10px;
  cursor: pointer;
  text-decoration: none;

  padding: 0 15px;
`;

const ManagementType = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToNotice = () => {
    navigate('/management/notice');
  };

  const goToCalendar = () => {
    navigate('/management/calendar');
  };

  const goToChallenger = () => {
    navigate('/management/challenger');
  };

  return (
    <ManagmentContainer>
      <ManagementLink to="/management/notice" onClick={goToNotice}>
        <img
          src={
            location.pathname === '/management/notice'
              ? setnoticeChecked
              : setnoticeUnchecked
          }
          alt="버튼 이미지"
        />
      </ManagementLink>

      <ManagementLink to="/management/calendar" onClick={goToCalendar}>
        <img
          src={
            location.pathname === '/management/calendar'
              ? calenderChecked
              : calenderUnchecked
          }
          alt="버튼 이미지"
        />
      </ManagementLink>

      <ManagementLink to="/management/challenger" onClick={goToChallenger}>
        <img
          src={
            location.pathname === '/management/challenger'
              ? challengerChecked
              : challengerUnchecked
          }
          alt="버튼 이미지"
        />
      </ManagementLink>
    </ManagmentContainer>
  );
};

export default ManagementType;
