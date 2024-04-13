import React from 'react';
import { useMediaQuery } from 'react-responsive';
import LargeDesktopComponent from 'components/SignIn/LargeDesktopComponent/LargeDesktopComponent';
import DesktopComponent from 'components/SignIn/DesktopComponent/DesktopComponent';
import LaptopComponent from 'components/SignIn/LaptopComponent/LaptopComponent';
import MobileComponent from 'components/SignIn/MobileComponent/MobileComponent';

const SignInPage = () => {
  const isLargeDesktop = useMediaQuery({
    query: '(min-width : 1921px)',
  });
  const isDesktop = useMediaQuery({
    //ipad와 pc사이
    query: '(min-width : 1441px) and (max-width : 1920px)',
  });

  const isLaptop = useMediaQuery({
    //ipad와 pc사이
    query: '(min-width : 1025px) and (max-width : 1440px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width : 1025px)',
  });

  const KakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
  //const NaverLoginURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_REST_API_KEY}&state=test&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`;

  return (
    <>
      <div>
        {isLargeDesktop && (
          <LargeDesktopComponent
            KakaoLoginURL={KakaoLoginURL}
            //NaverLoginURL={NaverLoginURL}
          />
        )}
        {isDesktop && (
          <DesktopComponent
            KakaoLoginURL={KakaoLoginURL}
            //NaverLoginURL={NaverLoginURL}
          />
        )}
        {isLaptop && (
          <LaptopComponent
            KakaoLoginURL={KakaoLoginURL}
            //NaverLoginURL={NaverLoginURL}
          />
        )}
        {isMobile && (
          <MobileComponent
            KakaoLoginURL={KakaoLoginURL}
            //NaverLoginURL={NaverLoginURL}
          />
        )}
      </div>
    </>
  );
};

export default SignInPage;
