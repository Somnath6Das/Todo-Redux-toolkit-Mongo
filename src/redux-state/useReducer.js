import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    name: "Somnath",
    age: 36,
    status: "programmer"
}

// redux-toolkit
export default createReducer(initialState, (builder)=>{
    builder.addCase('UPDATE_AGE', (state, action)=>{
        state.age = action.payload;
    } )
})






// old redux
// const updateAge = (state = initialState, action) => {
//     if (action.type === 'UPDATE_AGE') {
//         return {
//             ...state, age: action.payload
//         }
//     }
//     return state;
// }

// export default updateAge;


