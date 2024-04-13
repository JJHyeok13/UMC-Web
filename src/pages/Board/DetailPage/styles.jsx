import styled from 'styled-components';

import BoardTitle from 'components/Board/BoardTitle/BoardTitle';

const styles = {
  BoardTitleLayout: styled(BoardTitle)`
    display: flex;
    padding: 0 0 0 40px;
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;

    width: 70%;

    margin-top: 15vh;
  `,

  LowerWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  `,

  RightWrapper: styled.div`
    display: flex;
    flex-direction: column;

    width: 70%;
  `,

  BackButton: styled.div`
    margin-left: auto;
    width: 5%;
    text-align: center;
    background-color: #7f7cff;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
  `,
};

export default styles;
