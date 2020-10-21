import React, { useContext } from 'react'
import './google-auth.scss';
import { imagePath } from '../../../../helpers/assetsHelper'
import { FirebaseContext } from '../../../../context/firebase';
import firebase from 'firebase';

export default function GoogleAuth(props: { onSuccess: any }) {
    const f = useContext(FirebaseContext);

    function click() {
        const provider = new firebase.auth.GoogleAuthProvider();
        f.auth.signInWithPopup(provider)
            .then(res => {
                props.onSuccess()
            })
            .catch(e => console.log(e));
    }

    return (
        <button onClick={click} className="btn btn-lg btn-block btn-align-left">
            <img className="google-auth-btn-logo" src={imagePath('google-logo.png')} alt="" />
            <span className="ml-3">Continue with Google</span>
        </button>
    )
}
