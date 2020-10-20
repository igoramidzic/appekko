import React from 'react';
import app from 'firebase/app';

import firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

export const Firebase = app.initializeApp(config);
export const firestore = firebase.firestore();
export const firebaseAuth = firebase.auth();

interface IFirebaseContext {
    firestore: firebase.firestore.Firestore,
    auth: firebase.auth.Auth
}

const FirebaseContext = React.createContext<IFirebaseContext>({
    firestore: firestore,
    auth: firebaseAuth
});

export default FirebaseContext;