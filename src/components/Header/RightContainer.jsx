import React, { useState, useEffect } from 'react';

import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import Profile from 'components/Profile/Profile';
import BasicProfileImage from 'assets/Profile/ProfileImage.svg';
import { useNavigate } from 'react-router-dom';

import LogoutButtonImage from 'assets/Logout.svg';
import axios from 'axios';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.62);
  z-index: 999;
`;

const Container = styled.div`
  display: flex;
  width: 20%;
  height: 50%;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  cursor: pointer;
  align-items: center;
`;

const ProfileImage = styled.img`
  display: flex;
  width: 30px;
  height: 30px;

  border-radius: 50%;
`;

const ProfileNickname = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const LogoutButton = styled.img`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RightContainer = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axiosInstance.get(`/members`);

        setNickname(res.data.result.nickname);
        setProfileImage(res.data.result.profileImage);
      } catch (error) {
        console.log('Error get nickname', error);
      }
    };

    getProfile();
  }, []);

  const logoutKakao = async (accessToken) => {
    try {
      const response = await axios.post(
        '/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      console.log(response.data);
      // 여기에서 필요에 따라 로컬 스토리지 등에서 관련 정보를 삭제할 수 있습니다.
    } catch (error) {
      console.log('카카오톡 로그아웃 오류:', error);
    }
  };

  const logoutMember = async () => {
    try {
      const res = await axiosInstance.delete(`/members/logout`);
      console.log(res);

      localStorage.removeItem('server Token');

      logoutKakao(localStorage.getItem('kakao token'));

      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper onClick={() => setIsModalOpen(true)}>
        {profileImage ? (
          <ProfileImage src={profileImage} />
        ) : (
          <ProfileImage src={BasicProfileImage} />
        )}
        <ProfileNickname>
          <div>
            <span style={{ fontWeight: 'bold' }}>{nickname}</span>
            <span> 반가워요!</span>
          </div>
        </ProfileNickname>
      </Wrapper>
      <LogoutButton src={LogoutButtonImage} onClick={logoutMember} />
      {isModalOpen && (
        <>
          <Overlay />
          <Profile isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
      )}
    </Container>
  );
};

export default RightContainer;
