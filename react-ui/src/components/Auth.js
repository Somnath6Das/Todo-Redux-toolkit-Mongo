import { useState } from 'react'
import { signupUser } from '../redux-state/authReducer';
import { useDispatch, useSelector } from 'react-redux';

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState('Signin');
    const dispatch = useDispatch();

    const authenticate = () => {
        if (auth === 'Signin') {

        } else {
            dispatch(signupUser({email, password}));
        }
    }
    return (
        <div><h1>Please {auth}!</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='btn' onClick={() => authenticate()}>{auth}</button>
            {auth === 'Signin' ? <h6 onClick={() => setAuth('Signup')}>Don't have an account?</h6> : <h6 onClick={() => setAuth('Signin')}>Already have an account?</h6>}
        </div>
    );


}

export default Auth