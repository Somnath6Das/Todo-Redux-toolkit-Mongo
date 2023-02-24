import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import todoReducer from './todoReducer';

const store = configureStore({
    reducer: {
        user: authReducer,
        todos: todoReducer
    }

});

export default store;