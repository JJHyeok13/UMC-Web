import React from 'react';
import styled from 'styled-components';
import SearchImg from 'assets/Management/SearchImage.svg';

const Searchdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 0 16px; */
`;

const Search = styled.div`
  width: 80%;
  border: 1px solid #232a6d;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2vh;
  margin-right: 2vh;
  background-color: white;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1vh;
  margin-right: auto;
  border-radius: 12px;
  border: none;
`;

const SearchButton = styled.div`
  padding: 1vh 2vh;
  flex-wrap: nowrap;

  display: flex;
  justify-content: center;
  color: #8784ff;
  background-color: #fff;
  border-radius: 12px;

  border: 1px solid #232a6d;
  cursor: pointer;
`;

const SearchChallenger = () => {
  return (
    <Searchdiv>
      <SearchContainer>
        <Search>
          <img src={SearchImg} alt="돋보기 아이콘" />
          <SearchInput placeholder="정보를 변경할 챌랜저의 '닉네임/이름'을 입력해주세요(EX. 리버/이경수)" />
        </Search>
        <SearchButton>검색</SearchButton>
      </SearchContainer>
    </Searchdiv>
  );
};

export default SearchChallenger;
