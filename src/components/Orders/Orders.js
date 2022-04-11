import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Order from '../Order/Order';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    let navigate = useNavigate()
    const handleRemoveCart = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='review-items-container'>
                {
                    cart.map(product => <ReviewItem
                        product={product} handleRemoveCart={handleRemoveCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Order cart={cart} handleRemoveCart={handleRemoveCart}>
                    <button onClick={() => navigate('/cart')}>Go to Cart</button>
                </Order>
            </div>
        </div>
    );
};

export default Orders;