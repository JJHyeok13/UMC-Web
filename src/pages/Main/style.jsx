import styled from 'styled-components';

const styles = {
  Background: styled.div`
    background-color: #f2f5fc;
  `,

  MainWrapper: styled.div`
    margin-top: 10vh;
  `,

  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 70%;

    margin-bottom: 100px;
  `,

  LeftWrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 45%;
  `,

  ScheduleContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: auto;
    width: 50%;
  `,

  IDinput: styled.input`
    border: 1px solid white;
    padding: 3px;

    margin-bottom: 15px;
  `,

  RankingWrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 55%;
  `,

  SchoolWrapper: styled.div`
    width: 145px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;
    border: 1px solid white;
    border-radius: 15px;

    padding: 10px;
  `,

  SchoolRank: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,

  //  TodoListWrapper:styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   width: 45%;
  //   justify-content: flex-start;
  // `,

  TILGithubWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
  `,

  GithubWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
  `,
};

export default styles;
