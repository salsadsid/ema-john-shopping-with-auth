import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    if (user) {
        navigate(from, { replace: true })
    }
    console.log(user)
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const [signInWithFacebook, user1] = useSignInWithFacebook(auth);
    if (user1) {
        navigate(from, { replace: true })
    }
    const signIn = () => {

        signInWithFacebook();

    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                    </div>
                    <p>{error?.message}</p>
                    {
                        loading && <><p>Loading...</p></>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema-John ? <Link className='form-link' to='/signup'><button className='btn'>Create an account</button></Link></p>
                <p>Login With <button className='btn' onClick={signIn}>Facebook</button></p>
            </div>
        </div>
    );
};

export default Login;