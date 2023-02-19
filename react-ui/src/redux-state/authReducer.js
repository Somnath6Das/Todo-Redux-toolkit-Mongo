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
export const signinUser = createAsyncThunk(
    'signinuser',
    async (body) => {
        const result = await fetchCondition('/signin', body,);
        return result;

    }
)
 const authReducer = createSlice({
    name: "user",
    // key and value same of initialState,
    initialState,
    reducers: {
        // manage login and todo screen state. -> App.js
        addToken: (state, action) => {
            state.token = localStorage.getItem('token');
        }
    },
    extraReducers: {
        [signupUser.pending]: (state, action) => {
            state.loading = true
        },
        [signupUser.fulfilled]: (state, { payload: { error, message } }) => {
            state.loading = false;
            if (error) {
                state.error = error;
            } else {
                // message comes from api of signup user.
                state.error = message;
            }
        },
        
        [signinUser.pending]: (state, action) => {
            state.loading = true
        },
        [signinUser.fulfilled]: (state, { payload: { error, token} }) => {
            state.loading = false;
            if (error) {
                state.error = error;
            } else {
                state.token = token;
                // save token on local storage
                localStorage.setItem('token', token);            }
        },
    }
});
// export to App.js
export const {addToken} = authReducer.actions;
// export to ReduxStore.js and Auth.js
export default authReducer.reducer;