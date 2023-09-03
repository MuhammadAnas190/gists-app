import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconText } from '../IconText/IconText';
import { isEmpty } from '../../utils/helpers';

export const Files = ({ files }) => {
  /* checking if the `files` array is empty. If it is empty, it will return text "No files found" */
  if (isEmpty(files)) {
    return <p>No files found</p>;
  }

  return (
    <FilesWrapper>
      {files.map(({ filename, raw_url: rawUrl }) => (
        <IconText iconName="file" link={rawUrl} text={filename} key={filename} />
      ))}
    </FilesWrapper>
  );
};

const FilesWrapper = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 500;
  flex-wrap: wrap;
`;

Files.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      filename: PropTypes.string.isRequired,
      raw_url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
