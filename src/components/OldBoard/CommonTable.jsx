import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommonTableWrapper = styled.table`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  font-family: 'Pretendard';
  border-spacing: 0;
  border-top: 4px solid #000c76;
`;

const CommonTable = ({ children }) => {
  return (
    <CommonTableWrapper>
      <tbody>{children}</tbody>
    </CommonTableWrapper>
  );
};

CommonTable.propTypes = {
  children: PropTypes.node,
};

export default CommonTable;
