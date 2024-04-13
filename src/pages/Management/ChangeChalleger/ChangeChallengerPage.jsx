import React, { useState } from 'react';
import axiosInstance from 'apis/setting';
import ManagementTitle from 'components/Management/ManagementTitle';
import ManagementType from 'components/Management/ManagementType';

import SearchChallenger from 'components/Management/ChangeChallenger/SearchChallenger.jsx';
import ChallengerType from 'components/Management/ChangeChallenger/ChallengerType.jsx';
import ChallengerPosition from 'components/Management/ChangeChallenger/ChallengerPosition.jsx';

import styles from './styles';

const ChangeChallengerPage = () => {
  const [challengerData, setChanllengerData] = useState([]);
  const [selectedChallenger, setSelectedChallenger] = useState(null);

  // 검색 기능
  const [keyword, setKeyword] = useState('');

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const searchChallenger = async () => {
    try {
      const res = await axiosInstance.get(`/staff/members/search`, {
        params: {
          keyword: keyword,
        },
      });
      setChanllengerData(res.data.result.members);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChallengerClick = (challenger) => {
    setSelectedChallenger(challenger);
  };

  const [campusPositions, setCampusPositions] = useState([]);
  const [centerPositions, setCenterPositions] = useState([]);
  const [semesterParts, setSemesterParts] = useState([]);

  const updateChallenger = async (memberId) => {
    try {
      const res = await axiosInstance.post(
        `/staff/members/${memberId}/update`,
        {
          campusPositions: campusPositions,
          centerPositions: centerPositions,
          semesterParts: semesterParts,
        },
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <styles.AdminManagementWrapper>
      <ManagementTitle />

      <ManagementType />

      <styles.ChallengerContainer>
        <SearchChallenger
          keyword={keyword}
          handleKeyword={handleKeyword}
          searchChallenger={searchChallenger}
          challengerData={challengerData}
          handleChallengerClick={handleChallengerClick} // 추가된 부분
        />
        <ChallengerPosition
          setCampusPositions={setCampusPositions}
          setCenterPositions={setCenterPositions}
          selectedChallenger={selectedChallenger} // 추가된 부분
        />
        <ChallengerType
          setSemesterParts={setSemesterParts}
          selectedChallenger={selectedChallenger} // 추가된 부분
        />

        <styles.ButtonContainer>
          <styles.Button onClick={updateChallenger}>완료</styles.Button>
        </styles.ButtonContainer>
      </styles.ChallengerContainer>
    </styles.AdminManagementWrapper>
  );
};

export default ChangeChallengerPage;
