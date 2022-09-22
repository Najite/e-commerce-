import React from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';

// import redux cart
import { connect } from "react-redux";
import { cartToggle } from "../../redux/cart/cart.reducer";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ cartToggle, itemCount }) => (
   <div className='cart-icon' onClick={ cartToggle }>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
   </div> 
);

const mapDispatchToProps = dispatch => ({
    cartToggle: () => dispatch(cartToggle())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);