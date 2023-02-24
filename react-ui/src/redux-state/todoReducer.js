import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCondition, fetchDeleteTodos } from "../helpers/fetch2";

const initialState = []


export const createTodo = createAsyncThunk(
    'createtodo',
    async (body) => {
        const result = await fetchCondition('/createtodo', body,);
        return result;

    }
)
export const fetchTodo = createAsyncThunk(
    'fetchtodo',
    async () => {
        const result = await fetchDeleteTodos('/gettodos', 'get');
        return result;

    }
)
export const deleteTodo = createAsyncThunk(
    'deletetodo',
    async (id) => {
        const result = await fetchDeleteTodos(`/remove/${id}`, 'delete');
        return result;

    }
)
const todoReducer = createSlice({
    name: "todos",
    // key and value same of initialState,
    initialState,
    reducers: {

    },
    extraReducers: {
        [createTodo.fulfilled]: (state, { payload: { message } })=>{
            // massage is taken from api and push to initialState Array.
            if (message) state.push(message);
        },
        [fetchTodo.fulfilled]: (state, {payload: {message}}) =>{
            // get todos from initialState Array.
            return message;
        },
        [deleteTodo.fulfilled]: (state, {payload:{message}}) =>{
            const removeTodos = state.filter(item=>{
                // show non deleted message
                return item._id !== message._id
            });
            return removeTodos;
        }
    }
},

);

// export to Todo.js
export default todoReducer.reducer;