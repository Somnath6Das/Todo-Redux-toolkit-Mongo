import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateStatus } from '../redux-state/Action';

const Profile = () => {
    const { name, age, status } = useSelector((state) => state);

    const dispatch = useDispatch();
    const updateAge = (age) => {
        // type is which variable value you want tu update,
        // payload is a action of new value which you have given to the variable.
        dispatch({ type: 'UPDATE_AGE', payload: age });
    }
    const updateName = (name) => {
        dispatch({type: 'UPDATE_NAME', payload: name });
    }
   
    const changeStatus = (status) => {
        dispatch(updateStatus(status));
    }

    return (
        <div>
            <h2>I am {name} and my age is {age}, I am a {status}.</h2>
            <button onClick={() => updateName('Epic')}>update name</button>
            <button onClick={() => updateAge(40)}>update age</button>
            <button onClick={() => changeStatus('Coder')}>update status</button>
        </div>
    );
}

export default Profile