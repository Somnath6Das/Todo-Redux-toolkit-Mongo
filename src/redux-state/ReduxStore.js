import { configureStore } from '@reduxjs/toolkit';
import userSlice from './useSlice';

const store = configureStore({
    reducer: userSlice
    
});

export default store;