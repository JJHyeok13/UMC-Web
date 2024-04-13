import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import {
  getDay,
  getMonth,
  getYear,
  isToday,
  subMonths,
  addMonths,
} from 'date-fns';
import 'components/dateselectcalendar.css';

import CalendarIcon from 'assets/Main/calendar.svg';
import LeftArrow from 'assets/Main/LeftArrowGray.svg';
import RightArrow from 'assets/Main/RightArrowGray.svg';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DateSelectCalendar = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <DatePicker
      className="datePicker"
      dateFormat="yyyy. MM. dd" // 날짜 형태
      formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3).toUpperCase()} // 요일 형태 (ex. 'Mon')
      showYearDropdown // 년도 선택 가능
      scrollableYearDropdown // 년도 선택 시 스크롤 가능
      showMonthDropdown // 월 선택 가능
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      selected={selectedDate} // 선택된 날짜
      calendarClassName="calendar-date-select"
      dayClassName={(date) => {
        // 날짜 스타일
        const day = getDay(date);

        return day === 0
          ? 'sunday'
          : day === 6
            ? 'saturday'
            : isToday(date)
              ? 'current-day'
              : '';
      }} // 선택된 날짜 스타일
      onChange={(date) => {
        // 날짜 선택 시 시작일 & 종료일 변경
        console.log('Selected date:', date);
        setSelectedDate(date);
        onDateChange(date);
      }} // 날짜 선택 시 selectedDate 변경
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="calendar-header">
          <div className="calendar-header-left">
            <img
              src={LeftArrow}
              alt="left-arrow"
              onClick={() => {
                decreaseMonth();
                setSelectedDate(subMonths(selectedDate, 1));
              }}
              className={prevMonthButtonDisabled ? 'disabled' : ''}
            />
          </div>
          <div className="calendar-header-center">
            <img src={CalendarIcon} alt="calendar-icon" />
            <div className="calendar-header-month">
              <div>{MONTHS[getMonth(date)]}</div>
              <div>{getYear(date)}</div>
            </div>
          </div>
          <div className="calendar-header-right">
            <img
              src={RightArrow}
              alt="right-arrow"
              onClick={() => {
                increaseMonth();
                setSelectedDate(addMonths(selectedDate, 1));
              }}
              className={nextMonthButtonDisabled ? 'disabled' : ''}
            />
          </div>
        </div>
      )}
    />
  );
};

DateSelectCalendar.propTypes = {
  onDateChange: PropTypes.func.isRequired,
};

export default DateSelectCalendar;
