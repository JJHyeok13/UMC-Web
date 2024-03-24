import axiosInstance from 'apis/setting';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import {
  renderTypeIconAndText,
  getBackgroundColor,
  getNumber,
} from './function';

import NoIconImage from 'assets/NoIcon.png';

import SeeMoreImage from 'assets/History/SeeMore.svg';

const Container = styled.div`
  height: 87%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
`;

const Project = styled.div`
  width: 15%;
  height: 40%;
`;

const TotalWrapper = styled.div`
  height: 100%;
  border-radius: 15px;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    box-shadow: 4px 4px 15px 5px rgba(0, 0, 0, 0.3);
    transform: translateY(-0.25rem);
    transition: transform 0.1s ease-in-out;
    .description {
      visibility: visible;
      opacity: 1;
      transition:
        opacity 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
    }
    .semester-type-wrapper {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    .history-item-icon {
      transform: scale(1.2);
      opacity: 0.5;
      transition:
        transform 0.3s ease-in-out,
        opacity 0.3s ease-in-out;
    }
    transition: background-color 0.3s ease-in-out;

    ${(props) => {
      switch (props.semester) {
        case '1':
          return 'background-color: #747881;';
        case '2':
          return 'background-color: #596075;';
        case '3':
          return 'background-color: #4B5061;';
        case '4':
          return 'background-color: #3E4352;';
        case '5':
          return 'background-color: #282B37;';
        case '6':
          return 'background-color: #1C1E27;';
        default:
          return '';
      }
    }}
  }

  &:not(:hover) {
    transform: translateY(0);
    transition:
      transform 0.1s ease-in-out,
      background-color 0.3s ease-in-out;
    .description {
      visibility: hidden;
      opacity: 0;
      transition:
        opacity 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
    }
  }
`;

// 히스토리 아이템 컴포넌트 스타일링
const HistoryItem = styled.div`
  /* 레이아웃 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  cursor: pointer;
`;

const SemesterNTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: opacity 0.3s ease-in-out;
`;

const SemesterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  font-size: 12px;
  font-family: 'Inter';
  font-weight: 400;
  padding: 5px;
  margin-top: 5px;
  margin-left: 5px;
`;

const TypeIconTextContainer = styled.div`
  /* 세로 중앙 정렬 */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  color: white;
  font-size: 10px;
  font-weight: 500;
  margin-top: 5px;
  margin-right: 10px;
`;

// 히스토리 아이템 이미지 스타일링
const HistoryItemIcon = styled.img`
  /* 히스토리 아이템 아이콘 */
  width: 100px;
  height: 100px;
  position: relative;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
`;

const HistoryItemIconLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

// 히스토리 아이템 제목 스타일링
const HistoryItemInfoTitle = styled.div`
  /* 폰트 스타일링 */
  color: white;
  font-size: 25px;
  font-weight: 500;
  word-wrap: break-word;
`;

const HistoryItemHashtag = styled.span`
  /* 폰트 스타일링 */
  color: white;
  font-size: 12px;
  font-weight: 400;
`;

// 히스토리 아이템 정보 감싸는 레이아웃 스타일링
const HistoryItemInfoWrapper = styled.div`
  /* 레이아웃 정렬 */
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 1.3em;
`;

const SeeMoreIcon = styled.img`
  margin-left: auto;
  padding-right: 0.7em;
  padding-bottom: 0.7em;
`;

// 히스토리 아이템 컴포넌트 상세 정보
const Description = styled.div`
  display: block;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;
  z-index: 100;
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: 18.2px;
  word-wrap: break-word;
  white-space: normal;
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  ${TotalWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
`;

const AlbumContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 70px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

const AlbumImage = styled.img`
  width: 320px;
  height: 320px;

  border-radius: 50%;
  border: 10px solid white;

  position: relative;
`;

const DescriptionWrapper = styled.div`
  border-radius: 10px;
  background-color: white;

  width: 90%;
  position: absolute;
  bottom: 0;
`;

const AlbumTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
`;

const AlbumTime = styled.div`
  text-align: center;

  color: gray;
  font-size: 12px;
  padding: 5px;
`;

const Data = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % (data.length - 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (location.pathname === '/history') {
    useEffect(() => {
      const getHotProject = async () => {
        try {
          const res = await axiosInstance.get(`/projects/hot`, {
            params: {
              page: 0,
              size: 10,
            },
          });
          setData(res.data.result.projects);
        } catch (error) {
          console.log(error);
        }
      };

      getHotProject();
    });

    return (
      <>
        <Container>
          {data.slice(startIndex, startIndex + 4).map((da) => (
            <Project key={da.projectId}>
              <TotalWrapper backgroundColor={getBackgroundColor(da.semester)}>
                <HistoryItem>
                  <SemesterNTypeWrapper className="semester-type-wrapper">
                    <SemesterStyle> {getNumber(da.semester)} </SemesterStyle>
                    <TypeIconTextContainer>
                      {renderTypeIconAndText(da.types)}
                    </TypeIconTextContainer>
                  </SemesterNTypeWrapper>
                  <HistoryItemInfoWrapper>
                    <HistoryItemInfoTitle>{da.name}</HistoryItemInfoTitle>
                    <HistoryItemHashtag>
                      {da.tags.map((tag, index) => (
                        <span key={index}>
                          #{tag}
                          {index !== da.tags.length - 1 && ' '}
                        </span>
                      ))}
                    </HistoryItemHashtag>
                  </HistoryItemInfoWrapper>
                  <HistoryItemIconLayout>
                    <Description className="description">
                      {da.description}
                    </Description>

                    {da.logoImage ? (
                      <HistoryItemIcon
                        src={da.logoImage}
                        className="history-item-icon"
                      />
                    ) : (
                      <HistoryItemIcon
                        src={NoIconImage}
                        className="history-item-icon"
                      />
                    )}
                  </HistoryItemIconLayout>
                  <SeeMoreIcon src={SeeMoreImage} />
                </HistoryItem>
              </TotalWrapper>
            </Project>
          ))}
        </Container>
      </>
    );
  } else if (location.pathname === '/album') {
    useEffect(() => {
      const getMainAlbums = async () => {
        try {
          const res = await axiosInstance.get(`/albums/featured`, {
            params: {
              page: 0,
            },
          });
          setData(res.data.result.albumPageResponses);
        } catch (error) {
          console.log(error);
        }
      };

      getMainAlbums();
    });

    return (
      <>
        <Wrapper>
          <h1 style={{ color: 'white', textAlign: 'center' }}>
            우리 학교 사진첩
          </h1>
          <AlbumContainer>
            {data.slice(startIndex, startIndex + 3).map((da) => (
              <ItemWrapper key={da.albumId}>
                <AlbumImage src={da.thumbnail} />

                <DescriptionWrapper>
                  <AlbumTitle>{da.title}</AlbumTitle>
                  <AlbumTime>{da.createdAt}</AlbumTime>
                </DescriptionWrapper>
              </ItemWrapper>
            ))}
          </AlbumContainer>
        </Wrapper>
      </>
    );
  }
};

export default Data;
