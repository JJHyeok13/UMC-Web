import styled from 'styled-components';

const styles = {
  Modal: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid gray;
    border-radius: 12px;
    background-color: #f6f6f6;
    z-index: 1000;
  `,

  ExitButton: styled.img`
    margin-left: auto;
    cursor: pointer;
    position: fixed;
    top: 0;
    right: 0;
    padding: 5px;
  `,

  ProfileImageWrapper: styled.div`
    display: inline-block;
    position: relative;
  `,

  ProfileImage: styled.img`
    position: relative;
    z-index: 100;

    width: 250px;
    height: 250px;
    border-radius: 250px;
  `,

  ProfileSettingImage: styled.img`
    cursor: pointer;

    position: absolute;
    bottom: 25px;
    right: 25px;

    z-index: 101;
  `,

  SettingIconWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  School: styled.div`
    font-size: 16px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 101;

    background-color: white;
    border: 1px solid white;
    border-radius: 15px;

    width: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    padding: 5px;
  `,

  NameNickname: styled.div`
    display: flex;
    font-size: 16px;
  `,

  SemesterPart: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 45%;
  `,

  PartNSemesterWrapper: styled.div`
    width: 45%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;
    border: 1px solid white;
    border-radius: 15px;

    text-align: center;

    margin: 0 10px;
  `,

  Part: styled.div``,

  StatusMessageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 70%;
    height: 10%;

    background-color: white;
    border: 1px solid white;
    border-radius: 15px;
  `,

  IconWrapper: styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,

  IconDescription: styled.p`
    font-size: 10px;
  `,
};

export default styles;
