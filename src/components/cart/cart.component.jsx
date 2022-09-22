import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { withRouter } from "../menu-item/menu-item.component";

import CartItem from "../cart-item/cart-item.component";
import './cart.style.scss';

// redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { cartToggle } from "../../redux/cart/cart.reducer";


const Cart = ({ cartItems, navigate, dispatch}) => (    
    <div className="cart-dropdown">
        <div className="cart-items">
        {   cartItems.length ? (         
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
        )
            :(
            <span className="empty-message"> Your cart is empty </span>
            )}
        </div>
    <CustomButton onClick={
        () => {navigate('checkout/');
        dispatch(cartToggle())
        }}> go to checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});



export default withRouter(connect(mapStateToProps)(Cart));