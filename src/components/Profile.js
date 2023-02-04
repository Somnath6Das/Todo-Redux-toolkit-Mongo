import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateAge, updateStatus } from '../redux-state/useSlice';

const Profile = () => {
    const { name, age, status } = useSelector((state) => state);

    const dispatch = useDispatch();
    const changeAge = (age) => {
        // type is which variable value you want tu update,
        // payload is a action of new value which you have given to the variable.
        dispatch(updateAge(age));
    }
    const changeName = (name) => {     
        dispatch(updateName(name));
    }
   
   
    const changeStatus = (status) => {
        dispatch(updateStatus(status));
    }

    return (
        <div>
            <h2>I am {name} and my age is {age}, I am a {status}.</h2>
            <button onClick={() => changeName('Animax')}>update name</button>
            <button onClick={() => changeAge(40)}>update age</button>
            <button onClick={() => changeStatus('Coder')}>update status</button>
        </div>
    );
}

export default Profile