import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from '../features/category/categorySlice';
import channelReducer from '../features/channelPage/channelSlice';
import inputSearchReducer from '../features/inputSearch/inputSearchSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    channel: channelReducer,
    inputSearch: inputSearchReducer,
  },
});
// console.log(store);
export default store;
