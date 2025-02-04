import React, { useEffect, useState } from 'react';
import axiosInstance from 'apis/setting';

import styles from './styles';

import TypeComponent from 'components/Management/ManagementComponent';
import ManagementType from 'components/Management/ManagementType';
import ManagementTitle from 'components/Management/ManagementTitle';

const Management = () => {
  // const [noticeData, setNoticeData] = useState([]);

  // // 페이지 관련
  // const [page, setPage] = useState(0);
  // const [totalPages, setTotalPages] = useState(0);

  // const handlePageChange = (newPage) => {
  //   setPage(newPage - 1);
  // };

  // const pageNumbers = [];
  // for (let i = 1; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  // }

  // // 검색 기능
  // const [keyword, setKeyword] = useState('');

  // const handleKeyword = (e) => {
  //   setKeyword(e.target.value);
  // };

  const [buttonStates, setButtonStates] = useState({
    setnoticeButton: true,
    calenderButton: false,
    challengerButton: false,
  });

  const handleClick = (buttonName) => {
    setButtonStates((prevStates) => ({
      setnoticeButton:
        buttonName === 'setnoticeButton' ? !prevStates.setnoticeButton : false,
      calenderButton:
        buttonName === 'calenderButton' ? !prevStates.calenderButton : false,
      challengerButton:
        buttonName === 'challengerButton'
          ? !prevStates.challengerButton
          : false,
    }));
  };

  // const [challengerData, setChanllengerData] = useState([]);

  // const host = 'ALL';

  // useEffect(() => {
  //   const getNoticeData = async () => {
  //     try {
  //       const res = await axiosInstance.get(`/staff/boards/notices`, {
  //         params: {
  //           host: host,
  //           keyword: keyword,
  //           page: page,
  //         },
  //       });
  //       setNoticeData(res.data.result.noticePageElements);
  //       setTotalPages(res.data.result.totalPages);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getNoticeData();
  // }, [page]);

  // const SetPinned = async (boardId, isPinned) => {
  //   try {
  //     const res = await axiosInstance.patch(
  //       `/staff/boards/notices/${boardId}/pin`,
  //       {
  //         params: {
  //           fixed: !isPinned,
  //         },
  //       },
  //     );
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const searchChallenger = async () => {
  //   try {
  //     const res = await axiosInstance.get(`/staff/members/search`, {
  //       params: {
  //         keyword: keyword,
  //       },
  //     });
  //     setChanllengerData(res.data.result.members);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <styles.AdminManagementWrapper>
      <ManagementTitle />

      <ManagementType buttonStates={buttonStates} handleClick={handleClick} />

      <TypeComponent
        noticeData={noticeData}
        page={page}
        pageNumbers={pageNumbers}
        handlePageChange={handlePageChange}
        keyword={keyword}
        handleKeyword={handleKeyword}
        challengerData={challengerData}
        buttonStates={buttonStates}
        SetPinned={SetPinned}
        searchChallenger={searchChallenger}
      />
    </styles.AdminManagementWrapper>
  );
};

export default Management;
