import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


const Profile = () => {
    const { name, age, status } = useSelector((state) => {
        console.log(state);
        return state;
    });

    const dispatch = useDispatch();
    const updateAge = (age) => {
        // type is which variable value you want tu update,
        // payload is a action of new value which you have given to the variable.
        dispatch({ type: 'UPDATE_AGE', payload: age });
    }

    return (
        <div>
            <h2>I am {name} and my age is {age}, I am a {status}.</h2>
            <button onClick={() => updateAge(40)}>update age</button>
        </div>
    )
}

export default Profile