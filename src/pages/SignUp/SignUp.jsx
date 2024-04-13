import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axiosInstance from 'apis/setting';
import NocontentsBackgroundImage from 'assets/SignUp/NoContentsBackground.svg';

import InviteCode from 'components/SignUp/InviteCode';
import Operator from 'components/SignUp/Operator';
import University from 'components/SignUp/University';
import Name from 'components/SignUp/Name';
import Nickname from 'components/SignUp/Nickname';
import Agreement from 'components/SignUp/Agreement';
import SemesterParts from 'components/SignUp/SemesterParts';
import SignUpComplete from 'components/SignUp/SignUpComplete';

const SignUpPageContainer = styled.div`
  height: 100vh;
  display: flex;
  background: url(${NocontentsBackgroundImage}) no-repeat center center;
`;

const SignUp = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(2);

  const [inviteCode, setInviteCode] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);

  // 중앙운영진 여부를 관리하는 상태
  const [isCenterStaff, setIsCenterStaff] = useState(false);

  /* POST로 보내야 하는 내용들 */
  const [campusPositions, setCampusPositions] = useState([]);
  const [centerPositions, setCenterPositions] = useState([]);
  const [universityName, setUniversityName] = useState('');
  const [semesterParts, setSemesterParts] = useState([]);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleInviteCode = async () => {
    console.log('Invite Code: ', inviteCode);
    try {
      const res = await axiosInstance.post(`/invites/${inviteCode}`, {
        inviteCode: inviteCode,
      });

      if (res.data.code === 'COMMON200') {
        setIsValidCode(true);

        // 서버 응답에서 result의 role이 "member"인 경우 Operator 단계를 건너뛰기
        if (res.data.result.role === 'MEMBER') {
          handleNextStep();
          handleNextStep(); // Operator 단계를 건너뛰고 다음 단계로 이동
          return; // Operator 단계를 건너뛰었으므로 여기서 함수 종료
        }

        if (
          res.data.result.role === 'CENTER_STAFF' ||
          res.data.result.role === 'TOTAL_STAFF'
        ) {
          setIsCenterStaff(true);
        }
        // Operator 단계를 건너뛰지 않고 다음 단계로 이동
        handleNextStep();
      } else {
        setIsValidCode(false);
      }
    } catch (error) {
      console.error('InviteCode error:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      await axiosInstance.post(`/members`, {
        name: name,
        nickname: nickname,
        semesterParts: semesterParts,
        universityName: universityName,
        campusPositions: campusPositions,
        centerPositions: centerPositions,
      });
      navigate('/main');
    } catch (error) {
      console.error('Form Data Submitted:', error);
    }
  };

  return (
    <SignUpPageContainer step={step}>
      {step === 0 && (
        <InviteCode
          inviteCode={inviteCode}
          setInviteCode={setInviteCode}
          isValidCode={isValidCode}
          setIsValidCode={setIsValidCode}
          handleInviteCode={handleInviteCode}
        />
      )}

      {step === 1 && (
        <Operator
          campusPositions={campusPositions}
          setCampusPositions={setCampusPositions}
          centerPositions={centerPositions}
          setCenterPositions={setCenterPositions}
          isCenterStaff={isCenterStaff}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}

      {step === 2 && (
        <University
          universityName={universityName}
          setUniversityName={setUniversityName}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 3 && (
        <SemesterParts
          semesterParts={semesterParts}
          setSemesterParts={setSemesterParts}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 4 && (
        <Name
          name={name}
          setName={setName}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 5 && (
        <Nickname
          nickname={nickname}
          setNickname={setNickname}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 6 && (
        <Agreement
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )}
      {step === 7 && <SignUpComplete handleSubmit={handleSubmit} />}
    </SignUpPageContainer>
  );
};

export default SignUp;
