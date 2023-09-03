import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Octicon from 'react-octicon';
import styled from 'styled-components';
import { getGistForUser, getPublicGists } from '../../services/gistService';
import { setGists, startLoadingGists, stopLoadingGists } from '../../redux/slice';
import { debounce } from '../../utils/helpers';

export const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  /**
   * get all gists
   */
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
   * callback for search
   */
  const searchUser = async (value) => {
    if (!value) {
      dispatch(setGists([]));
      getGists();
      return;
    }
    dispatch(startLoadingGists());
    try {
      const { data } = await getGistForUser(value);
      dispatch(setGists(data));
    } catch (error) {
      throw new Error('Something went wrong', { cause: error });
    } finally {
      dispatch(stopLoadingGists());
    }
  };

  /**
   * change handler for search field
   */
  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
    debounce(() => searchUser(value));
  };

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          value={searchValue}
          onChange={handleChange}
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;
