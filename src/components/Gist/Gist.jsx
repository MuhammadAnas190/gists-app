import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { UserTitle } from '../UserTitle/UserTitle';
import { IconText } from '../IconText/IconText';
import { Date } from '../Date/Date';
import { Files } from '../Files/Files';

export const Gist = ({
  files = [],
  owner: { login, avatar_url: avatarUrl },
  forksUrl,
  comments,
  commentsUrl,
  createdAt,
  updatedAt,
  description,
}) => (
  <CardWrapper>
    <HeaderWrapper>
      <UserTitle name={login} imageSrc={avatarUrl} />
      <HeaderInfoWrapper>
        <IconText iconName="code" text={`${files.length} Files`} />
        <IconText iconName="repo-forked" text="Forks" link={forksUrl} />
        <IconText iconName="comment" text={`${comments} Comments`} link={commentsUrl} />
        <IconText iconName="star" text="Stars" />
      </HeaderInfoWrapper>
    </HeaderWrapper>
    <DateWrapper>
      <Date label="Created at" time={createdAt} />
      <Date label="Updated at" time={updatedAt} />
    </DateWrapper>
    <h4>{description}</h4>
    <Files files={files} />
  </CardWrapper>
);

const CardWrapper = styled.div`
  margin: 0.5rem 0 1rem;
  padding-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h4 {
    margin-bottom: 1rem;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0.5rem 0 1rem;
`;

Gist.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      filename: PropTypes.string,
      rawUrl: PropTypes.string,
    })
  ).isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
  forksUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
  commentsUrl: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  description: PropTypes.string,
};

Gist.defaultProps = {
  description: '',
  updatedAt: null,
};
