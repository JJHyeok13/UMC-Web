import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HISTORY_DATAS } from './HistoryData';

import AOSIcon from 'assets/History/AOS.svg';
import iOSIcon from 'assets/History/iOS.svg';
import WebIcon from 'assets/History/Web.svg';

import LeftArrowIcon from 'assets/main/LeftArrow.svg';
import RightArrowIcon from 'assets/main/RightArrow.svg';
import HistorySearchBar from './HistorySearchBar';
import SeeMoreImage from 'assets/History/SeeMore.svg';
import axiosInstance from 'apis/setting';

const TotalWrapper = styled.div`
  border-radius: 15px;
  background-color: ${(props) => props.backgroundColor};
`;

// 히스토리 리스트 컴포넌트 전체 컨테이너 스타일링
const HistoryListContainer = styled.div`
  /* 레이아웃 정렬 - 사진 아이템 레이아웃 정렬을 2차원적으로 구현하기 위해 Grid 사용 */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 34px 32px;
`;

// 히스토리 아이템 컴포넌트 스타일링
const HistoryItem = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* 아이콘과 더보기 사이 공간 분배 */
  height: 100%; /* 아이콘과 더보기가 있는 영역이 높이 100% 차지하도록 설정 */
`;

const SemesterNTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TypeIconTextContainer = styled.div`
  /* 세로 중앙 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 히스토리 아이템 이미지 스타일링
const HistoryItemIcon = styled.img`
  /* 히스토리 아이템 아이콘 */
  width: 150px;
  height: 157px;
`;

// 히스토리 아이템 정보 감싸는 레이아웃 스타일링
const HistoryItemInfoWrapper = styled.div`
  /* 레이아웃 정렬 */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

// 히스토리 아이템 제목 스타일링
const HistoryItemInfoTitle = styled.div`
  /* 폰트 스타일링 */
  color: white;
  font-size: 30px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

const HistoryItemHashtag = styled.span`
  /* 폰트 스타일링 */
  color: white;
  font-size: 14px; /* hashtag를 14px로 설정 */
  font-family: 'Pretendard';
  font-weight: 400;
`;

// 히스토리 아이템 작성자 & 작성일 레이아웃 스타일링
const HistoryItemInfoAuthorDateLayout = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* 마우스 커서 스타일링 */
  cursor: default;

  /* 폰트 스타일링 */
  font-size: 12px;
  font-family: 'Pretendard';
  font-weight: 400;
  word-wrap: break-word;
`;

// 히스토리 아이템 페이지네이션 스타일링
const HistoryItemPaginateStyle = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 58px;
  gap: 0 24px;

  /* 폰트 스타일링 */
  font-size: 12px;
  font-family: 'Pretendard';
  word-wrap: break-word;
  cursor: pointer;
`;

// 히스토리 아이템 페이지네이션 페이지 번호 스타일링
const PageNumber = styled.div`
  /* 활성화(클릭) 시, 스타일링 변화 */
  color: ${(props) => (props.isActive ? '#000C76' : '#4B4B4B')};
  font-weight: ${(props) => (props.isActive ? '600' : '400')};
  padding: ${(props) => (props.isActive ? '4px 8px' : '0')};
  background: ${(props) => (props.isActive ? 'white' : 'none')};
  border-radius: ${(props) => (props.isActive ? '6px' : '0')};

  /* 애니메이션 효과 */
  transition: all 0.3s ease-in-out;
`;

// 히스토리 아이템 페이지네이션 화살표 스타일링
const ArrowButton = styled.img`
  /* 이전 및 다음 페이지 없을 경우, 화살표 숨김 애니메이션 효과 */
  display: ${(props) => (props.isHidden ? 'none' : 'block')};
`;

// 히스토리 아이템 검색바 레이아웃 스타일링
const HistorySearchBarLayout = styled(HistorySearchBar)`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SeeMoreIcon = styled.img`
  margin-left: auto;
`;

// 히스토리 아이템 컴포넌트
// item: 히스토리 아이템 데이터
// index: 히스토리 아이템 데이터 인덱스
const HistoryItemComponent = ({ item, index }) => {
  const [historyData, setHistoryData] = useState([]);

  const renderTypeIconAndText = (type) => {
    switch (type) {
      case 'IOS':
        return (
          <>
            <img src={iOSIcon} alt="iOS Icon" />
            iOS
          </>
        );
      case 'AOS':
        return (
          <>
            <img src={AOSIcon} alt="AOS Icon" />
            AOS
          </>
        );
      case 'Web':
        return (
          <>
            <img src={WebIcon} alt="Web Icon" />
            Web
          </>
        );
      default:
        return '';
    }
  };

  const getBackgroundColor = (semester) => {
    switch (semester) {
      case '1':
        return '#B2B7C3';
      case '2':
        return '#8993B3';
      case '3':
        return '#6E758B';
      case '4':
        return '#5A6175';
      case '5':
        return '#3E4251';
      case '6':
        return '#2B2E38';
      default:
        return '#ffffff';
    }
  };

  useEffect(() => {
    const getHistoryData = async () => {
      try {
        const res = await axiosInstance.get('/projects');

        const histories = res.data.result.projects;

        setHistoryData(
          histories.map((history) => ({
            projectId: history.projectId,
            name: history.name,
            description: history.description,
            logoImage: history.logoImage,
            semester: history.semester,
            types: history.types,
            tags: history.tags,
          })),
        );
      } catch (error) {
        console.error();
      }
    };
    getHistoryData();
  });

  if (!historyData || historyData.length === 0) {
    return null;
  }

  return (
    <>
      <TotalWrapper backgroundColor={getBackgroundColor(item.semester)}>
        <HistoryItem key={index}>
          <SemesterNTypeWrapper>
            <div> {item.semester} </div>
            <HistoryItemInfoAuthorDateLayout>
              {item.type.map((type, index) => (
                <React.Fragment key={index}>
                  <TypeIconTextContainer>
                    {renderTypeIconAndText(type)}
                  </TypeIconTextContainer>
                  {index !== item.type.length - 1 && ' '}
                </React.Fragment>
              ))}
            </HistoryItemInfoAuthorDateLayout>
          </SemesterNTypeWrapper>
          <HistoryItemInfoWrapper>
            {/* 아이디어 집합소와 같이 여러 줄을 한 줄로 표시하는 경우 */}
            <HistoryItemInfoTitle>
              {item.projectName.split(' ').map((word, index) => (
                <React.Fragment key={index}>
                  {word}
                  <br />
                </React.Fragment>
              ))}
              <div>
                {item.hashtag.map((tag, index) => (
                  <HistoryItemHashtag key={index}>#{tag} </HistoryItemHashtag>
                ))}
              </div>
            </HistoryItemInfoTitle>

            {/* 아이콘 이미지 등을 추가 */}
          </HistoryItemInfoWrapper>
          <HistoryItemIcon src={item.logoImage} />
          <SeeMoreIcon src={SeeMoreImage} />
        </HistoryItem>
      </TotalWrapper>
    </>
  );
};

// 히스토리 아이템 컴포넌트 props 검사
HistoryItemComponent.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    projectName: PropTypes.string.isRequired,
    logoImage: PropTypes.string.isRequired,
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
    hashtag: PropTypes.arrayOf(PropTypes.string).isRequired,
    semester: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

// 히스토리 리스트 컴포넌트
const HistoryList = () => {
  // 현재 페이지 상태 관리
  const [currentPage, setCurrentPage] = useState(0);
  // 검색어 상태 관리
  const [searchTerm, setSearchTerm] = useState('');

  // 페이지네이션 클릭 이벤트 핸들러
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 검색 이벤트 핸들러
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(0);
  };

  // 페이지네이션 최대 상수
  const PER_PAGE = 16;

  // 페이지네이션 상수에 따른 히스토리 아이템 데이터 필터링
  const offset = currentPage * PER_PAGE;

  // 검색어 상태에 따른 히스토리 아이템 데이터 필터링
  const filteredData = HISTORY_DATAS.filter((item) =>
    // 검색어가 없을 경우, 전체 히스토리 아이템 데이터 출력
    item.projectName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // 페이지네이션 상수에 따른 히스토리 아이템 데이터 페이지네이션
  const pageCount = Math.ceil(filteredData.length / PER_PAGE);
  const pages = new Array(pageCount).fill(null).map((_, i) => i);

  return (
    <>
      <HistoryListContainer>
        {filteredData.slice(offset, offset + PER_PAGE).map((item, index) => (
          <HistoryItemComponent key={index} item={item} index={index} />
        ))}
      </HistoryListContainer>

      <HistoryItemPaginateStyle>
        <ArrowButton
          src={LeftArrowIcon}
          alt="previous"
          isHidden={currentPage === 0}
          onClick={() => handlePageClick(currentPage - 1)}
        />
        {pages.map((pageNumber) => (
          <PageNumber
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            isActive={pageNumber === currentPage}
          >
            {pageNumber + 1}
          </PageNumber>
        ))}
        <ArrowButton
          src={RightArrowIcon}
          alt="next"
          isHidden={currentPage === pageCount - 1}
          onClick={() => handlePageClick(currentPage + 1)}
        />
      </HistoryItemPaginateStyle>
      
      <HistorySearchBarLayout onSearch={handleSearch} />
    </>
  );
};

export default HistoryList;