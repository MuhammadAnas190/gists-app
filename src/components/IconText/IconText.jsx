import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Octicon from 'react-octicon';

export const IconText = ({ iconName, text, link }) => (
  <Wrapper>
    <Octicon name={iconName} />
    {link ? (
      <AnchorWrapper href={link} target="_blank">
        {text}
      </AnchorWrapper>
    ) : (
      <p>{text}</p>
    )}
  </Wrapper>
);
const Wrapper = styled.div`
  display: inline-flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  color: #0365d6;
`;

const AnchorWrapper = styled.a`
  text-decoration: none;
  color: #0365d6;
`;

IconText.defaultProps = {
  link: '',
};

IconText.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default IconText;
