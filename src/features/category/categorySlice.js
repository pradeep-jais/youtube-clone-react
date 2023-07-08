import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../utils/constants';

const initialState = {
  selectedCategory: categories[0].name,
};

const categorySlice = createSlice({
  name: 'video category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

// console.log(categorySlice);

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
