import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../utils/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { BASE_URL, options } from '../../utils/fetFromAPI';
// console.log(BASE_URL, options);

const initialState = {
  videoData: [],
  selectedCategory: categories[0].name,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataFromAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videoData = action.payload.items;
      })
      .addCase(getDataFromAPI.rejected, (state, action) => {
        // console.log(action);
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
