import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'App.css';

import MainLayout from 'layout/MainLayout';
import BasicLayout from 'layout/BasicLayout';

import Main from 'pages/Main.jsx';
import SignUpForm from 'pages/SignUp/SignUp';
import BoardWrite from 'pages/BoardWrite/BoardWrite';
import HomePage from 'pages/HomePage';
import Management from 'pages/Management/Management';
import MyWrite from 'pages/MyWrite/MyWrite';
import KakaoAuth from 'apis/app/auth/KakaoAuth';
import NaverAuth from 'apis/app/auth/NaverAuth';
import ProfileSettingPage from 'pages/Setting/Profile/ProfileSettingPage';
import HistoryPage from 'pages/History/HistoryPage';
import GalleryPage from 'pages/Gallery/GalleryPage';
import GalleryDetailPage from 'pages/Gallery/GalleryDetailPage';
import BoardPage from 'pages/BoardPage/BoardPage';
import MascotPage from 'pages/Mascot/MascotPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* path는 Redirect URI*/}
            <Route path="/OAuth2/kakao" element={<KakaoAuth />} />
            <Route path="/oauth2/naver" element={<NaverAuth />} />

            <Route path="/signupform" element={<SignUpForm />} />

            <Route element={<MainLayout />}>
              <Route path="/main" element={<Main />} />
            </Route>

            <Route element={<BasicLayout />}>
              <Route
                path="/board"
                element={<Navigate to="/board/school/notice" />}
              />
              <Route
                path="/board/:category/:boardPath"
                element={<BoardPage />}
              />

              <Route path="/boardwrite" element={<BoardWrite />} />
              <Route path="/management" element={<Management />} />
              <Route path="/mywrite" element={<MyWrite />} />

              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/gallery/:id" element={<GalleryDetailPage />} />

              <Route path="/profilesetting" element={<ProfileSettingPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/mascot" element={<MascotPage />} />
            </Route>
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
