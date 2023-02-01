import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    name: "Somnath",
    age: 20,
    status: "programmer"
}
const store = configureStore({
    reducer: (state) => {
        return state;
    },
    preloadedState: initialState
});

export default store;