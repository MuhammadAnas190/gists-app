import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const UserTitle = ({ imageSrc, name }) => (
  <Wrapper>
    <IconWrapper src={imageSrc} />
    <p>{name}</p>
  </Wrapper>
);

const Wrapper = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const IconWrapper = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

UserTitle.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
