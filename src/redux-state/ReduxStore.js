import { configureStore } from '@reduxjs/toolkit';
import useReducer from './useReducer';

const store = configureStore({
    reducer: useReducer
    
});

export default store;