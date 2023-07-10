import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from '../features/category/categorySlice';
import channelReducer from '../features/channelPage/channelSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    channel: channelReducer,
  },
});
// console.log(store);
export default store;
