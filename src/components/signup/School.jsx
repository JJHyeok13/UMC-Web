import React, { useState } from 'react';
import SignUpFormWrapper from './SignUpForm.style';

const School = () => {
  const [school, setSchool] = useState('');

  return (
    <SignUpFormWrapper>
      <h3> 학교를 선택해주세요 </h3>
      <div>
        <select
          id="school"
          name="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        >
          <option value="가천대학교">가천대학교</option>
          <option value="가톨릭대학교">가톨릭대학교</option>
          <option value="경기대학교">경기대학교</option>
          <option value="경상국립대학교">경상국립대학교</option>
          <option value="경희대학교">경희대학교</option>
          <option value="광운대학교">광운대학교</option>
          <option value="덕성여자대학교">덕성여자대학교</option>
          <option value="동국대학교">동국대학교</option>
          <option value="동덕여자대학교">동덕여자대학교</option>
          <option value="명지대학교">명지대학교</option>
          <option value="부경대학교">부경대학교</option>
          <option value="상명대학교">상명대학교</option>
          <option value="서경대학교">서경대학교</option>
          <option value="서울여자대학교">서울여자대학교</option>
          <option value="성신여자대학교">성신여자대학교</option>
          <option value="숙명여자대학교">숙명여자대학교</option>
          <option value="숭실대학교">숭실대학교</option>
          <option value="아주대학교">아주대학교</option>
          <option value="울산대학교">울산대학교</option>
          <option value="이화여자대학교">이화여자대학교</option>
          <option value="인하대학교">인하대학교</option>
          <option value="중앙대학교">중앙대학교</option>
          <option value="한국공학대학교">한국공학대학교</option>
          <option value="한국외국어대학교">한국외국어대학교</option>
          <option value="한국항공대학교">한국항공대학교</option>
          <option value="한성대학교">한성대학교</option>
          <option value="한양대학교">한양대학교</option>
          <option value="한양대에리카">한양대에리카</option>
          <option value="홍익대학교">홍익대학교</option>
        </select>
      </div>
    </SignUpFormWrapper>
  );
};

export default School;