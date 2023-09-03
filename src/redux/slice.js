import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gists: [],
  loadingGists: false,
};

export const gistsSlice = createSlice({
  name: 'gists',
  initialState,
  reducers: {
    setGists: (state, action) => {
      const gists = action.payload;
      return { ...state, gists };
    },
    startLoadingGists: (state) => {
      const loadingGists = true;
      return { ...state, loadingGists };
    },
    stopLoadingGists: (state) => {
      const loadingGists = false;
      return { ...state, loadingGists };
    },
  },
});

/* The line is exporting the action creators from the `gistsSlice` slice. */
export const { setGists, startLoadingGists, stopLoadingGists } = gistsSlice.actions;

/* exporting the reducer function from the `gistsSlice` slice.
This allows the reducer to be used in the Redux store configuration to handle
actions dispatched to the `gists` slice of the state. */
export const gistReducer = gistsSlice.reducer;
