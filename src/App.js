import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'App.css';

import MainLayout from 'layout/MainLayout';
import BasicLayout from 'layout/BasicLayout';
import AlbumHistoryLayout from 'layout/AlbumHistoryLayout';

import SignInPage from 'pages/SignInPage/SignInPage';

import KakaoLoginPage from 'pages/SocialLogin/KakaoLogin';
import NaverLoginPage from 'pages/SocialLogin/NaverLogin';

import SignUpForm from 'pages/SignUp/SignUp';

import Main from 'pages/Main/Main.jsx';

import NoticePage from 'pages/Notice/NoticePage';

import BoardPage from 'pages/Board/BoardPage/BoardPage';
import BoardWrite from 'pages/Board/BoardWritePage/BoardWrite';
import BoardDetailPage from 'pages/Board/DetailPage/BoardDetailPage';
import ModifyBoard from 'pages/Board/BoardWritePage/ModifyBoard';

import Management from 'pages/Management/Management';

import MyWrite from 'pages/MyWrite/MyWrite';

import SettingPage from 'pages/Setting/SettingPage';

import TodayILearn from 'pages/TodayILearn/TodayILearned';
import NewTIL from 'pages/TodayILearn/NewTIL';
import DetailTIL from 'pages/TodayILearn/DetailTIL';
import ModifyTIL from 'pages/TodayILearn/ModiftTIL';

import TodoList from 'pages/ToDoList/TodoList';

import AlbumPage from 'pages/Album/AlbumPage/AlbumPage';
import AlbumDetailPage from 'pages/Album/AlbumDetailPage';

import ProfileSettingPage from 'pages/Setting/Profile/ProfileSettingPage';

import HistoryPage from 'pages/History/HistoryPage';
import HotHistoryPage from 'pages/History/HotHistoryPage';

import MascotPage from 'pages/Mascot/MascotPage';

import RankingPage from 'pages/Mascot/RankingPage';

// import MessagePreviewPage from 'pages/Message/MessagePreviewPage';
// import MessageDetailPage from 'pages/Message/MessageDetailPage';
// import MessagePage from 'pages/Message/MessagePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            {/* 소셜 로그인으로 시작하기 페이지 (초기 화면) */}
            <Route path="/" element={<SignInPage />} />

            {/* 소셜 로그인 페이지 (path는 Redirect URI)*/}
            <Route path="/OAuth2/kakao" element={<KakaoLoginPage />} />
            <Route path="/oauth2/naver" element={<NaverLoginPage />} />

            {/* 회원 가입 페이지 */}
            <Route path="/signupform" element={<SignUpForm />} />

            <Route element={<MainLayout />}>
              {/* 메인 페이지*/}
              <Route path="/main" element={<Main />} />
            </Route>

            <Route element={<AlbumHistoryLayout />}>
              {/* 사진첩 */}
              <Route path="/album" element={<AlbumPage />} />
              <Route path="/album/:id" element={<AlbumDetailPage />} />

              {/* 히스토리(프로젝트) 페이지 */}
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/hothistory" element={<HotHistoryPage />} />
            </Route>

            <Route element={<BasicLayout />}>
              <Route path="/notice/:category" element={<NoticePage />} />

              {/* 게시판 관련 페이지*/}
              <Route
                path="/board/:category/:boardPath"
                element={<BoardPage />}
              />
              <Route path="/boardwrite/:host/:board" element={<BoardWrite />} />

              <Route
                path="/board/:category/:boardPath/:boardId"
                element={<BoardDetailPage />}
              />

              <Route
                path="/board/modify/:category/:boardPath/:boardId"
                element={<ModifyBoard />}
              />

              {/* 운영진 관리 페이지 */}
              <Route path="/management/notice" element={<Management />} />
              <Route path="/management/calendar" element={<Management />} />
              <Route path="/management/challenger" element={<Management />} />

              <Route path="/mywrite" element={<MyWrite />} />

              <Route path="/setting/:contents" element={<SettingPage />} />

              {/* <Route path="/messagepreview" element={<MessagePreviewPage />} />
              <Route path="/messagedetail" element={<MessageDetailPage />} />
              <Route path="/message" element={<MessagePage />} /> */}

              {/* Today-I-Learned */}
              <Route path="/todayilearned" element={<TodayILearn />} />
              <Route path="/todayilearned/addtil" element={<NewTIL />} />
              <Route
                path="/todayilearned/:todayILearnedId"
                element={<DetailTIL />}
              />
              <Route
                path="/todayilearned/modify/:todayILearnedId"
                element={<ModifyTIL />}
              />

              {/* TodoList */}
              <Route path="/todolist" element={<TodoList />} />

              {/* 프로필 설정 페이지 */}
              <Route path="/profilesetting" element={<ProfileSettingPage />} />

              {/* 마스코트 키우기 페이지 */}
              <Route path="/mascot" element={<MascotPage />} />
              <Route path="/ranking" element={<RankingPage />} />
            </Route>
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
