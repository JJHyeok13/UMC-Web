import styled from 'styled-components';

const styles = {
  AdminManagementWrapper: styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding-top: 100px;
  `,
  ChallengerContainer: styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  `,
  ButtonContainer: styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `,
  Button: styled.div`
    font-weight: bold;
    font-size: 14px;
    color: white;
    text-align: center;

    padding: 10px 18px;

    border-radius: 12px;
    background: #8784ff;
    cursor: pointer;
    margin-top: 3.2vh;
  `,
};

export default styles;
