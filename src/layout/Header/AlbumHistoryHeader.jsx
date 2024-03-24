import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import LeftContainer from 'components/Header/LeftContainer';
import RightContainer from 'components/Header/RightContainer';

import LargeHeaderImage from 'assets/Header/AlbumHistoryHeader.svg';
import SmallHeaderImage from 'assets/Header/SmallHeader.png';
import HamburgerMenuBtnImage from 'assets/Header/HamburgerOpenButton.svg';

import HamburgerMenu from './Hamburgermenu';
import Data from 'components/Data/Data';

const HeaderWrapper = styled.div`
  background: url(${LargeHeaderImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: ${(props) => (props.scrolled ? 'auto' : '100vh')};
  position: fixed;
  top: 0;
  transition: background 0.3s ease;

  z-index: 999;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 13%;
  justify-content: space-evenly;
  align-items: center;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSide = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderWrapper
        style={{
          background: `url(${
            isScrolled ? SmallHeaderImage : LargeHeaderImage
          }) no-repeat center center`,
        }}
        scrolled={isScrolled}
      >
        <Wrapper>
          <img
            src={HamburgerMenuBtnImage}
            onClick={toggleSide}
            style={{ cursor: 'pointer', color: 'white' }}
          />
          <LeftContainer />
          <RightContainer scrolled={isScrolled} />
        </Wrapper>

        {!isScrolled && <Data />}
      </HeaderWrapper>

      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
