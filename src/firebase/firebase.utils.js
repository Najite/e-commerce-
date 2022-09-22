import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAcGMqi-uXYuJ67TOzFoAFdJrWRaOA5Rr0",
    authDomain: "mystore-14135.firebaseapp.com",
    projectId: "mystore-14135",
    storageBucket: "mystore-14135.appspot.com",
    messagingSenderId: "51115586436",
    appId: "1:51115586436:web:505c4d7de661cac50b23d1",
    measurementId: "G-Z0TCT8NDXY"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// user sign out
export const signOut = () =>{
  auth.signOut().then(() => {
    console.log('successful');
  }).catch((error) =>{
    console.log('error occured')
  });
};




// creating user firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()

  console.log(snapShot)

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
    
      })

    }

    catch(error){
      console.log('error occured', error.message);
    }
  }

  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);  

export default firebase;