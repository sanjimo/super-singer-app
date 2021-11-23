import React from 'react';
import './Cart.css';

//cart function
const Cart = (props) => {
    const {cart} = props;
    let total=0;
    for(const singer of cart){
        total=total+singer.salary;
    }
    return (
        <div className="cart">
            <h3 className="cart-title"><i class="fas fa-guitar"></i> Concert Budget</h3>
            <h5><span className="cart-text">Singer Added :</span> {cart.length}</h5>
            <h5><span className="cart-text">Total Cost :</span> ${total}</h5><br/>
            <h3 className="cart-title"><i class="fas fa-music"></i> Singer List</h3>
        </div>
    );
};

export default Cart;