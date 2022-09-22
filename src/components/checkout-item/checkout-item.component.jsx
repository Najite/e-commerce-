import React from "react";

// all about redux
// import { connect } from "react-redux";
import { clearItem, decreaseItem, increaseItem } from "../../redux/cart/cart.reducer";
import { useDispatch } from "react-redux";


import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem }) =>{
    const {name, imageUrl, price, quantity} = cartItem;
    const dispatch = useDispatch()

    return (
        <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt='item' />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className="arrow" onClick={() => dispatch(decreaseItem(cartItem))}>&#10094;</div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={() => dispatch(increaseItem(cartItem))}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => dispatch(clearItem(cartItem))}> &#10005;</div>
    </div>
    );
};

// const mapDispatchToProps = dispatch => ({
//     clearItem: item => dispatch(clearItem(item)),
//     decreaseItem: item => dispatch(decreaseItem(item)),
//     increaseItem: item => dispatch(increaseItem(item)),
// })

export default CheckoutItem;