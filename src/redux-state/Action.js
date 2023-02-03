import { createAction } from '@reduxjs/toolkit';


export const updateStatus = createAction('UPDATE_STATUS');

export const fetchName = ()=> {
    return async (dispatch)  => {
        const res = await fetch('https://somnath6das.github.io/api/redux-course.json');
        const result = await res.json()
         dispatch({type: 'UPDATE_NAME', payload: result[0].name});
    }
}











