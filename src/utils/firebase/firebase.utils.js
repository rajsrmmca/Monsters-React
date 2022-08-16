import {initializeApp} from 'firebase/app';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyDbZibZQwF6qzZ7lRglBNM-eWz9rZTnwjU",
    authDomain: "mr-db-9198c.firebaseapp.com",
    projectId: "mr-db-9198c",
    storageBucket: "mr-db-9198c.appspot.com",
    messagingSenderId: "570556377644",
    appId: "1:570556377644:web:9984c33900c95b8a163f89"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=>signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch(error) {
      console.log(error.message)

    }
  }
}