import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    name: "Som",
    age: 36,
    status: "Single"
}
export const fetchUserName = createAsyncThunk(
    'fetchName',
    async() => {
        const response = await fetch('https://somnath6das.github.io/api/redux-course.json');
        const data = await response.json();
        // random 0 to 10
        return data[Math.floor(Math.random()*11)].name;
    }
);

const userReducer = createSlice({
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
        },
      
    },
    extraReducers:{
        [fetchUserName.pending]: (state, action) =>{
            state.name = 'Loading...';
        },
        [fetchUserName.fulfilled]: (state, action) =>{
            state.name = action.payload;
        },
        [fetchUserName.rejected]: (state, action) =>{
            state.name = 'Try after few min.';
        },
    }

});

export const { updateName,updateAge,updateStatus} = userReducer.actions;
export default userReducer.reducer;








