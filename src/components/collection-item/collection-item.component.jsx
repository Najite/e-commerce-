import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.reducer";
import "./collection-item.style.scss";


import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({item}) => {
    const {name, price, imageUrl} = item; 
    const dispatch = useDispatch()

    return (
    <div className="collection-item">
        <div 
        className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />

        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={() => dispatch(addItem(item))} inverted> Add to Cart</CustomButton>
    </div>
    )
};

// const mapDispatchToProps = dispatch => ({
//         additem: item => dispatch(addItem(item))
//     })



export default CollectionItem;