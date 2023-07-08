import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from '../features/category/categorySlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
// console.log(store);
export default store;
