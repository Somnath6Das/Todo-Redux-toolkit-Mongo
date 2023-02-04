import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    name: "Som",
    age: 36,
    status: "Single"
}

const userSlice = createSlice({
    name:"Person",
    initialState: initialState,
    reducers:{
        updateName(state, action){
           state.name = action.payload;
        },
        updateAge(state, action) {
            state.age = action.payload;
        },
        updateStatus(state, action) {
            state.status = action.payload;
        }


    }
});

export const { updateName,updateAge,updateStatus} = userSlice.actions;
export default userSlice.reducer;








