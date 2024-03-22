// // 운영자 페이지 공지사항 테이블 컴포넌트
// import React, { useState, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import PinnedTable from './PinnedTable';
// import SearchBar from 'components/Board/BoardSearch';
// import AdminCompletionButton from 'components/Management/NoticePin/AdminCompletionButton';

// import Row from './Row';

// import LeftArrowIcon from 'assets/Main/LeftArrow.svg';
// import RightArrowIcon from 'assets/Main/RightArrow.svg';
// import Checked from 'assets/Management/Checked.svg';

// // 운영자 관리 게시글 테이블 컴포넌트 스타일링
// const StyledTable = styled.table`
//   /* 레이아웃 스타일링 */
//   width: 100%;

//   /* 테두리 스타일링 */
//   border-collapse: collapse;

//   /* 폰트 스타일링 */
//   text-align: center;
// `;

// // 운영자 관리 게시글 테이블 헤더 스타일링
// const StyledTableHeader = styled.thead`
//   /* 테두리 스타일링 */
//   border-bottom: none;
//   padding: 0;

//   /* 폰트 스타일링 */
//   font-weight: 600;
// `;

// // 운영자 관리 게시글 테이블 행 스타일링
// const StyledTableRow = styled.tr`
//   /* 테두리 스타일링 */
//   border-bottom: 1px solid #d8d8ff;

//   /* 마지막 행 선택하는 CSS 선택자 - 마지막 행의 경계선 제거 */
//   &:last-child {
//     border: none;
//   }

//   /* 마지막 요소 선택하는 CSS 선택자 - 같은 유형의 마지막 요소의 상단 경계선 제거 */
//   &:last-of-type {
//     border-top: none;
//   }
// `;

// // 운영자 관리 게시글 테이블 셀(글 제목) 스타일링
// const StyledTitleColumn = styled.td`
//   /* 레이아웃 스타일링 */
//   width: 20rem;
//   padding: 10px 40px 10px 4px;

//   /* 텍스트 스타일링 */
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
// `;

// // 운영자 관리 게시글 테이블 셀(글 제목 외) 스타일링
// const StyledTableCell = styled.td`
//   /* 레이아웃 스타일링 */
//   max-width: 10rem;
//   padding: 10px 40px;

//   /* 텍스트 스타일링 */
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
// `;

// // 운영자 관리 게시글 테이블 펼치기/접기 버튼 스타일링
// const StyledOpenToggle = styled.td`
//   padding: 10px 10px;
// `;

// // 운영자 관리 게시글 테이블 펼치기/접기 셀 스타일링
// const StyledCollapseCell = styled.td`
//   border: none;
//   padding: 0;
// `;

// // 운영자 관리 게시글 테이블 펼치기/접기 내용 스타일링
// const StyledCollapseContent = styled.div`
//   /* 레이아웃 스타일링 */
//   border: none;
//   margin: 0;

//   /* 펼치기/접기 애니메이션 */
//   transition: max-height 0.3s ease;

//   /* 텍스트 스타일링 */
//   overflow: hidden;

//   /* 게시글 펼치기/접기 상태에 따라 max-height 속성 변경 */
//   max-height: ${(props) => (props.open ? '500px' : '0')};
// `;

// // 운영자 관리 게시글 테이블 펼치기/접기 버튼 스타일링
// const AdminCompletionButtonLayout = styled.div`
//   /* 레이아웃 스타일링 */
//   display: flex;
//   justify-content: end;
//   padding-top: 24px;
//   padding-bottom: 80px;
// `;

// // 운영자 관리 게시글 테이블 페이지네이션 스타일링
// const BoardPaginateStyle = styled.div`
//   /* 레이아웃 정렬 */
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding-top: 58px;
//   gap: 0 24px;

//   /* 폰트 스타일링 */
//   font-size: 12px;
//   font-family: 'Pretendard';
//   word-wrap: break-word;
//   cursor: pointer;
// `;

// // 운영자 관리 게시글 테이블 페이지네이션 페이지 번호 스타일링
// const PageNumber = styled.div`
//   /* 활성화(클릭) 시, 스타일링 변화 */
//   color: ${(props) => (props.isActive ? '#000C76' : '#4B4B4B')};
//   font-weight: ${(props) => (props.isActive ? '600' : '400')};
//   padding: ${(props) => (props.isActive ? '4px 8px' : '0')};
//   background: ${(props) => (props.isActive ? 'white' : 'none')};
//   border-radius: ${(props) => (props.isActive ? '6px' : '0')};

//   /* 애니메이션 효과 */
//   transition: all 0.3s ease-in-out;

//   /* 호버 시, 크기 애니메이션 변화 */
//   &:hover {
//     transform: ${(props) => (props.isActive ? 'scale(1.1)' : 'none')};
//   }
// `;

// // 운영자 관리 게시글 테이블 페이지네이션 화살표 스타일링
// const ArrowButton = styled.img`
//   /* 이전 및 다음 페이지 없을 경우, 화살표 숨김 애니메이션 효과 */
//   display: ${(props) => (props.isHidden ? 'none' : 'block')};
// `;

// // 검색 바 레이아웃 스타일링
// const BoardSearchLayout = styled.div`
//   /* 레이아웃 스타일링 */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// // 체크박스 스타일링
// const Checkbox = styled.input.attrs({ type: 'checkbox' })`
//   /* 레이아웃 스타일링 */
//   width: 18px;
//   height: 18px;
//   border-radius: 50%;
//   border: 1px solid #bcbcbc;
//   padding: 2px 4px;
//   position: relative;

//   /* 웹킷 기반의 브라우저에서 선택한 요소의 기본 스타일을 제거 */
//   -webkit-appearance: none;

//   /* 체크박스 선택 시 포커스 표시 제거 */
//   outline: none;
//   cursor: pointer;

//   /* 체크박스 효과 */
//   transition: border 0.3s ease-in-out;

//   /* 체크박스 호버 시 효과 */
//   &:hover {
//     border: 1px solid #8784ff;
//   }

//   /* 체크박스 활성화(클릭) 시 효과 */
//   &.active {
//     transform: scale(0.9);
//   }

//   /* 체크박스 체크 시 효과 */
//   &:checked {
//     border: 1px solid #8784ff;
//   }

//   /* 체크박스 체크 시 체크 표시 */
//   &:checked::after {
//     content: '';
//     display: block;
//     width: 100%;
//     height: 100%;
//     background: url(${Checked}) no-repeat center center;
//   }
// `;

// // 체크박스 셀 스타일링
// const StyledTableCheckBoxCell = styled.td`
//   /* 레이아웃 스타일링 */
//   max-width: 10rem;
//   padding-left: 10px;
//   padding-right: 8px;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
// `;

// // 한 페이지에 표시할 게시글 수
// const ROWS_PER_PAGE = 10;

// // 운영자 관리 게시글 테이블의 행 컴포넌트
// const NewAdminTable = () => {
//   return (
//     <>
//       <StyledTable>
//         <StyledTableHeader>
//           <StyledTableRow style={{ borderBottom: 0, paddingBottom: 0 }}>
//             <StyledTableCheckBoxCell />
//             <StyledTitleColumn>제목</StyledTitleColumn>
//             <StyledTableCell>작성자</StyledTableCell>
//             <StyledTableCell>작성일</StyledTableCell>
//             <StyledTableCell>조회수</StyledTableCell>
//             <StyledOpenToggle />
//           </StyledTableRow>
//         </StyledTableHeader>
//         <tbody>
//           {
//             // 고정된 게시글 테이블
//             pinnedItems.map((item) => {
//               const row = ROWS_DATA.find((row) => row.title === item);
//               return row ? <PinnedTable key={row.title} row={row} /> : null;
//             })
//           }
//           {
//             // 페이지네이션 상수에 따른 갤러리 아이템 데이터 출력
//             filteredRows.slice(offset, offset + ROWS_PER_PAGE).map((row) => (
//               <Row key={row.title} row={row} />
//             ))
//           }
//         </tbody>
//       </StyledTable>
//       <AdminCompletionButtonLayout>
//         <AdminCompletionButton onClick={handleCompletion} />
//       </AdminCompletionButtonLayout>
//       <BoardPaginateStyle>
//         <ArrowButton
//           src={LeftArrowIcon}
//           alt="previous"
//           isHidden={currentPage === 0}
//           onClick={() => handlePageClick(currentPage - 1)}
//         />
//         {
//           // 페이지네이션 상수에 따른 페이지 번호 출력
//           pages.map((pageNumber) => (
//             <PageNumber
//               key={pageNumber}
//               onClick={() => handlePageClick(pageNumber)}
//               isActive={pageNumber === currentPage}
//             >
//               {pageNumber + 1}
//             </PageNumber>
//           ))
//         }
//         <ArrowButton
//           src={RightArrowIcon}
//           alt="next"
//           isHidden={currentPage === pageCount - 1}
//           onClick={() => handlePageClick(currentPage + 1)}
//         />
//       </BoardPaginateStyle>
//       <BoardSearchLayout>
//         <SearchBar onSearch={handleSearch} />
//       </BoardSearchLayout>
//     </>
//   );
// };

// export default NewAdminTable;
