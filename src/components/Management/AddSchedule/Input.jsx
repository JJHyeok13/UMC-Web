import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import DateSelectCalendar from 'components/Management/AddSchedule/DateSelectCalendar';

// 글자가 적인 후 -> 전
const TitleInput = styled.input`
  color: black;
  border: none;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  padding: 1.5vh;
  border-radius: 12px;
  margin-top: 1.6vh;

  box-sizing: border-box;

  background-color: white;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: #bcbcbc;
    font-weight: bold;
  }
`;

const Textarea = styled.textarea`
  color: black;
  border: none;
  display: flex;
  width: 100%;
  height: 300px;
  padding: 1.5vh;
  font-size: 16px;
  align-items: flex-start;
  resize: none;
  border-radius: 12px;
  background: var(--white, #fff);
  flex-direction: column;
  margin-top: 1.6vh;

  box-sizing: border-box;

  background-color: white;

  &::placeholder {
    color: #bcbcbc;
  }
`;

const DateContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 12px;
  padding: 1vh;
  margin-top: 1.6vh;

  box-sizing: border-box;

  background-color: white;
`;

const Start = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  color: #000000;
  padding-bottom: 0.5vh;
`;

const End = styled.div`
  display: flex;
  align-items: center;
  color: #000000;
  padding-top: 0.5vh;

  // font-weight: bold;
`;

const LocalContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1vh;
  border-radius: 12px;
  margin-top: 1.6vh;
  background-color: white;
  box-sizing: border-box;
`;

const LocalInput = styled.input`
  display: flex;
  width: 100%;
  padding: 1vh;
  border: none;
  border-radius: 12px;
  outline: none;
  &::placeholder {
    color: #bcbcbc;
    font-size: 16px;
  }
`;

const Input = ({
  title,
  setTitle,
  content,
  setContent,
  startDateTime,
  setStartDateTime,
  endDateTime,
  setEndDateTime,
  placeSetting,
  setPlaceSetting,
}) => {
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // content 값 변경 시 호출되는 함수
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  // placeSetting 값 변경 시 호출되는 함수
  const handlePlaceSettingChange = (event) => {
    setPlaceSetting(event.target.value);
  };

  // 시작일 변경 시 호출되는 함수
  const handleStartDateChange = (date) => {
    setStartDateTime(date);
  };

  // 종료일 변경 시 호출되는 함수
  const handleEndDateChange = (date) => {
    setEndDateTime(date);
  };

  // 00:00부터 23:50까지의 시간을 생성
  const generateStartTimes = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 10) {
        const timeString = `${hour < 10 ? '0' + hour : hour}:${
          minute < 10 ? '0' + minute : minute
        }`;
        times.push(timeString);
      }
    }
    return times;
  };

  // 00:09부터 23:59까지의 시간을 생성
  const generateEndTimes = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 9; minute < 60; minute++) {
        const timeString = `${hour < 10 ? '0' + hour : hour}:${
          minute < 10 ? '0' + minute : minute
        }`;
        times.push(timeString);
      }
    }
    return times;
  };

  return (
    <>
      <TitleInput
        type="text"
        placeholder="제목을 입력해주세요"
        aria-label="게시글 제목"
        value={title}
        onChange={handleTitleChange}
      />

      <Textarea
        placeholder="내용을 입력해주세요"
        aria-label="게시글 내용"
        value={content}
        onChange={handleContentChange}
      />

      <DateContainer>
        <Start>
          시작일
          <DateSelectCalendar
            selectedDate={startDateTime} // 시작일을 선택된 날짜로 설정
            onDateChange={handleStartDateChange} // 시작일 변경 시 호출되는 함수
          />
          <div style={{ display: 'flex' }}>
            <label htmlFor="startTime">Select Time:</label>
            <select id="startTime" value={startDateTime}>
              {generateStartTimes().map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <p>Selected Time: {startDateTime}</p>
          </div>
        </Start>

        <End>
          종료일
          <DateSelectCalendar
            selectedDate={endDateTime} // 종료일을 선택된 날짜로 설정
            onDateChange={handleEndDateChange} // 종료일 변경 시 호출되는 함수
          />
          <div style={{ display: 'flex' }}>
            <label htmlFor="endTime">Select Time:</label>
            <select id="endTime" value={endDateTime}>
              {generateEndTimes().map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <p>Selected Time: {endDateTime}</p>
          </div>
        </End>
      </DateContainer>

      <LocalContainer>
        <LocalInput
          type="text"
          placeholder="장소설정"
          value={placeSetting}
          onChange={handlePlaceSettingChange}
        />
      </LocalContainer>
    </>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired,
  startDateTime: PropTypes.string.isRequired,
  setStartDateTime: PropTypes.func.isRequired,
  endDateTime: PropTypes.string.isRequired,
  setEndDateTime: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  placeSetting: PropTypes.string.isRequired,
  setPlaceSetting: PropTypes.func.isRequired,
};

export default Input;
