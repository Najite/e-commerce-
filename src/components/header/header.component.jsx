import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';


// importing logo
import { ReactComponent as Logo } from "../../assets/crown.svg" ;
import "./header.style.scss";

// firebase authentication
import { signOut } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart/cart.component';



// const {currentUser} = useSelector(( state ) => state.user)

const Header = ({ currentUser, hidden }) => (
    
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>
                SHOP
            </Link>

            <Link className='option' to='/shop'>
                CONTACT
            </Link>         

            {
                currentUser ?
                    <div className='option' onClick={signOut}>Sign Out</div>
                :
                <Link className='option' to='/sign'>Sign In</Link>

                
            }

            <CartIcon /> 
        </div>
        {
            hidden ? null :
            <Cart />
        }
        
        
    </div>
);


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

})

export default connect(mapStateToProps)(Header);

