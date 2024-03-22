import React, { useEffect, useState } from 'react';
import axiosInstance from 'apis/setting';

import styles from './styles';

import TypeComponent from 'components/Management/ManagementComponent';
import ManagementType from 'components/Management/ManagementType';
import ManagementTitle from 'components/Management/ManagementTitle';

const Management = () => {
  const [noticeData, setNoticeData] = useState([]);

  // 페이지 관련
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = (newPage) => {
    setPage(newPage - 1);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // 검색 기능
  const [keyword, setKeyword] = useState('');

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

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

  const host = 'ALL';

  useEffect(() => {
    const getNoticeData = async () => {
      try {
        const res = await axiosInstance.get(`/staff/boards/notices`, {
          params: {
            host: host,
            keyword: keyword,
            page: page,
          },
        });
        setNoticeData(res.data.result.noticePageElements);
        setTotalPages(res.data.result.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    getNoticeData();
  }, [page]);

  const SetPinned = async (boardId, isPinned) => {
    try {
      const res = await axiosInstance.patch(
        `/staff/boards/notices/${boardId}/pin`,
        {
          params: {
            isPinned: !isPinned,
          },
        },
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <styles.AdminManagementWrapper>
        <ManagementTitle />

        <ManagementType buttonStates={buttonStates} handleClick={handleClick} />

        <TypeComponent
          noticeData={noticeData}
          page={page}
          pageNumbers={pageNumbers}
          handlePageChange={handlePageChange}
          handleKeyword={handleKeyword}
          buttonStates={buttonStates}
          SetPinned={SetPinned}
        />
      </styles.AdminManagementWrapper>
    </div>
  );
};

export default Management;
