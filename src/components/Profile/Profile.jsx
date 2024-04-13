import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axiosInstance from 'apis/setting';

import styles from './styles';

import ExitButtonImage from 'assets/Profile/ExitButton.svg';
import BasicProfileImage from 'assets/Profile/ProfileImage.svg';
import ProfileSettingImageImage from 'assets/Profile/ProfileSetting.svg';

import PMImage from 'assets/Profile/Part/PM.svg';
import DesignImage from 'assets/Profile/Part/Design.svg';
import SpringImage from 'assets/Profile/Part/Spring.svg';
import NodeImage from 'assets/Profile/Part/Node.svg';
import WebImage from 'assets/Profile/Part/Web.svg';
import iOSImage from 'assets/Profile/Part/iOS.svg';
import AndroidImage from 'assets/Profile/Part/Android.svg';

import FisrtImage from 'assets/Profile/Semester/First.svg';
import SecondImage from 'assets/Profile/Semester/Second.svg';
import ThirdImage from 'assets/Profile/Semester/Third.svg';
import FourthImage from 'assets/Profile/Semester/Fourth.svg';
import FifthImage from 'assets/Profile/Semester/Fifth.svg';
import SixthImage from 'assets/Profile/Semester/Sixth.svg';

import ManagementIconImage from 'assets/Profile/ManagementIcon.svg';
import SettingIconImage from 'assets/Profile/SettingIcon.svg';
import NotificationIconImage from 'assets/Profile/NotificationIcon.svg';
import FriendIconImage from 'assets/Profile/FriendIcon.svg';

const Profile = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);

  const renderPartImage = (part) => {
    if (part === 'PM') {
      return <img src={PMImage} alt="PM" />;
    } else if (part === 'DESIGN') {
      return <img src={DesignImage} alt="DESIGN" />;
    } else if (part === 'SPRING') {
      return <img src={SpringImage} alt="SPRING" />;
    } else if (part === 'NODE') {
      return <img src={NodeImage} alt="NODE" />;
    } else if (part === 'WEB') {
      return <img src={WebImage} alt="WEB" />;
    } else if (part === 'IOS') {
      return <img src={iOSImage} alt="IOS" />;
    } else if (part === 'ANDROID') {
      return <img src={AndroidImage} alt="ANDROID" />;
    }
    return null;
  };

  const renderSemesterImage = (semester) => {
    if (semester === 'FIRST') {
      return <img src={FisrtImage} alt="FIRST" />;
    } else if (semester === 'SECOND') {
      return <img src={SecondImage} alt="SECOND" />;
    } else if (semester === 'THIRD') {
      return <img src={ThirdImage} alt="THIRD" />;
    } else if (semester === 'FOURTH') {
      return <img src={FourthImage} alt="FOURTH" />;
    } else if (semester === 'FIFTH') {
      return <img src={FifthImage} alt="FIFTH" />;
    } else if (semester === 'SIXTH') {
      return <img src={SixthImage} alt="SIXTH" />;
    }
    return null;
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axiosInstance.get(`/members`);

        setProfileData(res.data.result);
      } catch (error) {
        console.error('Error fetching profile: ', error);
      }
    };
    getProfile();
  }, []);

  const handleProfileSettingClick = () => {
    setIsModalOpen(false);

    navigate('/profilesetting');
  };

  return (
    <styles.Modal>
      <styles.ExitButton
        src={ExitButtonImage}
        onClick={() => setIsModalOpen(false)}
      />

      {profileData && (
        <>
          <styles.ProfileImageWrapper>
            {profileData.profileImage ? (
              <styles.ProfileImage src={profileData.profileImage} />
            ) : (
              <styles.ProfileImage src={BasicProfileImage} />
            )}
            <styles.ProfileSettingImage
              src={ProfileSettingImageImage}
              onClick={handleProfileSettingClick}
            />

            <styles.School>{profileData.universityName}</styles.School>
          </styles.ProfileImageWrapper>

          <styles.NameNickname>
            {profileData.nickname}/{profileData.name}
          </styles.NameNickname>

          <styles.SemesterPart>
            <styles.PartNSemesterWrapper>
              {profileData.semesterParts.map((parts, index) => (
                <styles.Part key={index}>
                  {renderPartImage(parts.part)}
                </styles.Part>
              ))}
            </styles.PartNSemesterWrapper>

            <styles.PartNSemesterWrapper>
              {profileData.semesterParts.map((semesters, index) => (
                <div key={index}>{renderSemesterImage(semesters.semester)}</div>
              ))}
            </styles.PartNSemesterWrapper>
          </styles.SemesterPart>

          <styles.StatusMessageWrapper>
            <div style={{ fontSize: '12px', marginBottom: '5px' }}>
              상태메세지
            </div>

            {/*상태메세지가 있으면 상태메세지 출력, 없다면 빈 줄 출력*/}
            {profileData.statusMessage ? (
              <div>{profileData.statusMessage}</div>
            ) : (
              <div>&nbsp;</div>
            )}
          </styles.StatusMessageWrapper>

          <styles.IconWrapper>
            <styles.SettingIconWrapper>
              <Link to="/management/notice">
                <img src={ManagementIconImage} alt="Management" />
              </Link>
              <styles.IconDescription> 운영진 관리 </styles.IconDescription>
            </styles.SettingIconWrapper>

            <styles.SettingIconWrapper>
              <Link to="/setting/custom">
                <img src={SettingIconImage} alt="Setting" />
              </Link>
              <styles.IconDescription>설정</styles.IconDescription>
            </styles.SettingIconWrapper>

            <styles.SettingIconWrapper>
              <Link to="/notification">
                <img src={NotificationIconImage} alt="Notification" />
              </Link>
              <styles.IconDescription> 알림 </styles.IconDescription>
            </styles.SettingIconWrapper>

            <styles.SettingIconWrapper>
              <Link to="/friends">
                <img src={FriendIconImage} alt="Friend" />
              </Link>
              <styles.IconDescription>친구</styles.IconDescription>
            </styles.SettingIconWrapper>
          </styles.IconWrapper>
        </>
      )}
    </styles.Modal>
  );
};

Profile.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  memberId: PropTypes.string,
};

export default Profile;
