import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }
    console.log(error)
    const handleShippingInfo = event => {
        event.preventDefault();
        const shipping = [name, address, phone];
        console.log(shipping);
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping Information</h1>
                <form onSubmit={handleShippingInfo}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                    </div>
                    <p>{error.message}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;