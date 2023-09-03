import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getFormattedDate } from '../../utils/helpers';

export const Date = ({ label, time }) => (
  <Wrapper>
    <span>
      {label}
      :
    </span>
    <span>{time ? getFormattedDate(time) : 'N/A'}</span>
  </Wrapper>
);
const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 13px;
`;

Date.propTypes = {
  label: PropTypes.string.isRequired,
  time: PropTypes.string,
};
Date.defaultProps = {
  time: '',
};

export default Date;
