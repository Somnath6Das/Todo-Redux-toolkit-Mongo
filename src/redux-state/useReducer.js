import { createReducer } from '@reduxjs/toolkit';
import {updateStatus} from '../redux-state/Action';

const initialState = {
    name: "Som",
    age: 36,
    status: "Single"
}

// redux-toolkit
export default createReducer(initialState, (builder) => {
    builder.addCase('UPDATE_AGE', (state, action) => {
        state.age = action.payload;
    });
    builder.addCase('UPDATE_NAME', (state, action) => {
        state.name = action.payload;
    });
    builder.addCase(updateStatus, (state, action) => {
        state.status = action.payload;
    });
});







