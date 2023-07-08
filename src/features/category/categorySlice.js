import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../utils/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import fetFromAPI from '../../utils/fetFromAPI';

const initialState = {
  videoData: [],
  selectedCategory: categories[0].name,
  isLoading: true,
  isError: false,
};

// Async thunk
export const getDataFromAPI = createAsyncThunk(
  'category/getDataFromAPI',
  async (url, thunkAPI) => {
    // console.log(url);
    try {
      const data = await fetFromAPI(url);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
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
        console.log('pending');
      })
      .addCase(getDataFromAPI.fulfilled, (state, action) => {
        console.log('fulfiled');
        state.isLoading = false;
        state.videoData = action.payload;
      })
      .addCase(getDataFromAPI.rejected, (state, action) => {
        console.log('rejected');
      });
  },
});

// console.log(categorySlice);

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
