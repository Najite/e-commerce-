import React from 'react';
import './App.css';
// importing react-router-dom
import { Routes, Route} from 'react-router-dom';
import { withRouter } from './components/menu-item/menu-item.component';


// importing pages
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPAge from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout/checkout.component';

// google authentication firebase
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

// all about reduxtoolkit
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.reducer';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


class App extends React.Component{
  unsubscribeFromAuth = null 

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
            
         
          })

      }

      else{
        setCurrentUser(userAuth)
      }
       
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/shop/*' element={<ShopPage/>} />
          <Route path='/checkout/' element={<CheckOutPage/>} />
          <Route path='/sign/' element={<SignInAndSignUpPAge/>} />
        </Routes>
      
     
      </div>
    );
  }
  
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
