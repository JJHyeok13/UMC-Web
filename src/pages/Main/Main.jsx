import React, { useState, useEffect } from 'react';
import axiosInstance from 'apis/setting';
import styles from './style';

import MainDescription from 'components/Main/MainDescription';

import MyCalendar from 'components/Main/Calendar/calendar';
import ScheduleItem from 'components/Main/Calendar/Schedule';

import Notification from 'components/Main/Notification/Notification';

import InProgressTodoList from 'components/Main/TodoList/InProgressTodoList';
import CompleteTodoList from 'components/Main/TodoList/CompleteTodoList';

import TodayILearned from 'components/Main/TodayILearned/TodayILearned';
import Github from 'components/Main/Github/Github';

import Mascot from 'components/Main/Mascot/Mascot';
import SchoolRanking from 'components/Main/Rank/SchoolRanking';
import SchoolRanker from 'components/Main/Rank/SchoolRanker';

import Gachon from 'assets/SchoolLogo/Gachon.svg';
import Catholic from 'assets/SchoolLogo/Catholic.svg';
import Kyounggi from 'assets/SchoolLogo/Kyounggi.svg';
import KyungHee from 'assets/SchoolLogo/KyungHee.svg';
import KwangWoon from 'assets/SchoolLogo/KwangWoon.svg';
import Duksung from 'assets/SchoolLogo/Duksung.svg';
import Dongguk from 'assets/SchoolLogo/Dongguk.svg';
import DongDuk from 'assets/SchoolLogo/DongDuk.svg';
import Myongji from 'assets/SchoolLogo/Myongji.svg';
import Pukyong from 'assets/SchoolLogo/Pukyong.svg';
import SangMyeong from 'assets/SchoolLogo/SangMyeong.svg';
import SeoGyeong from 'assets/SchoolLogo/SeoGyeong.svg';
import SeoulWoman from 'assets/SchoolLogo/SeoulWoman.svg';
import SeongShin from 'assets/SchoolLogo/SeongShin.svg';
import SukMyeong from 'assets/SchoolLogo/SukMyeong.svg';
import SongSil from 'assets/SchoolLogo/SongSil.svg';
import Aju from 'assets/SchoolLogo/Aju.svg';
import WoolSan from 'assets/SchoolLogo/WoolSan.svg';
import IHwa from 'assets/SchoolLogo/IHwa.svg';
import Inha from 'assets/SchoolLogo/Inha.svg';
import JoogAng from 'assets/SchoolLogo/JoogAng.svg';
import KoreaEngineering from 'assets/SchoolLogo/KoreaEngineering.svg';
import KoreaUniversityLanguage from 'assets/SchoolLogo/KoreaUniversityLanguage.svg';
import KoreaAerospace from 'assets/SchoolLogo/KoreaAerospace.svg';
import Hansung from 'assets/SchoolLogo/Hansung.svg';
import Hanyang from 'assets/SchoolLogo/Hanyang.svg';
import Hongik from 'assets/SchoolLogo/Hongik.svg';

import SchoolHatImage from 'assets/Main/Ranking/SchoolHat.svg';
import MedalImage from 'assets/Main/Ranking/Medal.svg';

const Main = () => {
  const schoolImages = {
    가천대학교: Gachon,
    가톨릭대학교: Catholic,
    경기대학교: Kyounggi,
    경희대학교: KyungHee,
    광운대학교: KwangWoon,
    덕성여자대학교: Duksung,
    동국대학교: Dongguk,
    동덕여자대학교: DongDuk,
    명지대학교: Myongji,
    부경대학교: Pukyong,
    상명대학교: SangMyeong,
    서경대학교: SeoGyeong,
    서울여자대학교: SeoulWoman,
    성신여자대학교: SeongShin,
    숙명여자대학교: SukMyeong,
    숭실대학교: SongSil,
    아주대학교: Aju,
    울산대학교: WoolSan,
    이화여자대학교: IHwa,
    인하대학교: Inha,
    중앙대학교: JoogAng,
    한국공학대학교: KoreaEngineering,
    한국외국어대학교: KoreaUniversityLanguage,
    한국항공대학교: KoreaAerospace,
    한성대학교: Hansung,
    한양대학교: Hanyang,
    한양대학교에리카: Hanyang,
    홍익대학교: Hongik,
  };

  const FindSchoolImage = (schoolName) => {
    const imageName = schoolImages[schoolName];
    return imageName || null; // 해당 학교 이미지가 없을 경우 null 반환
  };

  // 오늘 날짜
  const time = new Date();
  const year = time.getFullYear();
  const month = ('0' + (time.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 1을 더하고 두 자리로 맞추기
  const day = ('0' + time.getDate()).slice(-2); // 일을 두 자리로 맞추기
  const formattedDate = `${year}-${month}-${day}`;

  // 캘린더 관련
  const [calendarData, setCalendarData] = useState([{}]);

  useEffect(() => {
    const getCalendarData = async (time) => {
      try {
        const res = await axiosInstance.get(
          `/schedules/calendar/web?date=${time}`,
          {
            date: time,
          },
        );
        setCalendarData(res.data.result.schedules);
      } catch (error) {
        console.error();
      }
    };

    const currentTime = new Date();
    const year = currentTime.getFullYear();
    const month = ('0' + (currentTime.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 1을 더하고 두 자리로 맞추기
    const day = ('0' + currentTime.getDate()).slice(-2); // 일을 두 자리로 맞추기
    const formattedDate = `${year}-${month}-${day}`;

    getCalendarData(formattedDate);
  }, []);

  // 학교/지부/연합 일정 관련
  const [campusSchedules, setCampusSchedules] = useState([{}]);
  const [branchSchedules, setBranchSchedules] = useState([{}]);
  const [centerSchedules, setCenterSchedules] = useState([{}]);

  useEffect(() => {
    const getSchedules = async (time) => {
      try {
        const res = await axiosInstance.get(`/schedules?date=${time}`);

        setCampusSchedules(res.data.result.campusSchedules);
        setBranchSchedules(res.data.result.branchSchedules);
        setCenterSchedules(res.data.result.centerSchedules);
      } catch (error) {
        console.error();
      }
    };

    const currentTime = new Date();
    const year = currentTime.getFullYear();
    const month = ('0' + (currentTime.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 1을 더하고 두 자리로 맞추기
    const day = ('0' + currentTime.getDate()).slice(-2); // 일을 두 자리로 맞추기
    const formattedDate = `${year}-${month}-${day}`;

    getSchedules(formattedDate);
  }, []);

  // 핀 설정 공지사항 관련
  const [notificationData, setNotificationData] = useState([{}]);

  useEffect(() => {
    const getNotificationData = async () => {
      try {
        const res = await axiosInstance.get(`/boards/pinned`);

        setNotificationData(res.data.result.pinnedNotices);
      } catch (error) {
        console.error();
      }
    };
    getNotificationData();
  }, []);

  // TodoList 관련
  const [todoListsData, setTodoListsData] = useState([{}]);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const res = await axiosInstance.get(
          `/to-do-lists?date=${formattedDate}`,
        );

        setTodoListsData(res.data.result.todoLists);
      } catch (error) {
        console.error();
      }
    };
    getTodoList();
  }, []);

  // Today-I-Learned 관련
  const [tilData, setTilData] = useState([{}]);

  useEffect(() => {
    const getTil = async () => {
      try {
        const res = await axiosInstance.get(`/today-i-learned/web`, {
          params: {
            date: formattedDate,
          },
        });
        setTilData(res.data.result.todayILearnedInfos);
      } catch (error) {
        console.error();
      }
    };
    getTil();
  }, []);

  // GitHub 관련

  //const [githubImage, setGithubImage] = useState('');
  const [githubID, setGithubID] = useState('');

  const handleGithubInput = (e) => {
    setGithubID(e.target.value);
  };

  // useEffect(() => {
  //   const getGithubImage = async () => {
  //     try {
  //       const res = await axiosInstance.get(`/members/github`);

  //       setGithubImage(res.data.result.githubImage);
  //     } catch (error) {
  //       console.error();
  //     }
  //   };
  //   getGithubImage();
  // }, []);

  // 마스코트 관련
  const [mascotData, setMascotData] = useState({});

  useEffect(() => {
    const getMascot = async () => {
      try {
        const res = await axiosInstance.get(`/universities/mascot`);

        setMascotData(res.data.result);
      } catch (error) {
        console.error();
      }
    };
    getMascot();
  }, []);

  // 나의 기여도 관련
  const [myContribution, setMyContribution] = useState({});

  useEffect(() => {
    const getMyContribution = async () => {
      try {
        const res = await axiosInstance.get(`/members/rank`);

        setMyContribution(res.data.result);
      } catch (error) {
        console.error();
      }
    };
    getMyContribution();
  }, []);

  // 내 학교 관련
  const [myUniversityData, setMyUniversityData] = useState({});

  useEffect(() => {
    const getMyUniversity = async () => {
      try {
        const res = await axiosInstance.get(`/universities/details`);

        setMyUniversityData(res.data.result);
      } catch (error) {
        console.error();
      }
    };
    getMyUniversity();
  }, []);

  // 학교 내 기여도 관련
  const [inUniversityRankData, setInUniversityRankData] = useState([{}]);

  // 학교 내 순위
  useEffect(() => {
    const getInSchoolRank = async () => {
      try {
        const res = await axiosInstance.get(`/universities/members`);

        setInUniversityRankData(res.data.result.joinContributionRanks);
      } catch (error) {
        console.error();
      }
    };
    getInSchoolRank();
  }, []);

  // 학교 별 순위 관련
  const [universityRank, setUniversityRank] = useState([{}]);

  useEffect(() => {
    const getSchoolRank = async () => {
      try {
        const res = await axiosInstance.get(`/universities/ranks`);

        setUniversityRank(res.data.result.joinUniversityRanks);
      } catch (error) {
        console.error();
      }
    };
    getSchoolRank();
  }, []);

  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <styles.Background>
        <styles.MainWrapper>
          {/* 홈화면 캘린더 */}
          <MainDescription
            title="이번 달 일정 한눈에 보기"
            subtitle="UMC 일정을 확인해보세요!"
          />
          <styles.Wrapper>
            <styles.LeftWrapper>
              <MyCalendar calendarData={calendarData} />
            </styles.LeftWrapper>

            <styles.ScheduleContainer>
              <ScheduleItem
                campusSchedules={campusSchedules}
                branchSchedules={branchSchedules}
                centerSchedules={centerSchedules}
              />
            </styles.ScheduleContainer>
          </styles.Wrapper>

          {/* 홈화면 공지사항 */}
          <MainDescription
            title="공지사항"
            subtitle="새롭게 업데이트된 공지사항을 확인하세요!"
          />
          <styles.Wrapper>
            <Notification notificationData={notificationData} />
          </styles.Wrapper>

          <MainDescription
            title="오늘 나의 기록"
            subtitle="오늘 내가 할 일과 배운 것들을 기록해보세요!"
          />
          <styles.Wrapper>
            <InProgressTodoList
              todoListsData={todoListsData}
              myContribution={myContribution}
            />

            <CompleteTodoList
              todoListsData={todoListsData}
              myContribution={myContribution}
            />
          </styles.Wrapper>

          <styles.Wrapper>
            <styles.TILGithubWrapper>
              <TodayILearned tilData={tilData} />
            </styles.TILGithubWrapper>

            <styles.GithubWrapper>
              <div style={{ marginBottom: '15px' }}> Git-hub </div>
              <styles.IDinput
                type="text"
                value={githubID}
                onChange={handleGithubInput}
                placeholder="GitHub 아이디를 입력해주세요"
              />
              <Github githubID={githubID} />
            </styles.GithubWrapper>
          </styles.Wrapper>

          <MainDescription
            title="우리 학교 마스코트"
            subtitle="말랑말랑말랑이!"
          />
          <styles.Wrapper>
            <Mascot mascotData={mascotData} />
            <styles.RankingWrapper>
              <styles.SchoolRank>
                <img src={SchoolHatImage} />

                <styles.SchoolWrapper
                  style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
                >
                  <img
                    src={FindSchoolImage(myUniversityData.universityName)}
                    style={{ width: '90px', height: '90px' }}
                  />
                  <div>
                    <span style={{ fontWeight: 'bold' }}>
                      {myUniversityData.universityName}
                    </span>
                    <span>는</span>
                  </div>

                  <div>
                    <span style={{ fontWeight: 'bold' }}>
                      {myUniversityData.universityPoint}
                    </span>
                    <span> 포인트로</span>
                  </div>

                  <div>
                    <span>현재 </span>
                    <span style={{ fontWeight: 'bold' }}>
                      {myUniversityData.universityRank}
                    </span>
                    <span>등이에요! 👏🏻</span>
                  </div>
                </styles.SchoolWrapper>

                <SchoolRanking universityRank={universityRank} />
              </styles.SchoolRank>
              <styles.SchoolRank>
                <img src={MedalImage} />
                <styles.SchoolWrapper
                  style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
                >
                  <img
                    src={myContribution.profileImage}
                    style={{ width: '90px', height: '90px' }}
                  />

                  <div>
                    <span style={{ fontWeight: 'bold' }}>
                      {myContribution.nickname}
                    </span>
                    <span>님은</span>
                  </div>

                  <div>
                    <span style={{ fontWeight: 'bold' }}>
                      {myContribution.contributionPoint}
                    </span>
                    <span> 포인트로</span>
                  </div>

                  <div>
                    <span>현재 </span>
                    <span style={{ fontWeight: 'bold' }}>
                      {myContribution.contributionRank}
                    </span>
                    <span>등이에요! 👏🏻</span>
                  </div>
                </styles.SchoolWrapper>
                <SchoolRanker inUniversityRankData={inUniversityRankData} />
              </styles.SchoolRank>
            </styles.RankingWrapper>
          </styles.Wrapper>

          <styles.Wrapper>
            <div>친구</div>
          </styles.Wrapper>
        </styles.MainWrapper>
      </styles.Background>
    </div>
  );
};

export default Main;
