import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const TypeIcon = styled.img`
  width: 20px;
  height: 20px;
`;

import AOSIcon from 'assets/History/AOS.svg';
import iOSIcon from 'assets/History/iOS.svg';
import WebIcon from 'assets/History/Web.svg';

export const renderTypeIconAndText = (types) => {
  return types.map((type) => {
    switch (type) {
      case 'IOS':
        return (
          <Wrapper key="IOS">
            <TypeIcon src={iOSIcon} alt="iOS Icon" />
            iOS
          </Wrapper>
        );
      case 'AOS':
        return (
          <Wrapper key="AOS">
            <TypeIcon src={AOSIcon} alt="AOS Icon" />
            AOS
          </Wrapper>
        );
      case 'WEB':
        return (
          <Wrapper key="WEB">
            <TypeIcon src={WebIcon} alt="Web Icon" />
            Web
          </Wrapper>
        );
      default:
        return null;
    }
  });
};

export const getBackgroundColor = (semester) => {
  switch (semester) {
    case 'FIRST':
      return '#B2B7C3';
    case 'SECOND':
      return '#8993B3';
    case 'THIRD':
      return '#6E758B';
    case 'FOURTH':
      return '#5A6175';
    case 'FIFTH':
      return '#3E4251';
    case 'SIXTH':
      return '#2B2E38';
    default:
      return '#ffffff';
  }
};

export const getNumber = (semester) => {
  switch (semester) {
    case 'FIRST':
      return '1';
    case 'SECOND':
      return '2';
    case 'THIRD':
      return '3';
    case 'FOURTH':
      return '4';
    case 'FIFTH':
      return '5';
    case 'SIXTH':
      return '6';
    default:
      return '';
  }
};
