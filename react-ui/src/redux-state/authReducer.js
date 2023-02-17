import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    loading: false,
    error: ""
}
const fetchCondition = async (api, body, token = "") => {
    const res = await fetch(api, {
        method: "post", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    return await res.json();
}

export const signupUser = createAsyncThunk(
    'signupuser',
    async (body) => {
        const result = await fetchCondition('/signup', body);
        return result;

    }
)
const authReducer = createSlice({
    name: "user",
    // key and value same of initialState,
    initialState,
    reducers: {},
    extraReducers: {
        [signupUser.fulfilled]: (state, action) => {
        state.loading = false;
        if(action.payload.error){state.error = action.payload.error}
    },
        [signupUser.pending]: (state, action) => { state.loading = true } }
})

export default authReducer.reducer;