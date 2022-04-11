import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { handleRemoveCart } = props
    const { name, img, price, quantity, shipping } = props.product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details'>
                <div className="review-item-info">
                    <p>{name}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping: {shipping}</p>
                </div>
                <div className="delete-btn">
                    <button onClick={() => handleRemoveCart(props.product)} className='delete-icon'>
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                        ></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;