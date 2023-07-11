import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { BASE_URL, options } from '../../utils/fetFromAPI';

const initialState = {
  channelData: {},
};

// // Async thunk
export const getChannelData = createAsyncThunk(
  'category/getChannelData',
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

const channelSlice = createSlice({
  name: 'channelDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChannelData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChannelData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.channelData = action.payload.items[0];
      })
      .addCase(getChannelData.rejected, (state, action) => {
        // console.log(action);
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export default channelSlice.reducer;
