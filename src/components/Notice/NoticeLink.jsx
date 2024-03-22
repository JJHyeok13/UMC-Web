import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 18px;

  &.active {
    color: #000c76;
    font-weight: bold;

    text-decoration: underline 3px #000c76;
  }
  &:hover {
    color: #000c76;
    font-weight: bold;

    text-decoration: underline 3px #000c76;
  }
`;

const NoticeLink = () => {
  return (
    <LinkWrapper>
      <StyledNavLink to="/notice/campus">학교 공지사항</StyledNavLink>
      <StyledNavLink to="/notice/branch">지부 공지사항</StyledNavLink>
      <StyledNavLink to="/notice/center">중앙 공지사항</StyledNavLink>
    </LinkWrapper>
  );
};

export default NoticeLink;
