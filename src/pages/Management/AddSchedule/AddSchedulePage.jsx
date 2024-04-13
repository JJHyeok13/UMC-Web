import React, { useState } from 'react';
import ManagementTitle from 'components/Management/ManagementTitle';
import ManagementType from 'components/Management/ManagementType';

import Input from 'components/Management/AddSchedule/Input.jsx';
import Classify from 'components/Management/AddSchedule/Classify.jsx';

import styles from './styles';
import axiosInstance from 'apis/setting';

const AddSchedulePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [placeSetting, setPlaceSetting] = useState('');
  const [semesterPermission, setSemesterPermission] = useState([]);
  const [hostType, setHostType] = useState('');

  const handleDateChange = (date) => {
    // 예시로 현재 시간을 가져와서 선택된 날짜의 시간으로 설정합니다.
    const selectedTime = new Date().toISOString().split('T')[1];
    const formattedDate = `${date.toISOString().split('T')[0]}T${selectedTime}`;
    setStartDateTime(formattedDate);
    setEndDateTime(formattedDate);
  };

  const addSchedule = async () => {
    try {
      const res = await axiosInstance.post(`/staff/schedules`, {
        title: title,
        content: content,
        startDateTime: startDateTime,
        endDateTime: endDateTime,
        placeSetting: placeSetting,
        semesterPermission: semesterPermission,
        hostType: hostType,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <styles.AdminManagementWrapper>
      <ManagementTitle />

      <ManagementType />

      <Input
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        startDateTime={startDateTime}
        setStartDateTime={setStartDateTime}
        endDateTime={endDateTime}
        setEndDateTime={setEndDateTime}
        onDateChange={handleDateChange}
        placeSetting={placeSetting}
        setPlaceSetting={setPlaceSetting}
      />
      <Classify
        setSemesterPermission={setSemesterPermission}
        setHostType={setHostType}
      />

      <styles.ButtonContainer>
        <styles.Button onClick={addSchedule}>완료</styles.Button>
      </styles.ButtonContainer>
    </styles.AdminManagementWrapper>
  );
};

export default AddSchedulePage;
