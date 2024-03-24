import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import SearchImg from 'assets/Management/SearchImage.svg';

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Search = styled.div`
  width: 85%;
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2vh;
  background-color: white;
`;

const SearchInput = styled.input`
  width: 90%;
  padding: 1vh;
  border-radius: 12px;
  border: none;
  box-sizing: border-box;
`;

const SearchButton = styled.div`
  padding: 1vh 2vh;
  flex-wrap: nowrap;

  display: flex;
  justify-content: center;
  color: #8784ff;
  background-color: #fff;
  border-radius: 12px;
  box-sizing: border-box;
  cursor: pointer;
`;

const SearchChallenger = ({ keyword, handleKeyword, searchChallenger }) => {
  return (
    <SearchContainer>
      <Search>
        <img src={SearchImg} alt="돋보기 아이콘" style={{ padding: '5px' }} />
        <SearchInput
          placeholder="정보를 변경할 챌랜저의 '닉네임/이름'을 입력해주세요(EX. 리버/이경수)"
          onChange={handleKeyword}
          value={keyword}
        />
      </Search>
      <SearchButton onClick={searchChallenger}>검색</SearchButton>
    </SearchContainer>
  );
};

SearchChallenger.propTypes = {
  keyword: PropTypes.string.isRequired,
  handleKeyword: PropTypes.func.isRequired,
  searchChallenger: PropTypes.func.isRequired,
};

export default SearchChallenger;
