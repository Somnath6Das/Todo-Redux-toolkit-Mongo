import React from 'react'
import { useSelector } from 'react-redux';


const Profile = () => {
  const {name, age, status} =  useSelector((state) => {
        console.log(state);
        return state;
    });
    return (
        <div>      
           <h2>I am {name} and my age is {age}, I am a {status}.</h2> 
        </div>
    )
}

export default Profile