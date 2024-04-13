import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from 'apis/setting';

import { getBoardData } from 'apis/Board/Board/board';

import BoardTitle from 'components/Board/BoardTitle/BoardTitle';
import BoardBox from 'components/Board/BoardBox/BoardBox';
import BoardList from 'components/Board/BoardList/BoardList';

import styles from './styles';

const BoardPage = () => {
  // 현재 주소를 기준으로 HOST 값과 BOARD 값 지정
  const location = useLocation();
  const urlParts = location.pathname.split('/');
  const [host, setHost] = useState(urlParts[2].toUpperCase());
  const [board, setBoard] = useState(urlParts[3].toUpperCase());

  useEffect(() => {
    setHost(urlParts[2].toUpperCase());
    setBoard(urlParts[3].toUpperCase());
  }, [location]);

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

  const searchBoard = async (keyword, page) => {
    try {
      const res = await axiosInstance.get(`/boards/search`, {
        params: {
          keyword: keyword,
          page: page,
        },
      });
      setBoardData(res.data.result.boardSearchPageElements);
      setTotalPages(res.data.result.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <styles.BoardPageContainer>
      <BoardTitle />

      <styles.LowerContainer>
        <BoardBox />

        <BoardList
          host={host}
          board={board}
          boardData={boardData}
          page={page}
          pageNumbers={pageNumbers}
          handlePageChange={handlePageChange}
          keyword={keyword}
          handleKeyword={handleKeyword}
          searchBoard={searchBoard}
        />
      </styles.LowerContainer>
    </styles.BoardPageContainer>
  );
};

export default BoardPage;
