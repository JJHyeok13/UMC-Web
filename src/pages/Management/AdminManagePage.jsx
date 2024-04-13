import React, { useState } from 'react';
import styled from 'styled-components';

import AdminTitle from 'components/Management/ManagementTitle';
import ManagementType from 'components/Management/ManagementType';
import NewAdminTable from 'components/Management/NoticePin/NewAdminTable';

const AdminManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AdminManagementWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const TitleLayout = styled(AdminTitle)`
  display: flex;
  padding-bottom: 80px;
`;

const ButtonLayout = styled(ManagementType)`
  display: flex;
  padding-bottom: 80px;
`;

const TableLayout = styled(NewAdminTable)`
  display: flex;
  padding-bottom: 80px;
`;

const Management = () => {
  const [buttonStates, setButtonStates] = useState({
    setnoticeButton: true,
    calenderButton: false,
    challengerButton: false,
  });

  const handleClick = (buttonName) => {
    setButtonStates((prevStates) => ({
      setnoticeButton:
        buttonName === 'setnoticeButton' ? !prevStates.setnoticeButton : false,
      calenderButton:
        buttonName === 'calenderButton' ? !prevStates.calenderButton : false,
      challengerButton:
        buttonName === 'challengerButton'
          ? !prevStates.challengerButton
          : false,
    }));
  };

  return (
    <AdminManagementContainer>
      <AdminManagementWrapper>
        <TitleLayout />

        <ButtonLayout buttonStates={buttonStates} handleClick={handleClick} />

        <TableLayout />
      </AdminManagementWrapper>
    </AdminManagementContainer>
  );
};

export default Management;
