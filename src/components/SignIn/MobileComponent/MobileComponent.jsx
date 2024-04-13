import React from 'react';
import PropTypes from 'prop-types';
import KakaoLoginImage from 'assets/SignIn/Kakao_Login_Button.png';
import GoogleLoginImage from 'assets/SignIn/Google_Login_Button.png';
import NaverLoginImage from 'assets/SignIn/Naver_Login_Button.png';
import styles from './style';

const MobileComponent = ({ KakaoLoginURL, NaverLoginURL }) => {
  return (
    <styles.Background>
      <styles.ButtonWrapper>
        <styles.Button href={KakaoLoginURL}>
          <styles.LoginButtonImage src={KakaoLoginImage} />
        </styles.Button>

        <styles.Button>
          <div style={{ color: 'white' }}>
            네이버, 구글 로그인은 현재 제한된 기능입니다.
          </div>
          <styles.Button href={NaverLoginURL}>
            <styles.LoginButtonImage src={NaverLoginImage} />
          </styles.Button>
          <styles.LoginButtonImage src={GoogleLoginImage} />
        </styles.Button>
      </styles.ButtonWrapper>
    </styles.Background>
  );
};

MobileComponent.propTypes = {
  KakaoLoginURL: PropTypes.string.isRequired,
  NaverLoginURL: PropTypes.string.isRequired,
};

export default MobileComponent;
