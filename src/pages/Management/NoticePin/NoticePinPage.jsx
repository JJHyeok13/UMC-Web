import React, { useState, useEffect } from 'react';
import axiosInstance from 'apis/setting';

import ManagementTitle from 'components/Management/ManagementTitle';
import ManagementType from 'components/Management/ManagementType';
import NoticeList from 'components/Management/NoticePin/NoticeList.jsx';

import styles from './styles';

const NoticePinPage = () => {
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
            fixed: !isPinned,
          },
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

      <NoticeList
        noticeData={noticeData}
        page={page}
        pageNumbers={pageNumbers}
        handlePageChange={handlePageChange}
        handleKeyword={handleKeyword}
        SetPinned={SetPinned}
      />
    </styles.AdminManagementWrapper>
  );
};

export default NoticePinPage;
