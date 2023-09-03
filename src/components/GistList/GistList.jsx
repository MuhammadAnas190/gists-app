import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPublicGists } from '../../services/gistService';
import { setGists, startLoadingGists, stopLoadingGists } from '../../redux/slice';
import { isEmpty } from '../../utils/helpers';
import { Gist } from '../Gist/Gist';

export const GistList = () => {
  const dispatch = useDispatch();
  const { gists, loadingGists } = useSelector((state) => state.gists);

  useEffect(() => {
    const getGists = async () => {
      dispatch(startLoadingGists());
      try {
        const { data } = await getPublicGists();
        dispatch(setGists(data));
      } catch (error) {
        throw new Error('Something went wrong', { cause: error });
      } finally {
        dispatch(stopLoadingGists());
      }
    };

    /**
     * getting gists on mount
     */
    getGists();
  }, []);

  /**
   * Loading UI for gist list
   */
  if (loadingGists) {
    return <p className="text-center">Loading...</p>;
  }

  /**
   * No Gist Found
   */
  if (isEmpty(gists)) {
    return <p className="text-center">No Gists found</p>;
  }

  /**
   * Gist List
   */
  return (
    <GistListWrapper>
      {gists.map(
        ({
          files,
          id,
          comments,
          comments_url: commentsUrl,
          created_at: createdAt,
          updated_at: updatedAt,
          description,
          owner,
          forks_url: forksUrl,
        }) => (
          <Gist
            files={Object.values(files)}
            comments={comments}
            commentsUrl={commentsUrl}
            createdAt={createdAt}
            updatedAt={updatedAt}
            description={description}
            forksUrl={forksUrl}
            owner={owner}
            key={id}
          />
        )
      )}
    </GistListWrapper>
  );
};

const GistListWrapper = styled.div`
  max-width: 700px;
  margin: 40px auto 0;
`;
