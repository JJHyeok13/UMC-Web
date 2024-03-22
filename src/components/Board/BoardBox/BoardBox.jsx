import React from 'react';

import styles from './styles';

import Campus from 'assets/Board/BoardCard/School.svg';
import Branch from 'assets/Board/BoardCard/Branch.svg';
import Center from 'assets/Board/BoardCard/Union.svg';
import Suggestion from 'assets/Board/BoardCard/Suggestion.svg';

const BoardBox = () => {
  const boardBoxes = [
    {
      image: Campus,
      title: ['학교', 'campus'],
      links: [
        { name: '자유 게시판', path: 'free' },
        { name: '질문 게시판', path: 'question' },
        { name: '이전 기수 게시판', path: 'ob' },
        { name: '워크북 게시판', path: 'workbook' },
      ],
    },
    {
      image: Branch,
      title: ['지부', 'branch'],
      links: [
        { name: '자유 게시판', path: 'free' },
        { name: '질문 게시판', path: 'question' },
        { name: '이전 기수 게시판', path: 'ob' },
      ],
    },
    {
      image: Center,
      title: ['연합', 'center'],
      links: [
        { name: '자유 게시판', path: 'free' },
        { name: '질문 게시판', path: 'question' },
        { name: '이전 기수 게시판', path: 'ob' },
      ],
    },
    {
      image: Suggestion,
      title: ['건의함', 'suggestion'],
      links: [],
    },
  ];

  return (
    <styles.BoxContainer>
      {boardBoxes.map((box, index) => (
        <styles.BoxWrapper key={index}>
          <styles.TypeImage src={box.image} alt={box.title[0]} />
          <styles.TypeTitle>{box.title[0]}</styles.TypeTitle>
          <styles.ContentWrapper>
            {box.links.map((link, linkIndex) => (
              <styles.StyledLink
                key={linkIndex}
                to={`/board/${box.title[1]}/${link.path}`}
              >
                {link.name}
              </styles.StyledLink>
            ))}
          </styles.ContentWrapper>
        </styles.BoxWrapper>
      ))}
    </styles.BoxContainer>
  );
};

export default BoardBox;
