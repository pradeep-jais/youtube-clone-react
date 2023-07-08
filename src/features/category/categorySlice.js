import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../utils/constants';

const initialState = {
  selectedCategory: categories[0].name,
};

const categorySlice = createSlice({
  name: 'video category',
  initialState,
  reducers: {},
});

// console.log(categorySlice);

export default categorySlice.reducer;
