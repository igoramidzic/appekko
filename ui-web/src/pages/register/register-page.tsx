import React, { Component, useContext } from 'react'
import AuthLayout from '../../shared/layouts/auth/auth-layout';
import RegisterForm from '../../shared/components/auth/register-form/register-form';
import GoogleAuth from '../../shared/components/auth/google-auth/google-auth';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { FirebaseContext } from '../../context/firebase';

export default function RegisterPage() {

    const f = useContext(FirebaseContext);
    const history = useHistory();

    function onSuccessGoogle() {

        if (!f.auth.currentUser) return console.log("Something went wrong signing in with Google");

        f.firestore.collection('users').doc(f.auth.currentUser.uid).get().then((res) => {
            if (res.exists) return history.push(ROUTES.HOME);;
            f.firestore.collection('users').doc(f.auth.currentUser?.uid)
                .set({
                    fullName: f.auth.currentUser?.displayName
                })
                .then(() => {
                    history.push(ROUTES.HOME);

                })
                .catch((err) => {
                    console.log("Something went wrong...", err)
                })
        }).catch(() => {
            history.push(ROUTES.HOME);
        })
    }

    return (
        <div className="auth-form">
            <AuthLayout>
                <h2 className="mb-5">Sign Up</h2>
                <GoogleAuth onSuccess={onSuccessGoogle}></GoogleAuth>
                <hr className="my-4" />
                <RegisterForm></RegisterForm>
            </AuthLayout>
        </div>
    )
}
