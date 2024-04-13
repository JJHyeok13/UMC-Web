// PositionItem.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PositionUncheckedImg from 'assets/Management/PositionUnchecked.svg';
import PositionCheckedImg from 'assets/Management/PositionChecked.svg';

const Position = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1vh;
  margin-bottom: 2vh;
  cursor: pointer;

  img {
    margin-right: 4px;
  }

  /* 추가된 스타일 */
  color: ${(props) => (props.checked ? '#8784FF' : 'inherit')};
`;

const PositionItem = ({ position, checked, onClick }) => {
  return (
    <Position onClick={onClick} checked={checked}>
      <img
        src={checked ? PositionCheckedImg : PositionUncheckedImg}
        alt="직책"
      />
      {position}
    </Position>
  );
};

PositionItem.propTypes = {
  position: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PositionItem;
