import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    console.log(user?.displayName)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/home">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <span>
                            <span style={{ color: "#ffffff" }}>Hello, {user?.displayName || user?.email}</span>
                            <button onClick={handleSignOut} className='btn'>Sign Out</button>
                        </span>
                        :
                        <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;