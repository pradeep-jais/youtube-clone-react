import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../utils/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { BASE_URL, options } from '../../utils/fetFromAPI';
// console.log(BASE_URL, options);

const initialState = {
  videos: null,
  videoDetails: null,
  selectedCategory: categories[0].name,
  page: 'Home',
  isLoading: true,
  isError: false,
  errorMessage: '',
};

// Async thunk
export const getDataFromAPI = createAsyncThunk(
  'category/getDataFromAPI',
  async (url, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    // console.log(thunkAPI);
    try {
      const response = await axios(`${BASE_URL}/${url}`, options);
      if (response?.data.error) {
        throw new Error('Bad URL parameters');
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: 'video category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataFromAPI.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.isLoading = false;
        if (payload.kind === 'youtube#searchListResponse') {
          state.videos = payload.items;
        }
        if (payload.kind === 'youtube#videoListResponse') {
          state.videoDetails = payload.items[0];
        }
      })
      .addCase(getDataFromAPI.rejected, (state, action) => {
        // console.log(action);
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { setCategory, setPage } = categorySlice.actions;
console.log(categorySlice);

export default categorySlice.reducer;
