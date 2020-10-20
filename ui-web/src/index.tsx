import React from 'react';
import ReactDOM from 'react-dom';
import './design/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FirebaseContext } from './context/firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseAuth, firestore } from './context/firebase/context';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{
      firestore: firestore,
      auth: firebaseAuth
    }}>
      <App />
    </FirebaseContext.Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
