// 공지사항 게시판의 고정된 글 목록을 보여주는 컴포넌트
import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Checked from 'assets/management/checked.svg';
import pin from 'assets/board/list/Pinned.svg';

// 고정된 글 목록을 감싸는 컴포넌트
const StyledTableRow = styled.tr`
  border-bottom: 1px solid #d8d8ff;

  /* 마지막 행의 border-bottom 제거 */
  &:last-child {
    border: none;
  }

  /* 마지막 행의 border-bottom 제거 */
  &:last-of-type {
    border-top: none;
  }
`;

// 고정된 글 목록의 제목 컬럼 스타일링
const StyledTitleColumn = styled.td`
  width: 20rem;
  padding: 10px 40px 10px 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

// 고정된 글 목록의 제목 컬럼 스타일링
const StyledTableCell = styled.td`
  max-width: 10rem;
  padding: 10px 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

// 고정된 글 목록 내용 펼치기/접기 스타일링
const StyledOpenToggle = styled.td`
  padding: 10px 10px;
`;

// 고정된 글 목록의 내용 컬럼 스타일링
const StyledCollapseCell = styled.td`
  border: none;
  padding: 0;
`;

// 고정된 글 목록의 내용 컬럼 스타일링
const StyledCollapseContent = styled.div`
  border: none;
  margin: 0;
  transition: max-height 0.3s ease;
  overflow: hidden;
  max-height: ${(props) => (props.open ? '500px' : '0')};
`;

// 고정된 글 목록의 체크박스 스타일링
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #bcbcbc;
  padding: 2px 4px;
  position: relative;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  /* 체크박스의 호버 시 스타일링 */
  &:hover {
    border: 1px solid #8784ff;
  }

  /* 체크박스의 활성화(클릭) 시 스타일링 */
  &:active {
    transform: scale(0.9);
  }

  /* 체크박스의 체크 시 스타일링 */
  &:checked {
    border: 1px solid #8784ff;
  }

  /* 체크박스의 체크 시 체크 아이콘 스타일링 */
  &:checked::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: url(${Checked}) no-repeat center center;
  }
`;

// 고정된 글 목록의 체크박스 컬럼 스타일링
const StyledTableCheckBoxCell = styled.td`
  max-width: 10rem;
  padding-left: 10px;
  padding-right: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

// 고정된 글 목록의 체크박스 컬럼 스타일링
const PinnedTable = ({ row }) => {
  // 펼치기/접기 상태를 감지하여 상태를 업데이트
  const [open, setOpen] = useState(false);
  // 체크박스의 체크 여부를 감지하여 상태를 업데이트
  const [ispinned, setIspinned] = useState(row.ispinned);
  // 현재 경로를 가져옴
  const location = useLocation();

  // 게시글이 고정되었는지 여부를 감지하여 상태를 업데이트
  useEffect(() => {
    setIspinned(row.ispinned);
  }, [row.ispinned]);

  // 체크박스의 체크 여부를 감지하여 상태를 업데이트
  const handleCheckboxChange = (event) => {
    setIspinned(event.target.checked);
  };

  // 고정된 글이 아니면 null 반환
  if (!row.ispinned) {
    return null;
  }

  return (
    <Fragment>
      <StyledTableRow>
        <StyledTableCheckBoxCell>
          {location.pathname.startsWith('/board') ? (
            <img src={pin} alt="pinned" />
          ) : (
            <Checkbox checked={ispinned} onChange={handleCheckboxChange} />
          )}
        </StyledTableCheckBoxCell>
        <StyledTitleColumn style={{ textAlign: 'left' }}>
          {row.title}
        </StyledTitleColumn>
        <StyledTableCell>{row.author}</StyledTableCell>
        <StyledTableCell>{row.date}</StyledTableCell>
        <StyledTableCell>{row.views}</StyledTableCell>
        <StyledOpenToggle>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledOpenToggle>
      </StyledTableRow>
      <StyledTableRow>
        <StyledCollapseCell colSpan={5}>
          <StyledCollapseContent open={open}>
            {row.content}
          </StyledCollapseContent>
        </StyledCollapseCell>
      </StyledTableRow>
    </Fragment>
  );
};

// 고정된 글 목록의 props 타입 정의
PinnedTable.propTypes = {
  row: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    views: PropTypes.number,
    content: PropTypes.string,
    ispinned: PropTypes.bool,
  }).isRequired,
};

export default PinnedTable;