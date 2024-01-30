import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'App.css';

import NewHeader from 'layout/Header/NewHeader';
import Main from 'pages/Main.jsx';
import SignUpForm from 'pages/SignUp/SignUp';
import BoardWrite from 'pages/BoardWrite/BoardWrite';
import BoardPage from 'pages/NewBoardPage/BoardPage';
import SocialLogin from 'components/SignUp/SocialLogin';

import Management from 'pages/Management/Management';
import MyWrite from 'pages/MyWrite/MyWrite';
import TodayILearn from 'pages/TodayILearn/TodayILearn';
import NewTIL from 'components/TodayILearn/NewTIL';

function App() {
  return (
    <>
      <BrowserRouter>
        <NewHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signupform" element={<SignUpForm />} />
          <Route path="/boardPage" element={<BoardPage />} />
          <Route path="/boardwrite" element={<BoardWrite />} />
          <Route path="/admin" element={<Management />} />
          <Route path="/mywrite" element={<MyWrite />} />
          <Route path="/todayilearn" element={<TodayILearn />} />
          <Route path="/todayilearn/detailpage" element={<NewTIL />} />


          <Route path="/kakaologin" element={<SocialLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
} 


export default App;
