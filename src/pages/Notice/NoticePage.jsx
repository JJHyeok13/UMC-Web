import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from 'apis/setting';

import { getBoardData } from 'apis/Board/Board/board';

import NoticeTitle from 'components/Notice/NoticeTitle';
import NoticeLink from 'components/Notice/NoticeLink';
import NoticeList from 'components/Notice/NoticeList';

import styles from './styles';

const NoticePage = () => {
  const location = useLocation();

  const urlParts = location.pathname.split('/');

  const [host, setHost] = useState(urlParts[2].toUpperCase());
  const board = 'NOTICE';

  // 페이지 관련
  useEffect(() => {
    setHost(urlParts[2].toUpperCase());
  }, [location]);

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = (newPage) => {
    setPage(newPage - 1);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    getBoardData(host, board, page).then((data) => {
      setBoardData(data.boardPageElements);
      setTotalPages(data.totalPages);
    });
  }, [host, board, page]);

  // 검색 기능
  const [keyword, setKeyword] = useState('');

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const searchBoard = async () => {
    try {
      const res = await axiosInstance.get(`/boards/search`, {
        params: {
          host: host,
          keyword: keyword,
          page: page,
        },
      });
      setBoardData(res.data.result.boardSearchPageElements);
      setTotalPages(res.data.result.totalPages);
    } catch (error) {
      console.error();
    }
  };

  // 고정된 공지사항
  const [pinnedData, setPinnedData] = useState([]);

  useEffect(() => {
    const getPinnedData = async () => {
      try {
        const res = await axiosInstance.get(`/boards/pinned`);

        setPinnedData(res.data.result.pinnedNotices);
      } catch (error) {
        console.log(error);
      }
    };
    getPinnedData();
  }, []);

  return (
    <styles.NoticePageContainer>
      <NoticeTitle />

      <NoticeLink />

      <NoticeList
        host={host}
        board={board}
        boardData={boardData}
        page={page}
        pageNumbers={pageNumbers}
        handlePageChange={handlePageChange}
        keyword={keyword}
        handleKeyword={handleKeyword}
        searchBoard={searchBoard}
        pinnedData={pinnedData}
      />
    </styles.NoticePageContainer>
  );
};

export default NoticePage;
